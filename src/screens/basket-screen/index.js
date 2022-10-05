import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {Button} from '../../components/button';

import {BasketCard} from '../../components';
import {addBasket, getBasket, deleteBasket, editBasket} from '../../api';

import style from './style';
import {useDispatch, useSelector} from 'react-redux';

export const BasketScreen = () => {
  const dispatch = useDispatch();

  const {getResponse, base_url, total} = useSelector(state => state.basket);

  const renderItem = ({item}) => {
    return <BasketCard item={item} />;
  };

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  return (
    <View style={style.body}>
      <View style={style.titleBody}>
        <Text style={style.title}>Sepet: ürün</Text>
      </View>
      <View style={style.products}>
        <FlatList
          data={getResponse}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={style.bottomContainer}>
        <View style={style.bottomTextContainer}>
          <Text style={style.priceText}>Sepet Toplam</Text>
          <Text style={style.price}> {total}</Text>
        </View>
        <Button
          theme="primary"
          buttonText={'Alışverişi Tamamla'}
          onPress={null}
        />
      </View>
    </View>
  );
};
