import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Categories} from '../../components';
import {getThirdCategories} from '../../api';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export const ThirdCategoriesScreen = ({route}) => {
  const {id} = route.params;

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, base_url} = useSelector(
    state => state.thirdCategories,
  );

  useEffect(() => {
    dispatch(getThirdCategories({second_category_id: id}));
  }, [status]);

  const renderThirdCategories = ({item}) => {
    var categoryId;
    if (item.isNext === undefined) {
      categoryId = 3;
    }
    return (
      <Categories
        item={item}
        url={base_url}
        onPress={() => {
          navigation.navigate('products-screen', {
            categoryId: categoryId,
            id: item.id,
          });
        }}
      />
    );
  };

  return (
    <View style={style.body}>
      <View style={style.inner_container}>
        <FlatList
          data={data}
          renderItem={renderThirdCategories}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </View>
    </View>
  );
};
