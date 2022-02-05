import { useRef } from 'react';

import Card from '../common/ui/Card';

import classes from './AddContactForm.module.css';

export default function AddContactForm(props) {
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredContact = phoneInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const formData = {
      name: enteredName,
      address: enteredAddress,
      phone: parseInt(enteredContact),
      email: enteredEmail,
    };

    if (props.isEdit) {
      props.onEditContacts(formData);
    } else {
      props.onAddContacts(formData);
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Contact</label>
          <input type="number" required id="phone" ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Contact</button>
        </div>
      </form>
    </Card>
  );
}
