
import './App.css';
import './Pages/Style.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './Pages/homepage';
import Register from './Pages/Register';
import ContributionForm from './Pages/ContributionForm';
import ThankYou from './Pages/ThankYou';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/register" style={{ marginRight: '20px' }}>Sign In / Register</Link>
          <Link to="/contribute" style={{ float: 'right' }}>Donate E-Waste</Link>
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contribute" element={<ContributionForm />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
