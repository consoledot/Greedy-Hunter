import "./grid-cards.style.scss";
import Grid from "../Grid/grid.component";
import { connect } from "react-redux";

const Grids = ({ grid, fruitsArray, monsterIndex }) => {
  return (
    <div
      className="grids"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid}, 1fr)`,
        gridTemplateRows: `repeat(${grid}, 1fr)`,
      }}
    >
      {[...Array(grid * grid).keys()].map((grid, i) => {
        Math.random();
        return (
          <Grid
            key={i}
            index={i}
            value={fruitsArray[i] === 1 ? true : false}
            monster={monsterIndex === i ? true : false}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = (state) => ({
  monsterIndex: state.monsterIndex,
  fruitsArray: state.fruitsArray,
});

export default connect(mapStateToProps)(Grids);
