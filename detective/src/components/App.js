import NavBar from './NavBar';
import Posts from './Post';
import MainPage from './MainPage';
import Footer from './Footer';
import ServicePage from './ServicePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/work" element={<MainPage />} />
        <Route exact path="/work/service" element={<ServicePage />} />
      </Routes>
      {/* <Posts /> */}
      <Footer />
    </>
  );
}

export default App;
