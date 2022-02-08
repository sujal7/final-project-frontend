/**
 * Sorts the contacts according to name.
 * @param {Object} contacts - The contacts to be sorted.
 */
export default function sortContacts(contacts) {
  contacts.sort(function (a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });
}
