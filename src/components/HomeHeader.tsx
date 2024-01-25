/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';
import { colors } from '../utils/colors';
import { ThemeContext } from '../context/ThemeContext';

const HomeHeader = (): React.JSX.Element => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: activeColors.textColor,
          fontSize: 32,
          fontWeight: 'bold',
        }}>
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
    color: colors.textGray,
  },
});

export default HomeHeader;
