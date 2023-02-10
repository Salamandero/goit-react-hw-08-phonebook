import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './Header/Header';
import { Suspense } from 'react';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    // <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
    <>
      <Header />
      <Container sx={{ mt: '1rem' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    </>
    // {/* </div> */}
  );
};
