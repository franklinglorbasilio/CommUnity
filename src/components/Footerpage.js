import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaGlobe, FaUsers } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoCom from "../assets/community-icon.png";
export default function Footerpage() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const mainMenu = ['Home', 'Community', 'Projects', 'Marketplace', 'FAQ', 'Blog', 'Events', 'Support'];
    const categories = ['Technology', 'Education', 'Health', 'Entertainment', 'Business', 'Lifestyle', 'Science', 'Sports'];

    return (
        <footer className="footer bg-dark text-light py-5">
            <Container>
                <Row className="align-items-center text-center text-md-start" data-aos="fade-up">
                    <Col xs={12} md={3} className="mb-4 mb-md-0">
                        <img src={LogoCom} alt="Website logo" className="mb-2 logo-hover" style={{ maxWidth: '120px' }} />
                        <h4 className="fw-bold">CommUnity</h4>
                        <p className="small">Building a better community together through innovation and collaboration.</p>
                    </Col>
                    <Col xs={12} md={3} className="mb-4 mb-md-0">
                        <h5 className="text-uppercase">Main Menu</h5>
                        <Row>
                            {mainMenu.map((menuItem, index) => (
                                <Col xs={6} key={index} className="mb-2">
                                    <a href={`/${menuItem.toLowerCase().replace(/\s+/g, '-')}`} className="text-light text-decoration-none footer-link">
                                        {menuItem}
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5 className="text-uppercase">Categories</h5>
                        <Row>
                            {categories.map((category, index) => (
                                <Col xs={6} key={index} className="mb-2">
                                    <a href={`/${category.toLowerCase().replace(/\s+/g, '-')}`} className="text-light text-decoration-none footer-link">
                                        {category}
                                    </a>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5 className="text-uppercase">Our Community</h5>
                        <p className="small">Join thousands of members who are making an impact.</p>
                        <a href="/community" className="text-light text-decoration-none footer-link join-now"><FaUsers className="me-2"/> Join Now</a>
                    </Col>
                </Row>
                <Row className="border-top pt-4 mt-4 text-center text-md-start" data-aos="fade-up">
                    <Col xs={12} md={3} className="mb-3 mb-md-0">
                        <h6 className="icon-hover"><FaMapMarkerAlt className="me-2"/> Address</h6>
                        <p className="small mb-0">123 Street, City, Country</p>
                        <p className="small icon-hover"><FaGlobe className="me-1"/> Website: www.example.com</p>
                    </Col>
                    <Col xs={12} md={3} className="mb-3 mb-md-0">
                        <h6 className="icon-hover"><FaClock className="me-2"/> Business Hours</h6>
                        <p className="small mb-0">Monday - Friday: 9AM - 6PM</p>
                        <p className="small">Saturday - Sunday: Closed</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h6 className="icon-hover"><FaEnvelope className="me-2"/> Contact Info</h6>
                        <p className="small mb-0 icon-hover"><FaEnvelope className="me-1"/> Email: CommUnityDev@gmail.com</p>
                        <p className="small icon-hover"><FaPhone className="me-1"/> Phone: +639-693-832-813</p>
                        <p className="small">Live Chat: Available 24/7</p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h6>Follow Us</h6>
                        <a href="#" className="text-light mx-2 footer-social"><FaFacebook size={24} /></a>
                        <a href="#" className="text-light mx-2 footer-social"><FaTwitter size={24} /></a>
                        <a href="#" className="text-light mx-2 footer-social"><FaInstagram size={24} /></a>
                        <a href="#" className="text-light mx-2 footer-social"><FaLinkedin size={24} /></a>
                        <a href="#" className="text-light mx-2 footer-social"><FaYoutube size={24} /></a>
                    </Col>
                </Row>
                <Row className="text-center mt-3">
                    <Col>
                        <p className="small mb-0">&copy; {new Date().getFullYear()} CommUnity. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .footer-link:hover, .footer-social:hover, .icon-hover:hover, .join-now:hover {
                    color: #ffffff;
                    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;
                    transform: scale(1.05);
                }

                .logo-hover:hover {
                    transform: rotate(5deg) scale(1.1);
                    transition: all 0.3s ease-in-out;
                }

                .footer-social:hover {
                    transform: scale(1.2);
                }

                .footer-link {
                    display: inline-block;
                    transition: transform 0.3s ease-in-out;
                }

                .footer-link:hover {
                    transform: translateY(-3px);
                }
            `}</style>
        </footer>
    );
}