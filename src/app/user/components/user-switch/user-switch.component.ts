import {Component, Input} from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserState} from '../../store/users/users.reducer';

@Component({
  selector: 'app-user-switch',
  templateUrl: './user-switch.component.html',
  styleUrls: ['./user-switch.component.scss']
})
export class UserSwitchComponent {
  get userState(): UserState {
    return this._userState;
  }

  @Input() set userState(value: UserState) {
    if (value.users.length && (!this._userState || this._userState?.currentUserId !== value.currentUserId)) {
      this._userState = value;
      this.selectUser(value.currentUserId);
    }
  }

  private _userState: UserState;

  constructor(private userService: UserService) {
  }

  selectUser(id): void {
    this.userService.switchUser(id);
  }

}

