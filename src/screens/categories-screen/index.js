import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Categories, Title} from '../../components';
import {getFirstCategories} from '../../api';
import {useNavigation} from '@react-navigation/native';

export const CategoriesScreen = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, base_url} = useSelector(
    state => state.firstCategories,
  );

  useEffect(() => {
    dispatch(getFirstCategories());
  }, [status]);

  const renderCategories = ({item}) => {
    return (
      <Categories
        item={item}
        url={base_url}
        onPress={() => {
          navigation.navigate('second-categories-screen', {
            id: item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={style.body}>
      <Title name={'Kategoriler'} />
      <View style={style.inner_container}>
        <FlatList
          data={data}
          renderItem={renderCategories}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
