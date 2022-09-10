import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
  },
  container: {
    width: '90%',
    margin: 20,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: Colors.WHITE,
  },
});
