import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../utils/colors';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  titleBody: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: Colors.RED,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: Colors.RED,
    fontSize: 20,
  },
  titleContainer: {
    width: screenWidth - 60,
  },
});
