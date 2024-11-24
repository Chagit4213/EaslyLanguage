import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; 
import { useSelector } from 'react-redux';
import { Person } from '@mui/icons-material';

const Layout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsInCart = cartItems.reduce((acc, item) => acc + 1, 0);

  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.clear();
    setUsername('');
    navigate('/'); // Redirect to the home page
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky" sx={{ top: 0, backgroundColor: '#052e3e' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} fontFamily={'Narkisim'}>
            Language Easily
          </Typography>
          <List component="nav" sx={{ display: 'flex', alignItems: 'center' }}>
            <ListItem button component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/About" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/Contact" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button component={Link} to="/Courses" sx={{ color: 'inherit', textDecoration: 'none' }}>
              <ListItemText primary="Courses" />
            </ListItem>
            <ListItem button component={Link} to="/MyChoices" sx={{ color: 'inherit', textDecoration: 'none', marginLeft: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ShoppingCartIcon />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>{totalItemsInCart}</Typography>
              </Box>
            </ListItem>
            <ListItem button sx={{ color: 'inherit', textDecoration: 'none' }}>
              <HelpOutlineIcon />
            </ListItem>
            {username ? (
              <ListItem button component={NavLink} to="/UserInfo" sx={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
                <ListItemText primary={`Hello, ${username}`} />
              </ListItem>
            ) : (
              <ListItem button component={NavLink} to="/Login" sx={{ color: 'inherit', textDecoration: 'none' }}>
                <IconButton color="inherit">
                  <Person />
                </IconButton>
              </ListItem>
            )}
            {username && (
              <ListItem button onClick={handleSignOut} sx={{ color: 'inherit', textDecoration: 'none' }}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            )}
          </List>
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
      <div style={{ height: '50px' }}></div>
    </Box>
  );
};

export default Layout;
