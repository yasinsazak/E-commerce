import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './style';

export const Button = ({theme, buttonText, onPress}) => {
  return (
    <View style={styles[theme].body}>
      <TouchableOpacity style={styles[theme].button} onPress={onPress}>
        <Text style={styles[theme].buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};
