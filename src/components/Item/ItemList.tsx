import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {ItemCard} from '.';
import {useDispatch, useSelector} from 'react-redux';
import {baseUrl} from '../../services/ItemList';
import axios from 'axios';
import {setItemList} from '../../redux/reducer/itemListReducer';

const ItemList = ({navigation}: any) => {
  // const {data, isLoading, currentData} = useGetItemListQuery();
  const itemList = useSelector((state: any) => state.itemList.itemList);
  const searchText = useSelector((state: any) => state.itemList.searchText);

  const dispatch = useDispatch();

  const getList = async () => {
    await axios
      .get(baseUrl)
      .then(res =>
        res.data.map((item: any) => ({...item, price: parseFloat(item.price)})),
      )
      .then(res => dispatch(setItemList(res)))
      .catch(err => console.log(err));
  };

  const filteredItemList = searchText
    ? itemList.filter((item: any) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      )
    : itemList;

  useEffect(() => {
    getList();
  }, []);

  const favorite = useSelector((state: any) => state.favorite.favoriteItems);
  return (
    <FlatList
      columnWrapperStyle={{justifyContent: 'space-between'}}
      data={filteredItemList}
      keyExtractor={item => item.id}
      contentContainerStyle={{
        marginHorizontal: '2%',
        paddingBottom: '4%',
        gap: 10,
      }}
      style={{flex: 1}}
      numColumns={2}
      ListFooterComponent={() => {
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
          }}>
          <ActivityIndicator size="large" color="black" />
        </View>;
      }}
      renderItem={({item}) => {
        return <ItemCard key={item.id} data={item} navigation={navigation} />;
      }}
    />
  );
};

export default ItemList;
