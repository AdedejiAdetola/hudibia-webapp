import signupPic from '../../images/signup.svg';
import hudibiaLogo from '../../images/logo.png';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../redux/actions/signUpAction';


const Signup = () => {
    const initialState = { usertype:'', email:'', password:'', confirmpassword:'', firstname:'', lastname:'', phonenumber:'', location:'', securityquestion:'', securityanswer:'' }

    const [signUpData, setSignUpData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUpAction(signUpData, navigate));//dispatch the signupdata
        //console.log(signUpData);
    }

    return ( 
        <div className='signup'>
            <div className='left-section'>

                <img className='hudibia-logo' src={hudibiaLogo} alt='welcome-page' />

                <img className='signup-bg' src={signupPic} alt='welcome-page' />

            </div>

            <div className='right-section'>
                <p className='signup-head'>Sign up</p>
                <p className='sub'>Please fill the information below</p>

                <div className='inputs'>

                    <form onSubmit={handleSubmit}>
                        <select name="usertype" id="usertype" onChange={handleChange}>
                            <option value="Select user type">Select user type</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>

                        <input type='email' name='email' placeholder='Enter email address' required onChange={handleChange}/>

                        <input type='password' name='password' placeholder='Password' required onChange={handleChange}/>

                        <input type='password' name='confirmpassword' placeholder='Confirm Password' required onChange={handleChange}/>

                        <input type='text' name='firstname'placeholder='First name' required onChange={handleChange}/>

                        <input type='text' name='lastname' placeholder='Last Name' required onChange={handleChange}/>

                        <input name='phonenumber' type='tel' placeholder='Phone Number' required onChange={handleChange}/>

                        <input name='location' type='text' placeholder='Location' required onChange={handleChange}/>

                        <select name="securityquestion" id="security-question" onChange={handleChange}>
                            <option value="Select security question">Select security question</option>
                            <option value="favourite animal">What is your favourite animal?</option>
                            <option value="best color">What is your best color?</option>
                        </select>

                        <input type='text' placeholder='Security Answer'  name='securityanswer' required onChange={handleChange}/>

                        <button className='btn'>Register</button>
                    </form>

                    

                    <p className='account'>Have an account? <span><Link className='login-link' to="/login">Login</Link></span></p>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;