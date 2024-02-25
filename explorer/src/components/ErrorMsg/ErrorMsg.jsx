import { AppConstants } from "../../constants/app-constants";
import  styles from '../ErrorMsg/ErrorMsg.module.scss';

/**
 * @description This component id to render an error message
 * @returns 
 */
function ErrorMsg() {
    return (
        <div className={styles["error-msg"]}>
            { AppConstants.ERROR_MSG }
        </div>
    )
}

export default ErrorMsg;