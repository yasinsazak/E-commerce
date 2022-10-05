import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Categories, Title} from '../../components';
import {getSecondCategories} from '../../api';

import style from './style';

export const SecondCategoriesScreen = ({route}) => {
  const {id} = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, base_url} = useSelector(
    state => state.secondCategories,
  );
  useEffect(() => {
    dispatch(getSecondCategories({first_category_id: id}));
  }, [status]);

  const renderSecondCategories = ({item}) => {
    var categoryId;
    if (item.isNext !== null) {
      categoryId = 2;
    }
    return (
      <Categories
        item={item}
        url={base_url}
        onPress={() => {
          if (item.isNext) {
            navigation.navigate('third-categories-screen', {id: item.id});
          } else {
            navigation.navigate('products-screen', {
              categoryId,
              id: item.id,
            });
          }
        }}
      />
    );
  };
  return (
    <View style={style.body}>
      <View style={style.inner_container}>
        <FlatList
          data={data}
          renderItem={renderSecondCategories}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
