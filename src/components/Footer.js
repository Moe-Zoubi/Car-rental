import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function Footer() {


    return(
        <div className="footer">
            <div className="footer-item">
                <h5>Car Rental</h5>
                <p className="gray-highlight">We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                <div className="footer-contact">
                    <p><FontAwesomeIcon icon={faPhoneVolume } /> (123)-456-789</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> carrental@gmail.com</p>
                </div>
            </div>
            <div className="footer-item">
                <h5>Company</h5>
                <p>Amman</p>
                <p>Careers</p>
                <p>Mobile</p>
                <p>Blog</p>
                <p>How we work</p>
            </div>
            <div className="footer-item">
                <h5>Working Hours</h5>
                <p>Mon - Fri: 9:00AM - 12:00PM</p>
                <p>Sat: 9:00AM - 10:00PM</p>
                <p>Sun - Closed</p>
            </div>
            <div className="footer-item">
                <h5>Subscription</h5>
                <p>Subscribe your Email address for latest news & updates.</p>
                <div className="email-subscription">
                    <input type="email" placeholder="Enter Email Here" />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;