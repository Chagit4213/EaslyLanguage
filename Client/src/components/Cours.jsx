import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select, Button, Card, CardContent, CardMedia, Typography, Grid, Snackbar } from '@mui/material';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { addToCart } from '../Redux/CoursesSlice';
import Level from './Level';
import GetAllCourses from '../services/LanguageService';

const Cours = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const fetchData = async () => {
    try {
      const courses = await GetAllCourses();
      const foundCourse = courses.find(p => p.language1 === lang);
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ language: course.language1, price: course.price, img: course.img, amount }));
    setSnackbarOpen(true);
  };

  return (
    <Grid container spacing={3} marginTop={'50px'}>
      <div style={{ height: '50px' }}>
        {/* Empty div with a height of 50px */}
      </div>
      <Grid item xs={12} md={6}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={course?.img}
            alt={course?.language}
          />
          <CardContent>
            <Typography variant="h5">{course?.language1}</Typography>
            <Typography variant="body1">Teacher: {course?.teacherName}</Typography>
            <Typography variant="body1">Number of Courses: {course?.numbersOfCourses}</Typography>
            <Typography variant="body1">Price for a single course : {course?.price}$</Typography>

          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="amount-label">Choose your level</InputLabel>
          <Select
            labelId="amount-label"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
          >
            <MenuItem value={1}>1. Beginner</MenuItem>
            <MenuItem value={2}>2. Intermediate</MenuItem>
            <MenuItem value={3}>3. Advanced</MenuItem>
            <MenuItem value={4}>4. Expert</MenuItem>
            <MenuItem value={5}>5. Mastery</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          startIcon={<ShoppingCartRoundedIcon />}
          onClick={handleAddToCart}
          fullWidth
          sx={{ backgroundColor: '#052e3e', color: '#FFFFFF' }}
        >
          Add to Cart
        </Button>
      </Grid>
      <Level />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Added successfully!"
      />
    </Grid>
  );
};

export default Cours;
