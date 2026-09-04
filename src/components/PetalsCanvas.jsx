import React, { useEffect, useRef } from "react";

/**
 * Minimal Petals Shower Animation
 * Theme Colors:
 * - Green: Soft Sage & Delicate Olive foliage tones
 * - Pink: Romantic Blush & Rose Quartz blossom petals
 * - Cream: Royal Silk & Warm Ivory Mogra/Jasmine petals
 * - Micro gold dust shimmer
 */
export default function PetalsCanvas({ count = 20, burstCount = 14 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let isRunning = true;

    // Determine high-DPI dimensions from parent or viewport
    const updateSize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement
        ? canvas.parentElement.getBoundingClientRect()
        : { width: window.innerWidth, height: window.innerHeight };

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = rect.width || window.innerWidth;
      const displayHeight = rect.height || window.innerHeight;

      canvas.width = Math.floor(displayWidth * dpr);
      canvas.height = Math.floor(displayHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      return { width: displayWidth, height: displayHeight };
    };

    let { width, height } = updateSize() || { width: window.innerWidth, height: window.innerHeight };

    const handleResize = () => {
      const dims = updateSize();
      if (dims) {
        width = dims.width;
        height = dims.height;
      }
    };

    window.addEventListener("resize", handleResize);

    // Color palettes strictly adhering to Green, Pink, and Cream wedding theme
    const greenColors = [
      "rgba(142, 168, 140, ", // Soft Sage
      "rgba(160, 182, 152, ", // Pale Eucalyptus
      "rgba(128, 156, 130, ", // Olive Green
    ];

    const pinkColors = [
      "rgba(240, 178, 192, ", // Blush Pink
      "rgba(232, 158, 174, ", // Soft Rose Pink
      "rgba(246, 202, 212, ", // Petal Pink
    ];

    const creamColors = [
      "rgba(252, 246, 232, ", // Silk Cream
      "rgba(248, 239, 218, ", // Warm Ivory
      "rgba(243, 233, 210, ", // Pearl Linen
    ];

    const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const createParticle = (spawnAbove = false) => {
      const typeRand = Math.random();
      let type, color;

      if (typeRand < 0.36) {
        type = "pink"; // Pink Blossom Petal
        color = getRandomItem(pinkColors);
      } else if (typeRand < 0.70) {
        type = "cream"; // Cream Silk Petal
        color = getRandomItem(creamColors);
      } else if (typeRand < 0.93) {
        type = "green"; // Green Botanical Leaf Petal
        color = getRandomItem(greenColors);
      } else {
        type = "sparkle"; // Delicate Gold Shimmer Dust
        color = "rgba(224, 185, 100, ";
      }

      const size =
        type === "sparkle"
          ? Math.random() * 2.5 + 2.0
          : type === "green"
          ? Math.random() * 5 + 6.5
          : Math.random() * 6 + 7.5;

      return {
        x: Math.random() * width,
        y: spawnAbove
          ? -Math.random() * (height * 0.75) - 15
          : Math.random() * height,
        size,
        type,
        color,
        speedY: type === "sparkle" ? Math.random() * 0.5 + 0.4 : Math.random() * 0.85 + 0.65,
        speedX: (Math.random() - 0.5) * 0.35,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.022,
        flip: Math.random() * Math.PI * 2,
        flipSpeed: Math.random() * 0.03 + 0.015,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.018 + 0.01,
        swayAmp: Math.random() * 1.4 + 0.7,
        opacity: Math.random() * 0.35 + 0.45,
      };
    };

    const particles = [];
    const totalParticles = count + burstCount;

    // First wave showers gracefully from the top to create the entrance celebration
    for (let i = 0; i < totalParticles; i++) {
      const spawnAbove = i >= Math.floor(count * 0.4);
      particles.push(createParticle(spawnAbove));
    }

    let time = 0;

    const render = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      particles.forEach((p) => {
        // Natural gentle fluttering physics
        p.y += p.speedY;
        p.x += Math.sin(time * p.swaySpeed * 60 + p.swayPhase) * p.swayAmp * 0.4 + p.speedX;
        p.rotation += p.rotSpeed;
        p.flip += p.flipSpeed;

        // Wrap around bottom to top smoothly
        if (p.y > height + 25) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // 3D tumble flip perspective
        const scaleX = Math.cos(p.flip);
        const scaleY = Math.sin(p.flip * 0.75);
        ctx.scale(scaleX, Math.abs(scaleY) < 0.2 ? 0.2 : scaleY);

        if (p.type === "sparkle") {
          // Delicate golden shimmer point
          const r = p.size * 0.45;
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity * (0.6 + 0.4 * Math.sin(time * 3 + p.swayPhase))})`;
          ctx.shadowBlur = 3;
          ctx.shadowColor = "rgba(224, 185, 100, 0.4)";
          ctx.fill();
        } else if (p.type === "green") {
          // Green leaf petal: slim pointed organic leaf
          const w = p.size * 0.40;
          const h = p.size * 1.05;
          ctx.beginPath();
          ctx.moveTo(0, -h / 2);
          ctx.quadraticCurveTo(w, -h * 0.1, 0, h / 2);
          ctx.quadraticCurveTo(-w, -h * 0.1, 0, -h / 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowBlur = 2;
          ctx.shadowColor = "rgba(0, 0, 0, 0.08)";
          ctx.fill();

          // Subtle central vein
          ctx.beginPath();
          ctx.moveTo(0, -h * 0.35);
          ctx.lineTo(0, h * 0.35);
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.35})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else if (p.type === "pink") {
          // Pink rose/lotus petal: soft curved teardrop
          const r = p.size * 0.60;
          ctx.beginPath();
          ctx.moveTo(0, -r);
          ctx.bezierCurveTo(r * 1.15, -r * 0.55, r * 1.05, r * 0.75, 0, r * 1.05);
          ctx.bezierCurveTo(-r * 1.05, r * 0.75, -r * 1.15, -r * 0.55, 0, -r);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowBlur = 2.5;
          ctx.shadowColor = "rgba(224, 160, 180, 0.22)";
          ctx.fill();
        } else {
          // Cream jasmine/silk petal: rounded delicate blossom
          const w = p.size * 0.50;
          const h = p.size * 0.90;
          ctx.beginPath();
          ctx.moveTo(0, -h / 2);
          ctx.bezierCurveTo(w * 1.05, -h * 0.28, w * 0.85, h * 0.38, 0, h / 2);
          ctx.bezierCurveTo(-w * 0.85, h * 0.38, -w * 1.05, -h * 0.28, 0, -h / 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.shadowBlur = 2;
          ctx.shadowColor = "rgba(200, 180, 150, 0.15)";
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      isRunning = false;
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, burstCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}
