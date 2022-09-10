import React from 'react';
import {TextInput} from 'react-native-paper';

import styles from './style';
import Colors from '../../utils/colors';

export const Input = ({
  theme,
  placeholder,
  value,
  setValue,
  onPress,
  keyboardType,
  right,
  left,
}) => {
  return (
    <TextInput
      style={styles[theme].input}
      label={placeholder}
      onChangeText={setValue}
      value={value}
      keyboardType={keyboardType}
      outlineColor={Colors.WHITE}
      activeOutlineColor={Colors.RED}
      mode="outlined"
      theme={{colors: {text: Colors.WHITE, placeholder: Colors.WHITE}}}
      right={
        right && (
          <TextInput.Icon icon={right} color={Colors.RED} onPress={onPress} />
        )
      }
      left={left && <TextInput.Icon icon={left} color={Colors.RED} />}
    />
  );
};
