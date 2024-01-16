export type TypesModel = {
  id: number;
  name: string;
};

export type PokemonModel = {
  __typename: string;
  id: number;
  name: string;
  order: number;
  height: number;
  weight: number;
  types: TypesModel[];
};
