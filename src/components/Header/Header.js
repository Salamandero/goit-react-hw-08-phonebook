import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
// import css from './AppBar.module.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Typography>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};
