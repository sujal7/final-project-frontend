import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../common/UserForm';

export default function SignIn() {
  const navigate = useNavigate();

  function addSignUpHandler(formData) {
    fetch('http://localhost:5000/signin', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        // we pass authorization tokens in header
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/contacts', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section>
      <UserForm onAddMeetup={addSignUpHandler} type="Sign In" />
    </section>
  );
}
