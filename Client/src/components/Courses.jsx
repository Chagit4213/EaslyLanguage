import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import GetAllCourses from '../services/LanguageService'; //הבתי נתונים מסרביס חדש!!!

const Courses = () => {
  const [listCourses, setListCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataL = await GetAllCourses();
        setListCourses(dataL);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2} marginTop={'50px'}>
      {listCourses.map(course => (
        <Grid item xs={12} sm={5} md={4} key={course.language1}>
          <Card>
            <CardActionArea component={Link} to={course.language1} style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardMedia
                component="img"
                height="180"
                image={course.img}
                alt={course.language1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.language1}
                </Typography>
                {/* <Typography variant="body2" color="textSecondary" component="p">
                  Teacher: {course.teacherName}
                </Typography> */}
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Courses;
