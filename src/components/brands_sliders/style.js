import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {},
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    resizeMode: 'contain',
  },
  brands_container: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: 10,
  },
});
