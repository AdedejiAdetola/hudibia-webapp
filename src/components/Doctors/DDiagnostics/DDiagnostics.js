import { faMapMarker, faUser } from "@fortawesome/free-solid-svg-icons"
import Input from "../InputComponent/Input"
import NavBar from "../NavBar/NavBar"
import SideBar from "../SideBar/Sidebar"
import TitleBar from "../TitleBar/TitleBar"
import './ddiagnostics.css';

const DDiagnostics = () => {
    const handleChange = () => {
        //do something
    }
    const handleSubmit = () => {
        //do something
    }
    return ( 
        <div className="diagnostics">
            <SideBar/>
            <div className="non-sidebar">
                <NavBar/>
                <TitleBar title='DOC DIAGNOSTICS'/>
                <div className="diagnostics-section">
                    <form onSubmit={handleSubmit} className="diagnostics--form">
                        <Input
                            icon={faUser}
                            type='search'
                            id='search' 
                            name='search' 
                            placeholder='Search Diagnostics'
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

                        <div className="diagnostics-btn">
                                <button className="btn">Search</button>
                        </div>
                    </form>

                    
                </div>
            </div>
        </div>
     );
}
 
export default DDiagnostics;