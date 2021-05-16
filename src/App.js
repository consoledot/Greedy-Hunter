import "./App.css";
import { Start, Game } from "./page";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
function App({ monsterIndex }) {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Start} />
        <Route
          path="/game"
          render={() => (monsterIndex ? <Game /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  monsterIndex: state.monsterIndex,
});
export default connect(mapStateToProps)(App);
