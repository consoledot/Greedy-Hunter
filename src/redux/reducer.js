const INITIAL_STATE = {
  grid: null,
  monsterIndex: null,
  fruitsArray: null,
  movements: [],
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
        movements: [
          parseInt(action.payload) - parseInt(state.grid),
          action.payload - 1,
          action.payload + 1,
          parseInt(action.payload) + parseInt(state.grid),
        ],
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
