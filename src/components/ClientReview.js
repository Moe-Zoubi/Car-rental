import anna from "../images/customers/customer1.jpg"
import james from "../images/customers/customer2.jpg"

function ClientReviews() {


    return(
        <div className="reviews-section">
            <div className="top-section">
                <h3>Reviews by People</h3>
                <h2>Client's Testimonials</h2>
                <p>
                Discover the positive impact we've made on the our clients by reading
                through their testimonials. Our clients have experienced our service
                and results, and they're eager to share their positive experiences with you.
                </p>
            </div>
            <div className="review-container">
                <div className="review-card">
                    <p className="review-comment">
                        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
                    </p>
                    <div className="client-info">
                        <img src={anna} alt="customer" />
                        <div className="customer-details">
                            <p className="client-name">Anna Frankfurt</p>
                            <p>Serbia</p>
                        </div>
                    </div>
                </div>
                <div className="review-card">
                    <p className="review-comment">
                        "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
                    </p>
                    <div className="client-info">
                        <img src={james} alt="customer" />
                        <div className="customer-details">
                            <p className="client-name">james bond</p>
                            <p>America</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientReviews;