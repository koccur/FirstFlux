import {createReducer, on} from '@ngrx/store';
import * as UsersActions from './users.actions';

import {User} from '../../models/user.model';

export const usersFeatureKey = 'users';

export interface UserState {
  users: User[];
  currentUserId?: number;
}

export const initialState: UserState = {
  currentUserId: 1,
  users: []
};

export const reducer = createReducer(
  initialState,

  on(UsersActions.switchUser, (state, {id}) => ({
    ...state,
    currentUserId: id,
  })),

  on(UsersActions.loadUsers, (state, {users}) => ({
    ...state, users
  }))
);

