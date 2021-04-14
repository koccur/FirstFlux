import {Injectable} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import {Item} from '../../models/item.model';
import {ItemsService} from '../../services/items.service';
import {getItems} from './items.actions';

@Injectable()
export class ItemsEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    switchMap(() => {
      return this.itemsService.getItems();
    }),
    map((items: Item[]) => getItems({items})),
  ));

  constructor(
    private actions$: Actions,
    private itemsService: ItemsService
  ) {
  }

}
