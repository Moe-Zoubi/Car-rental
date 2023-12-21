import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';


function Questions() {


    const [addClass, setAddClass] = useState([
        {
          btnPressed: false,
          btnClicked: 0
        }
      ]);
    
      function handleChange(index) {
        if(addClass.btnClicked !== index && addClass.btnPressed === true){
          setAddClass(prevClass => ({
            ...prevClass,
            btnPressed: prevClass.btnPressed,
            btnClicked: index
          }));
        }else{
          setAddClass(prevClass => ({
            ...prevClass,
            btnPressed: !prevClass.btnPressed,
            btnClicked: index
          }));
        }
      }

    return(
        <div className="questions-section">
            <div className="top-section">
                <h3>FAQ</h3>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
                </p>
            </div>
            <div className="question-container">
                <div className={`question-item ${addClass.btnPressed && addClass.btnClicked === 1 ? "show-answer" : ""}`}>
                    <div className="question-box" onClick={() => handleChange(1)}>
                        <p>What is special about comparing rental car deals?</p>
                        <p><FontAwesomeIcon icon={faChevronDown} /></p>
                    </div>
                    <div className="answer-box">
                        <p>
                            Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money.
                            By comparing various options, you can find deals that offer lower prices. additional services, or better car models. You can find car rental deals by 
                            researching online and comparing prices from different rental companies.
                        </p>
                    </div>
                </div>
                <div className={`question-item ${addClass.btnPressed && addClass.btnClicked === 2  ? "show-answer" : ""}`}>
                    <div className="question-box" onClick={() => handleChange(2)}>
                        <p>How do I find the car rental deals?</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="answer-box">
                        <p>
                            You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity
                            allow you to compare prices and view available rental options. It is also recommeneded to sign up for email newsletters and follow rental car companies
                            on social media to be informed of any special deals or promotions.
                        </p>
                    </div>
                </div>
                <div className={`question-item ${addClass.btnPressed && addClass.btnClicked === 3 ? "show-answer" : ""}`}>
                    <div className="question-box" onClick={() => handleChange(3)}>
                        <p>How do I find such low rental car prices?</p>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <div className="answer-box">
                        <p>
                            Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use Websites
                            like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search
                            for discount codes and coupons that can lower the rental price. Renting from an off-airport location can sometimes result in lower prices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;