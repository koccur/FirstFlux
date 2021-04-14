import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSwitchComponent} from './components/user-switch/user-switch.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [UserSwitchComponent],
  exports: [
    UserSwitchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UserModule {
}
