import { faMapMarker, faSearch } from "@fortawesome/free-solid-svg-icons"
import Input from "../InputComponent/Input"
import NavBar from "../NavBar/NavBar"
import SideBar from "../SideBar/Sidebar"
import TitleBar from "../TitleBar/TitleBar"
import './dclinic.css';

const DClinic = () => {
    const handleChange = () => {
        //do something
    }
    const handleSubmit = () => {
        //do something
    }
    return ( 
        <div className="clinic">
            <SideBar/>
            <div className="non-sidebar">
                <NavBar/>
                <TitleBar title='DOC HOSPITAL/CLINIC'/>
                <div className="clinic-section">
                    <form onSubmit={handleSubmit} className="clinic--form">
                        <Input
                            icon={faSearch}
                            type='search'
                            id='search' 
                            name='search' 
                            placeholder='Search for Hospitals'
                            handleChange={handleChange}
                        />

                        <Input
                            icon={faMapMarker}
                            type='text'
                            id='location' 
                            name='location' 
                            placeholder='Location'
                            handleChange={handleChange}
                        />

                        <div className="clinic-btn">
                                <button className="btn">Search</button>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
     );
}
 
export default DClinic;