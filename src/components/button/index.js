import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../utils/colors';

import style from './style';

export const Button = ({theme, buttonText, onPress, icon}) => {
  return (
    <View style={style[theme].body}>
      <TouchableOpacity style={style[theme].button} onPress={onPress}>
        <View style={style[theme].leftContainer}>
          {theme == 'fifth' && (
            <Icon name={icon} size={25} color={Colors.GRAY} />
          )}
          <Text style={style[theme].buttonText}>{buttonText}</Text>
        </View>
        {theme == 'fifth' && (
          <Icon name="arrow-right-thin" size={30} color={Colors.GRAY} />
        )}
      </TouchableOpacity>
    </View>
  );
};
