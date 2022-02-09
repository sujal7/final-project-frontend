import ContactItem from './ContactItem';
import classes from './ContactsList.module.css';
import sortContacts from '../../utils/sortContacts';

/**
 *
 * @param {Object} props - The props of the component.
 * @returns The list of contacts.
 */
export default function ContactsList(props) {
  // Sorts the contacts based on the contact name.
  sortContacts(props.contacts);

  return (
    <ul className={classes.list}>
      {props.contacts.map((contact) => (
        // Sets the props of the contact item component.
        <ContactItem
          key={contact._id}
          id={contact._id}
          name={contact.name}
          photo={contact.photo}
          mobileNumber={contact.phone.mobileNumber}
          workNumber={contact.phone.workNumber}
          homeNumber={contact.phone.homeNumber}
          address={contact.address}
          email={contact.email}
        />
      ))}
    </ul>
  );
}
