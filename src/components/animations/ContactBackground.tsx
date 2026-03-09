"use client";

import { useEffect, useRef } from "react";

// Main site background: #2e3440 (Nordic Slate)
// Primary gold: #d4af37 / #b8860b
const BG = "#2e3440";
const GOLD = "212, 175, 55";

export default function ContactBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      t += 0.005;

      // Base = site background colour
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, W, H);

      // --- Soft ambient blobs in slate/indigo to blend with #2e3440 ---
      const blobs = [
        { xf: 0.15, yf: 0.35, rf: 0.60, r: 50, g: 60, b: 80, a: 0.5, sx: 0.7, sy: 0.5 },
        { xf: 0.80, yf: 0.55, rf: 0.50, r: 40, g: 52, b: 70, a: 0.4, sx: 0.9, sy: 0.6 },
        { xf: 0.45, yf: 0.80, rf: 0.42, r: 55, g: 65, b: 85, a: 0.3, sx: 0.5, sy: 0.7 },
        { xf: 0.70, yf: 0.12, rf: 0.38, r: 45, g: 55, b: 75, a: 0.35, sx: 1.1, sy: 0.4 },
      ];

      blobs.forEach((b) => {
        const cx = (b.xf + Math.sin(t * b.sx + b.yf * 3) * 0.10) * W;
        const cy = (b.yf + Math.cos(t * b.sy + b.xf * 2) * 0.08) * H;
        const r = b.rf * Math.min(W, H);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `rgba(${b.r},${b.g},${b.b},${b.a})`);
        g.addColorStop(1, `rgba(${b.r},${b.g},${b.b},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- Gold aurora accent blob ---
      const gx = (0.6 + Math.sin(t * 0.4) * 0.15) * W;
      const gy = (0.3 + Math.cos(t * 0.3) * 0.12) * H;
      const gr = 0.42 * Math.min(W, H);
      const goldGlow = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
      goldGlow.addColorStop(0, `rgba(${GOLD}, 0.12)`);
      goldGlow.addColorStop(1, `rgba(${GOLD}, 0)`);
      ctx.fillStyle = goldGlow;
      ctx.beginPath();
      ctx.arc(gx, gy, gr, 0, Math.PI * 2);
      ctx.fill();

      // --- Flowing gold sine waves ---
      const waves = [
        { yBase: 0.28, amp: 40, freq: 0.003,  speed: 1.8, alpha: 0.18, lw: 1.5 },
        { yBase: 0.48, amp: 28, freq: 0.004,  speed: 2.2, alpha: 0.12, lw: 1.0 },
        { yBase: 0.66, amp: 35, freq: 0.0028, speed: 1.4, alpha: 0.14, lw: 1.2 },
        { yBase: 0.14, amp: 20, freq: 0.005,  speed: 2.6, alpha: 0.09, lw: 0.8 },
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.lineWidth = w.lw;
        ctx.strokeStyle = `rgba(${GOLD}, ${w.alpha})`;
        for (let x = 0; x <= W; x += 3) {
          const y =
            w.yBase * H +
            Math.sin(x * w.freq + t * w.speed) * w.amp +
            Math.sin(x * w.freq * 0.45 + t * w.speed * 0.55) * w.amp * 0.4;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // --- Sparse data-mesh grid (matches DataMeshBackground feel) ---
      ctx.strokeStyle = `rgba(${GOLD}, 0.04)`;
      ctx.lineWidth = 1;
      const cols = 12, rows = 8;
      for (let c = 0; c <= cols; c++) {
        ctx.beginPath(); ctx.moveTo((c / cols) * W, 0); ctx.lineTo((c / cols) * W, H); ctx.stroke();
      }
      for (let r = 0; r <= rows; r++) {
        ctx.beginPath(); ctx.moveTo(0, (r / rows) * H); ctx.lineTo(W, (r / rows) * H); ctx.stroke();
      }

      // --- Glowing gold particles ---
      for (let i = 0; i < 55; i++) {
        const px = (Math.sin(i * 127.1 + t * 0.35) * 0.5 + 0.5) * W;
        const py = (Math.cos(i * 311.7 + t * 0.25) * 0.5 + 0.5) * H;
        const alpha = (Math.sin(i * 2.3 + t * 1.8) * 0.5 + 0.5) * 0.55 + 0.05;
        const radius = (Math.sin(i * 1.7 + t) * 0.5 + 0.5) * 1.5 + 0.5;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${GOLD},${alpha * 0.7})`;
        ctx.fillStyle = `rgba(${GOLD},${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      // Edge vignette
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.25, W / 2, H / 2, H * 0.85);
      vig.addColorStop(0, "rgba(0,0,0,0)");
      vig.addColorStop(1, "rgba(0,0,0,0.45)");
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
