import "./game.style.scss";
import { background } from "../../assets";
import Grids from "../../component/Grid Cards/grid-cards.component";
import { Life } from "../../assets";

const Game = () => (
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
        <p>Grid 10 x 10</p>
        <Life />
        <p>Time Spent: 00:48s</p>
      </div>
      <Grids grid={10} />
      <div className="bottom">
        <p>Maximum moves: 100</p>
        <p>Total moves: 12</p>
      </div>
    </div>
  </div>
);

export default Game;
