import React from "react";
import { Navbar } from "reactstrap";
import rockLogo from "../Assets/rock-logo.png";

const Header = () => {
    return (
        <>
            <Navbar className="header" color="primary">
                <span className="main-font">Pebble Pals</span>
                <img className="imglogo" src={rockLogo} alt="Rock Logo" />
            </Navbar>
        </>
    );
}

export default Header;
