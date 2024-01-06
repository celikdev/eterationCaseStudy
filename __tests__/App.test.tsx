import React from 'react';
import {describe, it, expect} from '@jest/globals';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '../src/components/SearchBar';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('SearchBar component', () => {
  it('dispatches setSearchText correctly when TextInput value changes', () => {
    const store = mockStore({
      itemList: {
        searchText: '',
      },
    });

    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );

    const inputElement = getByPlaceholderText('Search');

    fireEvent.changeText(inputElement, 'New Search Text');

    const actions = store.getActions();
    expect(actions).toEqual([
      {type: 'itemList/setSearchText', payload: 'New Search Text'},
    ]);
  });
});
