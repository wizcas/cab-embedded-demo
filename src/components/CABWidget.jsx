import { useCAB } from "../hooks/useCAB";
import "./CABWidget.css";

export function CABWidget() {
  const { bridge, loading, error } = useCAB({
    // Note that the origin must not be trailing with a slash
    // Otherwise it won't match the responses from the parent
    origin: "http://webapp.localhost",
    serviceId: "digital-ads",
    // In this demo, autoResize is disabled, for the parent container
    // manages the height.
    autoResize: false,
    debug: true,
  });

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
    <div className="cab">
      {loading ? (
        <div className="loading">Loading CAB...</div>
      ) : (
        <button onClick={onSend}>Redirect in parent</button>
      )}
      {error ? <div className="error">Error: {error.message}</div> : null}
    </div>
  );
}
