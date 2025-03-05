import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/Header1.css";
import { Link, useLocation } from "react-router-dom";
import communityIcon from "../assets/community-icon.png";
import {
    FaHome, FaBlog, FaProjectDiagram, FaEnvelope, FaQuestionCircle,
    FaShoppingCart, FaHeadset, FaUsers
} from "react-icons/fa";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top transition ${isScrolled ? "scrolled-nav" : "transparent-nav"}`} style={{ zIndex: 1050 }}>
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand d-flex align-items-center logo-hover" to="/">
                    <img
                        src={communityIcon}
                        alt="CommUnity Logo"
                        width="50"
                        height="50"
                        style={{ borderRadius: "50%" }}
                        className="me-2"
                    />
                    <span className="fw-bold fs-4 text-white">
                        Comm<span className="animated-text">Unity</span>!
                    </span>
                </Link>

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
                <div className={`collapse navbar-collapse ${isNavCollapsed ? "" : "show"}`} id="navbarNav">
                    <ul className="navbar-nav mx-auto text-center">
                        {[
                            { path: "/", icon: <FaHome />, name: "Home" },
                            { path: "/community", icon: <FaUsers />, name: "Community" },
                            { path: "/projects", icon: <FaProjectDiagram />, name: "Projects" },
                            { path: "/marketplace", icon: <FaShoppingCart />, name: "Marketplace" }
                        ].map((item, index) => (
                            <li className="nav-item" key={index}>
                                <Link
                                    className={`nav-link fw-semibold px-3 d-flex align-items-center gap-2 
                                    ${location.pathname === item.path ? "active-link" : "text-white link-hover"}`}
                                    to={item.path}
                                >
                                    {item.icon} {item.name}
                                </Link>
                            </li>
                        ))}
                        {/* Dropdown */}
                        <li className="nav-item dropdown">
                            <button
                                className="nav-link text-white fw-semibold px-3 d-flex align-items-center gap-2 dropdown-toggle bg-transparent border-0 dropdown-hover"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <FaQuestionCircle/> FAQ
                            </button>
                            <ul className={`dropdown-menu glass-menu ${isDropdownOpen ? "show" : ""}`}>
                                {[
                                    { path: "/blogs", icon: <FaBlog />, name: "Blogs" },
                                    { path: "/contact", icon: <FaEnvelope />, name: "Contact" },
                                    { path: "/support", icon: <FaHeadset />, name: "Support" }
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            className={`dropdown-item d-flex align-items-center gap-2 
                                            ${location.pathname === item.path ? "active-link" : "text-dark link-hover"}`}
                                            to={item.path}
                                        >
                                            {item.icon} {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>

                    {/* Login & Register Buttons */}
                    <div className="d-lg-flex d-block text-center mt-3 mt-lg-0">
                        <Link to="/login"
                              className="btn btn-outline-light me-2 px-4 py-2 rounded-pill fw-bold button-hover">
                            Login
                        </Link>
                        <Link to="/register" className="btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-sm button-glow">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
