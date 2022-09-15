import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import style from './style';

export const BrandsSlider = ({onPress, url, item}) => {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={style.brands_container}>
          <Image style={style.image} source={{uri: url + item.img_url}} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
