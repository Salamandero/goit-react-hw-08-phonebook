import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import React from 'react';

import { Box, AppBar, Toolbar, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            My phonebook
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// import { useAuth } from 'hooks';
// import React from 'react';
// import { Box, AppBar, Toolbar, Typography } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import { MenuItem, Menu } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Navigation } from 'components/Navigation/Navigation';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { AuthNav } from 'components/AuthNav/AuthNav';

// const pagesLogged = ['Home', 'Contacts'];

// function Header() {
//   const { isLoggedIn } = useAuth();

//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = event => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   console.log(pagesLogged);

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="http://localhost:3000/goit-react-hw-08-phonebook"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', sm: 'flex' },
//               fontWeight: 700,
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             My phonebook
//           </Typography>
//           {/* Mobile screen */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', sm: 'none' },
//               }}
//             >
//               {isLoggedIn ? (
//                 <>
//                   {pagesLogged.map(page => (
//                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                       <Typography textAlign="center">{page}</Typography>
//                     </MenuItem>
//                   ))}
//                 </>
//               ) : (
//                 <MenuItem key="Home" onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">Home</Typography>
//                 </MenuItem>
//               )}
//             </Menu>
//           </Box>

//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', sm: 'none' },
//               flexGrow: 1,
//               fontWeight: 700,
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             My phonebook
//           </Typography>

//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: 'none', sm: 'flex' },
//               justifyContent: 'left',
//             }}
//           >
//             <Navigation />
//           </Box>
//           {isLoggedIn ? <UserMenu /> : <AuthNav />}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export { Header };
