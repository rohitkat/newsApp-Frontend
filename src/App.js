import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
//import NewsList from './components/NewsList';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import TopLinks from './components/TopLinks.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="App">
      <TopLinks />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
