import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteContacts() {
  const { id } = useParams();
  const navigate = useNavigate();

  fetch(`http://localhost:5000/contacts/${id}`, {
    method: 'DELETE',
  })
    .then(() => {
      navigate('/contacts', { replace: true });
    })
    .catch((err) => {
      console.log(err);
    });
  return <div>Deleting Contact...</div>;
}
