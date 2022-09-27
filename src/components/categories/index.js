import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getSecondCategories, getThirdCategories, getProducts} from '../../api';
import style from './style';

export const Categories = ({url, item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.body}>
        <Image style={style.image} source={{uri: url + item.img_url}} />
        <Text style={style.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
