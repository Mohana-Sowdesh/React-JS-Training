import styles from '../DestinationDescription/DestinationDescription.module.scss';
import PropTypes from 'prop-types';

/**
 * @description Function that renders the full description section in the specific destination page
 * @param {*} description 
 * @returns 
 */
function DestinationDescription({ description}) {
    let descElement;
    if(description) {
        const desc = description.split("\\n");
        descElement = desc.map(desc => <div>{ desc }</div>);
    }

    return (
        <div className={styles['full-description-container']}>
            {descElement}
        </div>
    );
}

DestinationDescription.propTypes = {
    description: PropTypes.string
}

export default DestinationDescription;