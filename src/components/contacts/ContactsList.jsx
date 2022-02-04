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
          phone={contact.phone}
          address={contact.address}
          email={contact.email}
        />
      ))}
    </ul>
  );
}
