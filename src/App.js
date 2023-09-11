import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTabs from './components/pages/navTabs';
import Header from './components/pages/header'; 
import AboutMe from './components/pages/aboutMe'; 
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';

function App() {
  const [currentPage, setCurrentPage] = React.useState('aboutMe');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/header" element={<Header />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
