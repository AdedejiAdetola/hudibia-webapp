import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/Sidebar";
import './patients.css';

const Doctors = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    return ( 
        <div className="doctor-component">
            {/* <h1>wagwan {user.result.firstName}</h1> */}
            <SideBar />
            <div className="non-sidebar">
                <NavBar />
                <h1>Hi {user.result.firstName}</h1>
            </div>
        </div>
     );
}
 
export default Doctors;