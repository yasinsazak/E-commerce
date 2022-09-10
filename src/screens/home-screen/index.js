import React, {useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './style';

import {Card, Input} from '../../components';
import Colors from '../../utils/colors';
import {getFirstCategories} from '../../api';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const {data, status, isLoading} = useSelector(state => state.firstCategories);

  const renderItem = ({item}) => {
    return <Card />;
  };

  useEffect(() => {
    dispatch(getFirstCategories());
  }, [status]);

  useEffect(() => {
    console.log(data);
  }, [data]);
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
        value={null}
        setValue={null}
        onPress={null}
        right="magnify"
      />
      <View style={styles.card_container}></View>
      <FlatList data={null} renderItem={renderItem} />
    </View>
  );
};
