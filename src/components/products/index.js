import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import style from './style';

export const Products = ({onPress, url, item}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress}>
        <Image style={style.image} source={{uri: url + item.img_url}} />
        <View style={style.textContainer}>
          <Text style={style.brand}>{item.brand}</Text>
          <Text style={style.title}>{item.title}</Text>
          <View style={style.rating}>
            <Text style={style.point}>{item.point}</Text>
            <Text style={style.review}>({item.review})</Text>
          </View>
          <Text style={style.price}>{item.price} TL</Text>
          <Text style={style.button}>Ürün Detayı</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
