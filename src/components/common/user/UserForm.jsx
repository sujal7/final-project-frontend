import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './UserForm.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - The user form component for signin and signup.
 */
export default function UserForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  /**
   * Handles the submit event of the form.
   * @param {Object} event - The event object.
   */
  function submitHandler(event) {
    // Prevent the default action of the form.
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Stores the entered email and password in formData.
    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    // Calls the onSubmit prop function with the formData.
    props.onSubmit(formData);
  }

  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <h1>{props.type}</h1>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" required id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              required
              id="password"
              ref={passwordInputRef}
            />
          </div>

          <div className="error">
            {/* If the errorMessage prop is not empty, display the error message. */}
            {props.errorMessage && props.errorMessage}
          </div>

          <div className={classes.actions}>
            <button>{props.type}</button>
          </div>
        </form>
      </Card>
    </div>
  );
}
