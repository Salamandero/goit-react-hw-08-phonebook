import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFound = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 120px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box textAlign={'center'}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          PAGE NOT FOUND
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          404
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
