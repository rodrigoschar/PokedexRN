import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../constants/constants';

const HomeHeader = (): React.JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokédex</Text>
      <Text style={styles.description}>
        Search for Pokémon by name or using the National Pokédex number.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'normal',
    color: COLORS.textGray,
  },
});

export default HomeHeader;
