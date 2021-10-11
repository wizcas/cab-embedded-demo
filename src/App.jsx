import { useEffect, useState, useRef } from "react";
import { useAsync } from "react-use";
import { EmbeddedApp } from "@uc/compass-app-bridge";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { value: bridge, loading, error } = useAsync(initCAB, []);

  if (error) {
    console.error("embedded failed", error);
  }

  function onSend() {
    console.log("send action to bridge");
    bridge.dispatch("ERROR", "a demo error message");
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
  const bridge = await EmbeddedApp.create({
    origin: "http://webapp.localhost/",
    serviceId: "digital-ads",
    logger: {
      messageSent: (message) => {
        console.log("embedded message sent", message);
      },
      messageReceived: (message) => {
        console.log("embedded message received", message);
      },
    },
  });
  console.log("bridge created", bridge);
  // FIXME: isReady is in the latest code but hasn't been included yet in the published package
  // if (bridge.isReady) {
  //   await bridge.isReady();
  // }
  return bridge;
}
