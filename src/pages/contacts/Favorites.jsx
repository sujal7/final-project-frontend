import { useSelector } from 'react-redux';
import ContactsList from '../../components/contacts/ContactsList';

/**
 *
 * @returns {JSX.Element} - The page where all the favorite contacts are displayed.
 */
export default function Favorites() {
  // Gets the favorite contacts from the state.
  const favorites = useSelector((state) => state.favorites);
  let content;

  // If there are no favorite contacts, displays a message.
  if (favorites.length === 0)
    content = (
      <p className="center">
        There are no favorites at the moment. Try adding contacts to your
        favorites.
      </p>
    );
  // If there are favorite contacts, displays them.
  else content = <ContactsList contacts={favorites} />;
  return (
    <div>
      <h1 className="center primary-color">Favorites ({favorites.length})</h1>
      {content}
    </div>
  );
}
