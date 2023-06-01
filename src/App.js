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
import Payment from './components/Patients/Payment/Payment';
import Dpatients from './components/Doctors/Dpateints/Dpatients';
import DDrugIndex from './components/Doctors/DDrugIndex/DDrugIndex';
import DDiseaseAlert from './components/Doctors/DDiseaseAlert/DDiseaseAlert';
import DClinic from './components/Doctors/DClinic/DClinic';
import DDiagnostics from './components/Doctors/DDiagnostics/DDiagnostics';
import DAppointment from './components/Doctors/DAppointment/DAppointment';
import DPayment from './components/Doctors/DPayment/DPayment';


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

        <Route path='/payment' exact element={<Payment />}/>

        {/* Doctors Component */}
        {/* <Link className='link' to="/doctors/d-disease-alerts">Disease Alerts</Link>
                <Link className='link' to="/doctors/d-clinic">Clinic/Hospital</Link>
                <Link className='link' to="/doctors/d-diagnostics">Diagnostics</Link>
                <Link className='link' to="/doctors/d-tips">Tips/Advice</Link>
                <Link className='link' to="/doctors/d-appointment">Appointments</Link>
                <Link className='link' to="/doctors/d-message">Messages</Link>
                <Link className='link' to="/doctors/d-payment">Payments</Link>
                 */}

        <Route path='/doctors/dpatients' exact element={<Dpatients />} />
        <Route path='/doctors/d-drug-index' exact element={<DDrugIndex />} />
        <Route path='/doctors/d-disease-alerts' exact element={<DDiseaseAlert />} />
        <Route path='/doctors/d-clinic' exact element={<DClinic />} />
        <Route path='/doctors/d-diagnostics' exact element={<DDiagnostics />} />
        <Route path='/doctors/d-appointment' exact element={<DAppointment />} />
        <Route path='/doctors/d-payment' exact element={<DPayment />} />
      </Routes>
    </ BrowserRouter>
  );
}

export default App;
