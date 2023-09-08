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
    </header>
  ); 
}

export default header;



// Make components in nav and paste this component as starter code