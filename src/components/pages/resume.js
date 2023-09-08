import React from 'react';
import '../../styles/resume.css';


const styles = {
  resumeStyle: {
    background: 'red',
  },
  ResumeStyle: {
    fontSize: '100px',
  },
};

function resume() {
  return (
    <header style={styles.resumeStyle} className="resume">
      <h1 style={styles.ResumeStyle}>Resume</h1>
    </header>
  );
}

export default resume;