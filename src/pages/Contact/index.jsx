import CallUsBanner from "../../components/CallUsBanner";
import CarHeader from "../../components/CarHeader";
import Footer from "../../components/Footer";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope, faLocationArrow, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {

    return(
        <div className="contact">
            <CarHeader name="Contact" />
            <div className="contact-container">
                <div className="contact-item">
                    <h2>Need additional information?</h2>
                    <div className="contact-description">
                        <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                        <div className="contact-information">
                            <p><FontAwesomeIcon icon={faPhoneVolume } /> (123)-456-789</p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> carrental@gmail.com</p>
                            <p><FontAwesomeIcon icon={faLocationArrow} /> Amman, Jordan</p>
                        </div>
                    </div>
                </div>
                <div className="contact-item">
                    <form>
                        <label>Full Name <span className="orange-text">*</span></label>
                        <input type="text" placeholder="Enter Name Here" required />
                        <label>Email <span className="orange-text">*</span></label>
                        <input type="email" placeholder="Enter Email Here" required />
                        <label>Tell us about it <span className="orange-text">*</span></label>
                        <textarea placeholder="Write Here.."></textarea>
                        <button type="submit">
                            <FontAwesomeIcon icon={faEnvelopeOpen} /> Send Message
                        </button>
                    </form>
                </div>
            </div>
            <CallUsBanner />
            <Footer />
        </div>
    )
}

export default Contact;
