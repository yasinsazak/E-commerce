import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.GRAY,
    margin: 10,
  },
  container: {},
  info: {
    paddingLeft: 20,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  title: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
