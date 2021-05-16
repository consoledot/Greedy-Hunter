import "./grid.style.scss";
import { Food } from "../../assets";
import { Monster } from "../../assets/";
import { connect } from "react-redux";
import { setMonsterIndex } from "../../redux/action";
const Grid = ({ value, monster, index }) => (
  <div className="grid" onClick={() => setMonsterIndex(index)}>
    {value && <Food />}
    {monster && <Monster className="monster" />}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setMonsterIndex: (number) => dispatch(setMonsterIndex(number)),
});
export default connect(null, mapDispatchToProps)(Grid);
