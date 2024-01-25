const getPokemonsPaginatedQuery = (offset: number) => {
  return `query getAllPokemonWithPagination {
    pokemon_v2_pokemon(limit: 20, offset: ${offset}) {
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
  }`;
};

export default getPokemonsPaginatedQuery;
