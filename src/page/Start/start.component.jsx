import "./start.style.scss";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { dotted, character } from "../../assets";
import { connect } from "react-redux";
import { setGrid, setMonsterIndex, setFruitsArray } from "../../redux/action";

const Start = ({ setGrid, setMonsterIndex, setFruitsArray }) => {
  const button = useRef();
  const history = useHistory();
  const [error, setError] = useState(true);
  const [grid, setGridNum] = useState("");

  const handleGridUpdate = (e) => {
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
    let randomNumber = null;
    const gridSquare = grid * grid;
    const fruitsArray = new Array(gridSquare);
    function generateRandomNumber(num, array, prev) {
      const random = Math.floor(Math.random() * num);
      if (random !== prev) {
        prev = random;
        return (array[random] = 1);
      }
      return generateRandomNumber(num, array, prev);
    }
    const setMonster = (num, array) => {
      const random = Math.floor(Math.random() * num);
      if (array.includes(random)) {
        return random;
      }
      return setMonster(num, array);
    };
    for (let i = 0; i < grid; i++) {
      await generateRandomNumber(gridSquare, fruitsArray, randomNumber);
    }
    const list = fruitsArray.entries();
    const emptyArray = [];
    for (let li of list) {
      if (li[1] === undefined) {
        emptyArray.push(li[0]);
      }
    }
    const monsterIndex = await setMonster(gridSquare, emptyArray);

    setGrid(grid);
    setFruitsArray(fruitsArray);
    setMonsterIndex(monsterIndex);
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
          <h3>Greedy Hunter</h3>
          <div className="instruction">
            <p>
              The aim is to eat all the food in record time <br />
              Configure your game grid below 👇🏼{" "}
            </p>
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
          <button
            ref={button}
            onClick={() => {
              startGame();
            }}
            disabled={error ? true : false}
          >
            Start game
          </button>
        </div>
        <img src={dotted} alt="dotted-background"></img>
      </section>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setGrid: (number) => dispatch(setGrid(number)),
  setFruitsArray: (array) => dispatch(setFruitsArray(array)),
  setMonsterIndex: (number) => dispatch(setMonsterIndex(number)),
});
export default connect(null, mapDispatchToProps)(Start);
