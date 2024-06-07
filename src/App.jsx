import  { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Player from './Components/Pages/Player/Player';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

const App = () => {
  const navigate = useNavigate(); // Correct spelling

  useEffect(() => {
    // Monitor authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged in");
        navigate('/'); // Redirect to home
      } else {
        console.log("Logged out");
        navigate('/login'); // Redirect to login if not authenticated
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, [navigate]); // Add navigate to dependency array

  return (
    <div>
      <ToastContainer /> {/* Render toasts */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;