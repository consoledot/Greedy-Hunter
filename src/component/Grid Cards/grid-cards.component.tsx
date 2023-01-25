import "./grid-cards.style.scss";
import Grid from "../Grid/grid.component";
import { useSelector, RootStateOrAny } from "react-redux";

const Grids = ({ grid }: { grid: number }) => {
  const { fruitsArray, monsterIndex } = useSelector(
    (state: RootStateOrAny) => state
  );
  return (
    <div
      className="grids"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid}, 1fr)`,
        gridTemplateRows: `repeat(${grid}, 1fr)`,
      }}
    >
      {[...Array(grid * grid).keys()].map((_, i) => {
        return (
          <Grid
            key={i}
            index={i}
            value={fruitsArray[i] ? true : false}
            monster={monsterIndex === i ? true : false}
          />
        );
      })}
    </div>
  );
};

export default Grids;
