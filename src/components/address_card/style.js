import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

export default StyleSheet.create({
  body: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.GRAY,
    margin: 10,
  },
  container: {},
  info: {
    paddingLeft: 45,
    paddingBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  button: {
    marginRight: 10,
    marginTop: 10,
  },
  city: {
    color: Colors.RED,
  },
  town: {
    color: Colors.RED,
  },
  address: {
    color: Colors.WHITE,
  },
  number: {
    color: Colors.WHITE,
  },
  name: {
    color: Colors.WHITE,
  },
  surname: {
    color: Colors.WHITE,
  },
});
