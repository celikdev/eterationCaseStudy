import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../constants/Colors';
import {Modal} from '.';
import {useDispatch} from 'react-redux';
import {setModalVisible} from '../redux/reducer/modalReducer';

const FilterCard = () => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        height: '6%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '4%',
      }}>
      <Modal />
      <Text
        style={{
          color: 'black',
          width: '50%',
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 16,
        }}>
        Filters:
      </Text>
      <TouchableOpacity
        onPress={() => dispatch(setModalVisible())}
        activeOpacity={0.8}
        style={{
          width: '40%',
          backgroundColor: COLORS.gray,
          height: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            width: '100%',
            textAlign: 'center',
            fontWeight: '600',
            fontFamily: 'Montserrat-Medium',
          }}>
          Select Filter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FilterCard;
