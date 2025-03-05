import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaPlay, FaRedo } from "react-icons/fa";
import { FaClipboard as ClipboardIcon } from "react-icons/fa";
import {
    FaShoppingCart, FaComments, FaLightbulb, FaCogs, FaHistory, FaChartLine,
    FaGlobe, FaUsers, FaChalkboardTeacher, FaUniversalAccess, FaUserGraduate, FaTrophy,
    FaQuestionCircle, FaProjectDiagram, FaUserTie, FaBookOpen
} from "react-icons/fa";

export default function Community() {
    const [faqOpen, setFaqOpen] = useState(null);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };
    const defaultCode = `console.log("Hello, World!");`; // Default JavaScript code
    const [code, setCode] = useState(defaultCode);
    const [output, setOutput] = useState("");
    const textareaRef = useRef(null);

    // Runs JavaScript code and captures the output/errors
    const runCode = () => {
        try {
            const consoleOutput = [];
            const originalConsoleLog = console.log;

            console.log = (...args) => {
                consoleOutput.push(args.join(" "));
                originalConsoleLog(...args);
            };

            const result = eval(code);
            setOutput(consoleOutput.length > 0 ? consoleOutput.join("\n") : (result !== undefined ? result.toString() : "Code executed successfully!"));

            console.log = originalConsoleLog; // Restore console.log
        } catch (error) {
            setOutput(`⚠️ Error: ${error.message}`);
        }
    };

    // Resets the code editor and output
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
        <section className="bg-dark text-light pb-5" style={{ background: "#1c1c1c", padding: "80px 0" }}>
            <div className="container"
                 style={{minHeight: "100vh", borderRadius: "12px", background: "#292929", padding: "50px"}}>
                {/**/}


                <Container className="text-light py-5">
                    <div className="text-center">
                        <h1 className="mb-4 text-warning fw-bold">
                            Welcome to <span className="text-primary">CommUnity</span>
                        </h1>
                        <p className="lead text-secondary">
                            A collaborative space where learners, educators, and professionals unite to share knowledge,
                            solve problems, and grow together.
                        </p>
                    </div>

                    <section className="my-5">
                        <h2 className="text-info">Overview</h2>
                        <p>
                            <strong>CommUnity</strong> is an all-in-one platform that integrates e-commerce and
                            communication tools,
                            allowing users to create online stores, marketplaces, and community-driven platforms. It
                            supports B2B, B2C,
                            and C2C models, with advanced messaging and forums for seamless collaboration.
                        </p>
                    </section>

                    <section className="my-5">
                        <h2 className="text-info">Key Features</h2>
                        <Row>
                            <Col md={6}>
                                <Card className="bg-dark text-light shadow-sm mb-3">
                                    <Card.Body>
                                        <Card.Title><FaShoppingCart className="me-2"/> E-Commerce &
                                            Marketplace</Card.Title>
                                        <ul>
                                            <li>Product Listings</li>
                                            <li>Inventory Management</li>
                                            <li>Payment Gateways</li>
                                            <li>Order Management</li>
                                            <li>Customizable Storefronts</li>
                                            <li>Multi-Vendor Support</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="bg-dark text-light shadow-sm mb-3">
                                    <Card.Body>
                                        <Card.Title><FaComments className="me-2"/> Communication Tools</Card.Title>
                                        <ul>
                                            <li>Messaging System</li>
                                            <li>Forums & Discussion Boards</li>
                                            <li>Live Chat Support</li>
                                            <li>Notifications & Alerts</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </section>

                    <section className="my-5">
                        <h2 className="text-info">Use Cases</h2>
                        <Row>
                            <Col md={3}><p>📌 Online Marketplaces</p></Col>
                            <Col md={3}><p>📌 E-Commerce Stores</p></Col>
                            <Col md={3}><p>📌 Community Hubs</p></Col>
                            <Col md={3}><p>📌 Hybrid Platforms</p></Col>
                        </Row>
                    </section>

                    <section className="my-5">
                        <h2 className="text-info">Benefits</h2>
                        <Row>
                            <Col md={3}><p>✅ Scalability</p></Col>
                            <Col md={3}><p>✅ User-Friendly</p></Col>
                            <Col md={3}><p>✅ Cost-Effective</p></Col>
                            <Col md={3}><p>✅ Customizable</p></Col>
                        </Row>
                    </section>

                    <section className="my-5">
                        <h2 className="text-info"><FaHistory className="me-2"/> History</h2>
                        <p>
                            Developed to bridge e-commerce and communication, <strong>CommUnity</strong> has evolved to
                            include
                            AI-driven recommendations, multi-language support, and enhanced security.
                        </p>
                    </section>

                    <section className="my-5">
                        <h2 className="text-info"><FaChartLine className="me-2"/> Competitors</h2>
                        <p>
                            Competing with platforms like Shopify and WooCommerce, <strong>CommUnity</strong> stands out
                            by integrating
                            advanced communication tools and a strong community-driven approach.
                        </p>
                    </section>

                    <section className="my-5">
                        <h2 className="text-info"><FaLightbulb className="me-2"/> Future Developments</h2>
                        <ul>
                            <li>AI-powered personalized experiences</li>
                            <li>Blockchain integration for secure transactions</li>
                            <li>Expanded support for global markets</li>
                        </ul>
                    </section>
                </Container>
                {/* Why CommUnity Stands Out */}
                <section className="mb-5 pb-4">
                    <h2 className="text-info">Why <span className="text-warning">CommUnity</span> Stands Out</h2>
                    <p className="text-secondary">
                        In a world where information is abundant but genuine connections are
                        rare, <strong>CommUnity</strong> bridges the gap. Here’s what makes us unique:
                    </p>
                    <ul className="list-unstyled">
                        <li className="mb-3">
                            <FaGlobe className="text-warning me-2"/>
                            <strong>A Global Network of Learners</strong> – Connect with individuals worldwide, from New
                            York to Nairobi to New Delhi.
                        </li>
                        <li className="mb-3">
                            <FaLightbulb className="text-warning me-2"/>
                            <strong>Diverse Topics and Interests</strong> – Engage in discussions on everything from
                            computer science to philosophy.
                        </li>
                        <li className="mb-3">
                            <FaUsers className="text-warning me-2"/>
                            <strong>Real-Time Collaboration</strong> – Join live discussions, group projects, and study
                            sessions without delays.
                        </li>
                        <li className="mb-3">
                            <FaChalkboardTeacher className="text-warning me-2"/>
                            <strong>Expert Guidance</strong> – Get insights from professionals, educators, and top
                            students eager to help.
                        </li>
                        <li className="mb-3">
                            <FaUniversalAccess className="text-warning me-2"/>
                            <strong>Accessible and Inclusive</strong> – Free, easy to use, and open to everyone in a
                            welcoming environment.
                        </li>
                        <li className="mb-3">
                            <FaUserGraduate className="text-warning me-2"/>
                            <strong>Personalized Learning Paths</strong> – Receive tailored recommendations for groups,
                            resources, and events.
                        </li>
                        <li className="mb-3">
                            <FaTrophy className="text-warning me-2"/>
                            <strong>Gamification & Rewards</strong> – Earn points, badges, and achievements to stay
                            motivated and track progress.
                        </li>
                    </ul>
                </section>

                <div>
                    {/* What You Can Do on CommUnity */}
                    <section className="mb-5 pb-4">
                        <h2 className="text-info">What You Can Do on <span className="text-warning">CommUnity</span>
                        </h2>
                        <p className="text-secondary">
                            CommUnity is packed with features to help you learn, connect, and grow. Here’s how you can
                            make the most of our platform:
                        </p>
                        <ul className="list-unstyled">
                            {[
                                {
                                    icon: <FaUsers/>,
                                    title: "Join Groups and Forums",
                                    text: "Connect with study groups, programmers, and hobbyists who share your interests."
                                },
                                {
                                    icon: <FaQuestionCircle/>,
                                    title: "Ask Questions and Share Knowledge",
                                    text: "Get fast answers and help others by sharing your expertise."
                                },
                                {
                                    icon: <FaProjectDiagram/>,
                                    title: "Collaborate on Projects",
                                    text: "Work with others on coding assignments, research papers, or startup ideas."
                                },
                                {
                                    icon: <FaTrophy/>,
                                    title: "Participate in Challenges",
                                    text: "Test your skills with coding challenges and quizzes, and compete for recognition."
                                },
                                {
                                    icon: <FaChalkboardTeacher/>,
                                    title: "Attend Virtual Events",
                                    text: "Engage in webinars, workshops, and live Q&A sessions with experts."
                                },
                                {
                                    icon: <FaUserTie/>,
                                    title: "Mentorship Programs",
                                    text: "Get matched with industry professionals for career guidance and growth."
                                },
                                {
                                    icon: <FaChartLine/>,
                                    title: "Community Rankings",
                                    text: "Track your contributions and climb the leaderboards as you engage more."
                                },
                                {
                                    icon: <FaBookOpen/>,
                                    title: "Exclusive Content",
                                    text: "Access premium educational materials, advanced tutorials, and research papers."
                                }
                            ].map((item, index) => (
                                <li key={index} className="mb-3">
                                    <span className="text-warning me-2">{item.icon}</span>
                                    <strong>{item.title}</strong> – {item.text}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Success Stories */}
                    <section className="mb-5 pb-4">
                        <h2 className="text-info">Success Stories from Our Community</h2>
                        <p className="text-secondary">
                            Don’t just take our word for it—here’s what our members have to say:
                        </p>
                        <div className="text-secondary">
                            {[
                                {
                                    name: "Sarah, Computer Science Student",
                                    quote: "CommUnity helped me solve a tough algorithm problem. Within hours, I received multiple explanations and even additional resources. This platform is a game changer!"
                                },
                                {
                                    name: "Raj, Aspiring Data Scientist",
                                    quote: "Through CommUnity, I found a mentor who helped me build my first AI project. Now, I'm confident about applying for data science internships!"
                                },
                                {
                                    name: "Emily, Lifelong Learner",
                                    quote: "I enjoy the variety of discussions, from tech to philosophy. CommUnity is like a knowledge hub for curious minds!"
                                },
                                {
                                    name: "John, Software Developer",
                                    quote: "I’ve been able to connect with other developers and collaborate on open-source projects. CommUnity has helped me grow both personally and professionally."
                                },
                                {
                                    name: "Maria, High School Student",
                                    quote: "I was struggling with calculus, but thanks to the study group I joined on CommUnity, I was able to improve my grades and even help others with their questions."
                                }
                            ].map((story, index) => (
                                <p key={index}><strong>{story.name}</strong>: "{story.quote}"</p>
                            ))}
                        </div>
                    </section>

                    {/* Our Mission */}
                    <section className="mb-5 pb-4">
                        <h2 className="text-info">Our Mission: Empowering Learners Worldwide</h2>
                        <p className="text-secondary">
                            At CommUnity, our mission is simple yet powerful: to make learning accessible,
                            collaborative, and fun. We believe that education is not just about memorizing facts or
                            passing exams—it’s about understanding, applying, and sharing knowledge.
                        </p>
                        <p className="text-secondary">
                            We’re committed to breaking down barriers to education, whether they’re geographical,
                            financial, or social. With CommUnity, you don’t have to learn alone. You have a whole
                            community behind you, ready to support you every step of the way.
                        </p>
                    </section>

                    {/* How to Get Started */}
                    <section className="mb-5 pb-4">
                        <h2 className="text-info">How to Get Started</h2>
                        <p className="text-secondary">
                            Joining CommUnity is easy and free. Here’s how you can get started:
                        </p>
                        <ol className="text-secondary">
                            {[
                                {
                                    step: "Sign Up",
                                    text: "Create an account in just a few minutes. All you need is an email address and a password."
                                },
                                {
                                    step: "Complete Your Profile",
                                    text: "Tell us about your interests, skills, and goals so we can recommend the right groups and resources for you."
                                },
                                {
                                    step: "Explore the Platform",
                                    text: "Join groups, participate in discussions, and start connecting with others. Use our search feature to find topics that interest you."
                                },
                                {
                                    step: "Engage and Learn",
                                    text: "Ask questions, share knowledge, and take advantage of all the resources CommUnity has to offer. The more you participate, the more you’ll get out of the platform."
                                }
                            ].map((item, index) => (
                                <li key={index}><strong>{item.step}</strong> – {item.text}</li>
                            ))}
                        </ol>
                    </section>
                </div>

                {/* Code Box Section */}
                <section className="mb-5 pb-4">
                    <h2 className="text-info">Try It Out: Code Box</h2>
                    <p className="text-secondary">
                        Write JavaScript below and run it to see the output.
                    </p>

                    <div className="bg-dark p-3 rounded shadow" style={{border: "1px solid #444"}}>
                        <div className="d-flex"
                             style={{position: "relative", background: "#1e1e1e", borderRadius: "8px"}}>
                            {/* Line Numbers */}
                            <pre
                                className="text-warning pe-2 text-end"
                                style={{
                                    minWidth: "40px",
                                    paddingTop: "10px",
                                    fontFamily: "monospace",
                                    fontSize: "14px",
                                    userSelect: "none",
                                    overflow: "hidden",
                                    background: "#252526",
                                    color: "#858585",
                                    paddingLeft: "10px",
                                    borderRight: "1px solid #444",
                                }}
                            >
                        {getLineNumbers()}
                    </pre>

                            {/* Code Editor */}
                            <textarea
                                ref={textareaRef}
                                className="form-control text-light"
                                style={{
                                    fontFamily: "monospace",
                                    minHeight: "200px",
                                    border: "none",
                                    resize: "none",
                                    paddingLeft: "10px",
                                    whiteSpace: "pre",
                                    background: "#1e1e1e",
                                    color: "#d4d4d4",
                                    outline: "none",
                                }}
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            ></textarea>
                        </div>

                        {/* Buttons */}
                        <div className="d-flex mt-3">
                            <button className="btn btn-info me-2 d-flex align-items-center" onClick={copyToClipboard}>
                                <ClipboardIcon className="me-1"/> Copy
                            </button>
                            <button className="btn btn-success me-2 d-flex align-items-center" onClick={runCode}>
                                <FaPlay className="me-1"/> Run
                            </button>
                            <button className="btn btn-danger d-flex align-items-center" onClick={resetCode}>
                                <FaRedo className="me-1"/> Reset
                            </button>
                        </div>

                        {/* Output Box */}
                        <div
                            className="mt-3 p-2 rounded"
                            style={{
                                background: "#f5f5f5",
                                color: "#333",
                                minHeight: "60px",
                                fontFamily: "monospace",
                                border: "1px solid #ccc",
                            }}
                        >
                            <strong>Output:</strong>
                            <pre style={{whiteSpace: "pre-wrap"}}>{output || "No output yet"}</pre>
                        </div>
                    </div>
                </section>


                {/* FAQ */}
                <section className="mb-5 pb-4">
                    <h2 className="text-info">FAQ</h2>
                    <div className="accordion" id="faqAccordion">
                        {[
                            {
                                question: "Is CommUnity free to use?",
                                answer: "Yes, CommUnity is completely free to join and use. We believe that education should be accessible to everyone."
                            },
                            {
                                question: "Can I join if I’m not a student?",
                                answer: "Absolutely! CommUnity is for students, professionals, and lifelong learners alike. Whether you’re here to learn, teach, or collaborate, you’re welcome."
                            },
                            {
                                question: "How do I find groups or discussions?",
                                answer: "Use our search feature to find groups and discussions by topic, or let us recommend groups based on your profile."
                            },
                            {
                                question: "Can I share my own resources or tutorials?",
                                answer: "Yes, we encourage members to contribute to the community. Share your knowledge and help others grow."
                            },
                            {
                                question: "Is CommUnity available on mobile?",
                                answer: "Yes, our platform is fully optimized for mobile devices. You can learn and connect on the go."
                            },
                            {
                                question: "What types of challenges and competitions are available?",
                                answer: "We offer weekly coding challenges, quizzes, and problem-solving competitions across multiple disciplines. Test your skills and earn recognition for your achievements."
                            }
                        ].map((item, index) => (
                            <div className="card bg-dark text-light mb-2" key={index}>
                                <div className="card-header" onClick={() => toggleFaq(index)}>
                                    <h5 className="mb-0">
                                        <button className="btn btn-link text-info" style={{textDecoration: "none"}}>
                                            {item.question}
                                        </button>
                                    </h5>
                                </div>
                                {faqOpen === index && (
                                    <div className="card-body">{item.answer}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Join CommUnity Today */}
                <section className="mb-5 pb-4 text-center">
                    <h2 className="text-info">Join CommUnity Today!</h2>
                    <p className="text-secondary"><strong>Together, we learn. Together, we grow. Together, we are
                        CommUnity.</strong></p>
                    <div>
                        <button className="btn btn-warning me-2">Sign Up Now</button>
                        <button className="btn btn-info me-2">Explore Groups</button>
                        <button className="btn btn-light">Join a Discussion</button>
                    </div>
                </section>
            </div>
        </section>
    );
}