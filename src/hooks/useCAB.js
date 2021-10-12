import { useRef, useEffect } from "react";
import { useAsync } from "react-use";
import { EmbeddedApp } from "@uc/compass-app-bridge";

export function useCAB(config) {
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
