import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const baseStyle = StyleSheet.create({
  body: {
    backgroundColor: Colors.RED,
    borderRadius: 5,
    marginRight: 5,
  },
  button: {
    padding: 5,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 12,
  },
});

export default StyleSheet.create({
  primary: StyleSheet.create({
    ...baseStyle,
  }),
  secondary: StyleSheet.create({
    ...baseStyle,
    body: {
      ...baseStyle.body,
      borderWidth: 1,
      borderColor: Colors.RED,
      width: '75%',
      margin: 5,
    },
    buttonText: {
      ...baseStyle.buttonText,
      textAlign: 'center',
      fontSize: 18,
    },
  }),
  tertiary: StyleSheet.create({
    ...baseStyle,
    body: {
      ...baseStyle.body,
      backgroundColor: Colors.BLACK,
      borderWidth: 1,
      borderColor: Colors.RED,
      width: '75%',
      margin: 5,
    },
    buttonText: {
      ...baseStyle.buttonText,
      textAlign: 'center',
      fontSize: 18,
      color: Colors.RED,
    },
  }),
  quaternary: StyleSheet.create({
    ...baseStyle,
    body: {
      ...baseStyle.body,
      backgroundColor: 'transparent',
    },
    buttonText: {
      ...baseStyle.buttonText,
      color: Colors.WHITE,
    },
  }),
  fifth: StyleSheet.create({
    ...baseStyle,
    body: {
      ...baseStyle.body,
      width: 300,
      backgroundColor: 'tranparent',
      borderBottomWidth: 1,
      borderColor: Colors.GRAY,
      marginBottom: 30,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonText: {
      ...baseStyle.buttonText,
      fontSize: 20,
      textAlign: 'left',
      paddingLeft: 10,
    },
    button: {
      ...baseStyle.button,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  }),
});
