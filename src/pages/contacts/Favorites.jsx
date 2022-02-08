import { useSelector } from 'react-redux';
import ContactsList from '../../components/contacts/ContactsList';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  let content;
  if (favorites.length === 0)
    content = 'Try adding contacts to your favorites.';
  else content = <ContactsList contacts={favorites} />;
  return (
    <div>
      <h1>Favorites</h1>
      {content}
    </div>
  );
}
