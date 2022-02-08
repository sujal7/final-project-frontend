import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Card from '../common/ui/Card';
import classes from './AddContactForm.module.css';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns {JSX.Element} - The add contact form component.
 */
export default function AddContactForm(props) {
  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const mobileNumberInputRef = useRef();
  const workNumberInputRef = useRef();
  const homeNumberInputRef = useRef();
  const emailInputRef = useRef();
  const location = useLocation();

  /**
   * Handles the submit event of the form.
   * @param {Object} event - The event object.
   */
  function submitHandler(event) {
    event.preventDefault();
    const file = event.target[1].files[0];
    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredMobileNumber = mobileNumberInputRef.current.value;
    const enteredWorkNumber = workNumberInputRef.current.value;
    const enteredHomeNumber = homeNumberInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    /**
     * Stores the contact details in formData.
     */
    const formData = {
      name: enteredName,
      address: enteredAddress,
      mobileNumber: parseInt(enteredMobileNumber),
      workNumber: parseInt(enteredWorkNumber),
      homeNumber: parseInt(enteredHomeNumber),
      email: enteredEmail,
    };

    /* Calls the onEditContacts prop function with the formData if requested from edit
       else it calls the onAddContacts prop function */
    if (props.isEdit) {
      props.onEditContacts(formData, file);
    } else {
      props.onAddContacts(formData, file);
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input
            type="text"
            required
            id="name"
            ref={nameInputRef}
            defaultValue={props.isEdit ? location.state.name : ''}
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="photo">
            Photo <span>*</span>
          </label>
          <input
            type="file"
            required
            id="photo"
            accept="image/png, image/jpeg"
          />
        </div>

        <div className={classes.control}>
          <label htmlFor="address">
            Address <span>*</span>
          </label>
          <input
            type="text"
            required
            id="address"
            ref={addressInputRef}
            defaultValue={props.isEdit ? location.state.address : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="mobileNumber">
            Mobile Number <span>*</span>
          </label>
          <input
            type="number"
            required
            id="mobileNumber"
            ref={mobileNumberInputRef}
            defaultValue={props.isEdit ? location.state.mobileNumber : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="workNumber">Work Number</label>
          <input
            type="number"
            id="workNumber"
            ref={workNumberInputRef}
            defaultValue={props.isEdit ? location.state.workNumber : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="homeNumber">Home Number</label>
          <input
            type="number"
            id="homeNumber"
            ref={homeNumberInputRef}
            defaultValue={props.isEdit ? location.state.homeNumber : ''}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">
            Email <span>*</span>
          </label>
          <input
            type="email"
            required
            id="email"
            ref={emailInputRef}
            defaultValue={props.isEdit ? location.state.email : ''}
          />
        </div>
        <div className={classes.actions}>
          {props.isEdit ? (
            <button>Edit Contact</button>
          ) : (
            <button>Add Contact</button>
          )}
        </div>
      </form>
    </Card>
  );
}
