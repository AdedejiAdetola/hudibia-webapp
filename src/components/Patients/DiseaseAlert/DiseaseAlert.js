import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar";
import TitleBar from "../TitleBar/TitleBar";
import "./diseasealert.css";
import Input from "../InputComponent/Input";
import DiseaseAlertList from "./DiseaseAlertList/DiseaseAlertList";

const DiseaseAlert = () => {
    const handleChange = () => {
        //do something
    }
    const handleSubmit = () => {
        //do something
    }
    return ( 
        <div className="disease-alert">
            <SideBar/>
            <div className="non-sidebar">
                <NavBar/>
                <TitleBar title='DISEASE ALERTS'/>
                <div className="main-section">
                    <form onSubmit={handleSubmit} className="d-alert--form">
                        <Input
                            icon={faMapMarker}
                            type='text'
                            id='location' 
                            name='location' 
                            placeholder='Location'
                            handleChange={handleChange}
                        />

                        <div className="disease-btn">
                                <button className="btn">Search</button>
                        </div>
                    </form>

                    
                </div>
                <div className="main-section2">
                    <DiseaseAlertList />
                </div>
            </div>
        </div>
     );
}
 
export default DiseaseAlert;