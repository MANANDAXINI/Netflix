import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Player from './Components/Pages/Player/Player';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in");
        navigate('/'); // Redirect to home
      } else {
        console.log("Logged out");
        navigate('/login'); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* Change the route path to handle dynamic movie IDs */}
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
