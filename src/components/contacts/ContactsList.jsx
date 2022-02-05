import React from 'react';

import classes from './ContactsList.module.css';
import ContactItem from './ContactItem';
import { useNavigate } from 'react-router-dom';

export default function ContactsList(props) {
  const navigate = useNavigate();
  function deleteHandler(id) {
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        navigate('/delete-contacts', { replace: true });
        navigate('/contacts', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }
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
          onDelete={deleteHandler}
        />
      ))}
    </ul>
  );
}
