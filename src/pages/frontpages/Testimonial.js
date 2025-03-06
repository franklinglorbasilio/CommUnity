import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";

const testimonials = [
    { name: "Jane Doe", role: "Software Engineer", review: "This platform has changed the way I connect with my community. Highly recommend!", img: "https://via.placeholder.com/60" },
    { name: "John Smith", role: "Product Manager", review: "Amazing UI and easy to use. The best networking site I've used so far!", img: "https://via.placeholder.com/60" },
    { name: "Alice Brown", role: "UI/UX Designer", review: "Fantastic experience! The design is sleek and professional.", img: "https://via.placeholder.com/60" },
    { name: "Michael Lee", role: "Developer", review: "The best platform for collaboration!", img: "https://via.placeholder.com/60" },
    { name: "Emma Wilson", role: "Marketing Specialist", review: "User-friendly and powerful. Love the experience!", img: "https://via.placeholder.com/60" },
    { name: "Daniel Carter", role: "Entrepreneur", review: "A must-have for growing a network online.", img: "https://via.placeholder.com/60" },
    { name: "Sophia Martinez", role: "Freelancer", review: "Super intuitive design and great community.", img: "https://via.placeholder.com/60" },
    { name: "Liam Johnson", role: "Data Scientist", review: "The analytics and interactions are top-notch.", img: "https://via.placeholder.com/60" },
    { name: "Olivia Davis", role: "Content Creator", review: "Perfect for connecting with like-minded people.", img: "https://via.placeholder.com/60" },
    { name: "Ethan White", role: "Investor", review: "Great potential and an excellent platform.", img: "https://via.placeholder.com/60" }
];

export default function TestimonialPage() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
    }, []);

    return (
        <section style={{backgroundColor: '#121212', color: 'white'}}>
            {/* Promo Section */}
            <section
                className="promo-section text-dark py-5 position-relative bg-black text-white min-vh-100 d-flex justify-content-center align-items-center"
            >
                <div className="container position-relative z-2">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-6 text-content p-4" data-aos="fade-right">
                            <h1 className="fw-bold display-4 text-white">
                                A Platform for Growth, Innovation & Connection 🚀
                            </h1>
                            <p className="mt-3 text-white-50">
                                Empower your journey with a next-generation platform designed for **social engagement,
                                business expansion, and creative collaboration**. Connect with like-minded
                                professionals, leverage smart tools for automation and analytics, and share
                                groundbreaking ideas. Gain valuable insights, protect your data with top-tier security,
                                and build meaningful relationships—all in one powerful space built for the future.
                            </p>
                            <button
                                className="btn btn-primary mt-3 position-relative overflow-hidden"
                                style={{
                                    fontSize: "1rem",
                                    padding: "10px 20px",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    boxShadow: "0px 6px 20px rgba(0, 123, 255, 0.5)",
                                    borderRadius: "12px",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.05)";
                                    e.currentTarget.style.boxShadow = "0px 4px 20px rgba(0, 123, 255, 0.6)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                    e.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 123, 255, 0.3)";
                                }}
                            >
                                Register Now!
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="col-lg-6 text-center" data-aos="fade-left">
                            <div
                                className="video-placeholder bg-secondary rounded shadow-lg position-relative"
                                style={{height: "300px"}}
                            >
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                    title="Embedded Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="rounded"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Carousel */}
            <section className="bg-black py-5">
                <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-50 pb-5">
                    <h2 className="fw-bold text-white mb-3" data-aos="fade-up">
                        What Our Users Say 💬
                    </h2>
                    <p className="text-white-50 mb-4" data-aos="fade-up" data-aos-delay="200">
                        Hear from our satisfied users across the globe.
                    </p>

                    <Carousel className="w-100" indicators={false} controls={true} interval={5000}>
                        {testimonials.map((testimonial, idx) => (
                            <Carousel.Item key={idx}>
                                <div className="col-md-6 mx-auto">
                                    <div
                                        className="testimonial-card p-4 text-white text-center rounded shadow"
                                        data-aos="fade-up"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.1)",
                                            borderRadius: "12px",
                                            transition: "transform 0.3s ease-in-out",
                                        }}
                                    >
                                        {/* User Info */}
                                        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
                                            <img src={testimonial.img} alt={testimonial.name} className="rounded-circle"
                                                 style={{width: "60px", height: "60px", border: "3px solid #fff"}}/>
                                            <div>
                                                <h5 className="mb-0 text-white">{testimonial.name}</h5>
                                                <small className="text-muted">{testimonial.role}</small>
                                            </div>
                                        </div>
                                        {/* Review */}
                                        <p className="mt-2 text-white-50">"{testimonial.review}"</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>

                    {/* Button to Show Form */}
                    <button className="btn btn-outline-light mt-4" onClick={() => setShowModal(true)}>
                        Share Your Experience ✨
                    </button>
                </div>
            </section>

            {/* Modal for Form */}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Share Your Experience</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Role</Form.Label>
                            <Form.Control type="text" placeholder="e.g., Developer, Designer, etc."/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Review</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Share your thoughts..."/>
                        </Form.Group>
                        <Button variant="primary" className="w-100" onClick={() => setShowModal(false)}>
                            Submit Review
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </section>
    );
}
