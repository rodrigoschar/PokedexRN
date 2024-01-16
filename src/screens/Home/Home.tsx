import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import GET_POKEMOS_PAGINATED from '../../graphql/GraphqlQuery';
import {PokemonModel} from '../../models/pokemonModel';
import HomeHeader from '../../components/HomeHeader';

const Home = (): React.JSX.Element => {
  const {loading, error, data} = useQuery(GET_POKEMOS_PAGINATED, {
    variables: {limit: 20, offset: 0},
  });

  useEffect(() => {}, []);

  if (loading) {
    return (
      <View>
        <Text testID="loading-pokemon">Loading....</Text>
      </View>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  const items = data.pokemons as PokemonModel[];

  return (
    <SafeAreaView>
      <HomeHeader />
      <View testID="pokemon-container">
        <FlatList
          data={items}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            loading ? (
              <ActivityIndicator
                style={{marginTop: 20}}
                size="large"
                color="blue"
              />
            ) : null
          }
          testID="pokemon-list"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
