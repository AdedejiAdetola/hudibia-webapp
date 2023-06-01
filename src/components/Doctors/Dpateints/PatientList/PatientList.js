import Patient from "./Patient/Patient";
import './patientlist.css'

const PatientList = () => {
    return ( 
        <div className="doctorlist-container">
            {/* <h1>List of Doctors</h1> */}
            {/* loop doctors */}
            <Patient />
        </div>
     );
}
 
export default PatientList;