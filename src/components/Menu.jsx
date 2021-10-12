import { Link, useLocation } from "react-router-dom";
import "./Menu.css";

export function Menu({ routes }) {
  const { pathname } = useLocation();
  return (
    <nav>
      <ul>
        {routes.map((route) => {
          const isActive = route.path === pathname;
          const className = isActive ? "active" : "";
          return (
            <li key={route.path} className={className}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
