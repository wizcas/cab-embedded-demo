import { forwardRef, useImperativeHandle, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { useCAB } from "../hooks/useCAB";
import "./CABWidget.css";

export function CABWidget({ simple }) {
  const [token, setToken] = useState();
  const [getTokenTime, setGetTokenTime] = useState(Date.now());
  const { bridge, loading, error } = useCAB(
    {
      // Note that the origin must not be trailing with a slash
      // Otherwise it won't match the responses from the parent
      origin: "http://webapp.localhost",
      serviceId: "digital-ads",
      // In this demo, autoResize is disabled, for the parent container
      // manages the height.
      // autoResize: false,
      // debug: true,
    },
    (token) => {
      setToken(token);
      setGetTokenTime(Date.now());
    }
  );

  function checkCab() {
    if (!bridge) {
      console.error("CAB is not ready");
    }
    return !!bridge;
  }

  if (error) {
    console.error("embedded failed", error);
  }

  async function onGotoProfile(inNewTab) {
    if (checkCab()) {
      await bridge.dispatch({
        type: "NAVIGATE",
        payload: {
          page: "/account/profile",
          target: inNewTab ? "blank" : undefined,
          context: {
            backUrl: window.location.href,
          },
        },
      });
    }
  }

  async function onGotoFlow() {
    if (checkCab()) {
      await bridge.dispatch({
        type: "NAVIGATE",
        payload: {
          // If you want to open DA in the page with sidebar, set frame to 'main'
          frame: "flow",
          // Here goes the absolute URL of the target DA page
          url: "http://localhost:3001/page2",
          context: {
            backUrl: window.location.href,
          },
        },
      });
    }
  }

  async function onCreateTransaction() {
    await bridge.dispatch({
      type: "NAVIGATE",
      payload: {
        street: "demo test Street",
        city: "Los Angeles",
        unit: "1",
        state: "CA",
        zipCode: "90012",
      },
    });
  }

  async function onGetToken() {
    if (checkCab()) {
      setToken(
        await bridge.dispatch({
          type: "AUTHENTICATE",
        })
      );
      setGetTokenTime(Date.now());
    }
  }

  // Mock the time span of data loading to determine whether the embedded app
  // should be shown. It depends on the parent app to decide whether to watch
  // the readiness.
  // In our case, only the ad stats card will listen to the CONTENT_READY action,
  // and will be not be rendered before the data's ready.
  useEffect(() => {
    if (bridge && !error) {
      setTimeout(() => {
        bridge.dispatch({
          type: "CONTENT_READY",
        });
      }, 1000);
    }
  }, [bridge, error]);

  const content = simple ? (
    <span>CAB Loaded</span>
  ) : (
    <>
      <button onClick={() => onGotoProfile(false)}>
        Profile in current tab
      </button>
      <button onClick={() => onGotoProfile(true)}>Profile in new tab</button>

      <button onClick={onCreateTransaction}>Create new transaction</button>
      <button onClick={onGotoFlow}>To ads flow</button>
      <button onClick={onGetToken}>Get Token</button>
      <table>
        <tbody>
          <tr>
            <td className="label">Token</td>
            <td className="value">{token?.value || "N/A"}</td>
          </tr>
          <tr>
            <td className="label">Expire At</td>
            <td className="value">
              {token ? new Date(token.expireAt).toLocaleTimeString() : "N/A"}
            </td>
          </tr>
          <tr>
            <td className="label">Retrieved At</td>
            <td className="value">
              {new Date(getTokenTime).toLocaleTimeString()}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );

  return (
    <div className="cab">
      {loading ? <div className="loading">Loading CAB...</div> : content}
      {error ? <div className="error">Error: {error.message}</div> : null}
    </div>
  );
}
