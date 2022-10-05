import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, Alert, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Input, Title} from '../../components';
import Colors from '../../utils/colors';

import {AddressCard} from '../../components';

import style from './style';
import {getAddressList} from '../../api';
import {useNavigation} from '@react-navigation/native';

export const AddressScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const {data, status} = useSelector(state => state.getAddress);

  const renderAddress = ({item}) => {
    return <AddressCard {...{item}} />;
  };

  useEffect(() => {
    dispatch(getAddressList());
  }, [status]);

  return (
    <View style={style.body}>
      <Title name={'Adreslerim'} />
      <View style={style.button}>
        <Button
          theme="primary"
          buttonText={'Adres ekle'}
          onPress={() => {
            navigation.navigate('add-address-screen');
          }}
        />
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderAddress}
          keyExtractor={item => item.id}
        />
      </View>
      <View></View>
    </View>
  );
};
