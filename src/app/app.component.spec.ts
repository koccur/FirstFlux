import {HttpClientTestingModule} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {AppComponent} from './app.component';
import {AppState} from './app.state';
import {ItemComponent} from './item/components/item/item.component';
import {UserSwitchComponent} from './user/components/user-switch/user-switch.component';
import {selectAllUsers} from './user/store/users/users.selectors';

describe('AppComponent', () => {
  let mockUserSelector;
  let store: MockStore<AppState>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        StoreModule.forRoot({})
      ],
      declarations: [
        AppComponent,
        UserSwitchComponent,
        ItemComponent
      ],
      providers: [
        provideMockStore()
      ]
    });
    store = TestBed.inject(MockStore);
    mockUserSelector = store.overrideSelector(selectAllUsers, [
      {
        id: 1,
        name: 'test'
      }
    ]);
    spyOn(store, 'dispatch').and.callFake(() => {
    });
    store.refreshState();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular--interview-task'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular--interview-task');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('angular--interview-task app is running!');
  });
});
