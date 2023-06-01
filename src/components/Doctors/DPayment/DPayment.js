import NavBar from '../NavBar/NavBar';
import NotAvailable from '../NotAvailable/NotAvailable';
import SideBar from '../SideBar/Sidebar';
import TitleBar from '../TitleBar/TitleBar';
import './dpayment.css';
const DPayment = () => {
    return ( 
        <div className='payment'>
            <SideBar />
            <div className='non-sidebar'>
                <NavBar />
                <TitleBar title='DOC PAYMENTS'/>
                <NotAvailable info='No payments!'/>
            </div>
        </div>
     );
}
 
export default DPayment;