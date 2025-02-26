import { useState, useEffect } from "react";
import ParticleNetwork from "../../assets/particleNetwork.jsx";

const testimonials = [
    { text: "This community helped me grow in ways I never imagined!", author: "Alice" },
    { text: "A hub for innovation and creativity. I love being a part of it.", author: "Bob" },
    { text: "The collaborative spirit here is unmatched. Highly recommended!", author: "Charlie" },
    { text: "Joining this community was the best decision I've ever made.", author: "Diana" }
];

function AnimatedCard({ testimonial, cardKey }) {
    return (
        <div
            key={cardKey}
            className="card p-4 shadow-lg fade-in testimonial-card"
            style={{ maxWidth: "300px", margin: "10px", backgroundColor: "rgba(0,0,0,0.5)", border: "none" }}
        >
            <blockquote className="blockquote mb-0">
                <p className="fs-5" style={{ color: "rgba(255,255,255,0.85)" }}>
                    &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer className="blockquote-footer mt-3" style={{ color: "rgba(255,255,255,0.85)" }}>
                    <cite title="Source Title">{testimonial.author}</cite>
                </footer>
            </blockquote>
        </div>
    );
}

export default function Homepages() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const indices = [
        currentTestimonialIndex,
        (currentTestimonialIndex + 1) % testimonials.length,
        (currentTestimonialIndex + 2) % testimonials.length
    ];

    return (
        <>
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 0.8s ease-out;
          }
          .testimonial-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .testimonial-card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          }
        `}
            </style>
            <ParticleNetwork />
            <section className="d-flex align-items-center" style={{ minHeight: "100vh", width: "100vw" }}>
                <div className="container text-center text-lg-start" style={{ color: "rgba(255,255,255,0.85)" }}>
                    <div className="row align-items-center mt-5">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0">
                            <h1 className="fw-bold display-4" style={{color: "rgba(255,255,255,0.85)"}}>
                                Welcome to Our Comm<span className="animated-text">Unity</span>
                            </h1>
                            <p className="lead" style={{color: "rgba(255,255,255,0.85)"}}>
                                Join us in exploring knowledge, sharing ideas, and growing together.
                            </p>
                            <a href="#login" className="btn btn-outline-light px-5 py-2 rounded-pill fw-bold">
                                Request Now!
                            </a>
                        </div>
                        <div className="col-12 col-lg-6 d-flex flex-column align-items-center">
                            <div className="d-flex flex-column flex-md-row justify-content-center">
                                <AnimatedCard testimonial={testimonials[indices[0]]} cardKey={`top-${indices[0]}`} />
                            </div>
                            <div className="d-flex flex-column flex-md-row justify-content-center">
                                <AnimatedCard testimonial={testimonials[indices[1]]} cardKey={`bottom1-${indices[1]}`} />
                                <AnimatedCard testimonial={testimonials[indices[2]]} cardKey={`bottom2-${indices[2]}`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}