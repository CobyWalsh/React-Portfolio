import React from 'react';
import '../../styles/portfolio.css';


const styles = {
  portfolioStyle: {
    background: 'red',
  },
  myPortfolioStyle: {
    fontSize: '100px',
  },
};

function portfolio() {
  return (
    <header style={styles.portfolioStyle} id="myPortfolio" className="portfolio">
      <h1 style={styles.myPortfolioStyle}>Portfolio</h1>
    </header>
  );
}

export default portfolio;

