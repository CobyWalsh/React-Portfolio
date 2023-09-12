import React from 'react';
import '../../styles/contact.css';


const styles = {
  contactStyle: {
    background: 'red',
  },
  contactMeStyle: {
    fontSize: '100px',
  },
};

function contact() {
  return (
    <header style={styles.contactStyle} id="contactMe" className="contact">
      <h1 style={styles.contactMeStyle}>Contact Me</h1>
      <h2>Feel Free to Contact Me!</h2>
      <h3>Email: cobywalsh89@gmail.com</h3>
      <h3>Phone: (509)389-7222</h3>
    </header>
  );
}

export default contact;
