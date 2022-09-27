import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '../../components/button';

import {BasketCard} from '../../components';
import {addBasket, getBasket, deleteBasket, editBasket} from '../../api';

import styles from './style';
import {useDispatch, useSelector} from 'react-redux';

export const BasketScreen = () => {
  const dispatch = useDispatch();

  const {getResponse, base_url} = useSelector(state => state.basket);

  const renderItem = ({item}) => {
    return <BasketCard item={item} />;
  };

  return (
    <View style={styles.body}>
      <View style={styles.titleBody}>
        <Text style={styles.title}>Sepet: 0 ürün</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.priceText}>Sepet Toplam</Text>
          <Text style={styles.price}> 0.00 TL</Text>
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
