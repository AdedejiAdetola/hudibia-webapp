import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar";
import TitleBar from "../TitleBar/TitleBar";
import DAppointmentList from "./DAppointmentList/DAppointmentList";
import './dappointment.css';
const DAppointment = () => {
    return ( 
        <div className="appointment">
           <SideBar/>
           <div className="non-sidebar">
                <NavBar />
                <TitleBar title='DOC APPOINTMENTS'/>
                <div className="appointments-section">
                    <DAppointmentList />
                </div>
            </div>     
        </div>
     );
}
 
export default DAppointment;