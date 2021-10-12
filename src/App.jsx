import { useAsync } from "react-use";
import { EmbeddedApp } from "@uc/compass-app-bridge";
import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

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
    await bridge.dispatch({ type: "ERROR", payload: "a demo error message" });
    console.groupEnd();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {loading ? (
        <div className="loading">Loading CAB...</div>
      ) : (
        <button onClick={onSend}>Send action to parent</button>
      )}
      {error ? <div className="error">Error: {error.message}</div> : null}
    </div>
  );
}

export default App;

async function initCAB() {
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
  try {
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
