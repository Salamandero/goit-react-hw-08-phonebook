import { Box } from '@mui/material';
import { RingLoader } from 'react-spinners';
import { theme } from 'theme';

export const Loader = () => {
  return (
    <>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <RingLoader color={theme.palette.primary.main} size={80} />
      </Box>
    </>
  );
};
