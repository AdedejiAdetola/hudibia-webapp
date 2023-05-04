import { useState } from 'react';
import './drug.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const Drug = () => {
    //if true, dropdown icon also display other parameters
    const [states, setStates] = useState({
        showDetails: false,
        showMode: false,
        showIndications: false,
        showPresentation: false,
        showDosage: false,
        showExtras: false
    })

    const handleToggle = () => {
        setStates({...states, showDetails: !states.showDetails})
    }

    const handleMode = () => {
        setStates({...states, showMode: !states.showMode})
    }

    const handleIndications = () => {
        setStates({...states, showIndications: !states.showIndications})
    }

    const handlePresentations = () => {
        setStates({...states, showPresentation: !states.showPresentation})
    }

    const handleDosage = () => {
        setStates({...states, showDosage: !states.showDosage})
    }

    const handleExtras = () => {
        setStates({...states, showExtras: !states.showExtras})
    }
    return ( 
        <div className='drug-container'>
            <div className='drug-title'>
                <p>Abacavir</p>
                <button className='button-edit' onClick={handleToggle}>{!states.showDetails && <FontAwesomeIcon icon={faGreaterThan}/> } {states.showDetails && <FontAwesomeIcon icon={faAngleDown}/> }</button>
                
            </div>
            <hr/>
            <div className='drug-details'>
                {
                    states.showDetails && 
                    <div className='drug-details--container'>
                        <div className='mode-of-action'>
                            <p>Mode of Action</p>
                            <button className='button-edit' onClick={handleMode}>{!states.showMode && <FontAwesomeIcon icon={faGreaterThan}/>} {states.showMode && <FontAwesomeIcon icon={faAngleDown}/>}</button>
                        </div>

                        <div className='d-contents'>
                            {
                                states.showMode && 
                                <div className='d-contents1'>
                                    <p>Mode of Action</p>
                                </div>
                            }
                        </div>
                        
                        <div className='indications'>
                            <p>Indications</p>
                            <button className='button-edit' onClick={handleIndications}>{!states.showIndications && <FontAwesomeIcon icon={faGreaterThan}/>} {states.showIndications && <FontAwesomeIcon icon={faAngleDown}/>}</button>
                        </div>

                        <div className='d-contents'>
                            {
                                states.showIndications && 
                                <div className='d-contents1'>
                                    <p>Indications</p>
                                 </div>
                            }
                        </div>

                        <div className='presentations'>
                            <p>Presentations</p>
                            <button className='button-edit' onClick={handlePresentations}>{!states.showPresentation && <FontAwesomeIcon icon={faGreaterThan}/>} {states.showPresentation && <FontAwesomeIcon icon={faAngleDown}/>}</button>
                            
                        </div>

                        <div className='d-contents'>
                            {
                                states.showPresentation && 
                                <div className='d-contents1'>
                                    <p>Presentations</p>
                                </div>
                            }
                        </div>

                        <div className='dosage'>
                            <p>Dosage</p>
                            <button className='button-edit' onClick={handleDosage}>{!states.showDosage && <FontAwesomeIcon icon={faGreaterThan}/>} {states.showDosage && <FontAwesomeIcon icon={faAngleDown}/>}</button>
                        </div>
                        
                        <div className='d-contents'>
                            {
                                states.showDosage && 
                                <div className='d-contents1'>
                                    <p>Dosage</p>
                                </div>
                            }
                        </div>
                        
                        <div className='extras'>
                            <p>Contra-indication, Adverse Effects and Precaution</p>
                            <button className='button-edit' onClick={handleExtras}>{!states.showExtras && <FontAwesomeIcon icon={faGreaterThan}/>} {states.showExtras && <FontAwesomeIcon icon={faAngleDown}/>}</button>
                        </div>

                        <div className='d-contents'>
                            {
                                states.showExtras && 
                                <div className='d-contents1'>
                                    <p>Contra-indication, Adverse Effects and Precaution</p>
                                    <p>Contra-indication, Adverse Effects and Precaution</p>
                                    <p>Contra-indication, Adverse Effects and Precaution</p>
                                    <p>Contra-indication, Adverse Effects and Precaution</p>
                                    <p>Contra-indication, Adverse Effects and Precaution</p>
                                    <p>Contra-indication, Adverse Effects and Precaution</p>
                                    <p>Contra-indication, Adverse Effects and Precaution</p>
                                </div>
                                
                                
                            }
                        </div>
                        <hr className='l-hr'/>              
                    </div>
                    
                }
            </div>

            
            
        </div>
     );
}
 
export default Drug;