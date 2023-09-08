import React from 'react';
import '../../styles/footer.css';

const styles = {
    footerStyle: {
      background: 'blue',
    },
    FooterStyle: {
      fontSize: '60px',
    },
  };
  
  function footer() {
    return (
      <footer style={styles.footerStyle} className="footer">
        <h1 style={styles.FooterStyle}>Contact Icons</h1>
      </footer>
    );
  }
  
  export default footer;

  