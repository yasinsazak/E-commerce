import React from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';

import {getProductDetails, addBasket} from '../../api';

import {MainSlider} from '../../components/main_slider';

import style from './style';

import {Products} from '../../components';
import {useEffect} from 'react';

export const ProductDetailScreen = ({route}) => {
  const item = route.params.item;

  useEffect(() => {
    console.log(item);
  }, [item]);

  return (
    <View>
      <View>
        <ScrollView>
          <FlatList item={null} renderitem={null} horizontal />
          <Text style={style.title}>{item?.title}</Text>
          <Text>Ürün Hakkında Bilgiler:</Text>
          <Text style={style.description}>{item?.description}</Text>
        </ScrollView>
      </View>
      <View>
        <Text>{item?.price}</Text>
      </View>
    </View>
  );
};
