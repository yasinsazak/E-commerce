import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../utils/colors';

import {getMemberInfo} from '../../api';

import style from './style';

export const MemberInfoScreen = () => {
  const dispatch = useDispatch();

  const {data, status, isLoading} = useSelector(state => state.memberInfo);

  useEffect(() => {
    dispatch(getMemberInfo());
  }, [status]);

  return (
    <View style={style.body}>
      <View style={style.innerContainer}>
        <Icon name={'account'} size={20} color={Colors.RED} />
        <Text style={style.title}>İsim Soyisim:</Text>
        <Text style={style.content}>{data?.name}</Text>
      </View>
      <View style={style.innerContainer}>
        <Icon name={'email'} size={20} color={Colors.RED} />
        <Text style={style.title}>E-Posta Adresi:</Text>
        <Text style={style.content}>{data?.email}</Text>
      </View>
      <View style={style.innerContainer}>
        <Icon name={'phone'} size={20} color={Colors.RED} />
        <Text style={style.title}>Telefon Numarası:</Text>
        <Text style={style.content}>{data?.telephone}</Text>
      </View>
    </View>
  );
};
