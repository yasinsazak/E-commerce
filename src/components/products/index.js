import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {getProductDetails} from '../../api';
import {getProductsDetailSlice} from '../../redux/slice/getProductsDetailsSlice';

import style from './style';

export const Products = ({url, item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, images} = useSelector(
    state => state.productDetail,
  );

  useEffect(() => {
    status === 'success' &&
      navigation.navigate('product-detail-screen', {item: data});
  }, [status]);

  const openProductsDetailScreen = () => {
    dispatch(getProductDetails({product_id: item.id}));
    navigation.navigate('product-detail-screen', {item: data});
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={openProductsDetailScreen}>
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
