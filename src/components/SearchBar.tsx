import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {SearchIcon} from '../assets/icons/Icons';
import {COLORS} from '../constants/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {setItemList, setSearchText} from '../redux/reducer/itemListReducer';

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: any) => state.itemList.searchText);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.gray,
        marginHorizontal: '4%',
        borderRadius: 10,
        marginVertical: '2%',
        height: 50,
      }}>
      <SearchIcon fill={undefined} width={undefined} height={undefined} />
      <TextInput
        onChangeText={text => dispatch(setSearchText(text))}
        placeholder="Search"
        placeholderTextColor={COLORS.darkGray}
        style={{
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 14,
          width: '86%',
          color: 'black',
          fontWeight: 'bold',
        }}
      />
    </View>
  );
};

export default SearchBar;
