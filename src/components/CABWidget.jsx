import { useState } from "react";
import { useCAB } from "../hooks/useCAB";
import "./CABWidget.css";

export function CABWidget() {
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
      autoResize: false,
      debug: true,
    },
    (token) => {
      setToken(token);
      setGetTokenTime(Date.now());
    }
  );

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

  async function onGetToken() {
    await bridge.dispatch({
      type: "AUTHENTICATE",
    });
    setGetTokenTime(Date.now());
  }

  return (
    <div className="cab">
      {loading ? (
        <div className="loading">Loading CAB...</div>
      ) : (
        <>
          <button onClick={onSend}>Redirect in parent</button>
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
                  {token
                    ? new Date(token.expireAt).toLocaleTimeString()
                    : "N/A"}
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
      )}
      {error ? <div className="error">Error: {error.message}</div> : null}
    </div>
  );
}
