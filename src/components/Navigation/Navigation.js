import { List, ListItem } from '@mui/material';
import { useAuth } from 'hooks';
import { NavigationLink } from 'theme';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <List color="inherit" sx={{ display: 'flex' }}>
        <ListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem>
            <NavigationLink to="/contacts">Contacts</NavigationLink>
          </ListItem>
        )}
      </List>
    </nav>
  );
};
