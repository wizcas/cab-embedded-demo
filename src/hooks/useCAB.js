import { useRef, useEffect, useCallback } from "react";
import { useAsync } from "react-use";
import { EmbeddedApp } from "@uc/compass-app-bridge";

export function useCAB(config, tokenHandler) {
  const { value, loading, error } = useAsync(initCAB, []);
  const bridgeRef = useRef(value);
  bridgeRef.current = value;

  async function initCAB() {
    if (bridgeRef.current) return;
    try {
      console.group(
        "Demo embedded initialization",
        new Date().toLocaleTimeString()
      );

      const bridge = EmbeddedApp.create(config);
      await bridge.isReady();
      console.log("embedded bridge is ready", bridge);
      bridge.subscribe("AUTHENTICATE", onReceiveToken);
      const token = await bridge.dispatch({ type: "AUTHENTICATE" });
      console.log({ token });
      onReceiveToken(token);
      console.groupEnd();
      return bridge;
    } catch (e) {
      console.groupEnd();
      console.error("embedded bridge cannot be ready", e);
      throw e;
    }
  }

  const onReceiveToken = useCallback(
    (token) => {
      console.log("embedded app has received a token", token);
      tokenHandler?.(token);
    },
    [tokenHandler]
  );

  useEffect(() => {
    () => {
      bridgeRef.current?.destroy();
    };
  }, []);
  return {
    bridge: bridgeRef.current,
    loading,
    error,
  };
}
