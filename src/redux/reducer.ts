import { setMovements, updateFruits } from "./utils";
interface StateProps {
  grid: number;
  monsterIndex: number;
  fruitsArray: number[];
  movements: number[];
  movesCount: number;
  removeFruit: number[];
  start: boolean;
  won: boolean;
  maxMoves: number;
}
interface ActionPayload {
  type: string;
  payload: any;
}
const INITIAL_STATE: StateProps = {
  grid: 0,
  monsterIndex: 0,
  fruitsArray: [],
  movements: [],
  movesCount: -1,
  removeFruit: [],
  start: false,
  won: false,
  maxMoves: 0,
};

const reducer = (state = INITIAL_STATE, action: ActionPayload) => {
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
    case "SET_RESULT":
      return {
        ...state,
        start: false,
        won: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
