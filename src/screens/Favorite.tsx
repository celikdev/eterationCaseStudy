import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BasketCard} from '../components/Basket';
import {COLORS} from '../constants/Colors';
import {removeFavorite} from '../redux/reducer/favoriteReducer';

const Favorite = () => {
  const dispatch = useDispatch();

  const favoriteItems = useSelector(
    (state: any) => state.favorite.favoriteItems,
  );

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{height: '90%'}}>
        {favoriteItems.length < 1 ? (
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
          favoriteItems.map((item: any, index: Key) => (
            <View
              key={index}
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
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => dispatch(removeFavorite(item))}
                  activeOpacity={0.4}
                  style={{
                    backgroundColor: COLORS.gray,
                    width: '60%',
                    height: '100%',
                    borderRadius: 6,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'red',
                      fontFamily: 'Montserrat-SemiBold',
                      fontSize: 14,
                    }}>
                    Sil
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </View>
    </View>
  );
};

export default Favorite;
