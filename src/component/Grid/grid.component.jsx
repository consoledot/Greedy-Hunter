import "./grid.style.scss";
import { Food } from "../../assets";
import { Monster } from "../../assets/";
import {  useDispatch, useSelector } from "react-redux";
import { setMonsterIndex, setRemoveFruit } from "../../redux/action";
const Grid = ({value,monster,index,}) => {
  const {movements, maxMoves, movesCount} = useSelector(state=> state)
  const dispatch = useDispatch()
  return(
  <div
    className="grid"
    onClick={() => {
      if (movements.includes(index)) {
        dispatch(setMonsterIndex(index));
        if (maxMoves === movesCount) {
          console.log("yass");
        }
        if (value) {
          dispatch(setRemoveFruit(index));
        }
      }
    }}
  >
    {value && <Food />}
    {monster && <Monster className="monster" />}
  </div>
)};


export default Grid;
