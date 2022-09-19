import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getSecondCategories, getThirdCategories} from '../../api';
import style from './style';

export const Categories = ({url, item, isSecond}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openSecondCategories = () => {
    dispatch(getSecondCategories({first_category_id: item.id}));
    navigation.navigate('second-categories-screen', {title: item.title});
  };

  const openThirdCategories = () => {
    dispatch(getThirdCategories({second_category_id: item.id}));
    navigation.navigate('third-categories-screen', {title: item.title});
  };
  const open = () => {
    if (isSecond) {
      openSecondCategories();
    } else {
      openThirdCategories();
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
