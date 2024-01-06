import {
  View,
  Text,
  Modal as NativeModal,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  ScrollView,
  TextInput,
  Keyboard,
} from 'react-native';
import {CheckBox} from '.';
import React, {useEffect, useState} from 'react';
import {CloseIcon, SearchIcon} from '../assets/icons/Icons';
import {useDispatch, useSelector} from 'react-redux';
import {setModalVisible} from '../redux/reducer/modalReducer';
import {COLORS} from '../constants/Colors';
import {setBrand, setModel, setSortBy} from '../redux/reducer/filterReducer';
import {setItemList} from '../redux/reducer/itemListReducer';

const Modal = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector((state: any) => state.modalVisible.visible);

  const [brandSearchText, setBrandSearchText] = useState('');
  const [modelSearchText, setModelSearchText] = useState('');
  const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);

  Keyboard.addListener('keyboardDidShow', () => {
    setKeyboardIsOpen(true);
  });
  Keyboard.addListener('keyboardDidHide', () => {
    setKeyboardIsOpen(false);
  });

  useEffect(() => {
    const backAction = () => {
      dispatch(setModalVisible());
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const list = useSelector((state: any) => state.itemList.itemList);

  const uniqueBrandList = [...new Set(list?.map((item: any) => item.brand))];

  const filteredBrandList = brandSearchText
    ? uniqueBrandList.filter((item: any) =>
        item.toLowerCase().includes(brandSearchText.toLowerCase()),
      )
    : uniqueBrandList;

  const uniqueModelList = [...new Set(list?.map((item: any) => item.model))];

  const filteredModelList = modelSearchText
    ? uniqueModelList.filter((item: any) =>
        item.toLowerCase().includes(modelSearchText.toLowerCase()),
      )
    : uniqueModelList;

  const filterSortBy = useSelector((state: any) => state.filter.sortBy);
  const filterBrand = useSelector((state: any) => state.filter.brand);
  const filterModel = useSelector((state: any) => state.filter.model);

  const sortByData = [
    'Old to New',
    'New to Old',
    'Price High to Low',
    'Price Low to High',
  ];

  const handleApply = () => {
    let sortedList = [...list]; // Orijinal listeyi kopyala

    if (filterSortBy === 'Price High to Low') {
      sortedList.sort((a: any, b: any) => b.price - a.price);
    } else if (filterSortBy === 'Price Low to High') {
      sortedList.sort((a: any, b: any) => a.price - b.price);
    } else {
      sortedList.sort((a: any, b: any) => a.id - b.id);
    }

    dispatch(setItemList(sortedList));
  };

  return (
    <NativeModal
      animationType="slide"
      visible={modalVisible}
      transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {/* Header */}
        <View
          style={{
            height: '8%',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
            borderBottomColor: 'lightgray',
          }}>
          <TouchableOpacity
            onPress={() => dispatch(setModalVisible())}
            style={{padding: 10}}
            activeOpacity={0.6}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}>
            <CloseIcon />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontFamily: 'Montserrat-SemiBold',
              fontSize: 20,
            }}>
            Filter
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(setSortBy(''));
              dispatch(setBrand(''));
              dispatch(setModel(''));
            }}
            style={{padding: 10}}
            activeOpacity={0.6}
            hitSlop={{
              top: 10,
              bottom: 10,
              left: 10,
              right: 10,
            }}>
            <Text style={{color: 'red', fontFamily: 'Montserrat-SemiBold'}}>
              Temizle
            </Text>
          </TouchableOpacity>
        </View>
        {/* Header End */}
        <ScrollView
          style={{
            width: '96%',
            height: '84%',
          }}>
          <View
            style={{
              gap: 10,
              paddingVertical: '4%',
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
              }}>
              Sort By
            </Text>
            <View
              style={{
                gap: 10,
                paddingHorizontal: '2%',
              }}>
              {sortByData.map((item, index) => (
                <CheckBox
                  filled={filterSortBy === item}
                  key={index}
                  item={item}
                  index={index}
                  onPress={() => dispatch(setSortBy(item))}
                />
              ))}
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: 'lightgray',
                marginVertical: '2%',
              }}
            />
          </View>
          <View
            style={{
              gap: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
              }}>
              Brand
            </Text>
            {/* Search Bar */}
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: COLORS.gray,
                  marginHorizontal: '4%',
                  borderRadius: 10,
                  height: 50,
                }}>
                <SearchIcon
                  fill={undefined}
                  width={undefined}
                  height={undefined}
                />
                <TextInput
                  placeholder="Search"
                  onChangeText={(text: string) => setBrandSearchText(text)}
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
            </View>
            <ScrollView
              contentContainerStyle={{
                gap: 10,
              }}
              style={{
                gap: 20,
                paddingHorizontal: '2%',
                height: Dimensions.get('screen').height / 6,
              }}>
              {filteredBrandList.map((item, index) => (
                <CheckBox
                  filled={filterBrand === item}
                  key={index}
                  item={item}
                  index={index}
                  onPress={() => dispatch(setBrand(item))}
                />
              ))}
            </ScrollView>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: 'lightgray',
                marginVertical: '2%',
              }}
            />
          </View>
          <View
            style={{
              gap: 10,
            }}>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Montserrat-SemiBold',
                fontSize: 12,
              }}>
              Model
            </Text>
            {/* Search Bar */}
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderWidth: 2,
                  borderColor: COLORS.gray,
                  marginHorizontal: '4%',
                  borderRadius: 10,
                  height: 50,
                }}>
                <SearchIcon
                  fill={undefined}
                  width={undefined}
                  height={undefined}
                />
                <TextInput
                  placeholder="Search"
                  onChangeText={(text: string) => setModelSearchText(text)}
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
            </View>
            <ScrollView
              contentContainerStyle={{
                gap: 10,
              }}
              style={{
                gap: 20,
                paddingHorizontal: '2%',
                height: Dimensions.get('screen').height / 6,
              }}>
              {filteredModelList.map((item, index) => (
                <CheckBox
                  filled={filterModel === item}
                  key={index}
                  item={item}
                  index={index}
                  onPress={() => dispatch(setModel(item))}
                />
              ))}
            </ScrollView>
          </View>
        </ScrollView>

        {/* Apply Button */}
        {!keyboardIsOpen && (
          <View
            style={{
              height: '8%',
              width: '96%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => handleApply()}
              activeOpacity={0.8}
              style={{
                backgroundColor: COLORS.blue,
                width: '80%',
                height: '70%',
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 16,
                }}>
                Uygula
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </NativeModal>
  );
};

export default Modal;
