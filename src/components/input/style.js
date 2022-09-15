import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const baseStyle = StyleSheet.create({
  input: {
    backgroundColor: Colors.BLACK,
    paddingLeft: 10,
    width: '90%',
    margin: 5,
    textDecorationColor: Colors.WHITE,
  },
});

export default StyleSheet.create({
  primary: StyleSheet.create({
    ...baseStyle,
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    input: {
      ...baseStyle.input,
      width: '95%',
    },
  }),
});
