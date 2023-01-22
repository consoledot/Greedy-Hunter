import { setMovements, updateFruits } from "./utils";
const INITIAL_STATE = {
  grid: null,
  monsterIndex: null,
  fruitsArray: null,
  movements: [],
  movesCount: -1,
  removeFruit: null,
  start: true,
  won: true,
  maxMoves: null,
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
        movements: setMovements(action.payload, state.grid),
        movesCount: state.movesCount + 1,
      };
    case "SET_FRUITS":
      return {
        ...state,
        fruitsArray: action.payload,
      };
    case "SET_REMOVE_FRUIT":
      return {
        ...state,
        removeFruit: updateFruits(state.fruitsArray, action.payload),
      };
    case "SET_MAX_MOVES":
      return {
        ...state,
        maxMoves: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
