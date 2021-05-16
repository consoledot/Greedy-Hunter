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
}) => (
  <div
    className="grid"
    onClick={() => {
      if (movements.includes(index)) {
        setMonsterIndex(index);
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
});

const mapDispatchToProps = (dispatch) => ({
  setMonsterIndex: (number) => dispatch(setMonsterIndex(number)),
  setRemoveFruit: (number) => dispatch(setRemoveFruit(number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Grid);
