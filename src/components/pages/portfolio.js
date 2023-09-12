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
      <div className="applications-other">
                    <div>
                        <figure className="figure">
                            <figcaption>Group Project</figcaption>
                            <a href="https://jenevaray.github.io/SuperGreen/">SuperGreen Webpage</a>
                            <img src="00900003 copy.jpg" alt="Someone cutting vegitables"/>
                        </figure>
                    </div>
                    </div>
                    <div className="applications-other">
                    <div>
                        <figure className="figure2">
                            <figcaption>Group Project</figcaption>
                            <a href="https://dry-spire-79285-5c643f77bdb5.herokuapp.com/">Hobby Tracker</a>
                            <img src="00900014 copy.jpg" alt="A old wooden parks sigh in the desert"/>
                        </figure>
                        </div>
                    </div>
    </header>
  );
}

export default portfolio;

