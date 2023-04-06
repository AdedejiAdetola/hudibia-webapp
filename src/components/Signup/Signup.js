import signupPic from '../../images/signup.svg';
import hudibiaLogo from '../../images/logo.png';
import './signup.css';
const Signup = () => {
    return ( 
        <div className='signup'>
            <div className='left-section'>

                <img className='hudibia-logo' src={hudibiaLogo} alt='welcome-page' />

                <img className='signup-bg' src={signupPic} alt='welcome-page' />

            </div>

            <div className='right-section'>
                <p className='signup-head'>Sign up</p>
                <p class='sub'>Please fill the information below</p>

                <div className='inputs'>

                    <select name="user-type" id="user-type">
                        <option value="Select user type">Select user type</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </select>

                    <input type='email' name='email' placeholder='Enter email address' required/>

                    <input type='password' name='password' placeholder='Password' required/>

                    <input type='password' name='confirm-password' placeholder='Confirm Password' required/>

                    <input type='text' name='first-name'placeholder='First name' required/>

                    <input type='text' name='last-name' placeholder='Last Name' required/>

                    <input name='phone-number' type='tel' placeholder='Phone Number' required/>

                    <input name='location' type='text' placeholder='Location' required/>

                    <select name="security-question" id="security-question">
                        <option value="Select security question">Select security question</option>
                        <option value="favourite animal">What is your favourite animal?</option>
                        <option value="best color">What is your best color?</option>
                    </select>

                    <input type='text' placeholder='Security Answer'  name='security-answer' required/>

                    <button className='btn'>Register</button>

                    <p className='account'>Have an account? <span>Login</span></p>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;