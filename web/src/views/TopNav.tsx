import { Link } from "react-router-dom";
import { routes } from "../routes";

export function TopNav() {
  <nav>
    <ul>
      <li>
        <Link to={routes.home}>Home</Link>
      </li>
      <li>
        <Link to={routes.submit}>Submit</Link>
      </li>
    </ul>
  </nav>;
}
