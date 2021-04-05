import "./start.style.scss";
import { useHistory } from "react-router-dom";
import { dotted, character } from "../../assets";
import { connect } from "react-redux";

const Start = () => {
  const history = useHistory();
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
            <input type="number" min="0" max="10" />
          </div>
          <button
            onClick={() => {
              history.push("/game");
            }}
          >
            Start game
          </button>
        </div>
        <img src={dotted} alt="dotted-background"></img>
      </section>
    </div>
  );
};

export default Start;
