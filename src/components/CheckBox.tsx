import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/Colors';

const CheckBox = ({item, index, onPress, filled}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => onPress(item)}
      key={index}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <View
        style={{
          borderWidth: 2,
          width: 18,
          height: 18,
          borderRadius: 20,
          borderColor: COLORS.blue,
          backgroundColor: filled ? COLORS.blue : 'white',
        }}
      />
      <Text
        key={index}
        style={{fontFamily: 'Montserrat-SemiBold', color: 'black'}}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default CheckBox;
