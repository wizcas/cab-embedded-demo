import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Menu } from "./components/Menu";
import { SubPage } from "./components/SubPage";

import logo from "./logo.svg";
import "./App.css";
import { CABWidget } from "./components/CABWidget";

const routes = [
  {
    path: "/page1",
    title: "Page 1",
  },
  {
    path: "/page2",
    title: "Page 2",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Menu routes={routes} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/page1" />
          </Route>
          {routes.map((route) => (
            <Route key={route.path} path={route.path}>
              <SubPage />
            </Route>
          ))}
        </Switch>
      </Router>
      <CABWidget />
    </div>
  );
}

export default App;
