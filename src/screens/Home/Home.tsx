/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import HomeHeader from '../../components/HomeHeader';
import { getPokemonsData } from '../../hooks/usePokemonsHook';
import Colors from '../../utils/colors';
import LoadingAnimation from '../../components/LoadingAnimation';

const Home = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode
    ? Colors.dark.colors.themeColor
    : Colors.light.colors.themeColor;

  const { loading, data, getPokemons } = getPokemonsData();

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: backgroundStyle }}>
        <LoadingAnimation message="Loading Pokemons..." />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ backgroundColor: backgroundStyle }}>
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
                size="large"
                color={Colors.light.colors.indicator}
                style={styles.indicator}
              />
            ) : null
          }
          testID="pokemon-list"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  indicator: {
    padding: 12,
    backgroundColor: '#555',
    borderRadius: 12,
  },
});

export default Home;
