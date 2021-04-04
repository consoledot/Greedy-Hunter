import "./grid-cards.style.scss";
import Grid from "../Grid/grid.component";

const Grids = ({ grid }) => (
  <div
    className="grids"
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${grid}, 1fr)`,
      gridTemplateRows: `repeat(${grid}, 1fr)`,
    }}
  >
    {[...Array(grid * grid).keys()].map((grid, i) => (
      <Grid key={i} />
    ))}
  </div>
);
export default Grids;
