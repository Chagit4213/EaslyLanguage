import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Box } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done'; 
import AppInfo from './AppInfo';

const ConcatPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false); 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    setSubmitted(true); 
  };

  return (
    <div>
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center" fontFamily={'Narkisim'} color={'#052e3e'} sx={{marginTop:'30px'}}>
        Contact Us
      </Typography>
      <Typography variant="h7" gutterBottom align="center" fontFamily={'Narkisim'} color={'#052e3e'} sx={{ fontSize: '30px',marginTop:'20px', position: 'absolute', left: '50%', transform: 'translate(-50%, -50%)' }}>
  Fill in your details and we will get back to you
      </Typography>


      <Box sx={{ maxWidth: 400, margin: 'auto', marginTop: '100px' }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Phone"
          variant="outlined"
          fullWidth
          margin="normal"
          value={phone}
          onChange={handlePhoneChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={handleEmailChange}
        />
      </Box>
      {!submitted ? ( 
        <Button
        sx={{ backgroundColor: '#052e3e', color: '#FFFFFF' }}
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          endIcon={<DoneIcon />} 
        >
          Submit
        </Button>
      ) : (
        <Button
        sx={{ backgroundColor: '#052e3e', color: '#FFFFFF' }}
          variant="contained"
          color="primary"
          endIcon={<DoneIcon />}
        >
          Successfully
        </Button>
      )}
    </Container>
    <AppInfo></AppInfo>
   </div>
  );
}

export default ConcatPage;
