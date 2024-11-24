import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InstagramIcon from '@mui/icons-material/Instagram';
import WebIcon from '@mui/icons-material/Web';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const Container = styled('div')({
  backgroundColor: '#FFFFFF',
  padding: '20px',
  maxWidth: '800px',
  margin: '20px auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const InfoContainer = styled('div')({
  marginBottom: '8px',
  display: 'flex',
  alignItems: 'center',
});

const Icon = styled('span')({
  marginRight: '8px',
  color: '#666',
});

const ColumnContainer = styled('div')({
  marginBottom: '20px',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#FFFFFF',
});

const styles = {
  text: {
    color: '#FFFFFF',
  },
};

const AppInfo = () => {
  const number = "+1 (555) 123-4567";
  const whatsapp = "+1 (555) 987-6543";
  const email = "info@courselanguageacademy.com";
  const instagram = "https://www.instagram.com/courselanguageacademy/";
  const website = "https://www.courselanguageacademy.com";
  const address = "456 Language Street, Lingua City, Polyglot Country";
  const hours = "Mon - Fri: 9:00 AM - 7:00 PM, Sat: 10:00 AM - 5:00 PM";

  return (
    <Grid container spacing={2}>
      {/* Contact us */}
      <Grid item xs={12} md={4}>
        <Container style={{ backgroundColor: '#013754' }}>
          <Typography variant="h5" style={{ color: '#FFFFFF', marginBottom: '5px' }}>
            Contact us:
          </Typography>
          <ColumnContainer>
            <InfoContainer>
              <PhoneIcon style={{ ...styles.icon, color: '#FFFFFF' }} />
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                <strong>Number:</strong> {number}
              </Typography>
            </InfoContainer>
            <InfoContainer>
              <WhatsAppIcon style={{ ...styles.icon, color: '#FFFFFF' }} />
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                <strong>WhatsApp:</strong> {whatsapp}
              </Typography>
            </InfoContainer>
            <InfoContainer>
              <EmailIcon style={{ ...styles.icon, color: '#FFFFFF' }} />
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                <strong>Email:</strong> <StyledLink href={`mailto:${email}`} target="_blank" rel="noopener">{email}</StyledLink>
              </Typography>
            </InfoContainer>
          </ColumnContainer>
         
        </Container>
      </Grid>

      {/* Search us */}
      <Grid item xs={12} md={4}>
        <Container style={{ backgroundColor: '#013754' }}>
          <Typography variant="h5" style={{ color: '#FFFFFF', marginBottom: '5px' }}>
            Search us:
          </Typography>
          <ColumnContainer>
            <InfoContainer>
              <LocationOnIcon style={{ ...styles.icon, color: '#FFFFFF' }} />
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                <strong>Address:</strong> {address}
              </Typography>
            </InfoContainer>
            <InfoContainer>
              <AccessTimeIcon style={{ ...styles.icon, color: '#FFFFFF' }} />
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                <strong>Opening Hours:</strong> {hours}
              </Typography>
            </InfoContainer>
            <InfoContainer>
              <InstagramIcon style={{ ...styles.icon, color: '#FFFFFF' }} />
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                <strong>Instagram:</strong> <StyledLink href={instagram} target="_blank" rel="noopener">{instagram}</StyledLink>
              </Typography>
            </InfoContainer>
            <InfoContainer>
              <WebIcon style={{ ...styles.icon, color: '#FFFFFF' }} />
              <Typography variant="body1" style={{ color: '#FFFFFF' }}>
                <strong>Website:</strong> <StyledLink href={website} target="_blank" rel="noopener">{website}</StyledLink>
              </Typography>
            </InfoContainer>
          </ColumnContainer>
        </Container>
      </Grid>

      {/* Location */}
      <Grid item xs={12} md={4}>
        <Container style={{ backgroundColor: '#013754' }}>
          <Typography variant="h5" style={{ color: '#FFFFFF', marginBottom: '5px' }}>
            Location:
          </Typography>
          <div style={{ position: 'relative', width: '100%', paddingTop: '90%' }}>
            <img src="/assets/map.png" alt="Map" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', top:'10px' }} />
            <Button 
              component="a" 
              href={`https://www.google.com/maps/search/?api=1&query=${address}`} 
              target="_blank" 
              rel="noopener" 
              style={{ color: '#000000', position: 'absolute', bottom: '10px', left: '10px' }}
            >
              View on Google Maps
            </Button>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default AppInfo;
