import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpperBar from './components/UpperBar';
import Login from './pages/login';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <div>
        <UpperBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
