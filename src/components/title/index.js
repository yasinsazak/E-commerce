import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import Colors from '../../utils/colors';
import {Button} from '../button';

import style from './style';

export const Title = ({name}) => {
  const navigation = useNavigation();
  return (
    <View style={style.titleBody}>
      <Button
        theme="sixth"
        icon={'chevron-left'}
        size={30}
        color={Colors.RED}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={style.titleContainer}>
        <Text style={style.title}>{name}</Text>
      </View>
    </View>
  );
};
