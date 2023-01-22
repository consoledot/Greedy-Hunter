import "./game.style.scss";
import { background } from "../../assets";
import Grids from "../../component/Grid Cards/grid-cards.component";
import { Life } from "../../assets";
import {  useDispatch, useSelector } from "react-redux";

const Game = () => {
  const {grid, movesCount, maxMoves} = useSelector(state=> state)
  return(
  <div
    className="game"
    style={{
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}
  >
    <div className="board">
      <div className="top">
        <p>{`Grid ${grid} x ${grid}`}</p>
        <Life />
        <p>Time Spent: 00:00s</p>
      </div>
      <Grids grid={grid} />
      <div className="bottom">
        <p>Maximum moves: {maxMoves}</p>
        <p>Total moves: {movesCount}</p>
      </div>
    </div>
  </div>
)};

export default Game;
