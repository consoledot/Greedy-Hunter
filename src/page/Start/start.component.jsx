import "./start.style.scss";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { dotted, character } from "../../assets";
import { connect } from "react-redux";
import { setGrid } from "../../redux/action";

const Start = ({ setGrid }) => {
  const button = useRef();
  const history = useHistory();
  const [error, setError] = useState(true);
  const [grid, setGridNum] = useState("");
  const handleGridUpdate = (e) => {
    const { value } = e.target;
    if (value > 10 || value <= 0) {
      setError(true);
      button.current.disabled = true;
    } else {
      setError(false);
      button.current.disabled = false;
      setGridNum(value);
    }

    console.log(value);
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
            <input type="number" min="0" max="10" onChange={handleGridUpdate} />
          </div>
          <p
            className="error"
            style={{
              visibility: `${!error ? "hidden" : "visible"}`,
            }}
          >
            {" "}
            Grid must be less than or equal to 10
          </p>
          <button
            ref={button}
            onClick={() => {
              setGrid(grid);
              history.push("/game");
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
});
export default connect(null, mapDispatchToProps)(Start);
