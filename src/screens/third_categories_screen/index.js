import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Categories} from '../../components';
import {getThirdCategories} from '../../api';

export const ThirdCategoriesScreen = () => {
  const {
    data: third_categories_data,
    status: third_categories_status,
    isLoading: third_categories_isLoading,
    base_url: third_categories_base_url,
  } = useSelector(state => state.thirdCategories);

  const renderThirdCategories = ({item}) => {
    return <Categories item={item} url={third_categories_base_url} />;
  };
  return (
    <View style={style.body}>
      <View style={style.inner_container}>
        <FlatList
          data={third_categories_data}
          renderItem={renderThirdCategories}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
