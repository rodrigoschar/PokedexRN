import { StyleSheet } from 'react-native';
import {
  POKEMON_BACKGROUND_TYPE_COLORS,
  POKEMON_TYPE_COLORS,
} from '../constants/constants';

export const getDynamicStyles = (textColor: string) => {
  const typeColor =
    POKEMON_TYPE_COLORS[textColor as keyof typeof POKEMON_TYPE_COLORS];
  const backgroundTypeColor =
    POKEMON_BACKGROUND_TYPE_COLORS[
      textColor as keyof typeof POKEMON_BACKGROUND_TYPE_COLORS
    ];

  return StyleSheet.create({
    background: {
      display: 'flex',
      flex: 1,
      margin: 10,
      borderRadius: 20,
      backgroundColor: backgroundTypeColor,
      opacity: 0.9,
    },
    type: {
      borderRadius: 10,
      backgroundColor: typeColor,
      marginRight: 5,
    },
  });
};
