import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDynamicStyles } from '../utils/dynamicStyles';
import Colors from '../utils/colors';

function PokemonType({ item }) {
  const dynamicStyles = getDynamicStyles(item);
  return (
    <View style={dynamicStyles.type}>
      <View style={style.container}>
        <Text style={style.bargeText}> {item}</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    padding: 5,
    borderRadius: 3,
  },
  bargeImage: {
    width: 15,
    height: 15,
  },
  bargeText: {
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    color: Colors.light.colors.white,
    marginRight: 3,
  },
});

export default PokemonType;
