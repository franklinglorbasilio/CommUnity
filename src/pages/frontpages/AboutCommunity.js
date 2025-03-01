import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutCommunity() {
    const sectionRef = useRef(null);
    const [features, setFeatures] = useState([]);
    const [fade, setFade] = useState("fade-in");
    let timerRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1500, once: false });
        document.documentElement.style.overflowX = "hidden";
        document.body.style.overflowX = "hidden";
        return () => {
            document.documentElement.style.overflowX = "";
            document.body.style.overflowX = "";
        };
    }, []);

    useEffect(() => {
        const featureSets = [
            [
                { icon: "🌍", title: "Connect & Share", description: "Social features similar to Facebook." },
                { icon: "🛒", title: "Buy & Sell", description: "A seamless e-commerce experience." },
                { icon: "💬", title: "Seamless Communication", description: "Chat, join groups, and collaborate." },
                { icon: "📈", title: "Business Growth", description: "Find new opportunities and expand your reach." },
                { icon: "🚀", title: "Innovation Hub", description: "Stay ahead with new ideas and projects." },
                { icon: "🎨", title: "Creative Freedom", description: "Express yourself and collaborate on projects." }
            ],
            [
                { icon: "📢", title: "Community Support", description: "Get feedback and guidance from peers." },
                { icon: "⚙️", title: "Smart Tools", description: "Analytics, automation, and management tools." },
                { icon: "🤝", title: "Networking", description: "Engage with like-minded professionals." },
                { icon: "💡", title: "Idea Sharing", description: "Collaborate on innovative projects." },
                { icon: "📊", title: "Data Insights", description: "Access analytics for better decisions." },
                { icon: "🔒", title: "Privacy & Security", description: "Protect your data and stay safe online." }
            ]
        ];

        let index = 0;
        const changeFeatures = () => {
            setFade("fade-out");
            setTimeout(() => {
                setFeatures(featureSets[index]);
                setFade("fade-in");
                index = (index + 1) % featureSets.length;
            }, 800);
        };

        timerRef.current = setInterval(changeFeatures, 15000);
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                clearInterval(timerRef.current);
                changeFeatures();
                timerRef.current = setInterval(changeFeatures, 15000);
            }
        }, { threshold: 0.5 });

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            clearInterval(timerRef.current);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={sectionRef} style={{
            backgroundColor: "#000",
            color: "#fff",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 20px",
            maxWidth: "100%",
            overflow: "hidden",
            position: "relative"
        }}>
            <div style={{ maxWidth: "1000px", textAlign: "center", width: "100%" }}>
                <h2 style={{ fontWeight: "bold", color: "#fff", fontSize: "32px", textTransform: "uppercase", letterSpacing: "2px" }}>
                    About Our Community
                </h2>
                <p style={{ color: "#ccc", marginBottom: "20px", fontSize: "18px", maxWidth: "80%", margin: "auto" }}>
                    A futuristic platform designed for social engagement, business expansion, and creative exploration. Connect, innovate, and evolve together.
                </p>
                <div className={`feature-container ${fade}`} style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                    transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
                    opacity: fade === "fade-in" ? 1 : 0,
                    transform: fade === "fade-in" ? "translateY(0)" : "translateY(-20px)",
                    padding: "20px",
                    maxWidth: "100%",
                    overflow: "hidden"
                }}>
                    {features.map((feature, index) => (
                        <div key={index} data-aos="fade-up" data-aos-delay={index * 300} style={{
                            background: "#111",
                            padding: "30px",
                            borderRadius: "20px",
                            boxShadow: "0 10px 20px rgba(255,255,255,0.1)",
                            minWidth: "250px",
                            maxWidth: "280px",
                            textAlign: "center",
                            flexShrink: 1,
                            overflow: "hidden",
                            color: "#fff",
                            border: "1px solid #555",
                            transition: "transform 0.3s ease-in-out",
                            cursor: "pointer"
                        }}
                             onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                             onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                            <div style={{ fontSize: "40px", marginBottom: "10px" }}>{feature.icon}</div>
                            <h5 style={{ margin: "10px 0", color: "#fff", fontSize: "22px" }}>
                                {feature.title}
                            </h5>
                            <p style={{ color: "#bbb", fontSize: "15px" }}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}