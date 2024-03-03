import Dropdown from '../../components/Dropdown/Dropdown';
import Button from "../../components/Button/Button";
import Input from '../../components/Input/Input';
import { AppConstants } from '../../constants/app-constants';
import styles from '../ContactUsForm/ContactUsForm.module.scss';
import React, { useState } from 'react';

/**
 * @description Contact us form component
 * @returns 
 */
function ContactUsForm() {
    const [userName, setNameInputValue] = useState('');
    const [source, setSourceSelectValue] = useState('');
    const [destination, setDestinationValue] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [isFormSubmitted, setFormSubmittedValue] = useState(false);
    const [isFormFieldsValid, setFormFieldsValidation] = useState(false);
    const [isTouched, setIsTouched] = useState({ username: false, source: false, destination: false, contactNo: false });

    const handleNameChange = (event) => {
        setNameInputValue(event.target.value);
        setFormSubmittedValue(false);
        setIsTouched({ ...isTouched, "username": true });
    }

    const handleSourceChange = (event) => {
        setSourceSelectValue(event.target.value);
        setFormSubmittedValue(false);
        setIsTouched({ ...isTouched, "source": true });
    }

    const handleDestinationChange = (event) => {
        setDestinationValue(event.target.value);
        setFormSubmittedValue(false);
        setIsTouched({ ...isTouched, "destination": true });
    }

    const handleContactNoChange = (event) => {
        setContactNo(event.target.value);
        setFormSubmittedValue(false);
        setIsTouched({ ...isTouched, "contactNo": true });
    }

    const onFormSubmission = () => {
        if(userName!=='' && source!=='' && destination!=='' && contactNo!=='') {
            setFormFieldsValidation(true);
        }
        else if(userName==='' || source==='' || destination==='' || contactNo==='' || ((/^[a-zA-Z ]+$/g).test(userName)===false) || ((/^\d{10}$/).test(contactNo)===false)) {
            setIsTouched({ username: true, source: true, destination: true, contactNo: true })
            setFormFieldsValidation(false);
        }
        setFormSubmittedValue(true);

    }

    const handleSubmission = (event) => {
        event.preventDefault();
    }

    return (
        <div className={ styles['contact-us-section']}>
            <div className={ styles['contact-us-form-container']}>
                <h1>{ AppConstants.CONTACT_US_FORM.CONTACT_US_HEADING }</h1>
                <h3>{ AppConstants.CONTACT_US_FORM.CONTACT_US_DESCRIPTION }</h3>

                <form className={ styles['form-container']} onSubmit={ handleSubmission } method="post">
                    <div>
                        <Input labelName={ AppConstants.CONTACT_US_FORM.LABEL_NAME } inputType='text' onChange={ handleNameChange }/>
                        { ( isTouched["username"] && userName==='') 
                            ? <div className={styles["err-msg"]}>{AppConstants.CONTACT_US_FORM.FIELD_REQUIRED_MSG}</div>
                            : ( isTouched["username"] && ((/^[a-zA-Z ]+$/g).test(userName.trim())===false)
                            ? <div className={styles["err-msg"]}>{AppConstants.CONTACT_US_FORM.INVALID_FIELD_MSG}</div> 
                            : <div className={styles["err-msg"]}></div>) }
                    </div>
                    <div>
                        <Dropdown labelName={ AppConstants.CONTACT_US_FORM.LABEL_HOME_TOWN }  dropDownValues={ AppConstants.PLACES_DROPDOWN_VALUES } onChange={ handleSourceChange } disable={ destination }/>
                        { ( isTouched["source"] && source==='') ?  <div className ={styles["err-msg"]}>{AppConstants.CONTACT_US_FORM.FIELD_REQUIRED_MSG}</div>  : <div className={styles["err-msg"]}></div> }
                    </div>
                    <div>
                        <Dropdown labelName={ AppConstants.CONTACT_US_FORM.LABEL_DESTINATION_PREFERENCE }  dropDownValues={ AppConstants.PLACES_DROPDOWN_VALUES } onChange={ handleDestinationChange } disable={ source }/>
                        { ( isTouched["destination"] && destination==='') 
                            ? <div className={styles["err-msg"]}>{AppConstants.CONTACT_US_FORM.FIELD_REQUIRED_MSG}</div>  
                            : <div className={styles["err-msg"]}></div> }
                    </div>
                    <div>
                        <Input labelName={ AppConstants.CONTACT_US_FORM.LABEL_CONTACT_NO } inputType='number'  onChange={ handleContactNoChange } />
                        { ( isTouched["contactNo"] && contactNo==='') 
                            ?  <div className={styles["err-msg"]}>{AppConstants.CONTACT_US_FORM.FIELD_REQUIRED_MSG}</div>   
                            :  (( isTouched["contactNo"] && (/^\d{10}$/).test(contactNo)===false)
                            ?  <div className={styles["err-msg"]}>{AppConstants.CONTACT_US_FORM.INVALID_FIELD_MSG}</div> 
                            : <div className={styles["err-msg"]}></div>) }
                    </div>
                    
                    <div className={styles["btn-container"]}>
                        <Button btnText={ AppConstants.CONTACT_US_FORM.SUBMIT_BTN_TEXT } onClick={ onFormSubmission }/>
                    </div>
                </form>
            </div>
            { (isFormSubmitted && isFormFieldsValid) ? <div className={ styles["submit-msg"]}> 
                Thank You <span>{userName}</span> for expressing your interest in travelling with us. Our Sales team will get back with the best packages from <span>{source}</span> to <span>{destination}</span>
            </div> : null}
        </div>
    );
}

export default ContactUsForm;