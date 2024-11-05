import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../assets/styles/footer.css";

// Import images
import logo from "../assets/images/logo.png"; // Update with your logo file name
import facebookIcon from "../assets/images/facebook-icon.png"; // Social media icons
import twitterIcon from "../assets/images/twitter-icon.png";
import instagramIcon from "../assets/images/instagram-icon.png";
import linkedinIcon from "../assets/images/linkedin-icon.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        {/* Logo and About Us */}
        <Row>
          <Col md={4} className="text-center mb-4">
            <Image
              src={logo}
              alt="vStore Logo"
              fluid
              className="footer-logo"
            />
            <p className="mt-3">vStore - Your one-stop shop for the best products.</p>
          </Col>

          {/* Customer Service Links */}
          <Col md={4} className="mb-4">
            <h5>Customer Service</h5>
            <ul className="footer-links">
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/returns">Returns & Refunds</a></li>
              <li><a href="/shipping-info">Shipping Information</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Social Media Links */}
          <Col md={4} className="mb-4 text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src={facebookIcon} alt="Facebook" fluid />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Image src={twitterIcon} alt="Twitter" fluid />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src={instagramIcon} alt="Instagram" fluid />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src={linkedinIcon} alt="LinkedIn" fluid />
              </a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center py-3">
            <p>&copy; {currentYear} vStore. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
