import * as fromUsers from './users.reducer';
import {selectUserstate} from './users.selectors';

describe('Users Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUserstate({
      [fromUsers.usersFeatureKey]: {
        currentUserId: 1,
        users: []
      }
    });
    expect(result).toEqual({
      currentUserId: 1,
      users: []
    });
  });
});

