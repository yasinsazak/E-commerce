import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView, Dimensions} from 'react-native';

import {
  addBasket,
  toggleFavoritteProcess,
  getFavoritteList,
  getProductDetails,
} from '../../api';
import {remove} from '../../redux/slice/favoritteSlice';

import {Button, BasketCard} from '../../components';

import style from './style';

import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export const ProductDetailScreen = ({route}) => {
  const item = route.params.item;
  const {id} = route.params;
  const qty = 1;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, images, isFavoritte} = useSelector(
    state => state.productDetail,
  );

  const {
    data: basket_data,
    addStatus,
    addBasketLoading,
  } = useSelector(state => state.basket);

  const {
    data: favoritte_data,
    status: favoritte_status,
    toggle_status,
    toggleFavoritteLoading,
  } = useSelector(state => state.favoritte);

  const toggleFavoritte = () => {
    if (isFavoritte === 0) {
      dispatch(toggleFavoritteProcess({product_id: item.id}));
    } else {
      dispatch(toggleFavoritteProcess({product_id: item.id}));
      navigation.navigate('favorite-screen');
    }
  };

  const AddBasket = ({item}) => {
    return <BasketCard item={item} />;
  };

  useEffect(() => {
    dispatch(addBasket({product_id: id, qty: qty}));
  }, [addStatus]);

  const {width} = Dimensions.get('window');

  return (
    <View style={style.body}>
      <ScrollView>
        <ScrollView horizontal snapToInterval={width}>
          {images?.map((item, index) => (
            <Image style={style.image} source={{uri: item}} key={index} />
          ))}
        </ScrollView>
        <Text style={style.title}>{item?.title}</Text>
        <Text style={style.title}>Ürün Hakkında Bilgiler:</Text>
        <Text style={style.description}>{item?.description}</Text>
      </ScrollView>
      <View style={style.bottomContainer}>
        <Text style={style.price}>{item?.price}TL</Text>
        <Button
          theme="sixth"
          icon={'heart-circle-outline'}
          size={30}
          color={isFavoritte === 1 ? Colors.RED : Colors.GRAY}
          onPress={toggleFavoritte}
        />
        <Button
          theme="primary"
          buttonText={'Sepete ekle'}
          onPress={AddBasket}
        />
      </View>
    </View>
  );
};
