import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

import AddContactForm from '../../components/contacts/AddContactForm';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase/initialize';

export default function EditContacts() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');

  function editContactsHandler(formData, file) {
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
            setUrl(downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });

    promise.then((downloadURL) => {
      formData.photo = downloadURL;
      fetch(`http://localhost:5000/contacts/${id}`, {
        method: 'PUT',
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
      <h1 className="center primary-color">Edit Contact</h1>
      <AddContactForm onEditContacts={editContactsHandler} isEdit={true} />
    </section>
  );
}
