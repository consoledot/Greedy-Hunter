import { Action } from "redux";
import { updateFruits } from "./utils";
import { getMovements } from "../utils";
export interface StateProps {
  grid: number;
  monsterIndex: number;
  fruitsArray: number[];
  movements: number[];
  movesCount: number;
  removeFruit: (number | undefined)[];
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
type Reducer<S> = <A extends Action>(state: S, action: A) => S;
const reducer = (
  state: StateProps = INITIAL_STATE,
  action: ActionPayload
): StateProps => {
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
        movements: getMovements(action.payload, state.grid),
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
