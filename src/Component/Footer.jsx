import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
        <FacebookIcon></FacebookIcon>
        <LinkedInIcon></LinkedInIcon>
      </div>
      <p>&copy 2021 cosmetic.com</p>
    </div>
  );
}
