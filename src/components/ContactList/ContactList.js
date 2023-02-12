import { Button, List, ListItem } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { theme } from 'theme';
import { selectAllContacts } from '../../redux/contacts/selectors';

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
        <List>
          {visibleContacts.map(contact => (
            <ListItem sx={{ fontSize: '18px' }} key={contact.id}>
              <p>{contact.name}:</p>
              <p>{contact.number}</p>
              <Button
                sx={{
                  width: '100px',
                  ml: 'auto',

                  [`&:hover`]: {
                    backgroundColor: theme.palette.secondary.main,
                    color: 'yellow',
                  },
                }}
                // color="inherit"
                variant="outlined"
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};
