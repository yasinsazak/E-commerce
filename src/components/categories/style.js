import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    margin: 10,
    borderWidth: 1,
    borderColor: Colors.RED,
    borderRadius: 10,
    width: 170,
  },
  image: {
    width: 170,
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 5,
  },
});
