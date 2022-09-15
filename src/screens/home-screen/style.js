import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
  },
  logo: {
    margin: 10,
    width: 255 / 1.5,
    height: 90 / 1.5,
  },
  brands_text: {
    color: Colors.RED,
    textAlign: 'center',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: Colors.RED,
    marginHorizontal: 150,
    marginVertical: 10,
  },
  most_liked_text: {
    color: Colors.RED,
    textAlign: 'center',
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: Colors.RED,
    marginHorizontal: 120,
    marginVertical: 10,
  },
});
