import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar";
import './finddoctors.css';
import DoctorList from "./DoctorsList/DoctorList";
import TitleBar from "../TitleBar/TitleBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons';

const FindDoctors = () => {
    //change of state from the initial state to the stae of the input
    //on handle change, I change the state through the input
    //on handle submit, I search for data that fit in with the input 
    const initialFindDocs = {speciality: '', firstName: '', location:'', checked: false}

    const [findDocsData, setFindDocsData] = useState(initialFindDocs)

    const handleChange = (e) => {
        //do something
        setFindDocsData({ ...findDocsData, [e.target.name]: e.target.value });
    }

    const toggleChange = () => {
        setFindDocsData({ ...findDocsData, checked:!findDocsData.checked })
    }

    //console.log(findDocsData)
    
    const handleSubmit = (e) => {
        //do something
    }
    return ( 
        <div className="find-docs">
            <SideBar />
            <div className="non-sidebar">
                <NavBar />
                <TitleBar title='FIND DOCTORS'/>
                <div className="section1">
                    <form className="find-doc--form" onSubmit={handleSubmit}>
                        <div className="select">
                            <FontAwesomeIcon className='s-search' icon={faSearch} />
                            <select name="speciality" id="speciality" onChange={handleChange}>
                                <option value="Select user type">Search by speciality</option>
                                <option value="speciality1">speciality1</option>
                                <option value="speciality2">speciality2</option>
                                <option value="speciality3">speciality3</option>
                                <option value="speciality4">speciality4</option>
                            </select>
                        </div>
                        
                        <div className="input-fname">
                            <FontAwesomeIcon className="f-user" icon={faUser} />
                            <input type='text' name='firstName'placeholder='First name' onChange={handleChange}/>
                        </div>
                        
                        <div className="input-location">
                            <FontAwesomeIcon className="l-map" icon={faMapMarker}/>
                            <input name='location' type='text' placeholder='Location' onChange={handleChange}/>
                        </div>
                        
                        
                        <div className="checkbox">
                            <input type='checkbox' checked={findDocsData.checked} onChange={toggleChange} />
                            <span>Available for appointment</span>
                        </div>

                        <div className="btn-div">
                            <button className="btn">Search</button>
                        </div>
                        
                    </form>
                </div>

                <div className="section2">
                    <DoctorList />
                </div>
            </div>
        </div>
     );
}
 
export default FindDoctors;