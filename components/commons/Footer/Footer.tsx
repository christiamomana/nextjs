import React from 'react'
import { FooterContent } from './Footer.style'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import BusinessIcon from '@mui/icons-material/Business';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';



const Footer = () => {
  return (
    <FooterContent>
      <div>
        <Typography>Contactanos</Typography>
       <Typography><BusinessIcon/> Carrera xx No. x-x Bogotá, COL</Typography>
        <Typography><PermPhoneMsgIcon/> +xxx xxx xxxx </Typography> 
      </div>
      <div>
       <Typography>Suscríbete</Typography> 
       <Typography><InstagramIcon/> <FacebookIcon/> <TwitterIcon/></Typography> 
      </div>
      <div>
       <Typography>Solicita una cotización</Typography> 
       <Typography><MailIcon/> info@xxxx.com</Typography> 
      </div>
      

    </FooterContent>


  )
}

export default Footer