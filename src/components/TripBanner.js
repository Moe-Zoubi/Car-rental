import carInsurance from "../images/trip-banner/icon1.png";
import operator from "../images/trip-banner/icon2.png";
import cartrip from "../images/trip-banner/icon3.png";


function TripBanner() {


    return(
        <div className="trip-banner">
            <h3>Plan trip Now</h3>
            <h2>Quick & easy car rental</h2>
            <div className="trip-container">
                <div className="trip-item">
                    <img src={carInsurance} alt="car" />
                    <h4>Select Car</h4>
                    <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className="trip-item">
                    <img src={operator} alt="car" />
                    <h4>Contact Operator</h4>
                    <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
                </div>
                <div className="trip-item">
                    <img src={cartrip} alt="car" />
                    <h4>Let's Drive</h4>
                    <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
                </div>
            </div>
        </div>
    )
}

export default TripBanner;