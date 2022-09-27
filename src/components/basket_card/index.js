import React from 'react';
import {View, Image} from 'react-native';

import style from './style';

export const BasketCard = ({item, onPress}) => {
  return (
    <View>
      <Text style={style.brand}>{item.brand}</Text>
      <Button />
      <Image style={style.image} source={{uri: item.img_url}} />
      <Text style={style.title}>{item.title}</Text>
      <Text style={style.price}>{item.price} TL</Text>
    </View>
  );
};
