import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import { fetchContacts } from 'redux/contacts/operations';
import { selectLoading } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';
import { Box, Container } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container sx={{ mt: 4 }} maxWidth="md">
        <Helmet>
          <title>Your contacts</title>
        </Helmet>

        <ContactEditor />

        <Filter />
        {isLoading ? (
          <Box sx={{ fontWeight: 700, textAlign: 'center', mt: 4 }}>
            Request in progress...
          </Box>
        ) : (
          <ContactList />
        )}
      </Container>
    </>
  );
}
