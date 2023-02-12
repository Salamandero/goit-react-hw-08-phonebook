import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography sx={{ fontWeight: 700 }}>Welcome, {user.name}</Typography>
      <Button
        sx={{ textTransform: 'none', ml: 4 }}
        type="button"
        variant="contained"
        size="medium"
        // color="inherit"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
