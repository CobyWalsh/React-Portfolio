import React from 'react';
// import '../styles/Header.css';

const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

function header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Coby Walsh</h1>
      <nav>
        resume
        portfolio
        about me
      </nav>
    </header>
  );
  
}

export default header;



// Make components in nav and paste this component as starter code