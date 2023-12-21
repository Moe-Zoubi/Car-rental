import Navbar from "../../components/Navbar";
import "./style.css";
import car from "../../images/homepage/main-car.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CarBooking from "../../components/CarBooking";
import TripBanner from "../../components/TripBanner";
import VehicleModels from "../../components/VehicleModels";
import SaveBig from "../../components/SaveBig";
import ChooseUsBanner from "../../components/ChooseUsBanner";
import ClientReviews from "../../components/ClientReview";
import Questions from "../../components/Questions";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();


    return(
        <div className="home">
            <Navbar />
            <div className="intro-container">
                <div className="intro">
                    <h4>Plan a trip now</h4>
                    <h1>Save <span className="orange-text">Big</span> with our<br/>car rentals</h1>
                    <p>Rent the car of your dreams. Unbeatable prices, unlimited miles,<br/> flexible pick-up options and much more.</p>
                    <div className="intro-btns">
                        <a href="#booking"><button className="btn-orange">Book Now <FontAwesomeIcon icon={faCheck} /></button></a>
                        <a><button className="btn-black" onClick={() => navigate("/about")}>Learn more  <FontAwesomeIcon icon={faChevronRight} /></button></a>
                    </div>
                </div>
                <img src={car} alt="car" />
            </div>
            <CarBooking />
            <TripBanner />
            <VehicleModels />
            <SaveBig />
            <ChooseUsBanner />
            <ClientReviews />
            <Questions />
            <Footer />
        </div>
    )
}

export default HomePage;
