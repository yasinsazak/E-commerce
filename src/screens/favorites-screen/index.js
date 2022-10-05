import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {Button, Products, Title} from '../../components';

import style from './style';

import {useDispatch, useSelector} from 'react-redux';
import {getFavoritteList} from '../../api';
import {useNavigation} from '@react-navigation/native';
import Colors from '../../utils/colors';

export const FavoritteScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, getFavoritteLoading, base_url} = useSelector(
    state => state.favoritte,
  );

  useEffect(() => {
    dispatch(getFavoritteList());
  }, []);

  const renderProducts = ({item}) => {
    return <Products item={item} url={base_url} />;
  };

  return (
    <View style={style.body}>
      <Title name={'Favorilerim'} />
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
