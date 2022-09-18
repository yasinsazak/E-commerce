import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Categories} from '  ../../components';
import {getThirdCategories} from '../../api';

export const thirdCategoriesScreen = ({item}) => {
  const {
    data: second_categories_data,
    status: second_categories_status,
    isLoading: second_categories_isLoading,
    base_url: second_categories_base_url,
  } = useSelector(state => state.secondCategories);

  const renderSecondCategories = ({item}) => {
    return <Categories item={item} url={second_categories_base_url} />;
  };
  return (
    <View style={style.body}>
      <View style={style.inner_container}>
        <FlatList
          data={second_categories_data}
          renderItem={renderSecondCategories}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
