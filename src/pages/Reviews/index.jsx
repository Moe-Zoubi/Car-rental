import CallUsBanner from "../../components/CallUsBanner";
import CarHeader from "../../components/CarHeader";
import ClientReviews from "../../components/ClientReview";
import Footer from "../../components/Footer";
import "./style.css"

const Reviews = () => {

    return(
        <div className="reviews">
            <CarHeader name="Reviews" />
            <ClientReviews />
            <CallUsBanner />
            <Footer />
        </div>
    )
}

export default Reviews;
