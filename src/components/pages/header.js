import React from 'react';
import '../../styles/header.css';

const styles = {
  headerStyle: {
    background: '#82B7D7',
  },
  headingStyle: {
    fontSize: '100px',
    color: '98afb5'
  },
};

function header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Coby Walsh</h1>
      <nav className="navBar">
        <ul>
        <li> <a href="#About Me">About Me</a>
        </li>
        <li> <a href="#Contact">Contact</a>
        </li>
        <li> <a href="#Portfolio">Portfolio</a>
        </li>
        <li> <a href="#Resume">Resume</a>
        </li>
        </ul>
      </nav>
    </header>
  ); 
}

export default header;



// Make components in nav and paste this component as starter code