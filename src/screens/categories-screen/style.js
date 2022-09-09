import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  titleBody: {
    height: 50,
    borderWidth: 1,
    borderBottomColor: Colors.RED,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: Colors.RED,
    fontSize: 20,
  },
});
