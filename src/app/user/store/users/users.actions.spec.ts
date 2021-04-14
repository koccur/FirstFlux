import * as fromUsers from './users.actions';

describe('loadUsers', () => {
  it('should return an action', () => {
    expect(fromUsers.loadUsers(null).type).toBe('[Users] Load Users');
  });
});
