import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    image: "https://miro.medium.com/max/3200/1*oE-uItBUn8ap5U8K1-OOpQ.jpeg",
    title: `Project ${i + 1}`,
    description: "An innovative project with unique solutions and impactful ideas."
}));

export default function ProjectList() {
    const [visibleProjects, setVisibleProjects] = useState(6);
    const [loading, setLoading] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [rippleStyle, setRippleStyle] = useState({});

    const buttonStyle = {
        position: "relative",
        overflow: "hidden",
        padding: "12px 30px",
        fontSize: "16px",
        fontWeight: "600",
        textTransform: "uppercase",
        color: "white",
        background: "linear-gradient(45deg, #6a11cb, #2575fc)", // Gradient background
        border: "none",
        borderRadius: "50px", // Rounded corners for a modern look
        cursor: loading ? "not-allowed" : "pointer",
        transition: "all 0.3s ease-in-out",
        boxShadow: isHovered && !loading ? "0 5px 15px rgba(0, 0, 0, 0.2)" : "none",
        transform: isHovered && !loading ? "scale(1.05)" : "scale(1)",
    };

    const rippleEffect = (e) => {
        if (loading) return;
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        setRippleStyle({
            width: size,
            height: size,
            left: `${x}px`,
            top: `${y}px`,
            opacity: "0.5",
            position: "absolute",
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "ripple 0.6s ease-out",
        });

        setTimeout(() => {
            setRippleStyle({});
        }, 600);
    };

    const spinnerStyle = {
        animation: "spin 1s linear infinite",
        marginRight: "10px",
    };

    // Inject keyframes for ripple and spinner animations directly
    const rippleKeyframes = `
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 0.4;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;

    const spinnerKeyframes = `
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;

    // Inject keyframes into the document head
    React.useEffect(() => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(rippleKeyframes, styleSheet.cssRules.length);
        styleSheet.insertRule(spinnerKeyframes, styleSheet.cssRules.length);
    }, []);
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleViewMore = () => {
        setLoading(true);
        setTimeout(() => {
            setVisibleProjects(projects.length);
            setLoading(false);
        }, 1500);
    };

    return (
        <section className="bg-black" style={{ textAlign: "center", paddingTop: "50px" }}>
            <div className="container">
                {Array.from({ length: Math.ceil(visibleProjects / 3) }, (_, rowIndex) => (
                    <div className="row justify-content-center" key={rowIndex}>
                        {projects.slice(rowIndex * 3, rowIndex * 3 + 3).map((project) => (
                            <div key={project.id} className="col-md-4 col-sm-6 col-12 mb-4" data-aos="fade-up">
                                <div
                                    style={{
                                        position: "relative",
                                        overflow: "hidden",
                                        borderRadius: "15px",
                                        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
                                        transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out",
                                        textAlign: "center",
                                        cursor: "pointer",
                                        backgroundColor: "white"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "scale(1.05)";
                                        e.currentTarget.style.backgroundColor = "white";
                                        e.currentTarget.querySelector(".overlay").style.opacity = "0";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.querySelector(".overlay").style.opacity = "1";
                                    }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: "15px",
                                            filter: "brightness(80%)"
                                        }}
                                    />
                                    <div
                                        className="overlay"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "white",
                                            padding: "15px",
                                            borderRadius: "15px",
                                            textAlign: "center",
                                            opacity: "1",
                                            transition: "opacity 0.3s ease-in-out"
                                        }}
                                    >
                                        <h5 style={{ fontSize: "1.8rem", fontWeight: "bold", marginBottom: "10px" }}>{project.title}</h5>
                                        <p style={{ fontSize: "1rem", maxWidth: "80%" }}>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                { visibleProjects < projects.length && (
                    <button
                        onClick={(e) => {
                            handleViewMore(e);
                            rippleEffect(e); // Apply ripple effect on button click
                        }}
                        style={buttonStyle}
                        disabled={loading}
                        className="mt-4"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {loading ? (
                            <>
            <span
                className="spinner-border spinner-border-sm me-2"
                style={spinnerStyle}
                role="status"
                aria-hidden="true"
            ></span>
                                Loading...
                            </>
                        ) : (
                            "View More"
                        )}
                        {/* Ripple Effect */}
                        <span
                            style={{
                                ...rippleStyle,
                                position: "absolute",
                                top: 0,
                                left: 0,
                                pointerEvents: "none",
                            }}
                        ></span>
                    </button>
                )}
            </div>
        </section>
    );
}