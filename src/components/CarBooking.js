import DateRangeComp from './DateRangeComp';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot, faCar, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import carData from '../data/CarData';
import PopUpForm from './PopUpForm';



function CarBooking() {

    const [showModal, setShowModal] = useState(false)


    const cities =['Amman', 'Zarga', 'Karak', 'Irbid','Dead Sea', 'Jerash', 'Salt']

    const [rentDetails, setRentDetails] = useState([
        {
          carType: "",
          pickUpLocation: "",
          DropOffLocation: "",
          startDate: null,
          endDate: null,
        }
      ])


    function toggleDisplay(){
        setShowModal(!showModal)
    } 
      
    function handleChange(event) {
        const {name, value} = event.target
        setRentDetails(prevrentDetails => {
            return {
                ...prevrentDetails,
                [name]: value
            }
        })
    }

    function handleDateChange(range) {
        // Extract start and end dates from range object
        const { startDate, endDate } = range[0];
        setRentDetails((prevRentDetails) => ({
            ...prevRentDetails,
            startDate :startDate,
            endDate: endDate,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault()
        toggleDisplay()
      }

    return(
        <div className="car-booking" id='booking'>
            <h2>Book a car</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-grid'>
                    <div className="form-item">
                        <label htmlFor="carType"><FontAwesomeIcon icon={faCar} style={{ color: "#FF4500" }} />  Car Type</label>
                        <select 
                        id="carType"
                        value={rentDetails.carType}
                        onChange={handleChange}
                        name="carType" 
                        required
                        >
                        <option value="">Select your car type</option>
                        {carData.map((car) => <option value={car.name} key={car.name}>{car.name}</option>)}
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="Pick-up-location"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#FF4500" }} />  Pick-up</label>
                        <select 
                        id="Pick-up-location"
                        value={rentDetails.pickUpLocation}
                        onChange={handleChange}
                        name="pickUpLocation"
                        required
                        >
                        <option value="">Select Pick-up location</option>
                        {cities.map((city) => <option value={city} key={city}>{city}</option>)}
                        </select>
                    </div>

                    <div className="form-item">
                        <label htmlFor="Drop-off-location"><FontAwesomeIcon icon={faLocationDot} style={{ color: "#FF4500" }} />  Drop-off</label>
                        <select 
                        id="Drop-off-location"
                        value={rentDetails.DropOffLocation}
                        onChange={handleChange}
                        name="DropOffLocation"  
                        required
                        >
                        <option value="">Select Drop-off location</option>
                        {cities.map((city) => <option value={city} key={city}>{city}</option>)}
                        </select>
                    </div>

                    <div className="form-item">
                        <label><FontAwesomeIcon icon={faCalendarDays} style={{ color: "#FF4500" }} />  How many days</label>
                        <DateRangeComp handleDateChange={handleDateChange} />
                    </div>
                </div>
                <div className='center-btn'><button className="submit-btn">Search</button></div>
            </form>
            <PopUpForm 
                show={showModal}
                rentDetails ={rentDetails}
                toggleShow = {() => toggleDisplay()}
            />
        </div>
    )
}

export default CarBooking;