import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 70,
  },
  innerContainer: {
    height: 120,
    marginLeft: 15,
    justifyContent: 'space-around',
  },
  brand: {
    color: Colors.RED,
    fontSize: 20,
  },
  title: {
    color: Colors.WHITE,
    width: 220,
  },
  price: {
    color: Colors.RED,
    fontSize: 16,
  },
  rightContainer: {
    justifyContent: 'space-around',
  },
  qtyContainer: {
    flexDirection: 'row',
  },
  qty: {
    textAlignVertical: 'center',
    color: Colors.WHITE,
  },
});
