import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Routes>
        <Route path='/' element={Dashboard}></Route>
        <Route path='/login' element={Login}></Route>
        <Route path='/register' element={Register}></Route>
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
