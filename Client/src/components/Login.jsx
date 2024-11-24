import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService';


const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await loginUser({ firstName, password });
      // Save the user's first name to local storage
      localStorage.setItem('username', user.firstName);
      localStorage.setItem('userId', user.id); // Save userId

      console.log(user);
      navigate('/Courses');
      window.location.reload();
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };
  

  const handleSignUpRedirect = () => {
    navigate('/Signup');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>

        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" variant="body2" gutterBottom>
            {error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Button
          variant="text"
          color="secondary"
          onClick={handleSignUpRedirect}
          sx={{ mt: 2 }}
        >
          Don't have an account? Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
