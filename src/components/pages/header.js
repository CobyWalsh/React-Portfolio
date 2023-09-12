import React from 'react';
import '../../styles/header.css';
import { FaGithub } from 'react-icons/fa'; 

const styles = {
  headerStyle: {
    background: '#82B7D7',
  },
  headingStyle: {
    fontSize: '100px',
    color: '98afb5'
  },
  iconStyles: {
    fontSize: '40px'
  }
};

function header() {
  return (
    <header style={styles.headerStyle} id="myHeader" className="header">
      <h1 style={styles.headingStyle}>Coby Walsh</h1>
      <div className="applications-header">
                    <div>
                        <figure className="figure">
                        <img src="DSC00485-2 copy.jpg" alt="Ice climber coiling rope"/>
                        </figure>
                    </div>
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

export default header;
