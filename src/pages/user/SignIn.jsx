import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import UserForm from '../../components/common/user/UserForm';

export default function SignIn(props) {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  function addSignInHandler(formData) {
    fetch('http://localhost:5000/signin', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.status !== 200) {
          setErrorMessage('The email address or password is incorrect.');
          throw new Error('The email address or password is incorrect.');
        }
        return res.json();
      })
      .then((resData) => {
        localStorage.setItem('token', resData.token);
      })
      .then(() => {
        dispatch({ type: 'LOGIN' });
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
      <UserForm
        onSubmit={addSignInHandler}
        type="Sign In"
        errorMessage={errorMessage}
      />
    </section>
  );
}
