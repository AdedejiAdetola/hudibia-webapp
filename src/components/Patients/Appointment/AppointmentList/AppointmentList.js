import { useState } from "react";
import NotAvailable from "../../NotAvailable/NotAvailable";
import './appointmentlist.css';

const AppointmentList = () => {
    const [state, setState] = useState({
        current: true
    })

    //state not needed
    //whats needed is the date property in each data
    //if the date is less than current date then its in past data
    //map each appointment and check conditions

    const handleAppointment = () => {
        setState({...state, current: true})
    }

    const handlePastAppointment = () => {
        setState({...state, current: false})
    }
    return ( 
        // appointmentlist would include history and current appointments        
        <div>
            <div className="mini-nav">
                <button onClick={handleAppointment}>Current Appointments</button>
                <button onClick={handlePastAppointment}>Past Appointments</button>
            </div>
            <NotAvailable info="No Appointments!"/>

            {
                state.current && 
                <p>You have appointments</p> 
                //if current appointment length > 0
                // loop through current appointments
                //else no appointments

                //have an object that has all the appointment data then from that general data determine if its current appointment or past appointment
            }
            {
                !state.current && <p>You have past appointments</p>
                //if past appointment length > 0
                // loop through current appointments
                //else no appointments
            }
        </div>
     );
}
 
export default AppointmentList;