import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footerpage from "./components/Footerpage";
import MainHome from "./pages/frontpages/MainHome";
import CommUnity from "./pages/CommUnity";
import MarketPlace from "./pages/MarketPlace";
import ProjectPages from "./pages/ProjectPage";
import Chatpage from "./pages/Chat";
function App() {
    // useEffect(() => {
    //     const handleContextMenu = (e) => e.preventDefault();
    //
    //     const handleKeyDown = (e) => {
    //         // Prevent Ctrl+S (Save As)
    //         if (e.ctrlKey && e.key === "S") {
    //             e.preventDefault();
    //         }
    //         if (
    //             (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key)) ||
    //             (e.ctrlKey && e.key === "U") ||
    //             e.key === "F12"
    //         ) {
    //             e.preventDefault();
    //         }
    //         if (e.key === "PrintScreen") {
    //             e.preventDefault();
    //         }
    //     };
    //
    //     const preventDrag = (e) => e.preventDefault();
    //
    //     const preventImageDownload = (e) => {
    //         if (e.target.tagName === "IMG") {
    //             e.preventDefault();
    //         }
    //     };
    //
    //     const preventImageRightClick = (e) => {
    //         if (e.target.tagName === "IMG") {
    //             e.preventDefault();
    //         }
    //     };
    //
    //     const handleClipboard = (e) => {
    //         e.preventDefault();
    //     };
    //
    //     // const preventCaching = (e) => {
    //     //     e.preventDefault();
    //     //     e.response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    //     //     e.response.headers.set('Pragma', 'no-cache');
    //     //     e.response.headers.set('Expires', '0');
    //     // };
    //
    //     document.addEventListener("contextmenu", handleContextMenu);
    //     document.addEventListener("keydown", handleKeyDown);
    //     document.addEventListener("dragstart", preventDrag);
    //     document.addEventListener("mousedown", preventImageDownload);
    //     document.addEventListener("contextmenu", preventImageRightClick);
    //     document.addEventListener("copy", handleClipboard);
    //     document.addEventListener("cut", handleClipboard);
    //     document.addEventListener("paste", handleClipboard);
    //
    //     // window.addEventListener("beforeunload", preventCaching);
    //
    //     return () => {
    //         document.removeEventListener("contextmenu", handleContextMenu);
    //         document.removeEventListener("keydown", handleKeyDown);
    //         document.removeEventListener("dragstart", preventDrag);
    //         document.removeEventListener("mousedown", preventImageDownload);
    //         document.removeEventListener("contextmenu", preventImageRightClick);
    //         document.removeEventListener("copy", handleClipboard);
    //         document.removeEventListener("cut", handleClipboard);
    //         document.removeEventListener("paste", handleClipboard);
    //         // window.removeEventListener("beforeunload", preventCaching);
    //     };
    // }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainHome />} />
                <Route path="/community" element={<CommUnity />} />
                <Route path="/projects" element={<ProjectPages />} />
                <Route path="/marketplace" element={<MarketPlace />} />
                <Route path="/blogs" element={<div>Blogs Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/support" element={<Chatpage/>} />
                <Route path="/login" element={<div>Login Page</div>} />
                <Route path="/register" element={<div>Register Page</div>} />
            </Routes>
            <Footerpage />
        </Router>
    );
}

export default App;
