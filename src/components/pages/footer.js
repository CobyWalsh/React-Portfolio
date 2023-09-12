import React from 'react';
import '../../styles/footer.css';

const styles = {
    footerStyle: {
      background: 'blue',
      fontSize: '20px',
    },
    FooterStyle: {
      fontSize: '60px',
    },
  };
  
  function footer() {
    return (
      <footer style={styles.footerStyle} id="myFooter" className="footer">
        <h1 style={styles.FooterStyle}>Contact Icons</h1>
      </footer>
    );
  }
  
  export default footer;

  