import React from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  navTabsStyle: {
    background: '#d3f3f1',
    fontSize: '20px'
  },
}

// Here I am using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage }) {
    const navigate = useNavigate();
  
    const handlePageChange = (page) => {
        navigate(`/${page}`);
    };
  return (
      <header style={styles.navTabsStyle} id="navTabs" className="navTabs">
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('aboutMe')}
          // This is a conditional (ternary) operator that checks to see if the current page is "aboutMe"
          // If it is, I set the current page to 'nav-link-active', otherwise I set it to 'nav-link'
          className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('portfolio')}
          // Check to see if the currentPage is `portfolio`, and if so I used the active link class from bootstrap. Otherwise, I set it to a normal nav-link
          className={currentPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('contact')}
          // Check to see if the currentPage is `contact`, and if so I used the active link class from bootstrap. Otherwise, I set it to a normal nav-link
          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('resume')}
          // Check to see if the currentPage is `resume`, and if so I used the active link class from bootstrap. Otherwise, I set it to a normal nav-link
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </header>
  );
}

export default NavTabs;
