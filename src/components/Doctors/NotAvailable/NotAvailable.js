import noneImage from '../../../images/disease-alert.svg';
import './notAvailable.css';
const NotAvailable = ({info}) => {
    return ( 
        <div className="na-container">
            <img src={noneImage} alt='No Disease Alert'/>
            <p>{info}</p>
        </div>
     );
}
 
export default NotAvailable;