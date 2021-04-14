import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {User} from '../../../user/models/user.model';
import {UserService} from '../../../user/services/user.service';
import {Item} from '../../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, AfterViewInit {
  @Input() items$: Observable<Item[]>;
  @Output() addCollection = new EventEmitter();
  @Output() addElement = new EventEmitter();
  @Output() sort = new EventEmitter();
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store,
              private userService: UserService) {

  }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      'title': '',
      'content': '',
      'userId': 1,
    });
  }

  saveForm(): void {
    this.addElement.emit(this.addForm.getRawValue());
  }

  private setCurrentUserListener(): void {
    this.userService.getCurrentUser().pipe(filter((user: User) => !!user)).subscribe((res: User) => {
      this.addForm.get('userId').patchValue(res.id);
    });
  };

  ngAfterViewInit(): void {
    this.setCurrentUserListener();
  }
}
