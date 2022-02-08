import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function SignOut() {
  const dispatch = useDispatch();
  dispatch({ type: 'LOGOUT' });

  return (
    <h1 className="center">
      You have been signed out.
      <br />
      <Link to="/signin">Click Here </Link>to Sign In
      <br />
      OR
      <br />
      <Link to="/signup">Click Here </Link>to Sign Up
    </h1>
  );
}
