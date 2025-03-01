import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';

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

    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 4));
        }, 15000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section style={{ backgroundColor: '#121212', color: 'white' }}>
        <div className="container py-5">
            <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">User Testimonials</h2>
            <div className="d-flex flex-wrap justify-content-center gap-4">
                {testimonials.slice(currentIndex, currentIndex + 5).map((testimonial, index) => (
                    <div className="card testimonial-card border-0 shadow-lg p-4 text-center" key={index} data-aos="fade-in" style={{ backgroundColor: '#1E1E1E', color: 'white' }}>
                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <img src={testimonial.img} alt={testimonial.name} className="rounded-circle" />
                            <div>
                                <h5 className="mb-0">{testimonial.name}</h5>
                                <small className="text-muted">{testimonial.role}</small>
                            </div>
                        </div>
                        <p className="mt-3">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}