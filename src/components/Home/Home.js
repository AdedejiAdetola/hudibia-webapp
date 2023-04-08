import './styles.css';
import backgroundImage from '../../images/svg.svg';
import hudibiaLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
        <div className='homepage'>
            <img className='backgroundImage' src={backgroundImage} alt='welcome-page' />

            <div className='right'>
                <img className='hudibia-logo' src={hudibiaLogo} alt='welcome-page' />
                <div className='welcome-text'>
                    <p>Welcome</p>
                    <p>to Hudibia</p>
                </div>
                <div className='buttons'>
                    <button className='btn'><Link to="/login">Login</Link></button>
                    <button className='btn'><Link to="/signup">Signup</Link></button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;