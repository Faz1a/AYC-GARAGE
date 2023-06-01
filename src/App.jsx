import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import HomePage from './pages/HomePage';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;