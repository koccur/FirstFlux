import {Item} from './item/models/item.model';
import {User} from './user/models/user.model';

export interface AppState {
  items: ReadonlyArray<Item>;
  collection: ReadonlyArray<number>;
  sortedItems: ReadonlyArray<Item>;
  users: ReadonlyArray<User>;
  currentUserId: number;
}
