import { Box, Typography } from '@mui/material';

export default function Home() {
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
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Contact manager welcome page
        </Typography>
        <Typography variant="h6">
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Typography>
      </Box>
    </Box>
  );
}
