import cars from "../images/chooseUs-banner/cars.png";
import coin from "../images/chooseUs-banner/coin.png";
import handCoin from "../images/chooseUs-banner/coin-hand.png";
import carRadio from "../images/chooseUs-banner/car-radio.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


function ChooseUsBanner() {


    return(
        <div className="choose-section">
            <div className="choose-us">
                <img src={cars} alt="car" className="cars"/>
                <div className="chooseUs-container">
                    <div className="choose-item">
                        <h3>Why Choose Us</h3>
                        <h2>Best valued deals you will ever find</h2>
                        <p>
                            Discover the best deals you'll ever find with our unbeatable offers. 
                            We're dedicated to providing you with the best value for your money, 
                            so you can enjoy top-quality services and products without breaking the bank. 
                            Our deals are designed to give you the ultimate renting experience, so don't 
                            miss out on your chance to save big.
                        </p>
                        <button>Details <FontAwesomeIcon icon={faChevronRight} /></button>
                    </div>
                    <div className="choose-item">
                        <div className="options">
                            <img src={carRadio} alt="car-Radio" />
                            <div className="option-description">
                                <h4>Cross Country Drive</h4>
                                <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                            </div>
                        </div>
                        <div className="options">
                            <img src={handCoin} alt="hand-coin" />
                            <div className="option-description">
                                <h4>No Hidden Charges</h4>
                                <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                            </div>
                        </div>
                        <div className="options">
                            <img src={coin} alt="coin" />
                            <div className="option-description">
                                <h4>All Inclusive Pricing</h4>
                                <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUsBanner;