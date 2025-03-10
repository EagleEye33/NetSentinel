import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home';
import Login from './pages/login';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
