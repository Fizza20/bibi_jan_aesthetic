"use client";

import { useEffect, useRef } from "react";

interface CanvasProps {
  className?: string;
  intensity?: number;
}

export default function BiomimeticSkinCanvas({
  className = "",
  intensity = 1,
}: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Draw a subtle static elegant gradient
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      grad.addColorStop(0, "rgba(21, 153, 168, 0.08)");
      grad.addColorStop(1, "rgba(21, 153, 168, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Living cellular / collagen harmonic mesh
    const numPoints = 16;
    let time = 0;
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Floating cellular micropores
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      time += 0.008 * intensity;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw floating cellular micro-particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(21, 153, 168, ${p.alpha * 0.7})`;
        ctx.fill();
      });

      // Draw organic fluid membrane contour rings (inspired by the circular arc of the logo)
      const centerX = width * 0.5 + (mouse.x - width * 0.5) * 0.08;
      const centerY = height * 0.5 + (mouse.y - height * 0.5) * 0.08;
      const maxRadius = Math.min(width, height) * 0.42;

      for (let layer = 0; layer < 4; layer++) {
        ctx.beginPath();
        const baseR = maxRadius * (0.45 + layer * 0.18);
        const segments = 48;

        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2;
          const wave1 = Math.sin(angle * 3 + time * 1.5 + layer) * (8 + layer * 3);
          const wave2 = Math.cos(angle * 2 - time * 0.8) * (5 + layer * 2);
          const r = baseR + wave1 + wave2;

          const px = centerX + Math.cos(angle) * r;
          const py = centerY + Math.sin(angle) * r;

          if (i === 0) {
            ctx.moveTo(px, py);
          } else {
            ctx.lineTo(px, py);
          }
        }

        ctx.closePath();

        if (layer === 0) {
          // Inner glowing core
          const coreGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, baseR * 1.2);
          coreGrad.addColorStop(0, "rgba(21, 153, 168, 0.12)");
          coreGrad.addColorStop(0.7, "rgba(21, 153, 168, 0.04)");
          coreGrad.addColorStop(1, "rgba(21, 153, 168, 0)");
          ctx.fillStyle = coreGrad;
          ctx.fill();
        }

        // Delicate organic outline
        ctx.strokeStyle = `rgba(21, 153, 168, ${0.18 - layer * 0.035})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full opacity-70 ${className}`}
      aria-hidden="true"
    />
  );
}
