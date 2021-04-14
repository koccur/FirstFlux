import {createAction, props} from '@ngrx/store';
import {User} from '../../models/user.model';

const actionsPrefix = '[Users]';
export const loadUsers = createAction(`${actionsPrefix} Load Users`, props<{ users: User[] }>());
export const loadUserSuccess = createAction(`${actionsPrefix} Load Users Success`, props<{ users: User[] }>());
export const switchUser = createAction(`${actionsPrefix} Switch User`, props<{ id: number }>());
export const loadDefaultUser = createAction(`${actionsPrefix} load default`, props<{ id: number }>());
export const setCurrentUserID = createAction(`${actionsPrefix} setCurrentId`, props<{ id: number }>());




