import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FindDoctors from './components/Patients/FindDoctors/FindDoctors';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='/signup' exact element={<Signup />}/>
        <Route path='/dashboard' exact element={<Dashboard />}/>
        <Route path='/find-doctor' exact element={<FindDoctors />}/>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
