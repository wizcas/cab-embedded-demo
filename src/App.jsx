import { useEffect } from "react";
import { useAsync } from "react-use";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { EmbeddedApp } from "@uc/compass-app-bridge";
import { Menu } from "./components/Menu";
import { SubPage } from "./components/SubPage";

import logo from "./logo.svg";
import "./App.css";

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
  const { value: bridge, loading, error } = useAsync(initCAB, []);

  useEffect(() => {
    () => bridge.destroy();
  }, []);

  if (error) {
    console.error("embedded failed", error);
  }

  async function onSend() {
    console.groupCollapsed(
      "Sending an action from embedded",
      new Date().toLocaleTimeString()
    );
    await bridge.dispatch({
      type: "ERROR",
      payload: JSON.stringify({
        target: "pipelines.redirection-demo",
        context: {
          url: window.location.href,
        },
      }),
    });
    console.groupEnd();
  }

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
      {loading ? (
        <div className="loading">Loading CAB...</div>
      ) : (
        <button onClick={onSend}>Redirect in parent</button>
      )}
      {error ? <div className="error">Error: {error.message}</div> : null}
    </div>
  );
}

export default App;

async function initCAB() {
  try {
    console.groupCollapsed(
      "Demo embedded initialization",
      new Date().toLocaleTimeString()
    );
    const bridge = EmbeddedApp.create({
      origin: "http://webapp.localhost",
      serviceId: "digital-ads",
      // In this demo, autoResize is disabled, for the parent container
      // manages the height.
      autoResize: false,
      debug: true,
    });
    console.log("embedded bridge created", bridge);
    await bridge.isReady();
    console.log("embedded bridge is ready", bridge);
    return bridge;
  } catch (e) {
    console.error("embedded bridge cannot be ready", e);
    throw e;
  } finally {
    console.groupEnd();
  }
}
