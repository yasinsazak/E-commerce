import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Products} from '../../components';
import {getProducts} from '../../api';

export const ProductsScreen = ({route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {
    data: products_data,
    status: products_status,
    isLoading: products_isLoading,
    base_url: products_base_url,
  } = useSelector(state => state.productList);

  const renderProducts = ({item}) => {
    return <Products item={item} url={products_base_url} onPress={null} />;
  };

  return (
    <View style={style.body}>
      <View style={style.innerContainer}>
        <FlatList
          data={products_data}
          renderItem={renderProducts}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
