import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {searchProductProcess} from '../../api';
import {Products} from '../../components/products';

import style from './style';

export const SearchProductScreen = ({route}) => {
  const {keywords} = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const page = 0;
  const per_page = 50;

const {data,status,isLoading,base_url} = useSelector(
  state=>state.searchProduct
  );

  console.log()

  useEffect(() => {
    dispatch(
      searchProductProcess({
        keywords: keywords,
        per_page: per_page,
        page: page,
      }),
    );
  }, [status]);

  const renderSearchProducts = ({item}) => {
      return <Products item={item} url={base_url} />;
  };

  return (
    <View style={style.body}>
      <FlatList
        data={data}
        renderItem={renderSearchProducts}
        keyExtractor={(item, index) => {
          index;
        }}
        numColumns="2"
      />
    </View>
  );
};
