import { Link } from 'react-router-dom';
import hudibiaLogo from '../../../images/logo.png';
import sidebarImg from '../../../images/sidebarImg.svg';
import './sidebar.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SideBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const logout = () => {
        dispatch({ type: 'LOGOUT' })
        navigate('/');
        setUser(null);
    }

    return ( 
        <div className='sidebar-container'>
            <div className='sidebar-topLogo'>
                <img src={hudibiaLogo} alt='hudibia-logo' />
            </div>
            

            <div className='feature-links'>
                <Link className='link' to="/find-doctor">Find Doctors</Link>
                <Link className='link' to="/drug-index">Drug Index</Link>
                <Link className='link' to="/disease-alerts">Disease Alerts</Link>
                <Link className='link' to="/clinic">Clinic/Hospital</Link>
                <Link className='link' to="/diagnostics">Diagnostics</Link>
                <Link className='link' to="/tips">Tips/Advice</Link>
                <Link className='link' to="/appointment">Appointments</Link>
                <Link className='link' to="/message">Messages</Link>
                <Link className='link' to="/payment">Payments</Link>
            </div>

            <button className='sidebar-btn' onClick={logout}>Log Out</button>

            <div className='foot-contents'>
                <img src={sidebarImg} alt='Sidebar' />
                <p>Make Appointments</p>
            </div>

            <div className='footer-section'>
                <p>Hudibia</p>
                <p>2023 All Rights Reserved</p>
            </div>

        </div>
     );
}
 
export default SideBar;