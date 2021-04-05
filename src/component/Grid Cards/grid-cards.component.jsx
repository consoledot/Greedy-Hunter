import "./grid-cards.style.scss";
import { useEffect } from "react";
import Grid from "../Grid/grid.component";

const Grids = ({ grid }) => {
  let randomNumber = 0;
  const gridSquare = grid * grid;
  const randomArray = new Array(gridSquare);
  function generateRandomNumber(num, array, prev) {
    const random = Math.floor(Math.random() * num);
    if (random !== prev) {
      prev = random;
      return (array[random] = 1);
    }
    return generateRandomNumber(num, array, prev);
  }
  for (let i = 0; i < grid; i++) {
    generateRandomNumber(gridSquare, randomArray, randomNumber);
  }
  console.log(randomArray);
  const list = randomArray.entries();
  const emptyArray = [];
  for (let li of list) {
    if (li[1] === undefined) {
      emptyArray.push(li[0]);
    }
  }
  function setMonster(num, array) {
    const random = Math.floor(Math.random() * num);
    if (array.includes(random)) {
      return random;
    }
    return setMonster(num, array);
  }
  console.log(setMonster(gridSquare, emptyArray));
  const monsterNumber = setMonster(gridSquare, emptyArray);
  return (
    <div
      className="grids"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid}, 1fr)`,
        gridTemplateRows: `repeat(${grid}, 1fr)`,
      }}
    >
      {[...Array(gridSquare).keys()].map((grid, i) => {
        Math.random();
        return (
          <Grid
            key={i}
            value={randomArray[i] === 1 ? true : false}
            monster={monsterNumber === i ? true : false}
          />
        );
      })}
    </div>
  );
};
export default Grids;
