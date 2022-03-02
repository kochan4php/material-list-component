import * as React from "react";
import List from "./pages/List";
import Detail from "./pages/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TambahMateri from "./pages/TambahMateri";
import EditMateri from "./pages/EditMateri";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          {/* <Route path="/detail/:id" component={Detail} /> */}
          <Route path="/detail" component={Detail} />
          {/* <Route path="/edit-materi/:id" component={EditMateri} /> */}
          <Route path="/edit-materi" component={EditMateri} />
          <Route path="/tambah-materi" component={TambahMateri} />
        </Switch>
      </div>
    </Router>
  );
}
