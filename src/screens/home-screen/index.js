import React from 'react';
import {View, Image} from 'react-native';

import styles from './style';

import {Input} from '../../components';
import Colors from '../../utils/colors';

export const HomeScreen = () => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://narevim.com/panel/uploads/settings_v/logo/narlogo.png',
        }}
      />
      <Input
        keyboardType="email-address"
        theme="secondary"
        placeholder={'Ara'}
        placeholderTextColor={Colors.RED}
        value={null}
        setValue={null}
        onPress={null}
        right="magnify"
        outlineColor={Colors.WHITE}
        activeOutlineColor={Colors.RED}
      />
    </View>
  );
};
