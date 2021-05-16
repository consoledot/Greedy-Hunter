const INITIAL_STATE = {
  grid: null,
  monsterIndex: null,
  fruitsArray: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_GRID":
      return {
        ...state,
        grid: action.payload,
      };
    case "SET_MONSTER":
      return {
        ...state,
        monsterIndex: action.payload,
      };
    case "SET_FRUITS":
      return {
        ...state,
        fruitsArray: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
