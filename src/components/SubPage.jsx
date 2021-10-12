import { useLocation } from "react-router";
import "./SubPage.css";

export function SubPage() {
  const location = useLocation();
  return <main>I'm on {location.pathname}</main>;
}
