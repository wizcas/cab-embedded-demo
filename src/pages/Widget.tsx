import { useRef } from "react";

import { CABWidget } from "../components/CABWidget";

export function Widget() {
  const cabRef = useRef();
  return (
    <main className="v-container">
      <div className="w-full-content">
        <span>Widget</span>
      </div>
      <CABWidget simple />
    </main>
  );
}
