import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import HomeHeader from '../../components/HomeHeader';
import { getPokemonsData } from '../../hooks/getPokemonsHook';

const Home = (): React.JSX.Element => {
  const { loading, data, getPokemons } = getPokemonsData();

  if (loading) {
    return (
      <View>
        <Text testID="loading-pokemon">Loading....</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <HomeHeader />
      <View testID="pokemon-container">
        <FlatList
          data={data}
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          onEndReached={getPokemons}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            loading ? (
              <ActivityIndicator
                style={{ marginTop: 20 }}
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
