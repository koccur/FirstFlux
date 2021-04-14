import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {Item} from './item/models/item.model';
import {ItemsService} from './item/services/items.service';
import {addElement, addItem, getItems, removeItem} from './item/store/items/items.actions';
import {selectItemCollection, selectItemsForUser, selectSortedItems} from './item/store/items/items.selector';
import {User} from './user/models/user.model';
import {UserApiService} from './user/services/user-api.service';
import {UserService} from './user/services/user.service';
import {loadUsers} from './user/store/users/users.actions';
import {selectAllUsers} from './user/store/users/users.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular--interview-task';
  items$ = this.store.pipe(select(selectItemsForUser));
  itemCollection$ = this.store.pipe(select(selectItemCollection));
  usersState$ = this.store.pipe(select(selectAllUsers));

  constructor(private userApiService: UserApiService,
              private itemService: ItemsService,
              private userService: UserService,
              // todo: work with effects
              // private itemEffects: ItemsEffects,
              // private userEffects: UsersEffects,
              private store: Store) {
  }

  ngOnInit(): void {

    // this.itemEffects.loadItems$.subscribe(res => {
    //   debugger;
    // });
    //
    // this.userEffects.loadUsers$.subscribe(res=>{
    //   debugger;
    // });

    this.itemService.getItems().subscribe((items: Item[]) => {
      this.store.dispatch(getItems({items}));
    });

    this.userApiService.getUsers().subscribe((users: User[]) => {
      this.store.dispatch(loadUsers({users}));
    });
  }

  onAddCollection(itemId): void {
    this.store.dispatch(addItem({itemId}));
  }

  onRemove(itemId): void {
    this.store.dispatch(removeItem({itemId}));
  }

  onSort(): void {
    this.items$ = this.store.pipe(select(selectSortedItems));
  }

  onAddElement(itemId): void {
    this.store.dispatch(addElement({itemId}));
  }

  getCurrentUser(): Observable<User> {
    return this.userService.getCurrentUser().pipe(filter(v => !!v));
  }
}

