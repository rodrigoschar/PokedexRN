import {gql} from '@apollo/client';

const GET_POKEMOS_PAGINATED = gql`
  query getAllPokemonWithPagination($limit: Int, $offset: Int) {
    pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      id
      name
      order
      height
      weight
      types: pokemon_v2_pokemontypes {
        pokemon_v2_type {
          id
          name
        }
      }
    }
  }
`;

export default GET_POKEMOS_PAGINATED;
