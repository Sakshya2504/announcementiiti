import NavBar from './components/NavBar';
import ClubPage from './components/ClubPage';
import Announcement from './components/Announcement';
import Registration from './components/Registration';
import Notification from './components/Notification';
export default function Home () {


  
  return (
   <>
 
   <div className="container">
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<ClubPage />} />
      </Routes>
    </Router>
      <NavBar />

        <Events />
        <ClubPage/>
        <Registration />
        <Announcement />
        <Notification />
      </div>
 </> 
 
);
}
