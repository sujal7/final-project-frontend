import React, { useState, useEffect } from 'react';
import ContactsList from '../../components/contacts/ContactsList';

export default function AllContacts() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedContacts, setLoadedContacts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:5000/contacts')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const contacts = data;
        setIsLoading(false);
        setLoadedContacts(contacts);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Contacts</h1>

      <ContactsList contacts={loadedContacts} />
    </section>
  );
}
