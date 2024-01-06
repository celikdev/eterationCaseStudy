import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from '../routes';
import {COLORS} from '../../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {getBasketCount} from '../../redux/reducer/basketReducer';

const Tab = createBottomTabNavigator();

const BottomTabStack = () => {
  const basketCount = useSelector((state: any) => state.basket.itemCount);
  const favoriteCount = useSelector(
    (state: any) => state.favorite.favoriteItems,
  );

  const badgeSelector = (routeName: string) => {};

  return (
    <Tab.Navigator>
      {Routes.map((route, index) => (
        <Tab.Screen
          key={index}
          name={route.name}
          component={route.component}
          options={{
            tabBarHideOnKeyboard: true,
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '900',
                  color: 'white',
                }}>
                E-Market
              </Text>
            ),
            headerShown: route.name === 'HomeStack' ? false : true,
            headerShadowVisible: false,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: COLORS.blue,
            },
            tabBarIcon: ({focused}) => {
              return <route.icon fill={focused ? 'black' : 'none'} />;
            },
            tabBarShowLabel: false,
            tabBarBadge:
              route.name === 'Basket'
                ? basketCount
                : route.name === 'Favorite'
                ? favoriteCount.length
                : null,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabStack;
