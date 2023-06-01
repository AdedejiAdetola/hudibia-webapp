import NavBar from '../NavBar/NavBar';
import NotAvailable from '../NotAvailable/NotAvailable';
import SideBar from '../SideBar/Sidebar';
import TitleBar from '../TitleBar/TitleBar';
import './payment.css';
const Payment = () => {
    return ( 
        <div className='payment'>
            <SideBar />
            <div className='non-sidebar'>
                <NavBar />
                <TitleBar title='PAYMENTS'/>
                <NotAvailable info='No payments!'/>
            </div>
        </div>
     );
}
 
export default Payment;