import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h2> Welcome to the Dog Page of </h2>
      <nav className="navBar">
        <Link to="/Dog/Whiskey">Whiskey</Link>
        <Link to="/Dog/Perry"> Perry</Link>
        <Link to="/Dog/Duke"> Duke</Link>
      </nav>
    </div>
  );
}
