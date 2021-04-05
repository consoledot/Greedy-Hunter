import "./grid.style.scss";
import { Food } from "../../assets";
import { Monster } from "../../assets/";
const Grid = ({ value, monster }) => (
  <div className="grid">
    {value && <Food />}
    {monster && <Monster className="monster" />}
  </div>
);

export default Grid;
