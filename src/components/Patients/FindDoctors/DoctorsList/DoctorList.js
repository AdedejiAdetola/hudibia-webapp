import Doctor from "./Doctor/Doctor";
import './doctorlist.css'

const DoctorList = () => {
    return ( 
        <div className="doctorlist-container">
            {/* <h1>List of Doctors</h1> */}
            {/* loop doctors */}
            <Doctor />
        </div>
     );
}
 
export default DoctorList;