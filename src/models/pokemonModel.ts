export type GrapQLModel = {
  data: Data
};

export type Data = {
  pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export type PokemonV2Pokemon = {
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
}

export type PokemonV2Pokemontype = {
  pokemon_v2_type: PokemonV2Type;
}

export type PokemonV2Type = {
  id: number;
  name: string;
}
