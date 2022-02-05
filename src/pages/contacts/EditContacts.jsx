import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AddContactForm from '../../components/contacts/AddContactForm';

export default function EditContacts() {
  const navigate = useNavigate();
  const { id } = useParams();

  function editContactsHandler(formData) {
    fetch(`http://localhost:5000/contacts/${id}`, {
      method: 'PUT',
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
      <h1>Edit Contact</h1>
      <AddContactForm onEditContacts={editContactsHandler} isEdit={true} />
    </section>
  );
}
