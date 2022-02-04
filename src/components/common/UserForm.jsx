import { useRef } from 'react';

import classes from './UserForm.module.css';

export default function UserForm(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };
    props.onAddMeetup(formData);
  }

  return (
    <div>
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

        <div className={classes.actions}>
          <button>{props.type}</button>
        </div>
      </form>
    </div>
  );
}
