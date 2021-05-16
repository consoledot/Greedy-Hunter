import "./grid.style.scss";
import { Food } from "../../assets";
import { Monster } from "../../assets/";
import { connect } from "react-redux";
import { setMonsterIndex } from "../../redux/action";
const Grid = ({ value, monster, index, setMonsterIndex, movements }) => (
  <div
    className="grid"
    onClick={() => {
      if (movements.includes(index)) {
        setMonsterIndex(index);
      }
      console.log(movements);
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
});
export default connect(mapStateToProps, mapDispatchToProps)(Grid);
