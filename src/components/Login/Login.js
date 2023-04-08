import { Link } from 'react-router-dom';
import hudibiaLogo from '../../images/logo.png';
import './styles.css';

const Login = () => {
    return ( 
        <div className='login'>
            <img className='hudibia-logo' src={hudibiaLogo} alt='welcome-page' />
            

            <div className='login-container'>
                <p className='header'>Login</p>

                <div className='input-div-container'>
                    <div className='input-div'>
                        <label for='email'>Email</label>
                        <input id='email' type='email' placeholder='Enter your email' required/>
                    </div>

                    <div className='input-div'>
                        <label for='password'>Password</label>
                        <input id='password' type='password' placeholder='Enter your password' required/>
                    </div>
                </div>
                

                <p className='forgot-password'>Having issues with Login? <span>Forgot Password</span></p>

                <button className='btn'>Login</button>

                <p className='account-signup'>Don't have an account? <span><Link className='link' to='/signup'>Sign up</Link></span></p>

            </div>
        </div>
     );
}
 
export default Login;