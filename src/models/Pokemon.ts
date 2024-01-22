import Realm from 'realm';

class Pokemon extends Realm.Object<Pokemon> {
  id!: number;
  name!: string;
  order!: number;
  height!: number;
  weight!: number;
  types!: string[];

  static schema: Realm.ObjectSchema = {
    name: 'Pokemon',
    properties: {
      id: 'int',
      name: 'string',
      order: 'int',
      height: 'int',
      weight: 'int',
      types: 'string[]',
    },
    primaryKey: 'id',
  };
}

export default Pokemon;
