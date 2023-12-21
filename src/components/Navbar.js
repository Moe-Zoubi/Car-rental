import carLogo from "../images/car-logo/car-logo.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Navbar() {

    const navigate = useNavigate();
    const [showLinks, setShowLinks] = useState(false);

    function toggleLink() {
        setShowLinks(!showLinks)
      }

    return(
        <div className="navbar">
            <img src={carLogo} alt="logo" />
            <p className="toggle-links" onClick={() => toggleLink()}><FontAwesomeIcon icon={faBars } size="2xl" /></p>
            <div className={showLinks ? "show-mobile-nav" : "hide-mobile-nav"}>
                <p className="close-nav" onClick={() => toggleLink()} ><FontAwesomeIcon icon={faXmark}/></p>
                <div className="mobile-links">
                    <p onClick={() => {toggleLink(); navigate("/home")}}>Home</p>
                    <p onClick={() => {toggleLink(); navigate("/about")}}>About</p>
                    <p onClick={() => {toggleLink(); navigate("/reviews")}}>Reviews</p>
                    <p onClick={() => {toggleLink(); navigate("/team")}}>Our Team</p>
                    <p onClick={() => {toggleLink(); navigate("/contact")}}>Contact</p>
                </div>
            </div>
            <div className="links-container">
                <ul className="links">
                    <li onClick={() => navigate("/home")}>Home</li>
                    <li onClick={() => navigate("/about")}>About</li>
                    <li onClick={() => navigate("/reviews")}>Reviews</li>
                    <li onClick={() => navigate("/team")}>Our Team</li>
                    <li onClick={() => navigate("/contact")}>Contact</li>
                </ul>
            </div>
            <div className="login-btns">
                <button className="signIn-btn">Sign in</button>
                <button className="register-btn">Register</button>
            </div>
        </div>
    )
}

export default Navbar;