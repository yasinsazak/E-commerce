import React from 'react';
import {TextInput} from 'react-native-paper';

import styles from './style';
import Colors from '../../utils/colors';

export const Input = ({
  theme,
  placeholder,
  placeholderTextColor,
  value,
  setValue,
  onPress,
  keyboardType,
  outlineColor,
  activeOutlineColor,
  right,
  left,
}) => {
  return (
    <TextInput
      style={styles[theme].input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={setValue}
      value={value}
      keyboardType={keyboardType}
      outlineColor={outlineColor}
      activeOutlineColor={activeOutlineColor}
      mode="outlined"
      right={
        right && (
          <TextInput.Icon icon={right} color={Colors.RED} onPress={onPress} />
        )
      }
      left={left && <TextInput.Icon icon={left} color={Colors.RED} />}
      // keyboardType='email-address'
    />
  );
};
