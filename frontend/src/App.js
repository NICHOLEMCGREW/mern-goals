import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { getGoalsFromLocalStorage } from './utils/localStorageUtils'; // Import the function to retrieve goals from localStorage
import { getGoals } from './features/goals/goalSlice'; // Import the action to dispatch

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve goals from localStorage when the component mounts
    const savedGoals = getGoalsFromLocalStorage();
    if (savedGoals) {
      dispatch(getGoals(savedGoals)); // Dispatch action to update Redux store with saved goals
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
