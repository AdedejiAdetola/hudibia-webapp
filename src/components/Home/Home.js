import './styles.css';
import backgroundImage from '../../images/svg.svg';
import hudibiaLogo from '../../images/logo.png';
import { Link } from 'react-router-dom';


const Home = () => {
    return ( 
        <div className='homepage'>
            <img className='backgroundImage slide-in-left' src={backgroundImage} alt='welcome-page' />

            <div className='right'>
                <img className='hudibia-logo slide-in-top' src={hudibiaLogo} alt='welcome-page' />
                <div className='welcome-text slide-in-right'>
                    <p>Welcome</p>
                    <p>to Hudibia</p>
                </div>
                <div className='buttons slide-in-bottom'>
                    <Link className='btn' to="/login">Login</Link>
                    <Link className='btn' to="/signup">Signup</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Home;