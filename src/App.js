import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpperBar from './components/UpperBar';
import Login from './pages/signin';
import Register from './pages/register';
import UploadFile from './components/UploadFile';

function App() {
  return (
    <Router>
      <div className="p-4">
        <UpperBar />
          <Routes>
            <Route path="/upload" element={<UploadFile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
