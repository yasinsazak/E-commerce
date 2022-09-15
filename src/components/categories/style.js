import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.RED,
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});
