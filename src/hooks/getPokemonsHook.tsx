/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { baseUrl } from '../constants/constants';
import { GrapQLModel } from '../models/pokemonModel';
import Pokemon from '../models/Pokemon';
import { useEffect, useState } from 'react';
import Realm from 'realm';
import { api } from '../api/api';
import { PokemonUI } from '../models/PokemonUi';

const realm = new Realm({ schema: [Pokemon] });
console.log(realm.path);

export const getPokemonsData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState<PokemonUI[]>([]);

  const getPokemons = async () => {
    setIsLoading(true);
    if (pokemonList.length === 0) {
      getPokemonsFromRealm();
    }
    const limit = 20;
    const offset = pokemonList.length;
    const response = await api.post<GrapQLModel>(baseUrl, {
      query: `query getAllPokemonWithPagination {
        pokemon_v2_pokemon(limit: ${limit}, offset: ${offset}) {
          id
          name
          order
          height
          weight
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }`,
    });
    storeDataInDB(response.data);
  };

  const storeDataInDB = (data: GrapQLModel) => {
    try {
      const newList: PokemonUI[] = data.data.pokemon_v2_pokemon.map(
        ({ id, name, order, height, weight, pokemon_v2_pokemontypes }) => {
          const types = pokemon_v2_pokemontypes.map(
            type => type.pokemon_v2_type.name,
          );
          realm.write(() => {
            realm.create(
              Pokemon,
              {
                id: id,
                name: name,
                order: order,
                height: height,
                weight: weight,
                types: types,
              },
              Realm.UpdateMode.Modified,
            );
          });
          return { id, name, order, height, weight, types };
        },
      );
      setPokemonList([...pokemonList, ...newList]);
      setIsLoading(false);
    } catch (error) {
      console.error(`An exception was thrown from the realm: ${error}`);
    }
  };

  const getPokemonsFromRealm = () => {
    const list = realm.objects('Pokemon').sorted('order', false);
    setPokemonsList(list);
  };

  const setPokemonsList = (list: Realm.Results<any>) => {
    const newPokemonList: PokemonUI[] = list.map(
      ({ id, name, order, height, weight, types }) => ({
        id,
        name,
        order,
        height,
        weight,
        types,
      }),
    );
    setPokemonList([...pokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    loading: isLoading,
    data: pokemonList,
    getPokemons,
  };
};
