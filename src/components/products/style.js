import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  container: {
    width: 180,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    margin: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  brand: {
    color: Colors.RED,
  },
  title: {
    width: 180,
    color: Colors.WHITE,
  },
  rating: {
    flexDirection: 'row',
  },
  review: {
    color: Colors.WHITE,
  },
  price: {
    color: Colors.RED,
    textAlign: 'center',
    marginBottom: 5,
  },
  button: {
    color: Colors.WHITE,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    height: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
