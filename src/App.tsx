import "./App.css";
import { useEffect, useState } from "react";
import { Start, Game } from "./page";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector, RootStateOrAny } from "react-redux";
function App() {
  const history = useHistory();
  const { start, monsterIndex, grid } = useSelector(
    (state: RootStateOrAny) => state
  );

  useEffect(() => {
    if (!grid) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid]);
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
