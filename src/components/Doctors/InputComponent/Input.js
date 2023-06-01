import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './input.css'
const Input = ({icon, type, id, name, placeholder, handleChange}) => {
    return ( 
            <div className="input-container">
                <FontAwesomeIcon className='icon' icon={icon} />

                <input className='input' type={type} id={id} name={name} placeholder={placeholder} onChange={handleChange}/>
                {/* ontype icon should disappear */}
            </div>
     );
}
 
export default Input;