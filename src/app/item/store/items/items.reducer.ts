import {createReducer, on} from '@ngrx/store';
import {Item} from '../../models/item.model';

import {addElement, getItems} from './items.actions';

export const initialState: ReadonlyArray<Item> = [];
export const itemReducer = createReducer(
  initialState,
  on(getItems, (state, {items}) => [...items]),
  on(addElement, (state, {itemId}) => {
    if (state.find(el => el.title === itemId.title && el.userId === itemId.userId)) {
      return state;
    }
    return [...state, itemId];
  })
);
