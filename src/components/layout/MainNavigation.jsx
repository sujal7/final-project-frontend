import { Link } from 'react-router-dom';

// This is component specific style which only applies for this component.
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Contacts Manager</div>
      <nav>
        <ul>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
