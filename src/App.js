import List from "./component/List/List";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={List} />
        </Switch>
      </div>
    </Router>
  );
}
