export const ROLES = {
  ANONYMOUS: 'anonymous',
  USER: 'user',
  ADMIN: 'admin',
};

const CHANGE_ROLE = 'CHANGE_ROLE';

const initialState = {
  current: ROLES.ANONYMOUS,
};

export const changeRole = role => ({
  type: CHANGE_ROLE,
  payload: { role },
});

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROLE:
      return { ...state, current: action.payload.role };

    default:
      return state;
  }
};