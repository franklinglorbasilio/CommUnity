import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Header1.css";
import communityIcon from "../assets/community-icon.png";
import { FaHome, FaBlog, FaProjectDiagram, FaEnvelope, FaQuestionCircle, FaChevronDown, FaUserCircle, FaShoppingCart, FaHeadset, FaUsers, FaCog } from "react-icons/fa";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"} transition`} style={{ zIndex: 1050 }}>
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src={communityIcon}
                        alt="CommUnity Logo"
                        width="50" height="50"
                        style={{ borderRadius: "50%" }}
                        className="me-2"
                    />
                    <span className="fw-bold fs-4">
                        Comm<span className="animated-text">Unity</span>!
                    </span>
                </a>

                {/* Toggle Button for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item">
                            <a className="nav-link text-white-50 fw-semibold px-3 d-flex align-items-center gap-2" href="#home">
                                <FaHome /> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 fw-semibold px-3 d-flex align-items-center gap-2" href="#community">
                                <FaUsers /> Community
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 fw-semibold px-3 d-flex align-items-center gap-2" href="#projects">
                                <FaProjectDiagram /> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 fw-semibold px-3 d-flex align-items-center gap-2" href="#marketplace">
                                <FaShoppingCart /> Marketplace
                            </a>
                        </li>
                        {/* Dropdown Menu for FAQ */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link text-white-50 fw-semibold px-3 d-flex align-items-center gap-2 dropdown-toggle"
                                href="#" role="button" id="dropdownMenuLink"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <FaQuestionCircle /> FAQ
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`} aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item d-flex align-items-center gap-2" href="#blogs"><FaBlog /> Blogs</a></li>
                                <li><a className="dropdown-item d-flex align-items-center gap-2" href="#contact"><FaEnvelope /> Contact</a></li>
                                <li><a className="dropdown-item d-flex align-items-center gap-2" href="#support"><FaHeadset /> Support</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="d-lg-flex d-block text-center mt-3 mt-lg-0">
                        <a
                            href="#login"
                            className="btn btn-outline-light me-2 px-4 py-2 rounded-pill fw-bold hover-white"
                        >
                            Login
                        </a>
                        <a href="#register" className="btn btn-dark px-4 py-2 rounded-pill fw-bold shadow-sm">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}



import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Header1.css";
import communityIcon from "../assets/community-icon.png";
import { FaHome, FaBlog, FaProjectDiagram, FaEnvelope, FaQuestionCircle, FaChevronDown, FaUserCircle, FaShoppingCart, FaHeadset, FaUsers, FaCog } from "react-icons/fa";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "bg-white shadow-sm" : "bg-transparent"} transition`} style={{ zIndex: 1050 }}>
            <div className="container">
                {/* Logo */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src={communityIcon}
                        alt="CommUnity Logo"
                        width="50" height="50"
                        style={{ borderRadius: "50%" }}
                        className="me-2"
                    />
                    <span className="fw-bold fs-4">
                        Comm<span className="animated-text">Unity</span>!
                    </span>
                </a>

                {/* Toggle Button for Mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsNavCollapsed(!isNavCollapsed)}
                    aria-expanded={!isNavCollapsed}
                    aria-label="Toggle navigation"
                    style={{ filter: "invert(1)" }}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Content */}
                <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarNav" style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <ul className="navbar-nav mx-auto text-center">
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold px-3 d-flex align-items-center gap-2" href="#home">
                                <FaHome /> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold px-3 d-flex align-items-center gap-2" href="#community">
                                <FaUsers /> Community
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold px-3 d-flex align-items-center gap-2" href="#projects">
                                <FaProjectDiagram /> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold px-3 d-flex align-items-center gap-2" href="#marketplace">
                                <FaShoppingCart /> Marketplace
                            </a>
                        </li>
                        {/* Dropdown Menu for FAQ */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link text-white fw-semibold px-3 d-flex align-items-center gap-2 dropdown-toggle"
                                href="#" role="button" id="dropdownMenuLink"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <FaQuestionCircle /> FAQ
                            </a>
                            <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`} aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item d-flex align-items-center gap-2" href="#blogs"><FaBlog /> Blogs</a></li>
                                <li><a className="dropdown-item d-flex align-items-center gap-2" href="#contact"><FaEnvelope /> Contact</a></li>
                                <li><a className="dropdown-item d-flex align-items-center gap-2" href="#support"><FaHeadset /> Support</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="d-lg-flex d-block text-center mt-3 mt-lg-0">
                        <a
                            href="#login"
                            className="btn btn-outline-light me-2 px-4 py-2 rounded-pill fw-bold hover-white"
                        >
                            Login
                        </a>
                        <a href="#register" className="btn btn-dark px-4 py-2 rounded-pill fw-bold shadow-sm">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}