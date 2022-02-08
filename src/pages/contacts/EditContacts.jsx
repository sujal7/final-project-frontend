import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { storage } from '../../firebase/initialize';
import AddContactForm from '../../components/contacts/AddContactForm';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

/**
 *
 * @returns {JSX.Element} - The edit contacts page.
 */
export default function EditContacts() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [progress, setProgress] = useState(0);

  /**
   * Sends the edit contacts request to the server.
   * @param {Object} formData - The form data in JSON format.
   * @param {Object} file - The image to be uploaded.
   */
  function editContactsHandler(formData, file) {
    const sotrageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, file);

    /**
     * Uploads the image to Firebase Storage and gets the url.
     */
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

    /**
     * Sends the PUT request of contacts to the server.
     */
    promise.then((downloadURL) => {
      formData.photo = downloadURL;
      fetch(`http://localhost:5000/contacts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        // Sets the header of the request.
        headers: {
          'Content-Type': 'application/json',
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
    });
  }

  return (
    <section>
      <h1 className="center primary-color">Edit Contact</h1>
      <AddContactForm onEditContacts={editContactsHandler} isEdit={true} />
    </section>
  );
}
