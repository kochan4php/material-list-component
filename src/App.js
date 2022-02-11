import * as React from "react";
import List from "./component/ListMateri/List";
import Detail from "./component/DetailMateri/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}
