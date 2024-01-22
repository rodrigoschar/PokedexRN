import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/constants';
import PokemonType from './PokemonType';
import { getDynamicStyles } from '../utils/dynamicStyles';
import { getNumberId } from '../utils/utils';

const PokemonCard = ({ pokemon }) => {
  const dynamicStyles = getDynamicStyles(pokemon.types[0]);
  const getImage = (number: number) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
  };

  return (
    <View style={dynamicStyles.background}>
      <View style={style.emptyTop} />
      <View>
        <View style={style.pokemonContent}>
          <View style={style.cardArea}>
            <Text style={style.pokemonId}>#{getNumberId(pokemon.id)}</Text>
            <Text style={style.pokemonName}>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </Text>
            <FlatList
              style={style.pokemonBadge}
              data={pokemon.types}
              renderItem={({ item }) => <PokemonType item={item} />}
              testID="types-list"
            />
          </View>
          <View style={style.imageArea}>
            <Image
              style={style.pokemonImage}
              source={{
                uri: getImage(pokemon.id),
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#A8A878',
    margin: 10,
    borderRadius: 20,
  },
  emptyTop: {
    height: 25,
  },
  cardArea: {
    width: '60%',
    height: 115,
    padding: 20,
    flexDirection: 'column',
  },
  imageArea: {
    width: '40%',
    paddingRight: 10,
  },
  pokemonId: {
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    color: COLORS.textNumber,
    textAlign: 'left',
    marginRight: 20,
  },
  pokemonName: {
    fontSize: 26,
    fontWeight: '900',
    fontStyle: 'normal',
    color: COLORS.white,
  },
  pokemonBadge: {
    flexDirection: 'row',
  },
  pokemonImage: {
    width: 130,
    height: 130,
  },
  pokemonContent: {
    flexDirection: 'row',
  },
});

export default PokemonCard;
