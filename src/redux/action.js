export const setGrid = (number) => ({
  type: "SET_GRID",
  payload: number,
});
export const setMonsterIndex = (number) => ({
  type: "SET_MONSTER",
  payload: number,
});
export const setFruitsArray = (array) => ({
  type: "SET_FRUITS",
  payload: array,
});
export const setRemoveFruit = (index) => ({
  type: "SET_REMOVE_FRUIT",
  payload: index,
});
