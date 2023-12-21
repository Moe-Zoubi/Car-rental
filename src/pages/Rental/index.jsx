import CallUsBanner from "../../components/CallUsBanner";
import CarHeader from "../../components/CarHeader";
import Footer from "../../components/Footer";
import "./style.css"

const Rental = () => {

    return(
        <div className="rentals">
            <CarHeader name="Vehicle Models" />
            <CallUsBanner />
            <Footer />
        </div>
    )
}

export default Rental;
