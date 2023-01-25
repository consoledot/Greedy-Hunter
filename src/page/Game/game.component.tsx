import "./game.style.scss";
import { useEffect } from "react";
import { background } from "../../assets";
import Grids from "../../component/Grid Cards/grid-cards.component";
import { Life } from "../../assets";
import { setResult } from "../../redux/action";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";

const Game = () => {
  const { grid, movesCount, maxMoves, fruitsArray, start } = useSelector(
    (state: RootStateOrAny) => state
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (fruitsArray.every((t: number) => t === undefined)) {
      setResult(true);
    }
    if (maxMoves === movesCount) {
      setResult(false);
      // alert("LKJH")
    }
  }, [movesCount, fruitsArray]);
  return (
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
  );
};

export default Game;
