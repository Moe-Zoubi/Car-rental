import CallUsBanner from "../../components/CallUsBanner";
import CarHeader from "../../components/CarHeader";
import Footer from "../../components/Footer";
import TripBanner from "../../components/TripBanner";
import "./style.css";
import discussion from "../../images/about/about-main.jpg"
import car from "../../images/about/car.png"
import outlet from "../../images/about/outlet.png"
import shop from "../../images/about/shop.png"


const About = () => {

    return(
        <div className="about">
            <CarHeader name="About" />
            <div className="about-container">
                <img src={discussion} alt="people" className="discussion-img"/>
                <div className="about-company">
                    <h3>About Company</h3>
                    <h2>You start the engine and your adventure begins</h2>
                    <p>
                    Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting.
                     Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if 
                     no to affronting imprudence no precaution. My indulged as disposal strongly attended.
                    </p>
                    <div className="company-stats">
                        <div className="stat-item">
                            <img src={car} alt="car" />
                            <div className="stat-text">
                                <p>20</p>
                                <p>Car Types</p>
                            </div>
                        </div>
                        <div className="stat-item">
                            <img src={outlet} alt="outlet" />
                            <div className="stat-text">
                                <p>85</p>
                                <p>Rental Outlets</p>
                            </div>
                        </div>
                        <div className="stat-item">
                            <img src={shop} alt="shop" />
                            <div className="stat-text">
                                <p>75</p>
                                <p>Repair Shop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TripBanner />
            <CallUsBanner />
            <Footer />
        </div>
    )
}

export default About
