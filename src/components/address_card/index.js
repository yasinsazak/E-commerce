import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {removeAddressProcess, saveAddressProcess} from '../../api';

import {useDispatch, useSelector} from 'react-redux';

import style from './style';
import {Button} from '../button';
import Colors from '../../utils/colors';

export const AddressCard = ({item, onPress}) => {
  const dispatch = useDispatch();

  const {data, status} = useSelector(state => state.getAddress);
  console.log(data);

  return (
    <View style={style.body}>
      <View style={style.container}>
        <View style={style.innerContainer}>
          <Icon name="map-marker" size={25} color={Colors.RED} />
          <View style={style.title}>
            <Text style={style.city}>{item.city}-</Text>
            <Text style={style.town}>{item.town}</Text>
          </View>
        </View>
        <View style={style.info}>
          <Text style={style.address}>{item.clear_address}</Text>
          <Text style={style.number}>{item.telephone}</Text>
          <Text style={style.name}>{item.name}</Text>
          <Text style={style.surname}>{item.surname}</Text>
        </View>
      </View>
      <View style={style.button}>
        <Button
          theme="sixth"
          icon={'delete'}
          size={25}
          color={Colors.RED}
          onPress={onPress}
        />
      </View>
    </View>
  );
};
