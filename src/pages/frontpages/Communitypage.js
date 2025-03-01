import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ParticleFlow from "../../assets/ParticleFlow";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = ["All", "Trending", "Development", "Design", "AI & ML", "Blockchain", "Cybersecurity", "Open Source"];

const data = [
    { id: 1, img: "https://via.placeholder.com/400x250", title: "Project Alpha", desc: "A revolutionary new platform for AI-driven automation.", category: "AI & ML", btn: "Learn More" },
    { id: 2, img: "https://via.placeholder.com/400x250", title: "Open Source Initiative", desc: "Empowering developers with open-source tools.", category: "Open Source", btn: "Contribute" },
    { id: 3, img: "https://via.placeholder.com/400x250", title: "Community-Driven App", desc: "Built for and by the community.", category: "Trending", btn: "Join Us" },
    { id: 4, img: "https://via.placeholder.com/400x250", title: "Next-Gen Blockchain", desc: "A secure and decentralized blockchain framework.", category: "Blockchain", btn: "Explore" },
    { id: 5, img: "https://via.placeholder.com/400x250", title: "AI in Communities", desc: "The role of AI in shaping future societies.", category: "AI & ML", btn: "Understand" },
    { id: 6, img: "https://via.placeholder.com/400x250", title: "Future Tech Lab", desc: "Innovation in AI, VR, and quantum computing.", category: "Development", btn: "Discover" }
];

export default function CommunityPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const filteredData = selectedCategory === "All" ? data : data.filter(item => item.category === selectedCategory);

    return (
        <div className="container-fluid bg-black text-white min-vh-100 d-flex flex-column flex-md-row">
            {/* Sidebar - Categories */}
            <div className="col-md-2 p-4 d-flex flex-column" data-aos="fade-right">
                <h4 className="text-light mb-3">Categories</h4>
                <ul className="list-unstyled mt-3">
                    {categories.map((category, index) => (
                        <li key={index}
                            className={`py-2 px-3 text-light mb-2 cursor-pointer border-start border-3 
                                ${selectedCategory === category ? 'border-primary fw-bold' : 'border-secondary'}`}
                            onClick={() => setSelectedCategory(category)}
                            style={{
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer",
                                borderColor: selectedCategory === category ? "#3366ff" : "#555",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "#3366ff";
                                e.currentTarget.style.background = "#222";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = selectedCategory === category ? "#3366ff" : "#555";
                                e.currentTarget.style.background = "transparent";
                            }}
                        >
                            <span className="d-block p-2 rounded"
                                  style={{
                                      transition: "0.3s",
                                      background: selectedCategory === category ? "#333" : "transparent"
                                  }}>
                                {category}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="col-md-10 position-relative">
                <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
                    <ParticleFlow />
                </div>

                <div className="position-relative z-10 text-center py-5 px-3">
                    <h1 className="fw-bold display-4 text-white" data-aos="fade-up">Join to Our Community</h1>
                    <p className="mx-auto lead" style={{ maxWidth: "700px" }} data-aos="fade-up" data-aos-delay="200">
                        A dynamic space to explore projects, share knowledge, and collaborate with innovators worldwide.
                    </p>

                    {/* Swiper Slider */}
                    <section className="mt-5" data-aos="fade-up" data-aos-delay="300">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={20}
                            navigation
                            modules={[Navigation]}
                            className="w-100"
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1200: { slidesPerView: 4 }
                            }}
                        >
                            {filteredData.map((item) => (
                                <SwiperSlide key={item.id} className="p-3">
                                    <div
                                        className="card text-light shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
                                        style={{
                                            backgroundColor: "rgb(17, 17, 17)",
                                            border: "1px solid #555",
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
                                            boxShadow: "0px 0px 8px rgba(51, 102, 255, 0.2)", // Blue glow effect
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.border = "1px solid #3366ff";  // Blue border on hover
                                            e.currentTarget.style.boxShadow = "0px 0px 12px rgba(51, 102, 255, 0.8)"; // Blue glow
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.border = "1px solid #555";
                                            e.currentTarget.style.boxShadow = "0px 0px 8px rgba(51, 102, 255, 0.2)";
                                        }}
                                    >
                                        <img src={item.img} alt={item.title} className="card-img-top"
                                             style={{ objectFit: "cover", height: "200px" }} />
                                        <div className="card-body p-4">
                                            <h5 className="card-title fw-bold text-white">{item.title}</h5>
                                            <p className="card-text text-secondary small">{item.desc}</p>
                                            <button
                                                className="btn btn-primary w-100 mt-3 rounded-pill fw-semibold shadow-sm transition-transform transform hover:scale-105">
                                                {item.btn}
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </section>
                </div>
            </div>
        </div>
    );
}
