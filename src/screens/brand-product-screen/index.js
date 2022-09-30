import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';

import style from './style';

import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import {Products} from '../../components';
import {getBrandProductList} from '../../api';

export const BrandProductScreen = ({route}) => {
  const {id} = route.params;
  const page = 0;
  const per_page = 50;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, base_url} = useSelector(
    state => state.brandProductList,
  );
  useEffect(() => {
    dispatch(
      getBrandProductList({brand_id: id, page: page, per_page: per_page}),
    );
  }, [status]);

  const renderBrandProducts = ({item}) => {
    return <Products item={item} url={base_url} />;
  };

  return (
    <View style={style.body}>
      <View>
        <FlatList
          data={data}
          renderItem={renderBrandProducts}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
