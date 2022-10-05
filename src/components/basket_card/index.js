import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {editBasket, deleteBasket} from '../../api';
import Colors from '../../utils/colors';
import {Button} from '../button';

import style from './style';

export const BasketCard = ({item, onPress, url}) => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState(item.qty);

  const Increase = () => {
    setNumber(number + 1);
  };

  const Decrease = () => {
    setNumber(number - 1);
  };

  const DeleteBasket = () => {
    dispatch(deleteBasket({rowID: item.rowid}));
  };

  useEffect(() => {
    dispatch(editBasket({rowID: item.rowid, qty: number}));
  }, [number]);

  return (
    <View style={style.body}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri: item.img_url}} />
      </View>
      <View style={style.innerContainer}>
        <Text style={style.brand}>{item.brand}</Text>
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.price}>{item.price} TL</Text>
      </View>
      <View style={style.rightContainer}>
        <Button
          theme="sixth"
          icon={'delete'}
          size={30}
          color={Colors.RED}
          onPress={DeleteBasket}
        />
        <View style={style.qtyContainer}>
          <Button
            theme="sixth"
            icon={'minus-box'}
            size={25}
            color={Colors.RED}
            onPress={Decrease}
          />
          <Text style={style.qty}>{item.qty}</Text>
          <Button
            theme="sixth"
            icon={'plus-box'}
            size={25}
            color={Colors.RED}
            onPress={Increase}
          />
        </View>
      </View>
    </View>
  );
};
