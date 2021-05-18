import "./grid.style.scss";
import { Food } from "../../assets";
import { Monster } from "../../assets/";
import { connect } from "react-redux";
import { setMonsterIndex, setRemoveFruit } from "../../redux/action";
const Grid = ({
  value,
  monster,
  index,
  setMonsterIndex,
  movements,
  setRemoveFruit,
  movesCount,
  maxMoves,
}) => (
  <div
    className="grid"
    onClick={() => {
      if (movements.includes(index)) {
        setMonsterIndex(index);
        if (maxMoves === movesCount) {
          console.log("yass");
        }
        if (value) {
          setRemoveFruit(index);
        }
      }
    }}
  >
    {value && <Food />}
    {monster && <Monster className="monster" />}
  </div>
);

const mapStateToProps = (state) => ({
  movements: state.movements,
  maxMoves: state.maxMoves,
  movesCount: state.movesCount,
});

const mapDispatchToProps = (dispatch) => ({
  setMonsterIndex: (number) => dispatch(setMonsterIndex(number)),
  setRemoveFruit: (number) => dispatch(setRemoveFruit(number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Grid);
