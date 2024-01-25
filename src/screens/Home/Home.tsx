/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import PokemonCard from '../../components/PokemonCard';
import HomeHeader from '../../components/HomeHeader';
import { getPokemonsData } from '../../hooks/usePokemonsHook';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { colors } from '../../utils/colors';

const Home = (): React.JSX.Element => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  let activeColors = colors[theme.mode];
  const { loading, data, getPokemons } = getPokemonsData();

  return (
    <SafeAreaView style={{ backgroundColor: activeColors.primary }}>
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
                color={activeColors.indicator}
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
