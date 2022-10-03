import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    backgroundColor: Colors.BLACK,
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    width: 360,
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    paddingLeft: 10,
  },
  title: {
    marginLeft: 10,
    color: Colors.RED,
    fontSize: 18,
  },
  content: {
    marginLeft: 10,
    color: Colors.WHITE,
    fontSize: 18,
  },
});
