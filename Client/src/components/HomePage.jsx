
import React from 'react';
import { Button, Grid, Typography, Box, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink

const HomePage = () => {
  return (
    <>
      <Typography
        variant="h3"
        align="center"
        fontFamily={'Narkisim'}
        color={'#052e3e'}
        gutterBottom
        sx={{ marginTop: '60px' }}
      >
        Learning a language has never been easier
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ border: '1px solid #f0f0f0', borderRadius: '4px' }}>
            <img src="/assets/homePage4.jpeg" alt="HomePage Image 4" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Grid container spacing={1} direction="column">
            <Grid item>
              <Box sx={{ border: '1px solid #f0f0f0', borderRadius: '4px' }}>
                <img src="/assets/homePage1.jpg" alt="HomePage Image 1" style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Grid>
            <Grid item>
              <Box sx={{ border: '1px solid #f0f0f0', borderRadius: '4px' }}>
                <img src="/assets/homePage2.jpg" alt="HomePage Image 2" style={{ width: '100%', height: 'auto' }} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', marginTop: '-115px' }}>
            <img src="/assets/homePage3.jpg" alt="HomePage Image 3" style={{ width: '100%', height: 'auto' }} />
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-200px', paddingRight: '40px' }}>
        <Stack spacing={2} direction="column" alignItems="center">
          <RouterLink to="/Courses" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ backgroundColor: '#052e3e', color: '#FFFFFF' }}>
              For Our Courses
            </Button>
          </RouterLink>
          <RouterLink to="/Login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ backgroundColor: '#052e3e', color: '#FFFFFF' }}>
              Sign In
            </Button>
          </RouterLink>
        </Stack>
      </Box>
    </>
  );
};

export default HomePage;
