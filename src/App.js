import './App.css';
import Home from './components/Home/home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Favoritos from './components/Favorites/favorite';
import { FavotitesContextProvider } from "./components/context/context"
import Login from './components/Login/login';

function App() {
  return (

    <FavotitesContextProvider>
      <>
        <Router>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={<Favoritos />} />
            <Route path='/login' element={<Login />} />
          </Routes>

        </Router>

      </>
    </FavotitesContextProvider>
  );
}

export default App; 