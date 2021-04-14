import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Item} from '../models/item.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private httpService: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.httpService.get<Item[]>('./assets/item.mock.json').pipe(map(el => el['items']));
  }

}

