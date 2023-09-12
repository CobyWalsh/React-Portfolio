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
    <header style={styles.headerStyle} id="myHeader" className="header">
      <h1 style={styles.headingStyle}>Coby Walsh</h1>
      <div className="applications-header">
                    <div>
                        <figure className="figure">
                        <img src="DSC00485-2 copy.jpg" alt="Ice climber coiling rope"/>
                        </figure>
                    </div>
                    </div>
    </header>
  ); 
}

export default header;
