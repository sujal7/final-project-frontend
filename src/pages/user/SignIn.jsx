import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserForm from '../../components/common/user/UserForm';

export default function SignIn() {
  const navigate = useNavigate();

  function addSignUpHandler(formData) {
    fetch('http://localhost:5000/signin', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        localStorage.setItem('token', resData.token);
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
      <UserForm onSubmit={addSignUpHandler} type="Sign In" />
    </section>
  );
}
