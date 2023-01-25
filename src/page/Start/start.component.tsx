import "./start.style.scss";
import { useState, useRef, MutableRefObject } from "react";
import { useHistory } from "react-router-dom";
import { dotted, character } from "../../assets";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import {
  setGrid,
  setMonsterIndex,
  setFruitsArray,
  setMaxMoves,
} from "../../redux/action";
import { initializeMonster, generateRandomNumber } from "../../utils";
import useGame from "../../hooks/useGame";

const Start = () => {
  const button = useRef() as MutableRefObject<HTMLButtonElement>;
  const history = useHistory();
  const [error, setError] = useState(true);
  const [grid, setGridNum] = useState<number>(0);
  const { start, won } = useSelector((state: RootStateOrAny) => state);
  const dispatch = useDispatch();
  const {fruitsArray, monsterIndex} = useGame(grid)

  console.log(fruitsArray, monsterIndex)

  const handleGridUpdate = (e: any) => {
    const { value } = e.target;
    if (value >= 5 && value <= 12) {
      setError(false);
      button.current.disabled = false;
      setGridNum(value);
    } else {
      setError(true);
      button.current.disabled = true;
      console.log(value);
    }
  };

  //Game utilities
  const startGame = async () => {
    let randomNumber: number = 0;
    const gridSquare = grid * grid;
    const fruitsArray = new Array(gridSquare);
    for (let i = 0; i < grid; i++) {
      generateRandomNumber(gridSquare, fruitsArray, randomNumber);
    }
    const list = fruitsArray.entries();
    const emptyArray = [];
    for (let li of list) {
      if (li[1] === undefined) {
        emptyArray.push(li[0]);
      }
    }
    const monsterIndex = initializeMonster(gridSquare, emptyArray);

    dispatch(setGrid(grid));
    dispatch(setMaxMoves(Math.ceil((grid * grid) / 2)));
    dispatch(setFruitsArray(fruitsArray));
    dispatch(setMonsterIndex(monsterIndex));

    history.push("/game");
  };

  return (
    <div className="start">
      <section>
        <div className="image">
          <img src={dotted} alt="dotted-background"></img>
        </div>
        <div className="info-section">
          <div className="character">
            <img src={character} alt="Character" />
          </div>

          {start ? (
            <h3> Greedy Hunter</h3>
          ) : won ? (
            <h3>Bravo</h3>
          ) : (
            <h3>Game Over!</h3>
          )}

          <div className="instruction">
            {start ? (
              <p>
                The aim is to eat all the food in record time <br />
                Configure your game grid below 👇🏼{" "}
              </p>
            ) : won ? (
              <p>
                Time Spent: <span>98 seconds</span>
              </p>
            ) : (
              <>
                <p>
                  Total Food: <span>7/10</span>
                </p>
                <p>
                  Time Spent: <span>98 seconds</span>
                </p>
              </>
            )}
          </div>
          <div className="select">
            <p>Game Grid</p>
            <input type="number" min="5" max="12" onChange={handleGridUpdate} />
          </div>
          <p
            className="error"
            style={{
              visibility: `${!error ? "hidden" : "visible"}`,
            }}
          >
            {" "}
            Grid must be between a value between 5 and 12
          </p>
          <button ref={button} onClick={startGame} disabled={error}>
            Start game
          </button>
        </div>
        <img src={dotted} alt="dotted-background"></img>
      </section>
    </div>
  );
};

export default Start;
