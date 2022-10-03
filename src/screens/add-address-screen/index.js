import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, Alert} from 'react-native';
import {Button, Input} from '../../components';
import {Picker} from '@react-native-picker/picker';
import {Checkbox} from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';

import Colors from '../../utils/colors';
import style from './style';
import {
  getAddressList,
  getCityProcess,
  getTownProcess,
  saveAddressProcess,
} from '../../api';
import {useNavigation} from '@react-navigation/native';

export const AddAddressScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [cityId, setCityId] = useState('');
  const [townId, setTownId] = useState('');
  const [clearAddress, setClearAddress] = useState('');
  const [billingName, setBillingName] = useState('');
  const [billingSurname, setBillingSurname] = useState('');
  const [billingPhone, setBillingPhone] = useState('');
  const [billingCityId, setBillingCityId] = useState('');
  const [billingTownId, setBillingTownId] = useState('');
  const [billingClearAddress, setBillingClearAddress] = useState('');

  const [check, setCheck] = useState(true);

  useEffect(() => {
    dispatch(getCityProcess());
  }, []);

  const saveAddress = () => {
    dispatch(
      saveAddressProcess({
        name: name,
        surname: surname,
        telephone: phone,
        city: cityId,
        town: townId,
        clear_address: clearAddress,
        billing_name: billingName,
        billing_surname: billingSurname,
        billing_telephone: billingPhone,
        billing_city: billingCityId,
        billing_town: billingTownId,
        billing_clear_address: billingClearAddress,
      }),
    );
    navigation.goBack();
    dispatch(getAddressList());
  };

  const {data: city_data, status: city_status} = useSelector(
    state => state.getCity,
  );
  const {data: town_data, status: town_status} = useSelector(
    state => state.getTown,
  );
  const {data: save_address_data, status: save_address_status} = useSelector(
    state => state.saveAddress,
  );

  useEffect(() => {
    dispatch(getTownProcess({city_id: cityId}));
  }, [cityId]);

  return (
    <View style={style.body}>
      <ScrollView>
        <View>
          <Text>İletişim Bilgileri</Text>
          <Input
            left={'account'}
            theme="primary"
            placeholder="İsim"
            value={name}
            setValue={setName}
            outlineColor={Colors.WHITE}
            activeOutlineColor={Colors.RED}
          />
          <Input
            left={'account'}
            theme="primary"
            placeholder="Soyisim"
            value={surname}
            setValue={setSurname}
            outlineColor={Colors.WHITE}
            activeOutlineColor={Colors.RED}
          />
          <Input
            left={'phone'}
            theme="primary"
            placeholder="Telefon"
            value={phone}
            setValue={setPhone}
            outlineColor={Colors.WHITE}
            activeOutlineColor={Colors.RED}
          />
        </View>
        <View>
          <Text>Adres Bilgileri</Text>
          <View style={style.picker}>
            <Text>Şehir</Text>
            <Picker
              selectedValue={cityId}
              onValueChange={(itemValue, itemIndex) => setCityId(itemValue)}>
              {city_data?.map((item, index) => (
                <Picker.Item key={index} label={item.title} value={item.id} />
              ))}
            </Picker>
          </View>
          <View style={style.picker}>
            <Text>İlçe</Text>
            <Picker
              selectedValue={townId}
              onValueChange={(itemValue, itemIndex) => setTownId(itemValue)}>
              {town_status === 'success'
                ? town_data?.map((item, index) => (
                    <Picker.Item
                      key={index}
                      label={item.title}
                      value={item.id}
                    />
                  ))
                : null}
            </Picker>
          </View>
          <Input
            left={'office-building'}
            theme="primary"
            placeholder="Adres"
            value={clearAddress}
            setValue={setClearAddress}
            outlineColor={Colors.WHITE}
            activeOutlineColor={Colors.RED}
          />
        </View>
        {check !== false ? (
          <View style={style.checkbox}>
            <Checkbox
              status={check ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheck(!check);
              }}
            />
            <Text>Faturam aynı adrese gönderilsin</Text>
          </View>
        ) : (
          <View style={style.billScreen}>
            <View>
              <Text>İletişim Bilgileri</Text>
              <Input
                left={'account'}
                theme="primary"
                placeholder="İsim"
                value={billingName}
                setValue={setBillingName}
                outlineColor={Colors.WHITE}
                activeOutlineColor={Colors.RED}
              />
              <Input
                left={'account'}
                theme="primary"
                placeholder="Soyisim"
                value={billingSurname}
                setValue={setBillingSurname}
                outlineColor={Colors.WHITE}
                activeOutlineColor={Colors.RED}
              />
              <Input
                left={'phone'}
                theme="primary"
                placeholder="Telefon"
                value={billingPhone}
                setValue={setBillingPhone}
                outlineColor={Colors.WHITE}
                activeOutlineColor={Colors.RED}
              />
            </View>
            <View>
              <Text>Adres Bilgileri</Text>
              <View style={style.picker}>
                <Text>Şehir</Text>
                <Picker
                  selectedValue={billingCityId}
                  onValueChange={(itemValue, itemIndex) =>
                    setBillingCityId(itemValue)
                  }>
                  {city_data?.map((item, index) => (
                    <Picker.Item
                      key={index}
                      label={item.title}
                      value={item.id}
                    />
                  ))}
                </Picker>
              </View>
              <View style={style.picker}>
                <Text>İlçe</Text>
                <Picker
                  selectedValue={billingTownId}
                  onValueChange={(itemValue, itemIndex) =>
                    setBillingTownId(itemValue)
                  }>
                  {town_status === 'success'
                    ? town_data?.map((item, index) => (
                        <Picker.Item
                          key={index}
                          label={item.title}
                          value={item.id}
                        />
                      ))
                    : null}
                </Picker>
              </View>
              <Input
                left={'office-building'}
                theme="primary"
                placeholder="Adres"
                value={billingClearAddress}
                setValue={setBillingClearAddress}
                outlineColor={Colors.WHITE}
                activeOutlineColor={Colors.RED}
              />
            </View>
            <View style={style.checkbox}>
              <Checkbox
                status={check ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheck(!check);
                }}
              />
              <Text>Faturam farklı adrese gönderilsin</Text>
            </View>
          </View>
        )}

        <Button theme="secondary" buttonText={'Kaydet'} onPress={saveAddress} />
      </ScrollView>
    </View>
  );
};
