import Doctor from "./Doctor/Doctor";
import './doctorlist.css'

const DoctorList = () => {
    return ( 
        <div className="doctorlist-container">
            <h1>List of Doctors</h1>
            <Doctor />
        </div>
     );
}
 
export default DoctorList;