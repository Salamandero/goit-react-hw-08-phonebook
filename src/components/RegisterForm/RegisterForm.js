import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Container,
  Box,
} from '@mui/material';
import { useState } from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Container sx={{ mt: 4 }} maxWidth="md">
      <Box
        sx={{ display: 'grid', gap: '24px' }}
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          id="outlined-textarea"
          label="Username"
          placeholder="Username"
          multiline
          type="text"
          name="name"
          required
        />
        <TextField
          id="outlined-textarea"
          label="Email"
          placeholder="Email"
          multiline
          type="email"
          name="email"
          required
        />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            name="password"
            required
          />
        </FormControl>
        <Button
          sx={{ width: '50%', m: '0 auto' }}
          type="submit"
          variant="contained"
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};
