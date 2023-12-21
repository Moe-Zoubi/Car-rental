import Navbar from "./Navbar";

function CarHeader({name}) {


    return(
        <div className="carheader">
            <div className="transparent-bg">
                <Navbar />
                <div className="page-title">
                    <h2>{name}</h2>
                    <p>Home / {name}</p>
                </div>
            </div>
        </div>
    )
}

export default CarHeader;