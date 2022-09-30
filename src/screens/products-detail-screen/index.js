import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';

import {getProductDetails, addBasket} from '../../api';

import {Button} from '../../components';
import {ProductDetailSlider} from '../../components';

import style from './style';

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const ProductDetailScreen = ({route}) => {
  const item = route.params.item;

  const dispatch = useDispatch();

  const {data, status, isLoading, images} = useSelector(
    state => state.productDetail,
  );

  const renderImagesSlider = ({item}) => {
    console.log(item);
    return <ProductDetailSlider url={item} />;
  };

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
        <Button theme="sixth" icon={'heart-circle-outline'} />
        <Button theme="primary" buttonText={'Sepete ekle'} />
      </View>
    </View>
  );
};
