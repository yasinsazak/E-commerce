import {View, Text} from 'react-native';
import React from 'react';
import {Button} from '../../components/button';

import styles from './style';

export const BasketScreen = () => {
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
