import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getSecondCategories, getThirdCategories, getProducts} from '../../api';
import style from './style';

export const Categories = ({url, item, category}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const categoryNumber = 2;
  const per_page = 50;
  const page = 0;

  const openSecondCategories = () => {
    categoryNumber;
    dispatch(getSecondCategories({first_category_id: item.id}));
    navigation.navigate('second-categories-screen', {title: item.title});
  };

  const openThirdCategories = () => {
    categoryNumber;
    dispatch(getThirdCategories({second_category_id: item.id}));
    navigation.navigate('third-categories-screen', {item});
  };
  const openProductsScreen = () => {
    dispatch(
      getProducts({
        category_id: item.id,
        category: categoryNumber,
        per_page: (item.per_page = per_page),
        page: (item.page = page),
      }),
    );
    navigation.navigate('products-screen', {item});
  };

  const open = () => {
    {
      category == '0'
        ? openSecondCategories()
        : category == '1'
        ? openThirdCategories()
        : openProductsScreen();
    }
  };
  return (
    <TouchableOpacity onPress={open}>
      <View style={style.body}>
        <Image style={style.image} source={{uri: url + item.img_url}} />
        <Text style={style.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
