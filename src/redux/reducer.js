const INITIAL_STATE = {
  grid: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GRID":
      return {
        ...state,
        grid: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
