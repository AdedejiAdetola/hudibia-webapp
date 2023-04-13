import { Link, useNavigate } from 'react-router-dom';
import hudibiaLogo from '../../images/logo.png';
import './styles.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/actions/signInAction';

const Login = () => {
    const initialLogin = { email:'', password:''};
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [signInData, setSignInData] = useState(initialLogin);
    
    const handleChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //dispatch signIn action
        dispatch(signInAction(signInData, navigate));
        
    }    


    return ( 
        <div className='login fade-in-fwd'>
            <img className='hudibia-logo' src={hudibiaLogo} alt='welcome-page' />
            

            <div className='login-container'>
                <p className='header'>Login</p>

                <form className='input-div-container' onSubmit={handleSubmit}>
                        
                    <div className='input-div'>
                        <label htmlFor='email'>Email</label>
                        <input id='email' name='email' type='email' placeholder='Enter your email' onChange={handleChange} required/>
                    </div>

                    <div className='input-div'>
                        <label htmlFor='password'>Password</label>
                        <input id='password' name='password' type='password' placeholder='Enter your password' onChange={handleChange} required/>
                    </div>
                    

                    <p className='forgot-password'>Having issues with Login? <span>Forgot Password</span></p>

                    <div className='btn-cover'>
                        <button className='btn'>Login</button>
                    </div>
                    

                </form>

                <p className='account-signup'>Don't have an account? <span><Link className='link' to='/signup'>Sign up</Link></span></p>

            </div>
        </div>
     );
}
 
export default Login;