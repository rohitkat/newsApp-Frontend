import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
//import NewsList from './components/NewsList';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import TopLinks from './components/TopLinks.tsx';
import Footer from './components/Footer.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <TopLinks />
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
      <Footer />
      </QueryClientProvider>
    </div>
  );
}

export default App;
