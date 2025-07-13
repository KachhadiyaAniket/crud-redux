import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import List from './components/List';
import Create from './components/Create'; // Assuming you have a Create component

const App = () => {
    return (
      
        <Router>

          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </Router>
    
  );
};

export default App;