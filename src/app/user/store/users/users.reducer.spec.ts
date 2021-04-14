import {TestBed} from '@angular/core/testing';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {reducer, initialState} from './users.reducer';

describe('Users Reducer', () => {
  let store: MockStore;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState}),
      ]
    });

    store = TestBed.inject(MockStore);
  });

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });
})
;

