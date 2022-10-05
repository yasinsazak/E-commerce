import React from 'react';
import {View, Text, FlatList} from 'react-native';

export const SearchProductScreen = ({route}) => {
  const {keywords} = route.params;
  return (
    <View>
      <FlatList
        data={null}
        renderItem={null}
        keyExtractor={(item, index) => {
          index;
        }}
      />
    </View>
  );
};
