import React, { useState, useEffect, useRef } from "react";
import countdownBg from "../assets/countdown-bg.webp";
import countdownMoon from "../assets/countdown-moon.webp";
import countdownFrame from "../assets/countdown-frame.webp";
import countdownGarland from "../assets/countdown-garland.webp";
import countdownBranch from "../assets/countdown-branch.webp";
import { useSectionInView } from "../hooks/useSectionInView";

function AnimatedWords({ text, startDelay = 0, wordInterval = 180, isInView, style = {} }) {
  const words = text.split(" ");
  return (
    <span style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: "0.24em", ...style }}>
      {words.map((word, i) => {
        const delay = startDelay + i * wordInterval;
        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateY(8px)",
              transition: `opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}

// Target wedding ceremony date: 20 November 2026, 4:00 PM IST
const TARGET_DATE = new Date("2026-11-20T16:00:00+05:30").getTime();

export default function CountdownSection() {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.25);

  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = TARGET_DATE - new Date().getTime();
    if (diff <= 0) return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return {
      days: String(d).padStart(2, "0"),
      hours: String(h).padStart(2, "0"),
      minutes: String(m).padStart(2, "0"),
      seconds: String(s).padStart(2, "0"),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = TARGET_DATE - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        clearInterval(timer);
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTimeLeft({
        days: String(d).padStart(2, "0"),
        hours: String(h).padStart(2, "0"),
        minutes: String(m).padStart(2, "0"),
        seconds: String(s).padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getSingleTransition = (delayMs, yOffset = 10, duration = "2.3s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate(-50%, 0)" : `translate(-50%, ${yOffset}px)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  const timeUnits = [
    { key: "days", value: timeLeft.days, label: "DAYS" },
    { key: "hours", value: timeLeft.hours, label: "HOURS" },
    { key: "minutes", value: timeLeft.minutes, label: "MINUTES" },
    { key: "seconds", value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <section ref={sectionRef} id="countdown" className="wedding-section">
      {/* Background Raw Silk Linen Canvas with Stitched Celestial Dome & Stitched Lotus */}
      <img
        src={countdownBg}
        alt="Countdown Section"
        className="wedding-section-img"
      />

      {/* Foreground Artwork & Typography Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pointerEvents: "none",
          zIndex: 10,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
        }}
      >
        {/* 1. Top Ornament: Embroidered Moon & Stars in Celestial Dome */}
        <div
          style={{
            position: "absolute",
            top: "1%",
            left: "50%",
            width: "clamp(135px, 38vw, 195px)",
            pointerEvents: "none",
            zIndex: 8,
            ...getSingleTransition(250, 10, "2.5s"),
          }}
        >
          <img
            src={countdownMoon}
            alt="Moon and Stars"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.22))",
            }}
          />
        </div>

        {/* 2. Subheader: COUNTING DOWN TO FOREVER */}
        <div
          style={{
            position: "absolute",
            top: "21.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.36rem, 1.12vw, 0.44rem)",
            letterSpacing: "0.26em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="Counting Down To Forever"
            startDelay={550}
            wordInterval={180}
            isInView={isInView}
          />
        </div>

        {/* 3. Main Title: AISHWARYA & RAGHAV (Single Line) */}
        <h1
          style={{
            position: "absolute",
            top: "27.2%",
            left: "50%",
            width: "92%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.82rem, 2.5vw, 1.12rem)",
            letterSpacing: "0.12em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            margin: 0,
            padding: 0,
            lineHeight: 1.1,
            whiteSpace: "nowrap",
            ...getSingleTransition(1200, 10, "2.2s"),
          }}
        >
          AISHWARYA &amp; RAGHAV
        </h1>

        {/* 4. Date: 20 NOVEMBER 2026 */}
        <div
          style={{
            position: "absolute",
            top: "33.8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.38rem, 1.18vw, 0.46rem)",
            letterSpacing: "0.26em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="20 November 2026"
            startDelay={1700}
            wordInterval={180}
            isInView={isInView}
          />
        </div>

        {/* 5. The 4 Countdown Medallion Frames in Pearl-Connected Chain */}
        <div
          style={{
            position: "absolute",
            top: "48.2%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            maxWidth: "560px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: 15,
            pointerEvents: "auto",
            padding: "0 2px",
          }}
        >
          {timeUnits.map((item, idx) => {
            const frameDelay = 2000 + idx * 220;
            const numDelay = frameDelay + 140;
            const labelDelay = numDelay + 100;
            const pearlDelay = frameDelay + 180;

            return (
              <div
                key={item.key}
                style={{
                  position: "relative",
                  flex: "0 0 26.2%",
                  maxWidth: "135px",
                  margin: "0 -0.7%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "default",
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0) scale(1)" : "translateY(14px) scale(0.90)",
                  transition: `opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${frameDelay}ms, transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${frameDelay}ms`,
                }}
              >
                {/* Circular Clamp Frame containing ONLY the countdown number */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease, filter 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                    e.currentTarget.style.filter = "drop-shadow(0 0 10px rgba(212, 175, 55, 0.6))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "none";
                  }}
                >
                  <img
                    src={countdownFrame}
                    alt={item.label}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      display: "block",
                      pointerEvents: "none",
                      filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.22))",
                    }}
                  />
                  {/* Inside Number ONLY - Individual Appearing Animation & Perfectly Centered */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      pointerEvents: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "calc(clamp(1.50rem, 5.2vw, 2.20rem) - 2px)",
                        fontWeight: "600",
                        lineHeight: 1,
                        fontVariantNumeric: "lining-nums tabular-nums",
                        fontFeatureSettings: '"lnum" 1, "tnum" 1',
                        color: "rgb(26, 38, 49)",
                        textShadow: "0 1px 1px rgba(255, 255, 255, 0.6)",
                        display: "inline-block",
                        opacity: isInView ? 1 : 0,
                        transform: isInView ? "translateY(-5%) scale(1)" : "translateY(2%) scale(0.85)",
                        transition: `opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${numDelay}ms, transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${numDelay}ms`,
                      }}
                    >
                      {item.value}
                    </span>
                  </div>

                  {/* Pearl Connector Link Between Frames with Individual Appearing Animation */}
                  {idx < timeUnits.length - 1 && (
                    <div
                      style={{
                        position: "absolute",
                        right: "-1px",
                        top: "50%",
                        transform: isInView ? "translate(50%, -50%) scale(1)" : "translate(50%, -50%) scale(0)",
                        opacity: isInView ? 1 : 0,
                        transition: `opacity 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${pearlDelay}ms, transform 1.8s cubic-bezier(0.16, 1, 0.3, 1) ${pearlDelay}ms`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 14,
                        pointerEvents: "none",
                      }}
                    >
                      <div
                        style={{
                          width: "clamp(5.5px, 1.6vw, 8px)",
                          height: "clamp(5.5px, 1.6vw, 8px)",
                          borderRadius: "50%",
                          background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #ece5d8 55%, #a89d88 100%)",
                          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.28)",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Time Name Placed OUTSIDE of the Clamp at the Bottom Side with Individual Appearing Animation */}
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(0.32rem, 1.05vw, 0.44rem)",
                    letterSpacing: "0.20em",
                    fontWeight: "600",
                    color: "rgb(26, 38, 49)",
                    marginTop: "clamp(4px, 1.2vw, 8px)",
                    textTransform: "uppercase",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                    pointerEvents: "none",
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(6px)",
                    transition: `opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${labelDelay}ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${labelDelay}ms`,
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* 6. Bottom Embroidered Floral Garland with Central Pearls & A & R Monogram */}
        <div
          style={{
            position: "absolute",
            bottom: "3.2%",
            left: "50%",
            transform: isInView ? "translate(-50%, 0) scale(1)" : "translate(-50%, 12px) scale(0.94)",
            opacity: isInView ? 1 : 0,
            transition: "opacity 2.6s cubic-bezier(0.16, 1, 0.3, 1) 3100ms, transform 2.6s cubic-bezier(0.16, 1, 0.3, 1) 3100ms",
            width: "86%",
            maxWidth: "500px",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <img
            src={countdownGarland}
            alt="Floral Garland and Monogram"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
