import { useState, useEffect } from 'react';

import Favorites from './Favorites';
import ContactsList from '../../components/contacts/ContactsList';

/**
 *
 * @returns {JSX.Element} - The page where all the contacts are displayed.
 */
export default function AllContacts() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedContacts, setLoadedContacts] = useState([]);

  /**
   * Fetches the contacts from the server.
   */
  useEffect(() => {
    setIsLoading(true);

    // Sends GET request of contacts to the server.
    fetch('http://localhost:5000/contacts', {
      headers: {
        // Sets the token in the header.
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      // Converts the response to JSON.
      .then((response) => {
        return response.json();
      })
      // Sets the contacts in the state.
      .then((data) => {
        const contacts = data;
        setIsLoading(false);
        setLoadedContacts(contacts);
      });
  }, []);

  // Returns the loading page if the contacts are not loaded yet.
  if (isLoading) {
    return (
      <section>
        <p className="center">Loading...</p>
      </section>
    );
  }

  // Returns the list of contacts.
  return (
    <section>
      <Favorites />
      <div>
        <h1 className="center primary-color">
          All Contacts ({loadedContacts.length})
        </h1>

        <ContactsList contacts={loadedContacts} />
      </div>
    </section>
  );
}
