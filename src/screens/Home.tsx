import {View, Text, Button} from 'react-native';
import React from 'react';
import {SearchBar, FilterCard} from '../components';
import {ItemCard, ItemList} from '../components/Item';
import {storage} from '../services/Storage';

const Home = ({navigation}: any) => {
  const getData = async () => {
    const data = storage.getString('basket');
    const parsedData = JSON.parse(data);
    parsedData.map(item => console.log(item.name));
  };

  return (
    <View style={{flex: 1, gap: 10}}>
      <SearchBar />
      <FilterCard />
      <ItemList navigation={navigation} />
    </View>
  );
};

export default Home;
