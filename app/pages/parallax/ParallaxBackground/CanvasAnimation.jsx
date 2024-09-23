"use client";
import { useEffect, useRef } from "react";

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  // rgba(0, 181, 255);
  useEffect(() => {
    let w, h, particles, loopId, ctx;
    const options = {
      particleColor: "rgba(252,245,223,.95)",
      lineColor: "rgba(252, 185, 19)",
      particleAmount: 40,
      defaultRadius: 2,
      variantRadius: 2,
      defaultSpeed: 1,
      variantSpeed: 1,
      linkRadius: 300,
    };

    const rgb = options.lineColor.match(/\d+/g);

    const init = () => {
      const canvas = canvasRef.current;
      ctx = canvas.getContext("2d");
      resizeReset();
      initialiseElements();
      startAnimation();
    };

    const resizeReset = () => {
      const canvas = canvasRef.current;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const initialiseElements = () => {
      particles = [];
      for (let i = 0; i < options.particleAmount; i++) {
        particles.push(new Particle());
      }
    };

    const startAnimation = () => {
      loopId = requestAnimationFrame(animationLoop);
    };

    const animationLoop = () => {
      ctx.clearRect(0, 0, w, h);
      drawScene();
      loopId = requestAnimationFrame(animationLoop);
    };

    const drawScene = () => {
      drawLine();
      drawParticle();
    };

    const drawParticle = () => {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
    };

    const drawLine = () => {
      for (let i = 0; i < particles.length; i++) {
        linkPoints(particles[i], particles);
      }
    };

    const linkPoints = (point, hubs) => {
      for (let i = 0; i < hubs.length; i++) {
        const distance = checkDistance(point.x, point.y, hubs[i].x, hubs[i].y);
        const opacity = 1 - distance / options.linkRadius;
        if (opacity > 0) {
          ctx.lineWidth = 0.5;
          ctx.strokeStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${opacity})`;
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(hubs[i].x, hubs[i].y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    };

    const checkDistance = (x1, y1, x2, y2) => {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    };

    const Particle = function () {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.color = options.particleColor;
      this.radius =
        options.defaultRadius + Math.random() * options.variantRadius;
      this.speed = options.defaultSpeed + Math.random() * options.variantSpeed;
      this.directionAngle = Math.floor(Math.random() * 360);
      this.vector = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed,
      };

      this.update = function () {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      };

      this.border = function () {
        if (this.x >= w || this.x <= 0) this.vector.x *= -1;
        if (this.y >= h || this.y <= 0) this.vector.y *= -1;
      };

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      };
    };

    // Run the animation when component is mounted
    init();

    window.addEventListener("resize", resizeReset);

    // Clean up on unmount
    return () => {
      cancelAnimationFrame(loopId);
      window.removeEventListener("resize", resizeReset);
    };
  }, []);

  return (
    <canvas id="canvas" ref={canvasRef} className="w-full h-full"></canvas>
  );
};

export default CanvasAnimation;
