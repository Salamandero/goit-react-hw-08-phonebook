// import { useSelector } from 'react-redux';
// import { Contact } from '../Contact/Contact';
// import { selectAllContacts } from 'redux/contacts/selectors';
// import css from './ContactList.module.css';

// export const ContactList = () => {
//   const contacts = useSelector(selectAllContacts);

//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, text }) => (
//         <li key={id}>
//           <Contact id={id} text={text} />
//         </li>
//       ))}
//     </ul>
//   );
// };

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectAllContacts } from '../../redux/contacts/selectors';
// import { List, ContactItem, Info, BtnInfoDelete } from './ContactList.styled';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  const visibleContacts = getVisibleContacts();
  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={css.listItem}>
              <p className="css.info">{contact.name}:</p>
              <p className="css.info">{contact.number}</p>
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
