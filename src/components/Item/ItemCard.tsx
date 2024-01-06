import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {COLORS} from '../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../../redux/reducer/basketReducer';
import {StarIcon} from '../../assets/icons/Icons';
import {addFavorite, removeFavorite} from '../../redux/reducer/favoriteReducer';

interface ItemCardProps {
  data: {
    createdAt: String;
    name: String;
    image: String;
    price: Number;
    description: String;
    model: String;
    brand: String;
    id: String;
  };
  navigation: any;
}

const ItemCard = ({data, navigation}: ItemCardProps) => {
  const favoriteList = useSelector(
    (state: any) => state.favorite.favoriteItems,
  );

  const colorSelector = () => {
    var result =
      favoriteList && favoriteList?.find((item: any) => item.id === data.id)
        ? 'orange'
        : 'lightgray';

    return result;
  };
  const dispatch = useDispatch();

  const addOrDelete = ({}: any) => {
    const existingItemIndex = favoriteList.findIndex(
      (favoriteItem: any) => favoriteItem.id === data.id,
    );
    if (existingItemIndex === -1) {
      dispatch(addFavorite(data));
    } else {
      dispatch(removeFavorite(data));
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('ItemDetail', {
          data,
        });
      }}
      activeOpacity={0.8}
      style={{
        width: '46%',
        height: Dimensions.get('screen').height / 3,
        borderRadius: 2,
        alignItems: 'center',
        padding: '2%',
        gap: 4,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
      }}>
      <TouchableOpacity
        onPress={() => addOrDelete(data)}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        style={{
          position: 'absolute',
          zIndex: 1,
          right: '10%',
          top: '4%',
        }}>
        <StarIcon fill={colorSelector()} stroke="none" />
      </TouchableOpacity>
      <Image
        source={{uri: data.image}}
        style={{width: '100%', height: '60%'}}
      />
      <View
        style={{
          width: '100%',
          height: '40%',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: COLORS.blue,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 16,
          }}>
          {data.price} ₺
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 14,
          }}>
          {data.name}
        </Text>
        <TouchableOpacity
          testID="itemCardAddToCartButton"
          onPress={() => {
            dispatch(addItem(data));
          }}
          activeOpacity={0.8}
          style={{
            backgroundColor: COLORS.blue,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text
            style={{
              width: '100%',
              textAlign: 'center',
              fontFamily: 'Montserrat-Bold',
              color: 'white',
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
