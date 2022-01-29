const initialState = {
  user: undefined
};

const loginReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'login': {
      const payload = action.payload
      return {
        ...state,
        ...payload,
      }
    }

    default: 
      return state;
  }
}

export default loginReducer;
