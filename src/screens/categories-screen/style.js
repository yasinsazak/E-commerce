import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    color: Colors.RED,
    fontSize: 20,
    borderWidth: 1,
    borderBottomColor: Colors.RED,
  },
  inner_container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
