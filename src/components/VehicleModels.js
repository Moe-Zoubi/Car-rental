import { useState } from "react";
import carData from "../data/CarData";
import { currencyFormatter } from '../Utils';


function VehicleModels() {

    const [activeBtn, setActiveBtn] = useState("btn1")
    const [currentVehicle, setCurrentVehicle] = useState("VW Golf 6")


    return(
        <div className="vehicle-section">
            <div className="vehicle-models">
                <div className="models-header">
                    <h3>Vehicles Roster</h3>
                    <h2>Our Rental Fleet</h2>
                    <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                </div>
                <div className="models-container">
                    <div className="model-item car-list">
                        <button className={activeBtn === "btn1" ? "active-btn" : ""} id="btn1" onClick={() =>{
                            setActiveBtn("btn1")
                            setCurrentVehicle("VW Golf 6")
                        }}>
                            VW Golf 6
                        </button>
                        <button className={activeBtn === "btn2" ? "active-btn" : ""} id="btn2" onClick={() =>{
                            setActiveBtn("btn2")
                            setCurrentVehicle("Audi A1 S-Line")
                        }}>
                            Audi A1 S-Line
                        </button>
                        <button className={activeBtn === "btn3" ? "active-btn" : ""} id="btn3" onClick={() =>{
                            setActiveBtn("btn3")
                            setCurrentVehicle("Toyota Camry")
                        }}>
                            Toyata Camry
                        </button>
                        <button className={activeBtn === "btn4" ? "active-btn" : ""} id="btn4" onClick={() =>{
                            setActiveBtn("btn4")
                            setCurrentVehicle("BMW 320 ModernLine")
                        }}>
                            BMW 320 ModernLine
                        </button>
                        <button className={activeBtn === "btn5" ? "active-btn" : ""} id="btn5" onClick={() =>{
                            setActiveBtn("btn5")
                            setCurrentVehicle("Mercedes-Benz GLK")
                        }}>
                            Mercedes-Benz GLK
                        </button>
                        <button className={activeBtn === "btn6" ? "active-btn" : ""} id="btn6" onClick={() =>{
                            setActiveBtn("btn6")
                            setCurrentVehicle("VW Passat CC")
                        }}>
                            VW Passat CC
                        </button>
                    </div>
                    <div className="model-item">
                        {
                            carData.filter((car) => car.name === currentVehicle).map((car) => <img src={car.img} alt="car" />)
                        }
                    </div>
                    <div className="model-item">
                        {
                            carData.filter((car) => car.name === currentVehicle).map((car) => (
                                <div className="vehicle-info">
                                    <p className="model-price"><span className="bold-price">{currencyFormatter.format(car.price)}</span> / rent per day</p>
                                    <div className="vehicle-table">
                                        <table>
                                            <tbody>
                                                <tr>
                                                <td>Model</td>
                                                <td>{car.model}</td>
                                                </tr>
                                                <tr>
                                                <td>Mark</td>
                                                <td>{car.mark}</td>
                                                </tr>
                                                <tr>
                                                <td>Year</td>
                                                <td>{car.year}</td>
                                                </tr>
                                                <tr>
                                                <td>Doors</td>
                                                <td>{car.doors}</td>
                                                </tr>
                                                <tr>
                                                <td>Fuel</td>
                                                <td>{car.fuel}</td>
                                                </tr>
                                                <tr>
                                                <td>AC</td>
                                                <td>{car.air}</td>
                                                </tr>
                                                <tr>
                                                <td>Transmission</td>
                                                <td>{car.transmission}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))
                        }
                        <a href="#booking"><button className="rent-btn">Reserve Now</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VehicleModels;