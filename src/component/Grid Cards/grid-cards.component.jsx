import "./grid-cards.style.scss";
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
        return <Grid key={i} value={randomArray[i] === 1 ? true : false} />;
      })}
    </div>
  );
};
export default Grids;
