import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";


const CommunityProject = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
            easing: "ease-in-out",
        });

        AOS.refresh();
    }, []);

    const projects = [
        { name: "System Alpha", description: "A cutting-edge platform for seamless communication." },
        { name: "System Beta", description: "An AI-powered analytics tool for businesses." },
        { name: "System Gamma", description: "A cloud-based collaboration suite for teams." },
        { name: "System Delta", description: "A secure and scalable e-commerce framework." }
    ];
    const articles = [
        {
            title: "The Best Web Design Software Companies for 2025",
            image: "https://via.placeholder.com/60",
            link: "#",
        },
        {
            title: "How Much Does It Cost to Build a Website in 2025?",
            image: "https://via.placeholder.com/60",
            link: "#",
        },
        {
            title: "10 First Post Ideas to Introduce Your New Business on Social Media",
            image: "https://via.placeholder.com/60",
            link: "#",
        },      {
            title: "10 First Post Ideas to Introduce Your New Business on Social Media",
            image: "https://via.placeholder.com/60",
            link: "#",
        },
    ];
    return (
        <div
            className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center p-4"
            style={{ background: "#121212", color: "#ffffff" }}
        >
            {/* Header Section */}
            <header className="text-center mb-4 animate__animated animate__fadeInDown">
                <h1 className="fw-bold text-primary">🌍 Community Projects Hub</h1>
                <p className="text-white">Explore top-rated projects, reviews, and the latest innovations.</p>
            </header>

            {/* Carousel Section with New Content */}
            <Carousel className="w-75 mb-5" data-aos="fade-up">
                {[
                    { image: "https://i.pinimg.com/originals/ce/d6/0f/ced60faead288817b70d1bde0e659d2f.jpg", title: "Innovative AI Tools", desc: "Discover AI-driven solutions transforming industries." },
                    { image: "https://cdn.dribbble.com/users/5890862/screenshots/19058407/school_dribbel_4x.png", title: "Smart Home Tech", desc: "Explore the latest in home automation and IoT." },
                    { image: "https://cdn.dribbble.com/users/998672/screenshots/7161416/media/79bf91baf24d4c05ca69b714022ac2fc.png?compress=1&resize=400x300&vertical=top", title: "Next-Gen Mobile Apps", desc: "Cutting-edge mobile applications for everyday life." }
                ].map((item, index) => (
                    <Carousel.Item key={index}>
                        <img className="d-block w-100 rounded-3" src={item.image} alt={`Slide ${index + 1}`} />
                        <Carousel.Caption>
                            <h5 className="text-white fw-bold bg-dark p-2 rounded-3">{item.title}</h5>
                            <p className="text-white bg-dark p-2 rounded-3">{item.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="row w-100">
                {/* Left Sidebar */}
                <div
                    className="col-lg-3 text-white"
                    style={{
                        background: "linear-gradient(135deg, #0F0F0F 0%, #1C1C24 100%)",
                        padding: "20px",
                        borderRadius: "16px",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                    }}
                >
                    {/* Featured Projects */}
                    <Card
                        className="text-white p-4 border-0 shadow-sm"
                        style={{
                            background: "rgba(20, 20, 20, 0.9)",
                            borderRadius: "16px",
                            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                        }}
                        data-aos="fade-right"
                    >
                        <Card.Body>
                            {/* Section Title */}
                            <h5 className="fw-bold text-purple-400 mb-4">📚 Must Reads</h5>

                            {/* Articles List */}
                            {articles.map((article, index) => (
                                <a
                                    key={index}
                                    href={article.link}
                                    className="d-flex align-items-center gap-3 p-3 rounded text-decoration-none"
                                    style={{
                                        background: "#18181B",
                                        borderRadius: "12px",
                                        marginBottom: "10px",
                                        transition: "background-color 0.3s, transform 0.3s, box-shadow 0.3s",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#292929";
                                        e.currentTarget.style.transform = "scale(1.03)";
                                        e.currentTarget.style.boxShadow = "0 4px 10px rgba(167, 139, 250, 0.3)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "#18181B";
                                        e.currentTarget.style.transform = "scale(1)";
                                        e.currentTarget.style.boxShadow = "none";
                                    }}
                                >
                                    <img
                                        src={article.image}
                                        alt="Article Thumbnail"
                                        className="rounded object-cover"
                                        width="55"
                                        height="55"
                                        style={{objectFit: "cover", borderRadius: "10px"}}
                                    />
                                    <div className="flex-grow-1">
                                        <h6
                                            className="text-white fw-semibold mb-1"
                                            style={{fontSize: "0.95rem", lineHeight: "1.4"}}
                                            onMouseEnter={(e) => (e.target.style.color = "#A78BFA")}
                                            onMouseLeave={(e) => (e.target.style.color = "white")}
                                        >
                                            {article.title}
                                        </h6>
                                        <small className="text-gray-400">Read more →</small>
                                    </div>
                                </a>
                            ))}
                            <a
                                href="#"
                                className="text-indigo-400 fw-semibold d-block mt-3 text-center"
                                style={{fontSize: "0.95rem"}}
                                onMouseEnter={(e) => (e.target.style.color = "#C4B5FD")}
                                onMouseLeave={(e) => (e.target.style.color = "#6366F1")}
                            >
                                See all articles →
                            </a>
                        </Card.Body>
                    </Card>
                        <Card
                            className="text-black p-4 shadow-lg border-0 mt-4"
                            style={{
                                background: "white",
                                borderRadius: "16px",
                                boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
                            }}
                            data-aos="fade-up"
                        >
                            <Card.Body className="text-center">
                                <Card.Title className="text-purple-600 fw-bold d-flex justify-content-center align-items-center mb-3">
                                    <span className="animate__animated animate__pulse animate__infinite">🌟</span>
                                    <span className="ms-2">Community Insights</span>
                                </Card.Title>
                                <Card.Text className="mb-4 text-gray-700 small">
                                    Stay updated with the latest innovations and discussions in our community.
                                </Card.Text>
                                <Button
                                    variant="outline-primary"
                                    className="fw-semibold w-100 rounded-pill px-4 py-2"
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = "#6366F1";
                                        e.target.style.borderColor = "#6366F1";
                                        e.target.style.color = "white";
                                        e.target.style.boxShadow = "0 0 10px rgba(99, 102, 241, 0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = "transparent";
                                        e.target.style.borderColor = "#6366F1";
                                        e.target.style.color = "#6366F1";
                                        e.target.style.boxShadow = "none";
                                    }}
                                    style={{
                                        border: "2px solid #6366F1",
                                        color: "#6366F1",
                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                                        transition: "all 0.3s ease-in-out",
                                    }}
                                >
                                    Discover Now
                                </Button>
                            </Card.Body>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="col-lg-9" data-aos="fade-down">
                    <Card className="p-4 mb-4 text-white rounded-3 shadow-lg d-flex flex-column align-items-start"
                          style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 56%, rgba(0,212,255,1) 100%)"}}>
                        <Card.Body>
                            <Card.Title className="fw-bold text-white">🚀 IONOS - Build Your Website Your
                                Way</Card.Title>
                            <Card.Text className="text-white"><strong>26,467 reviews</strong> ⭐⭐⭐⭐⭐ (4.8/5)</Card.Text>
                            <ul className="text-white list-unstyled">
                                <li className="text-white">✅ Responsive website templates</li>
                                <li className="text-white">✅ SEO & analytics tools included</li>
                                <li className="text-white">✅ No coding or design experience required</li>
                            </ul>
                            <Button variant="light" className="text-primary mt-2">Learn More</Button>
                        </Card.Body>
                    </Card>

                    {/* Featured Projects */}
                    <h5 className="text-primary mb-3">📌 Featured Projects</h5>
                    <div className="row gx-3 gy-4">
                        {[
                            {
                                name: "🚀 Project A - Web App",
                                desc: "A modern web app for users.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            },
                            {
                                name: "🚀 Project A - Web App",
                                desc: "A modern web app for users.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            },
                            {
                                name: "🚀 Project A - Web App",
                                desc: "A modern web app for users.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            }, {
                                name: "🚀 Project A - Web App",
                                desc: "A modern web app for users.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            }, {
                                name: "🚀 Project A - Web App",
                                desc: "A modern web app for users.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            },
                            {
                                name: "📱 Project B - Mobile App",
                                desc: "A powerful mobile experience.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            },
                            {
                                name: "🌍 Project C - Community Forum",
                                desc: "Engage and discuss ideas.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            },
                            {
                                name: "🎨 Project D - UI Design",
                                desc: "Creating the best designs.",
                                image: "https://cdn.dribbble.com/users/2715276/screenshots/14532243/media/96556c356df781e941353c78faa2f01d.png?resize=700x525&vertical=center"
                            },
                        ].map((project, index) => (
                            <div className="col-md-3" key={index} data-aos="fade-down">
                                <Card
                                    className="p-2 text-white bg-dark border-0 shadow rounded-3 h-100"
                                    style={{transition: "0.3s", cursor: "pointer"}}
                                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                >
                                    <Card.Img
                                        src={project.image}
                                        alt={project.name}
                                        className="rounded-3 mb-2"
                                        style={{height: "200px", objectFit: "cover"}}
                                    />
                                    <Card.Body className="d-flex flex-column justify-content-between">
                                        <div>
                                            <Card.Title className="fw-bold text-primary fs-6">
                                                {project.name}
                                            </Card.Title>
                                            <Card.Text className="text-white small">
                                                {project.desc}
                                            </Card.Text>
                                        </div>
                                        <Button variant="outline-primary" size="sm" className="mt-2">
                                            View
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityProject;