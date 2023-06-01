import { useState } from "react";
import NotAvailable from "../../NotAvailable/NotAvailable";
import './dappointmentlist.css';
import DAppointmentCard from "./DAppointmentCard/DAppointmentCard";

const DAppointmentList = () => {
    const [state, setState] = useState({
        current: true,
        noCurrentAppointment: true,
        noPastAppointment: false
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

            {
                state.current && state.noCurrentAppointment ? <NotAvailable info="No Current Appointments!"/> : <>
                {
                    state.current && 
                    <div>
                        <h1>You Have Current Appointments</h1>
                        <DAppointmentCard />
                        <DAppointmentCard />
                    </div>
                    
                    //if current appointment length > 0
                    // loop through current appointments
                    //else no appointments
    
                    //have an object that has all the appointment data then from that general data determine if its current appointment or past appointment
                } </>
            }

            
            {
                !state.current && state.noPastAppointment ? <NotAvailable info='No Past Appointments' /> : <>
                {
                    !state.current && 
                    <div>
                        <h1>You Have Past Appointments</h1>
                        <DAppointmentCard />
                        <DAppointmentCard />
                        <DAppointmentCard />
                    </div>
                    //if past appointment length > 0
                    // loop through current appointments
                    //else no appointments
                }
                </>
            }
        </div>
     );
}
 
export default DAppointmentList;