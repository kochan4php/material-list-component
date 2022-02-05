import List from "./component/ListMateri/List";
// import Filter from "./component/Filter/Filter";
import Detail from "./component/DetailMateri/Detail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
          {/* <Route path="/" component={Filter} /> */}
          <Route path="/detail" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}
