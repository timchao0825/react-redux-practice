const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOGIN':
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
