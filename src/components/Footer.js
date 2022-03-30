import React from 'react';
import InstagramIcon  from '@material-ui/icons/Instagram';
import TwitterIcon  from '@material-ui/icons/Twitter';
import FacebookIcon  from '@material-ui/icons/Facebook';
import LinkedInIcon  from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  return ( 
  <div className='footer'>
  <div className='socialMedia'>
      <InstagramIcon style={{color: "brown"}} /><TwitterIcon style={{color: "#00acee"}}/><FacebookIcon style={{color: "#3b5998"}} /><LinkedInIcon style={{color: "#0e76a8 "}} />
      </div>
  <p> &copy; 2020 GrubKebab@gmail.com</p>
  </div>
  );

}

export default Footer;