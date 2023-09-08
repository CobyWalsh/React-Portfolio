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
    <header style={styles.contactStyle} className="contact">
      <h1 style={styles.contactMeStyle}>Contact Me</h1>
    </header>
  );
}

export default contact;
