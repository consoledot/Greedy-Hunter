export const setGrid = (number: number) => ({
  type: "SET_GRID",
  payload: number,
});
export const setMonsterIndex = (number: number) => ({
  type: "SET_MONSTER",
  payload: number,
});
export const setFruitsArray = (array: number[]) => ({
  type: "SET_FRUITS",
  payload: array,
});
export const setRemoveFruit = (index: number) => ({
  type: "SET_REMOVE_FRUIT",
  payload: index,
});
export const setMaxMoves = (number: number) => ({
  type: "SET_MAX_MOVES",
  payload: number,
});
export const setResult = (state: boolean) => ({
  type: "SET_RESULT",
  payload: state,
});
