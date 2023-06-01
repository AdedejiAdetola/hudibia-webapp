// import sideImage from '../../../../../images/sideImage.svg'
import profilePhoto from '../../../../../images/profilePhoto.svg'
import patientImage from '../../../../../images/patients.svg'
import './patient.css'
const Patient = () => {
    return ( 
        <div className='doctorCard-container'>
            <div className='doctor-row1'>
                {/* <img className='sideImage' src={sideImage} alt='Doctor card' /> */}
                <div className='profile-details'>
                    <img src={profilePhoto} alt="Doctor's Profile" />
                    <p>Adetola Adedeji</p>
                    <p>Patient</p>
                    <br/><br/>
                </div>
            </div>
            
            {/* <div className='doctor-row2'>
                <div>
                    <p className='doctor-row2--bold'>50</p>
                    <p>Operations</p>
                </div>

                <div className='doctor-row2--innerflex'>
                    <img src={patientImage} alt='Patient'/>
                    <div className='innerflex-space'>
                        <p className='doctor-row2--bold'>190</p>
                        <p>Patients</p>
                    </div>
                </div>
            </div> */}

            <div className='doctor-row3'>
                <button className="btn">Message</button>
            </div>

        </div>
     );
}
 
export default Patient;