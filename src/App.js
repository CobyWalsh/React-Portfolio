import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavTabs from './navTabs';
import AboutMe from './aboutMe'; 
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';

function App() {
  const [currentPage, setCurrentPage] = React.useState('aboutMe');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        <Route exact path="/" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </div>
    </Router>
  );
}

export default App;
