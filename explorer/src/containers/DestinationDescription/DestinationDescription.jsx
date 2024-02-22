import styles from '../DestinationDescription/DestinationDescription.module.scss';
import PropTypes from 'prop-types';

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
    description: PropTypes.string.isRequired
}

export default DestinationDescription;