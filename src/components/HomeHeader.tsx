import * as React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Colors from '../utils/colors';

const HomeHeader = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode
    ? Colors.dark.colors.textColor
    : Colors.light.colors.textColor;

  return (
    <View style={styles.container}>
      <Text style={{ color: textColor, fontSize: 32, fontWeight: 'bold' }}>
        Pokédex
      </Text>
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
    color: Colors.light.colors.textGray,
  },
});

export default HomeHeader;
