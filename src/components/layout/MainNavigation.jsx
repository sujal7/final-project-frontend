import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// This is component specific style which only applies for this component.
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
  const isAuth = useSelector((state) => state.isAuth);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Contacts Manager</div>
      <nav>
        <ul>
          {isAuth ? (
            <ul>
              <li>
                <Link to="/contacts">Contacts</Link>
              </li>
              <li>
                <Link to="/add-contacts">Add Contacts</Link>
              </li>
              <li>
                <Link to="/signout">Sign Out</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </header>
  );
}
