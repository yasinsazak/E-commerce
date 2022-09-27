import React, {useEffect} from 'react';
import {View, Image, FlatList, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import style from './style';

import {Input, MainSlider, BrandsSlider, Products} from '../../components';
import Colors from '../../utils/colors';
import {getSliders, getBrandsSliders, getMainProducts} from '../../api';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {data, status, isLoading, base_url} = useSelector(
    state => state.sliders,
  );

  const {
    data: brands_data,
    status: brands_status,
    isLoading: brands_is_loading,
    base_url: brands_base_url,
  } = useSelector(state => state.brands);

  const {
    data: main_products_data,
    status: main_products_status,
    isLoading: main_products_is_loading,
    base_url: main_products_base_url,
  } = useSelector(state => state.mainProducts);

  const renderMainSlider = ({item}) => {
    return <MainSlider item={item} url={base_url} />;
  };

  const renderBrandsSlider = ({item}) => {
    return <BrandsSlider item={item} url={brands_base_url} />;
  };

  const renderMainProducts = ({item}) => {
    return <Products item={item} url={main_products_base_url} />;
  };

  useEffect(() => {
    dispatch(getSliders());
  }, [status]);

  useEffect(() => {
    dispatch(getBrandsSliders());
  }, [brands_status]);

  useEffect(() => {
    dispatch(getMainProducts());
  }, [main_products_status]);

  return (
    <View style={style.body}>
      <Image
        style={style.logo}
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
      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderMainSlider}
          keyExtractor={(item, index) => index}
        />
        <Text style={style.brands_text}>Markalar</Text>
        <FlatList
          data={brands_data}
          renderItem={renderBrandsSlider}
          keyExtractor={(item, index) => index}
          horizontal
        />
        <Text style={style.most_liked_text}>En Beğenilen Ürünler</Text>
        <FlatList
          data={main_products_data}
          renderItem={renderMainProducts}
          keyExtractor={(item, index) => index}
          numColumns="2"
        />
      </ScrollView>
    </View>
  );
};
