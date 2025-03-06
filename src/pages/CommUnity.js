import React, { useState, useRef } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Accordion,
    Button,
    ListGroup
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    FaPlay,
    FaRedo,
    FaClipboard,
    FaShoppingCart,
    FaComments,
    FaLightbulb,
    FaHistory,
    FaChartLine,
    FaGlobe,
    FaUsers,
    FaChalkboardTeacher,
    FaUniversalAccess,
    FaUserGraduate,
    FaTrophy,
    FaQuestionCircle,
    FaProjectDiagram,
    FaUserTie,
    FaBookOpen
} from "react-icons/fa";

export default function Community() {
    const [faqOpen, setFaqOpen] = useState(null);
    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const defaultCode = `console.log("Hello, World!");`;
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState("");
    const textareaRef = useRef(null);

    // Runs JavaScript code and captures output/errors
    const runCode = () => {
        try {
            const consoleOutput = [];
            const originalConsoleLog = console.log;
            console.log = (...args) => {
                consoleOutput.push(args.join(" "));
                originalConsoleLog(...args);
            };

            const result = eval(code);
            setOutput(
                consoleOutput.length > 0
                    ? consoleOutput.join("\n")
                    : result !== undefined
                        ? result.toString()
                        : "Code executed successfully!"
            );
            console.log = originalConsoleLog;
        } catch (error) {
            setOutput(`⚠️ Error: ${error.message}`);
        }
    };

    // Resets code editor and output
    const resetCode = () => {
        setCode(defaultCode);
        setOutput("");
    };

    // Copies code to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
    };

    // Generates dynamic line numbers
    const getLineNumbers = () => {
        return code.split("\n").map((_, index) => index + 1).join("\n");
    };

    return (
        <section className="bg-dark text-light py-5" style={{ backgroundColor: "#1c1c1c" }}>
            <Container className="bg-dark rounded p-4 mx-auto" style={{ maxWidth: "1200px" }}>
                {/* Header Section */}
                <section className="text-center mb-5">
                    <h1 className="mb-3 text-warning fw-bold">
                        Welcome to <span className="text-primary">CommUnity</span>
                    </h1>
                    <p className="lead text-secondary">
                        A collaborative space where learners, educators, and professionals unite to share knowledge,
                        solve problems, and grow together.
                    </p>
                </section>

                {/* Overview Section */}
                <section className="mb-5">
                    <h2 className="text-info">Overview</h2>
                    <p>
                        <strong>CommUnity</strong> is an all-in-one platform that integrates e-commerce and communication tools,
                        allowing users to create online stores, marketplaces, and community-driven platforms. It supports B2B,
                        B2C, and C2C models, with advanced messaging and forums for seamless collaboration.
                    </p>
                </section>

                {/* Key Features */}
                <section className="mb-5">
                    <h2 className="text-info">Key Features</h2>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Card bg="dark" text="light" className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>
                                        <FaShoppingCart className="me-2" /> E-Commerce & Marketplace
                                    </Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="bg-dark text-light">Product Listings</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Inventory Management</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Payment Gateways</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Order Management</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Customizable Storefronts</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Multi-Vendor Support</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Card bg="dark" text="light" className="h-100 shadow-sm">
                                <Card.Body>
                                    <Card.Title>
                                        <FaComments className="me-2" /> Communication Tools
                                    </Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="bg-dark text-light">Messaging System</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Forums & Discussion Boards</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Live Chat Support</ListGroup.Item>
                                        <ListGroup.Item className="bg-dark text-light">Notifications & Alerts</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>

                {/* Use Cases */}
                <section className="mb-5">
                    <h2 className="text-info">Use Cases</h2>
                    <Row>
                        <Col xs={6} md={3}><p>📌 Online Marketplaces</p></Col>
                        <Col xs={6} md={3}><p>📌 E-Commerce Stores</p></Col>
                        <Col xs={6} md={3}><p>📌 Community Hubs</p></Col>
                        <Col xs={6} md={3}><p>📌 Hybrid Platforms</p></Col>
                    </Row>
                </section>

                {/* Benefits */}
                <section className="mb-5">
                    <h2 className="text-info">Benefits</h2>
                    <Row>
                        <Col xs={6} md={3}><p>✅ Scalability</p></Col>
                        <Col xs={6} md={3}><p>✅ User-Friendly</p></Col>
                        <Col xs={6} md={3}><p>✅ Cost-Effective</p></Col>
                        <Col xs={6} md={3}><p>✅ Customizable</p></Col>
                    </Row>
                </section>

                {/* History */}
                <section className="mb-5">
                    <h2 className="text-info">
                        <FaHistory className="me-2" /> History
                    </h2>
                    <p>
                        Developed to bridge e-commerce and communication, <strong>CommUnity</strong> has evolved to include
                        AI-driven recommendations, multi-language support, and enhanced security.
                    </p>
                </section>

                {/* Competitors */}
                <section className="mb-5">
                    <h2 className="text-info">
                        <FaChartLine className="me-2" /> Competitors
                    </h2>
                    <p>
                        Competing with platforms like Shopify and WooCommerce, <strong>CommUnity</strong> stands out by integrating
                        advanced communication tools and a strong community-driven approach.
                    </p>
                </section>

                {/* Future Developments */}
                <section className="mb-5">
                    <h2 className="text-info">
                        <FaLightbulb className="me-2" /> Future Developments
                    </h2>
                    <ul>
                        <li>AI-powered personalized experiences</li>
                        <li>Blockchain integration for secure transactions</li>
                        <li>Expanded support for global markets</li>
                    </ul>
                </section>

                {/* Why CommUnity Stands Out */}
                <section className="mb-5">
                    <h2 className="text-info">
                        Why <span className="text-warning">CommUnity</span> Stands Out
                    </h2>
                    <p className="text-secondary">
                        In a world where information is abundant but genuine connections are rare, <strong>CommUnity</strong> bridges the gap.
                        Here’s what makes us unique:
                    </p>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <FaGlobe className="text-warning me-2" />
                            <strong>A Global Network of Learners</strong> – Connect with individuals worldwide.
                        </li>
                        <li className="mb-2">
                            <FaLightbulb className="text-warning me-2" />
                            <strong>Diverse Topics and Interests</strong> – Engage in discussions on various subjects.
                        </li>
                        <li className="mb-2">
                            <FaUsers className="text-warning me-2" />
                            <strong>Real-Time Collaboration</strong> – Join live discussions and group projects.
                        </li>
                        <li className="mb-2">
                            <FaChalkboardTeacher className="text-warning me-2" />
                            <strong>Expert Guidance</strong> – Get insights from professionals and educators.
                        </li>
                        <li className="mb-2">
                            <FaUniversalAccess className="text-warning me-2" />
                            <strong>Accessible and Inclusive</strong> – Open to everyone.
                        </li>
                        <li className="mb-2">
                            <FaUserGraduate className="text-warning me-2" />
                            <strong>Personalized Learning Paths</strong> – Receive tailored recommendations.
                        </li>
                        <li className="mb-2">
                            <FaTrophy className="text-warning me-2" />
                            <strong>Gamification & Rewards</strong> – Earn points, badges, and achievements.
                        </li>
                    </ul>
                </section>

                {/* What You Can Do */}
                <section className="mb-5">
                    <h2 className="text-info">
                        What You Can Do on <span className="text-warning">CommUnity</span>
                    </h2>
                    <p className="text-secondary">
                        CommUnity is packed with features to help you learn, connect, and grow. Here’s how you can make the most of our platform:
                    </p>
                    <ul className="list-unstyled">
                        {[
                            {
                                icon: <FaUsers />,
                                title: "Join Groups and Forums",
                                text: "Connect with study groups, programmers, and hobbyists who share your interests."
                            },
                            {
                                icon: <FaQuestionCircle />,
                                title: "Ask Questions and Share Knowledge",
                                text: "Get fast answers and help others by sharing your expertise."
                            },
                            {
                                icon: <FaProjectDiagram />,
                                title: "Collaborate on Projects",
                                text: "Work with others on coding assignments, research papers, or startup ideas."
                            },
                            {
                                icon: <FaTrophy />,
                                title: "Participate in Challenges",
                                text: "Test your skills with coding challenges and quizzes, and compete for recognition."
                            },
                            {
                                icon: <FaChalkboardTeacher />,
                                title: "Attend Virtual Events",
                                text: "Engage in webinars, workshops, and live Q&A sessions with experts."
                            },
                            {
                                icon: <FaUserTie />,
                                title: "Mentorship Programs",
                                text: "Get matched with industry professionals for career guidance and growth."
                            },
                            {
                                icon: <FaChartLine />,
                                title: "Community Rankings",
                                text: "Track your contributions and climb the leaderboards."
                            },
                            {
                                icon: <FaBookOpen />,
                                title: "Exclusive Content",
                                text: "Access premium educational materials, advanced tutorials, and research papers."
                            }
                        ].map((item, index) => (
                            <li key={index} className="mb-2">
                                <span className="text-warning me-2">{item.icon}</span>
                                <strong>{item.title}</strong> – {item.text}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Success Stories */}
                <section className="mb-5">
                    <h2 className="text-info">Success Stories from Our Community</h2>
                    <p className="text-secondary">
                        Don’t just take our word for it—here’s what our members have to say:
                    </p>
                    {[
                        {
                            name: "Sarah, Computer Science Student",
                            quote:
                                "CommUnity helped me solve a tough algorithm problem. Within hours, I received multiple explanations and additional resources. This platform is a game changer!"
                        },
                        {
                            name: "Raj, Aspiring Data Scientist",
                            quote:
                                "Through CommUnity, I found a mentor who helped me build my first AI project. Now, I'm confident about applying for data science internships!"
                        },
                        {
                            name: "Emily, Lifelong Learner",
                            quote:
                                "I enjoy the variety of discussions, from tech to philosophy. CommUnity is like a knowledge hub for curious minds!"
                        },
                        {
                            name: "John, Software Developer",
                            quote:
                                "I’ve been able to connect with other developers and collaborate on open-source projects. CommUnity has helped me grow both personally and professionally."
                        },
                        {
                            name: "Maria, High School Student",
                            quote:
                                "I was struggling with calculus, but thanks to the study group I joined on CommUnity, I improved my grades and even helped others."
                        }
                    ].map((story, index) => (
                        <p key={index}>
                            <strong>{story.name}</strong>: "{story.quote}"
                        </p>
                    ))}
                </section>

                {/* Our Mission */}
                <section className="mb-5">
                    <h2 className="text-info">Our Mission: Empowering Learners Worldwide</h2>
                    <p className="text-secondary">
                        At CommUnity, our mission is to make learning accessible, collaborative, and fun. We believe education is about understanding,
                        applying, and sharing knowledge.
                    </p>
                    <p className="text-secondary">
                        We’re committed to breaking down barriers to education—geographical, financial, or social. With CommUnity, you’re never alone.
                    </p>
                </section>

                {/* How to Get Started */}
                <section className="mb-5">
                    <h2 className="text-info">How to Get Started</h2>
                    <p className="text-secondary">
                        Joining CommUnity is easy and free. Here’s how you can begin:
                    </p>
                    <ol className="text-secondary">
                        {[
                            {
                                step: "Sign Up",
                                text: "Create an account quickly with your email and a password."
                            },
                            {
                                step: "Complete Your Profile",
                                text: "Share your interests and goals so we can recommend the best groups and resources."
                            },
                            {
                                step: "Explore the Platform",
                                text: "Join groups, participate in discussions, and connect with like-minded individuals."
                            },
                            {
                                step: "Engage and Learn",
                                text: "Ask questions, share insights, and maximize your learning experience."
                            }
                        ].map((item, index) => (
                            <li key={index}>
                                <strong>{item.step}</strong> – {item.text}
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Code Box Section */}
                <section className="mb-5">
                    <h2 className="text-info">Try It Out: Code Box</h2>
                    <p className="text-secondary">
                        Write JavaScript below and run it to see the output.
                    </p>
                    <div className="bg-secondary rounded p-3 shadow" style={{ border: "1px solid #444" }}>
                        <Row className="flex-column flex-md-row">
                            <Col xs={12} md="auto" className="pe-md-3 mb-3 mb-md-0">
                <pre
                    className="text-warning text-end"
                    style={{
                        width: "50px",
                        fontFamily: "monospace",
                        fontSize: "14px",
                        background: "#252526",
                        color: "#858585",
                        padding: "10px",
                        borderRight: "1px solid #444"
                    }}
                >
                  {getLineNumbers()}
                </pre>
                            </Col>
                            <Col>
                <textarea
                    ref={textareaRef}
                    className="form-control text-light"
                    style={{
                        fontFamily: "monospace",
                        minHeight: "200px",
                        background: "#1e1e1e",
                        color: "#d4d4d4",
                        border: "none",
                        resize: "none"
                    }}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                ></textarea>
                            </Col>
                        </Row>
                        <div className="d-flex flex-wrap mt-3">
                            <Button variant="info" className="me-2 mb-2 d-flex align-items-center" onClick={copyToClipboard}>
                                <FaClipboard className="me-1" /> Copy
                            </Button>
                            <Button variant="success" className="me-2 mb-2 d-flex align-items-center" onClick={runCode}>
                                <FaPlay className="me-1" /> Run
                            </Button>
                            <Button variant="danger" className="d-flex align-items-center mb-2" onClick={resetCode}>
                                <FaRedo className="me-1" /> Reset
                            </Button>
                        </div>
                        <div
                            className="mt-3 p-2 rounded"
                            style={{
                                background: "#f5f5f5",
                                color: "#333",
                                minHeight: "60px",
                                fontFamily: "monospace",
                                border: "1px solid #ccc"
                            }}
                        >
                            <strong>Output:</strong>
                            <pre style={{ whiteSpace: "pre-wrap" }}>{output || "No output yet"}</pre>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-5">
                    <h2 className="text-info">FAQ</h2>
                    <Accordion activeKey={faqOpen} onSelect={(e) => setFaqOpen(e)}>
                        {[
                            {
                                question: "Is CommUnity free to use?",
                                answer: "Yes, CommUnity is completely free to join and use. Education should be accessible to everyone."
                            },
                            {
                                question: "Can I join if I’m not a student?",
                                answer: "Absolutely! CommUnity is for students, professionals, and lifelong learners."
                            },
                            {
                                question: "How do I find groups or discussions?",
                                answer: "Use our search feature to find groups and discussions by topic, or let us recommend groups based on your profile."
                            },
                            {
                                question: "Can I share my own resources or tutorials?",
                                answer: "Yes, we encourage members to contribute and share their knowledge."
                            },
                            {
                                question: "Is CommUnity available on mobile?",
                                answer: "Yes, our platform is fully optimized for mobile devices."
                            },
                            {
                                question: "What types of challenges and competitions are available?",
                                answer: "We offer weekly coding challenges, quizzes, and problem-solving competitions."
                            }
                        ].map((item, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>{item.answer}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </section>

                {/* Join Call-to-Action */}
                <section className="mb-5 text-center">
                    <h2 className="text-info">Join CommUnity Today!</h2>
                    <p className="text-secondary fw-bold">
                        Together, we learn. Together, we grow. Together, we are CommUnity.
                    </p>
                    <div>
                        <Button variant="warning" className="me-2 mb-2">Sign Up Now</Button>
                        <Button variant="info" className="me-2 mb-2">Explore Groups</Button>
                        <Button variant="light" className="mb-2">Join a Discussion</Button>
                    </div>
                </section>
                {/* New Section: Latest Community Highlights */}
                <section className="mb-5">
                    <h2 className="text-info text-center">Latest Community Highlights</h2>
                    <p className="text-secondary text-center">
                        Stay updated with our latest events, success stories, and community news.
                    </p>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card bg="dark" text="light" className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>Upcoming Webinar</Card.Title>
                                    <Card.Text>
                                        Join us for an exclusive webinar on React best practices. Learn from the experts!
                                    </Card.Text>
                                    <Button variant="info" size="sm">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="dark" text="light" className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>Community Meetup</Card.Title>
                                    <Card.Text>
                                        Recap of our recent community meetup where inspiring ideas were shared.
                                    </Card.Text>
                                    <Button variant="info" size="sm">Read Recap</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="dark" text="light" className="shadow-sm">
                                <Card.Body>
                                    <Card.Title>New Success Story</Card.Title>
                                    <Card.Text>
                                        Discover how our community helped a member launch their own startup.
                                    </Card.Text>
                                    <Button variant="info" size="sm">Discover More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </section>
            </Container>
        </section>
    );
}
