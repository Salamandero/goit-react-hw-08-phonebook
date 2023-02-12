import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './Header/Header';
import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ThemeProvider>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
