import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Home';
import ItemDetail from '../ItemDetail';
import {Text} from 'react-native-svg';
import {COLORS} from '../../constants/Colors';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'fade_from_bottom',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: '900',
          color: 'white',
        },
        headerShadowVisible: false,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: COLORS.blue,
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'E-Market',
        }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetail}
        options={{
          title: 'Item Detail',
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
