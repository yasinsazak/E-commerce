import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

export const CategoriesScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.titleBody}>
        <Text style={styles.title}>Kategoriler</Text>
      </View>
    </View>
  );
};
