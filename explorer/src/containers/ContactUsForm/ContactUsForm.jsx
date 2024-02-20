import Dropdown from '../../components/Dropdown/Dropdown';
import Button from "../../components/Button/Button";
import Input from '../../components/Input/Input';
import { AppConstants } from '../../constants/app-constants';
import styles from '../ContactUsForm/ContactUsForm.module.scss';
import React, { useState } from 'react';

function ContactUsForm() {
    const [userName, setNameInputValue] = useState('');
    const [source, setSourceSelectValue] = useState('');
    const [destination, setDestinationValue] = useState('');

    const handleNameChange = (event) => {
        console.log(event.target.value);
        setNameInputValue(event.target.value);
    }

    const handleSourceChange = (event) => {
        setSourceSelectValue(event.target.value)
    }

    const handleDestinationChange = (event) => {
        setDestinationValue(event.target.value)
    }

    return (
        <div className={ styles['contact-us-section']}>
            <div className={ styles['contact-us-form-container']}>
                <h1>{ AppConstants.CONTACT_US_FORM.CONTACT_US_HEADING }</h1>
                <h3>{ AppConstants.CONTACT_US_FORM.CONTACT_US_DESCRIPTION }</h3>

                <form className={ styles['form-container']}>
                    <Input labelName={ AppConstants.CONTACT_US_FORM.LABEL_NAME } inputType='text' onChange={ () => handleNameChange() }/>
                    <Dropdown labelName={ AppConstants.CONTACT_US_FORM.LABEL_HOME_TOWN }  dropDownValues={ AppConstants.PLACES_DROPDOWN_VALUES } onChange={ () => handleSourceChange() }/>
                    <Dropdown labelName={ AppConstants.CONTACT_US_FORM.LABEL_DESTINATION_PREFERENCE }  dropDownValues={ AppConstants.PLACES_DROPDOWN_VALUES } onChange={ () => handleDestinationChange() }/>
                    <Input labelName={ AppConstants.CONTACT_US_FORM.LABEL_CONTACT_NO } inputType='text' />
                    <div className={styles["btn-container"]}>
                        <Button btnText={ AppConstants.CONTACT_US_FORM.SUBMIT_BTN_TEXT }/>
                    </div>
                </form>
            </div>
            <div className={ styles["submit-msg"]}> 
                Thank You <span>{userName}</span> for expressing your interest in travelling with us. Our Sales team will get back with the best packages from <span>{source}</span> to <span>{destination}</span>
            </div>
        </div>
    );
}

export default ContactUsForm;