import {createAction, props} from '@ngrx/store';
import {UserItem} from '../list/list.component';

const actionsPrefix = '[UserItems]';
export const addUserItem = createAction(`${actionsPrefix} add item`, props<{ itemId }>());
export const removeUserItem = createAction(`${actionsPrefix} remove item`, props<{ itemId }>());
export const getUserItem = createAction(`${actionsPrefix} get items`, props<{ userItems: UserItem[] }>());
export const sortUserItem = createAction(`${actionsPrefix} sort item`, props<{ userItems: UserItem[] }>());
