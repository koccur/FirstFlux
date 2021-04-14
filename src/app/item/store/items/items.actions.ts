import {createAction, props} from '@ngrx/store';
import {Item} from '../../models/item.model';

export const addItem = createAction(`[Item] add item`, props<{ itemId }>());
export const addElement = createAction(`[Item] add item`, props<{ itemId }>());
export const removeItem = createAction(`[Item] remove item`, props<{ itemId }>());
export const getItems = createAction(`[Item] get item`, props<{ items: Item[] }>());

