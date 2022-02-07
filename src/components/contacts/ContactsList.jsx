import React from 'react';

import classes from './ContactsList.module.css';
import ContactItem from './ContactItem';

export default function ContactsList(props) {
  return (
    <ul className={classes.list}>
      {props.contacts.map((contact) => (
        <ContactItem
          key={contact._id}
          id={contact._id}
          name={contact.name}
          photo={contact.photo}
          mobileNumber={contact.phone.mobileNumber}
          workNumber={contact.phone.workNumber}
          homeNumber={contact.phone.homeNumber}
          address={contact.address}
          email={contact.email}
        />
      ))}
    </ul>
  );
}
