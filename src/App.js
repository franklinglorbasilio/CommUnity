import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // ✅ FIXED import
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footerpage from "./components/Footerpage";
import MainHome from "./pages/frontpages/MainHome";
import CommUnity from "./pages/CommUnity"; // ✅ Ensure correct path

function App() {
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        const handleKeyDown = (e) => {
            if (
                (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key)) ||
                (e.ctrlKey && e.key === "U") ||
                e.key === "F12"
            ) {
                e.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <Router> {/* ✅ Wrapped inside Router */}
            <Header />
            <Routes> {/* ✅ Routes wrapper */}
                <Route path="/" element={<MainHome />} />
                <Route path="/community" element={<CommUnity />} />
                <Route path="/projects" element={<div>Projects Page</div>} />
                <Route path="/marketplace" element={<div>Marketplace Page</div>} />
                <Route path="/blogs" element={<div>Blogs Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/support" element={<div>Support Page</div>} />
                <Route path="/login" element={<div>Login Page</div>} />
                <Route path="/register" element={<div>Register Page</div>} />
            </Routes>
            <Footerpage />
        </Router>
    );
}

export default App;
