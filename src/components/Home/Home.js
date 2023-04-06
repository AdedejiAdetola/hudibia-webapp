import './styles.css';
import backgroundImage from '../../images/svg.svg';
import hudibiaLogo from '../../images/logo.png';


const Home = () => {
    return ( 
        <div className='homepage'>
            <img className='backgroundImage' src={backgroundImage} alt='welcome-page' />

            <div className='right'>
                <img className='hudibia-logo' src={hudibiaLogo} alt='welcome-page' />
                <div class='welcome-text'>
                    <p>Welcome</p>
                    <p>to Hudibia</p>
                </div>
                <div className='buttons'>
                    <button className='btn'>Login</button>
                    <button className='btn'>Signup</button>
                </div>
            </div>
        </div>
     );
}
 
export default Home;