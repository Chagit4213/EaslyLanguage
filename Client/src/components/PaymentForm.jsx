import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, IconButton } from '@mui/material';
import { CreditCard } from '@mui/icons-material';
import { createOrder } from '../services/OrderService'; // Import your order creation service
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../Redux/CoursesSlice'; // Import the clearCart action
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.amount, 0); // Updated to use item.amount

  const [formData, setFormData] = useState({
    address: '',
    phoneNumber: '',
    postalCode: '',
    creditCardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      alert('User not logged in. Please log in to proceed.');
      return;
    }

    const orderData = {
      userId: userId,
      total: totalPrice, // Replace with the actual total if available
      paymentStatus: 'success',
    };

    try {
      await createOrder(orderData); // Call the service to create the order
      alert('Payment successful! Order created.');

      // Clear the cart
      dispatch(clearCart());

      // Redirect to homepage
      navigate('/');
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Payment failed. Please try again.');
    }

    // Clear the form after submission
    setFormData({
      address: '',
      phoneNumber: '',
      postalCode: '',
      creditCardNumber: '',
      expiryDate: '',
      cvv: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h6">Billing Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="address"
            label="Address"
            variant="outlined"
            value={formData.address}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name="postalCode"
            label="Postal Code"
            variant="outlined"
            value={formData.postalCode}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Payment Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            name="creditCardNumber"
            label="Credit Card Number"
            variant="outlined"
            value={formData.creditCardNumber}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="expiryDate"
            label="Expiry Date"
            variant="outlined"
            value={formData.expiryDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name="cvv"
            label="CVV"
            variant="outlined"
            value={formData.cvv}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <IconButton>
            <CreditCard />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: '#052e3e', color: '#FFFFFF' }}>
            Submit Payment
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PaymentForm;
