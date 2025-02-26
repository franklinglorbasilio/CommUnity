import React, { useRef, useEffect } from "react";

function ParticleNetwork() {
    const canvasRef = useRef(null);
    const particlesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas size dynamically based on Bootstrap container
        const setCanvasSize = () => {
            const container = canvas.parentElement; // Get Bootstrap parent
            canvas.width = container.clientWidth; // Fit container width
            canvas.height = container.clientHeight; // Fit container height
        };

        setCanvasSize();

        const mouse = { x: null, y: null };

        function handleMouseMove(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        function handleMouseOut() {
            mouse.x = null;
            mouse.y = null;
        }

        function handleResize() {
            setCanvasSize();
            particlesRef.current = createParticles(); // Recreate particles on resize
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("resize", handleResize);

        const numParticles = Math.max(50, Math.floor(canvas.width / 15)); // Responsive particle count
        const maxDistance = 120;
        const mouseDistance = 150;
        const particleSpeed = 2;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * particleSpeed;
                this.vy = (Math.random() - 0.5) * particleSpeed;
                this.radius = 2 + Math.random() * 3;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "#ffffff";
                ctx.fill();
            }
        }

        function createParticles() {
            return Array.from({ length: numParticles }, () => new Particle());
        }

        particlesRef.current = createParticles();

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const particles = particlesRef.current;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            if (mouse.x !== null && mouse.y !== null) {
                for (let i = 0; i < particles.length; i++) {
                    const dx = particles[i].x - mouse.x;
                    const dy = particles[i].y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouseDistance) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / mouseDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(mouse.x, mouse.y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="container-fluid position-relative p-0">
            <canvas
                ref={canvasRef}
                style={{
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%", // Use Bootstrap container width
                    height: "100vh", // Full viewport height
                    zIndex: -1,
                    background: "#000",
                }}
            />
        </div>
    );
}

export default ParticleNetwork;
