import "./grid.style.scss";
import { Food } from "../../assets";

const Grid = ({ value }) => <div className="grid">{value && <Food />}</div>;

export default Grid;
