import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/Sidebar";
import TitleBar from "../TitleBar/TitleBar";
import './drugindex.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from "../InputComponent/Input";

const DrugIndex = () => {
    const handleChange = () => {

    }
    const handleSubmit = () => {
        //do something
    }
    return ( 
        <div className="drug-component">
            <SideBar />
            <div className="non-sidebar">
                <NavBar />
                <TitleBar title='DRUG INDEX'/>
                <div className="search-section">
                    <form className="drug-index--form" onSubmit={handleSubmit}>

                        <Input 
                            icon={faSearch}
                            type='search'
                            id='drug-search' 
                            name='drug-search' 
                            placeholder='Search Medicine'
                            handleChange={handleChange}
                        />

                        <div className="btn-div">
                            <button className="btn">Search</button>
                        </div>
                    </form>
                </div>

                
            </div>
        </div>
     );
}
 
export default DrugIndex;