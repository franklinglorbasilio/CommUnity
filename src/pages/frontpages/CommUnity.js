import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CommUnity() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div className="min-vh-100 bg-black text-white d-flex pt-5 align-items-center bg-light">
            {/* Full Page Container */}
            <div className="container">
                <div className="row justify-content-center align-items-center g-5">
                    {/* Left Section */}
                    <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                        <h1 className="display-3 text-white fw-bold mb-4">Welcome to Our Community</h1>
                        <p className="lead fs-4 text-white mb-5">
                            Join us today and become part of something amazing. Together we grow, learn, and succeed.
                        </p>
                        <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-sm">
                            Visit Now
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="col-lg-4 position-relative" data-aos="fade-left">
                        {/* Layer 1 Picture */}
                        <img
                            src="https://th.bing.com/th/id/R.084b04c7a63046305a9eabe3e5a33918?rik=KnNc8xSOnMTO1w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1828925.png&ehk=qQXWl7C3VgQiP3Dsfrxvpw8ikCsSrTyDj39wVBEDkaY%3d&risl=&pid=ImgRaw&r=0"
                            alt="Layer 1"
                            className="position-absolute top-0 start-0 w-75 rounded shadow d-none d-lg-block"
                            style={{
                                zIndex: 3,
                                transform: 'rotate(-50deg)',
                                left: '0px',
                                top: '0px',
                            }}
                        />
                        {/* Layer 2 Picture */}
                        <img
                            src="https://th.bing.com/th/id/OIP.O7U5c1-MyV4XNGu-d8o_WwHaFj?rs=1&pid=ImgDetMain"
                            alt="Layer 2"
                            className="position-absolute top-50 start-25 w-75 rounded shadow d-none d-lg-block"
                            style={{
                                zIndex: 0,
                                transform: 'rotate(30deg)',
                                left: '60%',
                                top: '50%',
                            }}
                        />
                        {/* Layer 3 Picture */}
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/projects/max_808/274432170139341.Y3JvcCw5ODUsNzcxLDIzNiww.png"
                            alt="Layer 3"
                            className="position-absolute bottom-0 end-0 w-75 rounded shadow d-none d-lg-block"
                            style={{
                                zIndex: 1,
                                transform: 'rotate(-30deg)',
                                right: '0px',
                                bottom: '0px',
                            }}
                        />

                        {/* Mobile Layer (Hidden on larger screens) */}
                        <img
                            src="https://th.bing.com/th/id/R.084b04c7a63046305a9eabe3e5a33918?rik=KnNc8xSOnMTO1w&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwp1828925.png&ehk=qQXWl7C3VgQiP3Dsfrxvpw8ikCsSrTyDj39wVBEDkaY%3d&risl=&pid=ImgRaw&r=0"
                            alt="Layer 1"
                            className="w-100 rounded shadow d-block d-lg-none mb-3"
                        />
                        <img
                            src="https://th.bing.com/th/id/OIP.O7U5c1-MyV4XNGu-d8o_WwHaFj?rs=1&pid=ImgDetMain"
                            alt="Layer 2"
                            className="w-100 rounded shadow d-block d-lg-none mb-3"
                        />
                        <img
                            src="https://mir-s3-cdn-cf.behance.net/projects/max_808/274432170139341.Y3JvcCw5ODUsNzcxLDIzNiww.png"
                            alt="Layer 3"
                            className="w-100 rounded shadow d-block d-lg-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
