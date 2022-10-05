import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.BLACK,
    flexGrow: 1,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
  },
  innerContainer: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
  },
});
