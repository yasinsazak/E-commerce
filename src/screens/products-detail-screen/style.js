import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    backgroundColor: Colors.BLACK,
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width,
    height: width * 1.25,
    marginBottom: 10,
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  description: {
    color: Colors.WHITE,
    fontSize: 16,
    marginBottom: 10,
  },
  bottomContainer: {
    width,
    height: 50,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    color: Colors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {},
});
