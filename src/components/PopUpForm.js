import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDays, faXmark, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import carData from '../data/CarData';
import { format } from 'date-fns';


function PopUpForm({show, rentDetails, toggleShow}) {



    const carImg = carData.filter((car) => car.name === rentDetails.carType).map(car => car.img)


    const [customerDetails, setCustomerDetails] = useState([
        {
          fistName: "",
          lastName: "",
          phone: "",
          age: 0,
          email: "",
          address: "",
          city: "",
          zipcode: "",
        }
      ])

    
    const formattedDate = rentDetails.startDate === undefined && rentDetails.endDate === undefined 
    ? "" 
    : `${format(rentDetails.startDate, 'EEE dd/MM/yy')} - ${format(rentDetails.endDate, 'EEE dd/MM/yy')}`;


    function handleSubmit(event) {
        event.preventDefault()
        console.log(customerDetails)
        toggleShow()
    }

    function handleChange(event) {
        const {name, value} = event.target
        setCustomerDetails(prevrentDetails => {
            return {
                ...prevrentDetails,
                [name]: value
            }
        })
    }


    return(
        <div className={`reservation-modal ${show === false ? 'hide-modal' : "active-modal" }`} >
            <div className='reservation-title'>
                <h2>CONFIRM RESERVATION</h2>
                <FontAwesomeIcon icon={faXmark} size='2xl' onClick={toggleShow}/>
            </div>
            <div className='reservation-message'>
                <h3><FontAwesomeIcon icon={faCircleExclamation} style={{ color: "#FF4500" }} />  Upon completing this reservation enquiry, you will receive:</h3>
                <p>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</p>
            </div>
            <div className='reservation-info'>
                <div className='location-date'>
                    <h3><span className='orange-text'>Date & Location</span></h3>
                    <p className='details-heading'><FontAwesomeIcon icon={faLocationDot} /> Pick-Up location</p>
                    <p className='indent'>{rentDetails.pickUpLocation}</p>
                    <p className='details-heading'><FontAwesomeIcon icon={faLocationDot} /> Drop-Off Location</p>
                    <p className='indent'>{rentDetails.DropOffLocation}</p>
                    <p className='details-heading'><FontAwesomeIcon icon={faCalendarDays} /> Renting Period</p>
                    <p className='indent'>{formattedDate}</p>
                </div>
                <div className='car-type'>
                    <h3>Car - <span className='orange-text'>{rentDetails.carType}</span></h3>
                    <img src={carImg} alt='car'/>
                </div>
            </div>
            <form className='personal-info' onSubmit={handleSubmit}>
                <h3 className='orange-text'>Personal Information</h3>
                <div className="details-container">
                    <div className='input-item'>
                        <label>First Name</label>
                        <input type="text" onChange={handleChange}  name='firstName' placeholder="First Name here" />
                    </div>
                    <div className='input-item'>
                        <label>Last Name</label>
                        <input type="text" onChange={handleChange}  name='lastName' placeholder="Last Name here" />
                    </div>
                    <div className='input-item'>
                        <label>Phone Number</label>
                        <input type="tel" onChange={handleChange}  name='phone' placeholder="Phone Number here" />
                    </div>
                    <div className='input-item'>
                        <label>Age</label>
                        <input type="number" onChange={handleChange}  name='age' placeholder="Age here" />
                    </div>
                    <div className='input-item'>
                        <label>Email</label>
                        <input type="email"  onChange={handleChange}  name='email' placeholder="Email here" />
                    </div>
                    <div className='input-item'>
                        <label>Address</label>
                        <input type="text"  onChange={handleChange}  name='address' placeholder="Address here" />
                    </div>
                    <div className='input-item'>
                        <label>City</label>
                        <input type="text" onChange={handleChange}  name='city' placeholder="City here" />
                    </div>
                    <div className='input-item'>
                        <label>Zipcode</label>
                        <input type="text" onChange={handleChange}  name='zipcode' placeholder="Zipcode here" />
                    </div>
                </div>
                <div className='flex-btn'>
                    <button>Reserve Now</button>
                </div>
            </form>
        </div>
    )
}

export default PopUpForm;