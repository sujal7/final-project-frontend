import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 *
 * @returns {JSX.Element} - The delete contacts page.
 */
export default function DeleteContacts() {
  const { id } = useParams();
  const navigate = useNavigate();

  /**
   * Sends the delete request of contacts to the server.
   */
  fetch(`http://localhost:5000/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      // Sets the token of the request.
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  })
    .then(() => {
      navigate('/contacts', { replace: true });
    })
    .catch((err) => {
      console.log(err);
    });
  return <div>Deleting Contact...</div>;
}
