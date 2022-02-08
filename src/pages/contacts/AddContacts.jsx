import React from 'react';
import { useNavigate } from 'react-router-dom';

import AddContactForm from '../../components/contacts/AddContactForm';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase/initialize';
import { useState } from 'react';

export default function AddContacts() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  function addContactsHandler(formData, file) {
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    const promise = new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });

    promise.then((downloadURL) => {
      formData.photo = downloadURL;
      fetch('http://localhost:5000/contacts', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
        .then(() => {
          navigate('/contacts', { replace: true });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  return (
    <section>
      <h1 className="center primary-color">Add New Contact</h1>
      <AddContactForm onAddContacts={addContactsHandler} />
    </section>
  );
}
