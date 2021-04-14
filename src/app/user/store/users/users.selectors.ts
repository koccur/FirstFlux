import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../../app.state';
import {User} from '../../models/user.model';
import * as fromUsers from './users.reducer';
import {UserState} from './users.reducer';

export const selectAllUsers = createSelector(
  (state: AppState) => state.users,
  (users: User[]) => users
);


export const selectUserstate = createFeatureSelector<fromUsers.UserState>(
  fromUsers.usersFeatureKey
);

export const selectCurrentUserState = createFeatureSelector<UserState>('users');

export const selectCurrentUser = createSelector(
  selectCurrentUserState,
  state => {
    return state.users[state.currentUserId - 1];
  }
);

