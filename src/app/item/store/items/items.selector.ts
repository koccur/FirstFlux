import {createSelector, createFeatureSelector} from '@ngrx/store';
import {Item} from '../../models/item.model';
import {AppState} from '../../../app.state';

export const selectItems = createSelector(
  (state: AppState) => state.items,
  (items: Item[]) => items
);



export const selectItemsForUserState = (state: AppState) => {
  return state.users['currentUserId'];
};

export const selectItemsForUser = createSelector(selectItems,
  selectItemsForUserState,
  (items: Item[], currentUserId: number) => {
    const newArray = JSON.parse(JSON.stringify(items));
    if (currentUserId) {
      return newArray.filter((item: Item) => item.userId === +currentUserId);
    }
    return newArray;
  }
);


export const selectSortedItemsState = createFeatureSelector<AppState, ReadonlyArray<Item[]>>('sortedItems');

export const selectSortedItems = createSelector(
  selectItemsForUser,
  (items: Item[]) => {
    const newArray = JSON.parse(JSON.stringify(items));
    return newArray.sort((a: Item, b: Item) => a.title.localeCompare(b.title));
  }
);




export const selectCollectionState = createFeatureSelector<AppState, ReadonlyArray<number>>('collection');

export const selectItemCollection = createSelector(selectItems,
  selectCollectionState,
  (items: Array<Item>, collection: Array<number>) => {
    return collection.map((id: number) => items.find((item: Item) => item.id === id));
  }
);
