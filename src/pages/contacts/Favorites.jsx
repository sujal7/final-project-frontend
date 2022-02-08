import { useSelector } from 'react-redux';
import ContactsList from '../../components/contacts/ContactsList';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  let content;
  if (favorites.length === 0)
    content = (
      <p className="center">
        There are no favorites at the moment. Try adding contacts to your
        favorites.
      </p>
    );
  else content = <ContactsList contacts={favorites} />;
  return (
    <div>
      <h1 className="center primary-color">Favorites ({favorites.length})</h1>
      {content}
    </div>
  );
}
