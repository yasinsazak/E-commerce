import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Categories} from '../../components';
import {getFirstCategories, getSecondCategories} from '../../api';
import {useNavigation} from '@react-navigation/native';

export const CategoriesScreen = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    data: categories_data,
    status: categories_status,
    isLoading: categories_is_loading,
    base_url: categories_base_url,
  } = useSelector(state => state.firstCategories);

  const renderCategories = ({item}) => {
    return <Categories item={item} url={categories_base_url} category="0" />;
  };

  useEffect(() => {
    dispatch(getFirstCategories());
  }, [categories_status]);

  return (
    <View style={style.body}>
      <Text style={style.title}>Kategoriler</Text>
      <View style={style.inner_container}>
        <FlatList
          data={categories_data}
          renderItem={renderCategories}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
