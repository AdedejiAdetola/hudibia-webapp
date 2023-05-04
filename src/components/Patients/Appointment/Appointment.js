import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar";
import TitleBar from "../TitleBar/TitleBar";
import AppointmentList from "./AppointmentList/AppointmentList";
import './appointment.css';
const Appointment = () => {
    return ( 
        <div className="appointment">
           <SideBar/>
           <div className="non-sidebar">
                <NavBar />
                <TitleBar title='APPOINTMENTS'/>
                <div className="appointments-section">
                    <AppointmentList />
                </div>
            </div>     
        </div>
     );
}
 
export default Appointment;