import './App.css';
import Events from './components/Events';
import NavBar from './components/NavBar';
import ClubPage from './components/ClubPage';
import Announcement from './components/Announcement';
import Registration from './components/Registration';
import Notification from './components/Notification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/clubs" element={<ClubPage />} />
          <Route path="/announcement" element={<Announcement />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
