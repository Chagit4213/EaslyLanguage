import React from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { Language, School, Book, Extension, EmojiObjects } from '@mui/icons-material';

const Level = () => {
  return (
    <Box mt={4}>
      <Typography variant="h4" align="center">Course Levels</Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Language fontSize="large" color="primary" />
            <Typography variant="h6" align="center">1. Beginner</Typography>
            <Typography variant="body1" align="center">Ideal for those with no prior knowledge of the language. Focuses on basic vocabulary and grammar.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <School fontSize="large" color="primary" />
            <Typography variant="h6" align="center">2. Intermediate</Typography>
            <Typography variant="body1" align="center">Suitable for learners with some basic understanding. Builds upon foundational skills and introduces more complex concepts.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Book fontSize="large" color="primary" />
            <Typography variant="h6" align="center">3. Advanced</Typography>
            <Typography variant="body1" align="center">Designed for proficient speakers seeking to refine their language skills. Explores nuanced grammar and vocabulary.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Extension fontSize="large" color="primary" />
            <Typography variant="h6" align="center">4. Expert</Typography>
            <Typography variant="body1" align="center">For highly proficient speakers aiming for fluency. Emphasizes complex language structures and cultural nuances.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <EmojiObjects fontSize="large" color="primary" />
            <Typography variant="h6" align="center">5. Mastery</Typography>
            <Typography variant="body1" align="center">Reserved for near-native speakers striving for perfection. Offers advanced topics and authentic materials.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Level;
