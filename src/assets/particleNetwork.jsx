import React, { useRef, useEffect } from "react";

function ParticleNetwork() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Make the canvas fill the window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Handle mouse position
        const mouse = { x: null, y: null };

        function handleMouseMove(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        function handleMouseOut() {
            // If the mouse leaves the window, reset position
            mouse.x = null;
            mouse.y = null;
        }

        // Update canvas size on window resize
        function handleResize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("resize", handleResize);

        // Particles settings
        const particles = [];
        const numParticles = 50;      // total number of particles
        const maxDistance = 120;      // max distance to connect particles
        const mouseDistance = 150;    // distance to connect to mouse
        const particleSpeed = 2;      // movement speed

        // Define a Particle class
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

                // Bounce off edges
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

        // Initialize the particles
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw lines between particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        ctx.beginPath();
                        // Fade line based on distance
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / maxDistance})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw lines from particles to mouse if close
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

            // Update and draw each particle
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        // Start animation
        animate();

        // Cleanup on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "150vh",
                zIndex: -1,
                background: "#000" // black background
            }}
        />
    );
}

export default ParticleNetwork;
