import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabStack} from './src/screens/Stack';
import {useDispatch, useSelector} from 'react-redux';
import {storage} from './src/services/Storage';
import {setBasket} from './src/redux/reducer/basketReducer';
import {setFavorite} from './src/redux/reducer/favoriteReducer';

const App = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state: any) => state.basket.items);
  const favoriteItems = useSelector(
    (state: any) => state.favorite.favoriteItems,
  );
  const storageBasket = storage.getString('basket');
  const favoriteList = storage.getString('favoriteList');

  useEffect(() => {
    if (storageBasket) {
      const parsedStorage = JSON.parse(storageBasket);
      parsedStorage.forEach((item: any) => {
        const existingItemIndex = basketItems.findIndex(
          (basketItem: any) => basketItem.id === item.id,
        );
        if (existingItemIndex === -1) {
          dispatch(setBasket(item));
        }
      });
    }
    if (favoriteList) {
      const parsedStorage = JSON.parse(favoriteList);
      parsedStorage.forEach((item: any) => {
        const existingItemIndex = favoriteItems.findIndex(
          (favoriteItem: any) => favoriteItem.id === item.id,
        );
        if (existingItemIndex === -1) {
          dispatch(setFavorite(item));
        }
      });
    }
  }, []);

  return (
    <NavigationContainer>
      <BottomTabStack />
    </NavigationContainer>
  );
};

export default App;
