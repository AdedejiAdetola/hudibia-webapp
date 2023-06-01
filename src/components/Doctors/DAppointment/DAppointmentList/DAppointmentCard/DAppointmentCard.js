import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './dappointmentcard.css';

const DAppointmentCard = () => {
    const attended = true
    return ( 
        <div>
            
            <div className="appointment-container">
                

                <div className="appointment-content">
                    <FontAwesomeIcon className='appointment-profile' icon={faUser} />

                    <div>
                        <p>Ahjoku Amadi Obi</p>
                        <p>Doctor</p>
                        <p>Tuesday, 12 March 2022</p>
                    </div>
                    
                </div>

                <div>
                    {
                        attended ? <p>Attended</p> : <p>Not Attended</p>
                    }
                </div>

            </div>
        </div>
     );
}
 
export default DAppointmentCard;