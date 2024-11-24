
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Grid, Card, CardMedia, CardContent, IconButton } from '@mui/material';
import { addToCart, removeFromCart } from '../Redux/CoursesSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(item.amount);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ language: item.language, amount: item.amount }));
  };
  
  const handleIncreaseAmount = () => {
    setAmount(prevAmount => prevAmount + 1);
    dispatch(addToCart({ ...item, amount: amount + 1 }));
  };

  const handleDecreaseAmount = () => {
    if (amount > 1) {
      setAmount(prevAmount => prevAmount - 1);
      dispatch(addToCart({ ...item, amount: amount - 1 }));
    }
  };

  return (
    <Card style={{ display: 'flex', marginBottom: '8px' }}>
      <CardMedia
        component="img"
        height="150"
        image={item.img}
        alt={item.language}
        style={{ width: '150px', objectFit: 'cover' }}
      />
      <CardContent style={{ flex: 1 }}>
        <Typography variant="h6">{item.language}</Typography>
        <Typography>Price: {item.price}</Typography>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
          <Typography>Level: </Typography>
          </Grid>
          <Grid item>
            <Typography>{amount}</Typography>
          </Grid>
        </Grid>
        <Button onClick={handleRemoveFromCart}>Remove</Button>
      </CardContent>
    </Card>
  );
};

export default CartItem;


