import { NavLink } from "react-router";
import type { RouteConfig } from "../../routes";
import "./Navbar.css";

export interface NavbarProps {
  routes: RouteConfig[];
}

export default function Navbar({ routes }: NavbarProps) {
  return (
    <nav>
      <ul>
        {routes.map(({ path, title }) => (
          <li key={path}>
            <NavLink to={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
