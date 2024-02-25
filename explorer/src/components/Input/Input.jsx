import PropTypes from 'prop-types';
import styles from '../Input/Input.module.scss';

/**
 * @description Reusable input component
 * @param {*} labelName
 * @param {*} inputType
 * @param {*} onChange - Function triggered when the input changes
 * @returns 
 */
function Input({ labelName, inputType, onChange }) {
    if(labelName) {
        return (
            <div className={ styles['input-wrapper']}>
                <label for={ labelName }>{ labelName }</label>
                <input type={ inputType } id={ labelName } name={ labelName } onChange={ onChange } />
            </div>
        );
    }
    return (
        <div>
            <input type={ inputType } id={ labelName } name={ labelName } onChange={ onChange }/>
        </div>
    );    
}

Input.propTypes = {
    labelName: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    onChange: PropTypes.func
}

export default Input;