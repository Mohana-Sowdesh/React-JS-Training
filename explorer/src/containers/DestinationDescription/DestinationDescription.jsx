import styles from '../DestinationDescription/DestinationDescription.module.scss';
import PropTypes from 'prop-types';

/**
 * @description Function that renders the full description section in the specific destination page
 * @param {*} description 
 * @returns 
 */
function DestinationDescription({ description}) {
    return (
        <div className={styles['full-description-container']}>
            <div>{ description }</div>
            <div>{ description }</div>
            <div>{ description }</div>
        </div>
    );
}

DestinationDescription.propTypes = {
    description: PropTypes.string
}

export default DestinationDescription;