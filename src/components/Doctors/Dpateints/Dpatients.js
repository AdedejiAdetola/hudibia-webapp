import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar";
import './dpatients.css';
import PatientList from "./PatientList/PatientList";
import TitleBar from "../TitleBar/TitleBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Input from "../InputComponent/Input";

const Dpatients = () => {
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
                <TitleBar title='PATIENTS LIST'/>
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
                        
                        <Input
                            icon={faUser}
                            type='text'
                            id='firstName' 
                            name='firstName' 
                            placeholder='First Name'
                            handleChange={handleChange}
                        />
                        
                        <Input
                            icon={faMapMarker}
                            type='text'
                            id='find-docs--location' 
                            name='location' 
                            placeholder='Location'
                            handleChange={handleChange}
                        />
                        
                        
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
                    <PatientList />
                </div>
            </div>
        </div>
     );
}
 
export default Dpatients;