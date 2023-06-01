import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGear, faBell, faUser } from '@fortawesome/free-solid-svg-icons';



const NavBar = () => {
    return ( 
        <div>
            <div className='navbar-container'>
        
                <form>
                    <div className='navbar-search'>
                        <FontAwesomeIcon className='fas-icon' icon={faSearch} />
                        <input className='search-input' type="search" id="gsearch" name="gsearch"/>
                        {/* ontype icon should disappear */}
                    </div>
                </form>
                
                <div className='navabar-right'>
                    {/* links needed */}
                    <FontAwesomeIcon className='faGear-icon' icon={faGear} />
                    <FontAwesomeIcon className='faBell-icon' icon={faBell} />
                    <FontAwesomeIcon className='faUser-icon' icon={faUser} />
                </div>
            </div>
            <hr className='nav-hr'/>
        </div>
        
     );
}
 
export default NavBar;