import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BasketCard} from '../components/Basket';
import {COLORS} from '../constants/Colors';
import {useSelector} from 'react-redux';

const Basket = () => {
  const basketItems = useSelector((state: any) => state.basket.items);
  const total = useSelector((state: any) => state.basket.basketTotal);

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{height: '90%'}}>
        {basketItems.length < 1 ? (
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontFamily: 'Montserrat-Bold',
              marginVertical: '20%',
            }}>
            Sepette Ürün Yok!
          </Text>
        ) : (
          basketItems?.map((item: any, index: Key) => (
            <BasketCard key={index} item={item} />
          ))
        )}
      </View>
      <View
        style={{
          height: '10%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '4%',
        }}>
        <View>
          <Text
            style={{
              color: COLORS.blue,
              fontFamily: 'Montserrat-Medium',
              fontSize: 16,
            }}>
            Total:
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Montserrat-Bold',
              fontSize: 18,
            }}>
            {total} ₺
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.blue,
            width: '40%',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Montserrat-Bold',
              fontSize: 14,
            }}>
            Complete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Basket;
