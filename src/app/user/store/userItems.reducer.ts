import {createReducer, on} from '@ngrx/store';
import {UserItem} from '../list/list.component';
import * as UserItemActions from './userItems.actions';

export interface UserItemState {
  userItems: { [key: number]: UserItem };

}

export const initialUserState: ReadonlyArray<UserItem> = [];

export const userItemReducer = createReducer(
  initialUserState,

  on(UserItemActions.getUserItem, (state, {userItems}) => [...userItems]),
  on(UserItemActions.addUserItem, (state, {itemId}) => {
    if (state.indexOf(itemId) > -1) {
      return state;
    }
    return [...state, itemId];
  }),
  on(UserItemActions.removeUserItem, (state, {itemId}) => state.filter((id) => id !== itemId)),
  on(UserItemActions.sortUserItem, (state, {userItems}) => ({
    ...state,
    userItems
  }))
       )
;
