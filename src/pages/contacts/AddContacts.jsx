import React from 'react';
import { useNavigate } from 'react-router-dom';

import AddContactForm from '../../components/contacts/AddContactForm';

export default function AddContacts() {
  const navigate = useNavigate();

  function addContactsHandler(formData) {
    fetch('http://localhost:5000/contacts', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/contacts', { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <section>
      <h1>Add New Contact</h1>
      <AddContactForm onAddContacts={addContactsHandler} />
    </section>
  );
}
