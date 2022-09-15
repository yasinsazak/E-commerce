import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';

export const Categories = ({url, item, onPress}) => {
  console.log(url.url);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.body}>
        <Image style={style.image} source={{uri: url + item.img_url}} />
        <Text style={style.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
