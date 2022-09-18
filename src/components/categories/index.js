import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {getSecondCategories} from '../../api';
import style from './style';

export const Categories = ({url, item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const openSecondCategories = () => {
    dispatch(getSecondCategories({first_category_id: item.id}));
    navigation.navigate('second-categories-screen', {title: item.title});
  };

  return (
    <TouchableOpacity onPress={openSecondCategories}>
      <View style={style.body}>
        <Image style={style.image} source={{uri: url + item.img_url}} />
        <Text style={style.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
