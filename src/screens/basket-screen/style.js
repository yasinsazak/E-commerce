import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: Colors.BLACK,
    justifyContent: 'space-between',
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
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Colors.GRAY,
    justifyContent: 'space-between',
  },
  bottomTextContainer: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    color: Colors.GRAY,
    fontStyle: 'italic',
  },
  price: {
    color: Colors.RED,
  },
});
