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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [index, setIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 4));
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section style={{backgroundColor: '#121212', color: 'white'}}>
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
                                onClick={(e) => {
                                    let ripple = document.createElement("span");
                                    ripple.className = "ripple";
                                    ripple.style.left = `${e.nativeEvent.offsetX}px`;
                                    ripple.style.top = `${e.nativeEvent.offsetY}px`;
                                    e.currentTarget.appendChild(ripple);
                                    setTimeout(() => ripple.remove(), 600);
                                }}
                            >
                                Register Now!
                            </button>

                            <style>
                                {`
  .btn-primary {
    position: relative;
    overflow: hidden;
  }

  .btn-primary::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: 50%;
    left: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 10%);
    transition: transform 0.4s ease;
    transform: translate(-50%, -50%) scale(0);
  }

  .btn-primary:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  .ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
  }

  @keyframes ripple-animation {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`}
                            </style>

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

            <section className="bg-black py-5">
                <div
                    className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-50 pb-5">

                    {/* Section Title */}
                    <h2 className="fw-bold text-white mb-3" data-aos="fade-up">
                        What Our Users Say 💬
                    </h2>
                    <p className="text-white-50 mb-4" data-aos="fade-up" data-aos-delay="200">
                        Hear from our satisfied users across the globe.
                    </p>

                    {/* Testimonials Carousel */}
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

            <section style={{
                backgroundColor: '#0D0D0D',
                color: 'white',
                padding: '80px 0',
                overflow: 'hidden',
                position: 'relative'
            }}>
                <div className="container" data-aos="fade-up">
                    <div className="row align-items-center">
                        {/* Left: Email Subscription */}
                        <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center p-4"
                             data-aos="fade-right">
                            <h2 className="fw-bold mb-3 text-primary" style={{ animation: 'fadeIn 2s ease-in-out'}}>
                                Stay Updated with Us
                            </h2>
                            <p className="mb-4" style={{animation: 'fadeIn 2.5s ease-in-out', maxWidth: '450px'}}>
                                Subscribe to receive exclusive updates, product news, and special offers straight to
                                your inbox.
                            </p>
                            <div className="w-100 d-flex gap-2">
                                <input
                                    type="email"
                                    className="form-control rounded-3 p-3"
                                    placeholder="Enter your email"
                                    style={{
                                        flex: 1,
                                        minWidth: '250px',
                                        transition: 'all 0.3s ease-in-out',
                                        fontSize: '16px'
                                    }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="btn btn-primary fw-bold rounded-3 px-4 py-2 shadow-lg"
                                    style={{fontSize: '18px', transition: 'transform 0.3s ease-in-out'}}
                                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                                >
                                    Subscribe
                                </button>
                            </div>
                            <p className="mt-3 text-muted"
                               style={{fontSize: '14px', animation: 'fadeIn 3s ease-in-out'}}>
                                We respect your privacy. No spam, unsubscribe anytime.
                            </p>
                        </div>

                        {/* Right: Product Promotion */}
                        <div className="col-lg-6 text-center p-4" data-aos="fade-left">
                            <div className="position-relative d-inline-block" style={{animation: 'float 3s infinite'}}>
                                <img
                                    src="https://cdn.dribbble.com/userupload/3278329/file/original-e84010752dc3eedb5d297b01e2f860d9.png?compress=1&resize=752x"
                                    alt="Product Promotion" className="img-fluid rounded shadow-lg"
                                    style={{maxWidth: '100%'}}/>
                                <div
                                    className="promo-badge position-absolute top-0 start-0 bg-primary text-white p-2 fw-bold rounded"
                                    style={{transform: 'rotate(-10deg)'}}>
                                    New & Exciting!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(https://via.placeholder.com/1600x900)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: -1
                }}></div>
                <style>
                    {`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                `}
                </style>
            </section>
        </section>

    );
}