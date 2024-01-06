import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementItemCount,
  incrementItemCount,
  removeItem,
} from '../../redux/reducer/basketReducer';

interface BasketCardProps {
  item: {
    name: String;
    price: Float32Array;
    model: String;
    brand: String;
    id: String;
  };
}

const BasketCard = ({item}: BasketCardProps) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  return (
    <View
      style={{
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View style={{width: '50%'}}>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 18,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            color: COLORS.blue,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 14,
          }}>
          {item.price} ₺
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '40%',
          height: '50%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() =>
            item.count > 1
              ? dispatch(decrementItemCount(item.id))
              : Alert.alert('Ürünü Silmek İstediğinize Emin Misiniz?', '', [
                  {
                    text: 'Hayır',
                    onPress: () => console.log('Hayır'),
                  },
                  {
                    text: 'Evet',
                    onPress: () => dispatch(removeItem(item.id)),
                  },
                ])
          }
          activeOpacity={0.4}
          style={{
            backgroundColor: COLORS.gray,
            width: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 14,
            }}>
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            width: '40%',
            height: '100%',
            backgroundColor: COLORS.blue,
            color: 'white',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {item.count}
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(incrementItemCount(item.id))}
          activeOpacity={0.4}
          style={{
            backgroundColor: COLORS.gray,
            width: '30%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 14,
            }}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketCard;
