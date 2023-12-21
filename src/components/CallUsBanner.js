import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


function CallUsBanner() {


    return(
        <div className="call-us">
            <h2>Book a car by getting in touch with us <span className="orange-text"><FontAwesomeIcon icon={faPhoneVolume } /> (123) 456-6789</span></h2>
        </div>
    )
}

export default CallUsBanner;