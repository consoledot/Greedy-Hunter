import logo from "./logo.svg";
import "./App.css";
import { Start, Game } from "./page";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/game" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
