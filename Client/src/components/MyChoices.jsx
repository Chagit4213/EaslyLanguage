import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Button, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const MyChoices = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * 1, 0);
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    const username = localStorage.getItem('username');
    if (username) {
      navigate('/payment');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <Typography variant="h4" fontFamily={'Narkisim'} color={'#052e3e'}>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography fontFamily={'Narkisim'} color={'#052e3e'}>
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {cartItems.map((item, index) => (
            <Grid item xs={4} key={index}>
              <CartItem item={item} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography variant="h6" fontFamily={'Narkisim'} color={'#052e3e'}>
              Total price: {totalPrice.toFixed(2)}$
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ backgroundColor: '#052e3e', color: '#FFFFFF' }}
              onClick={handleProceedToPayment} // Use the custom handler
            >
              Proceed to Payment
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyChoices;
