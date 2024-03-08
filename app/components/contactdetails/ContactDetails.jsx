import React from 'react';
import './details.css'
import { FaInstagram, FaTwitter, FaCodepen, FaFacebook, FaDiscord, FaGithub, FaWhatsapp, FaSkype, FaLinkedin } from "react-icons/fa";

const ContactDetails = () => {
 
  return (
    <div>
      <div className="main">
   
        <div className="card">
          <a href="https://www.instagram.com/malik___anees/" target='_blank'>
          <FaInstagram className='instagram'/>
          </a>
        </div>
        <div className="card">
        
        <a href="https://twitter.com/MalikAn25879788" target='blank'>
        <FaTwitter  className='twitter'/>
        </a>
        </div>
        <div className="card">
       <a href="www.linkedin.com/in/malikaneesurrehman12" target='_blank'>
       <FaLinkedin  className='dribble'/>
       </a>
        </div>
        <div className="card">
          <a href="https://codepen.io/Malik-Anees" target='_target'>
          <FaCodepen className="codepen"/>
          </a>
        </div>
        <div className="card">
          <a href="https://www.facebook.com/malik.aneeslucky/" target='_blank'>
          <FaFacebook  className='uiverse'/>
          </a>
        </div>
        <div className="card">
         <a href="https://discordapp.com/users/malikanees1973" target='_blank'>
         <FaDiscord className='discord' />
         </a>
        </div>
        <div className="card">
          <a href="https://github.com/malikanees2022" target='_blank'>
          <FaGithub className='github'/>
          </a>
        </div>
        <div className="card">
            <a href="https://wa.me/+923170508024" target='_blank'>
            <FaWhatsapp  className='telegram'/>
            </a>
          
        </div>
        <div className="card">
          <a href="skype:live:.cid.4b5d0340462507c2" target='_blank'>
          <FaSkype  className='reddit'/>
          </a>
        </div>
        <p className="text">CONTACT<br /><br />ON<br /><br />SOCIAL</p>
        <div className="main_back"></div>
      </div>
    </div>
  );
}

export default ContactDetails;
