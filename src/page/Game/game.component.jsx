import "./game.style.scss";
import { background } from "../../assets";
import Grids from "../../component/Grid Cards/grid-cards.component";
import { Life } from "../../assets";
import { connect } from "react-redux";

const Game = ({ grid }) => (
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
        <p>Maximum moves: {Math.ceil((grid * grid) / 2)}</p>
        <p>Total moves: 0</p>
      </div>
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  grid: state.grid,
});
export default connect(mapStateToProps)(Game);
