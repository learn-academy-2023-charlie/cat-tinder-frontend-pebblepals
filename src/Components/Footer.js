import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Navbar color="primary">
        <NavbarBrand href="/">
        &copy; Jessica and Suri | 2023
        </NavbarBrand>
      </Navbar>
    </footer>
  );
};


export default Footer;