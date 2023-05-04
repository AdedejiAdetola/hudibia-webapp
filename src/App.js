import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import FindDoctors from './components/Patients/FindDoctors/FindDoctors';
import DrugIndex from './components/Patients/DrugIndex/DrugIndex';
import DiseaseAlert from './components/Patients/DiseaseAlert/DiseaseAlert';
import Clinic from './components/Patients/Clinic/Clinic';
import Diagnostics from './components/Patients/Diagnostics/Diagnostics';
import Appointment from './components/Patients/Appointment/Appointment';


function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/login' exact element={<Login />}/>
        <Route path='/signup' exact element={<Signup />}/>
        <Route path='/dashboard' exact element={<Dashboard />}/>
        <Route path='/find-doctor' exact element={<FindDoctors />}/>
        <Route path='/drug-index' exact element={<DrugIndex />}/>
        <Route path='/disease-alerts' exact element={<DiseaseAlert />}/>
        <Route path='/clinic' exact element={<Clinic />}/>
        <Route path='/diagnostics' exact element={<Diagnostics />}/>
        <Route path='/appointment' exact element={<Appointment />}/>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
