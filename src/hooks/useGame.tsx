import { useCallback, useMemo } from "react";
import { generateRandomNumber, initializeMonster } from "../utils";
const useGame = (grid: number) => {
  let randomNumber: number = 0;
  const gridSquare = grid * grid;
  const fruitsArray = new Array(gridSquare);
  const emptyArray: any[] = useMemo(()=>[],[]);
  const list = fruitsArray.entries();

  for (let i = 0; i < grid; i++) {
    generateRandomNumber(gridSquare, fruitsArray, randomNumber);
  }
  for (let li of list) {
    if (li[1] === undefined) {
      emptyArray.push(li[0]);
    }
  }
  const monsterIndex = useCallback(() => {
    initializeMonster(gridSquare, emptyArray);
  }, [emptyArray, gridSquare]);
  return { fruitsArray, monsterIndex };
};
export default useGame;
