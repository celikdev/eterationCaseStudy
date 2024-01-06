import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../redux/reducer/basketReducer';
import {addFavorite, removeFavorite} from '../redux/reducer/favoriteReducer';
import {StarIcon} from '../assets/icons/Icons';

const ItemDetail = ({route, navigation}: any) => {
  const {data} = route.params;

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({title: data.name});
  }, []);
  const favoriteList = useSelector(
    (state: any) => state.favorite.favoriteItems,
  );

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

  const colorSelector = () => {
    var result =
      favoriteList && favoriteList?.find((item: any) => item.id === data.id)
        ? 'orange'
        : 'lightgray';

    return result;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        padding: '4%',
      }}>
      <View style={{gap: 10}}>
        <TouchableOpacity
          onPress={() => addOrDelete(data)}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          style={{
            position: 'absolute',
            zIndex: 1,
            right: '6%',
            top: '2%',
          }}>
          <StarIcon fill={colorSelector()} stroke="none" />
        </TouchableOpacity>
        <Image
          source={{uri: data.image}}
          style={{width: '100%', height: '46%'}}
        />
        <Text
          style={{color: 'black', fontFamily: 'Montserrat-Bold', fontSize: 20}}>
          {data.name}
        </Text>
        <Text
          style={{
            color: 'black',
            fontFamily: 'Montserrat-Medium',
            fontSize: 14,
          }}>
          {data.description}
        </Text>
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
            Price:
          </Text>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Montserrat-Bold',
              fontSize: 18,
            }}>
            {data.price} ₺
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(addItem(data))}
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
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ItemDetail;
