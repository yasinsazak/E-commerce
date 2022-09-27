import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Products} from '../../components';
import {getProducts} from '../../api';
import {useNavigation} from '@react-navigation/native';

export const ProductsScreen = ({route}) => {
  const {id, categoryId} = route.params;
  const per_page = 50;
  const page = 0;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, base_url} = useSelector(
    state => state.productList,
  );

  useEffect(() => {
    dispatch(
      getProducts({
        category_id: id,
        category: categoryId,
        per_page: per_page,
        page: page,
      }),
    );
  }, [status]);

  const renderProducts = ({item}) => {
    return <Products item={item} url={base_url} onPress={null} />;
  };

  return (
    <View style={style.body}>
      <View style={style.innerContainer}>
        <FlatList
          data={data}
          renderItem={renderProducts}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
