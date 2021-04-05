import "./App.css";
import { Start, Game } from "./page";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
function App({ grid }) {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Start} />
        <Route
          path="/game"
          render={() => (grid ? <Game /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}
const mapStateToProps = (state) => ({
  grid: state.grid,
});
export default connect(mapStateToProps)(App);
