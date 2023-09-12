import React from 'react';
import '../../styles/contact.css';
import { FaGithub } from 'react-icons/fa'; 

const styles = {
  contactStyle: {
    background: '#caefd7',
  },
  contactMeStyle: {
    fontSize: '100px',
  },
  iconStyles: {
    fontSize: '40px'
  }
};

function contact() {
  return (
    <header style={styles.contactStyle} id="contactMe" className="contact">
      <h1 style={styles.contactMeStyle}>Contact Me</h1>
      <div id="contactInfo" className="contactInfo">
      <h2>Feel Free to Contact Me!</h2>
      <h3>Email: cobywalsh89@gmail.com</h3>
      <h3>Phone: (509)389-7222</h3>
      </div>
      <footer style={styles.footerStyles}>
        {/* GitHub link */}
        <a
          href="https://github.com/CobyWalsh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub style={styles.iconStyles} /> GitHub
        </a>
      </footer>
    </header>
  );
}

export default contact;
