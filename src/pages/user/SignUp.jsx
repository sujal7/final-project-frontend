import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/common/user/UserForm';

export default function SignUp(props) {
  const navigate = useNavigate();

  function addSignUpHandler(formData) {
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        // we pass authorization tokens in header
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        navigate('/signin', { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section>
      <UserForm onSubmit={addSignUpHandler} type="Sign Up" />
    </section>
  );
}
