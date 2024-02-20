import PropTypes from 'prop-types';
import styles from '../Input/Input.module.scss';

function Input({ labelName, inputType }) {
    if(labelName) {
        return (
            <div className={ styles['input-wrapper']}>
                <label for={ labelName }>{ labelName }</label>
                <input type={ inputType } id={ labelName } name={ labelName } />
            </div>
        );
    }
    return (
        <div>
            <input type={ inputType } id={ labelName } name={ labelName } />
        </div>
    );    
}

Input.propTypes = {
    labelName: PropTypes.string,
    inputType: PropTypes.string.isRequired
}

export default Input;