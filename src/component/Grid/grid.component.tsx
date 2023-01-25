import "./grid.style.scss";
import { useEffect } from "react";
import { Food } from "../../assets";
import { Monster } from "../../assets/";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { setMonsterIndex, setRemoveFruit } from "../../redux/action";
interface GridsProps {
  value:boolean
  monster:boolean
  index:number
}

const Grid = ({ value, monster, index }:GridsProps) => {
  const { movements, monsterIndex } = useSelector(
    (state: RootStateOrAny) => state
  );
  const dispatch = useDispatch();
  const handleMovement = () => {
    if (movements.includes(index)) {
      dispatch(setMonsterIndex(index));
      if (value) {
        dispatch(setRemoveFruit(index));
      }
    }
  };
  return (
    <div className="grid" onClick={handleMovement}>
      {value && <Food />}
      {monster && <Monster className="monster" />}
    </div>
  );
};

export default Grid;
