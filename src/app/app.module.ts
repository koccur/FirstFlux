import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {ItemModule} from './item/item.module';
import {ItemsEffects} from './item/store/items/items.effects';
import {itemReducer} from './item/store/items/items.reducer';
import {UsersEffects} from './user/store/users/users.effects';
import {UserModule} from './user/user.module';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from './user/store/users/users.reducer';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UserModule,
    ItemModule,
    StoreModule.forRoot({users: reducer, items: itemReducer}),
    // EffectsModule.forRoot([UsersEffects, ItemsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
