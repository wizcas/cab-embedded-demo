import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { SubPage } from "./pages/SubPage";

import { pageRoutes } from "./pages/routes";

import "./App.css";
import { Widget } from "./pages/Widget";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/page1" />
          </Route>
          {pageRoutes.map((route) => (
            <Route key={route.path} path={route.path}>
              <SubPage />
            </Route>
          ))}
          <Route key="widget" path="/widget">
            <Widget />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
