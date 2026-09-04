import React, { useState, useEffect, useRef } from "react";
import commonBg from "../assets/background.png";
import andCalligraphy from "../assets/and-calligraphy.png";
import viewLocationFrame from "../assets/view-location-frame.png";
import palaceImg from "../assets/palace.webp";
import floralArch from "../assets/floral-arch.webp";
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

export default function HeroSection({ hasEntered = false }) {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.25);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (hasEntered) {
      // Allow opening curtain fade to complete so entrance plays gracefully
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsReady(false);
    }
  }, [hasEntered]);

  const active = isReady && isInView;

  const getSingleTransition = (delayMs, yOffset = 10, duration = "2.3s") => ({
    opacity: active ? 1 : 0,
    transform: active ? "translate(-50%, 0)" : `translate(-50%, ${yOffset}px)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  return (
    <section ref={sectionRef} id="home" className="wedding-section">
      {/* Background Raw Silk Linen Art */}
      <img src={commonBg} alt="Home Section" className="wedding-section-img" />

      {/* Typography Overlay Layer - Refined Royal Proportions */}
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
        {/* Floral Garland Arch Surrounding Couple Name in WebP */}
        <div
          style={{
            position: "absolute",
            top: "4.5%",
            left: "50%",
            width: "92%",
            maxWidth: "530px",
            pointerEvents: "none",
            zIndex: 8,
            ...getSingleTransition(250, 10, "2.5s"),
          }}
        >
          <img
            src={floralArch}
            alt="Floral Garland Arch"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              transform: "scale(1.10)",
              transformOrigin: "center top",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 1. Tagline: TOGETHER WITH THEIR FAMILIES */}
        <div
          style={{
            position: "absolute",
            top: "29.2%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.36rem, 1.15vw, 0.44rem)",
            letterSpacing: "0.22em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="Together With Their Families"
            startDelay={550}
            wordInterval={180}
            isInView={active}
          />
        </div>

        {/* 2. Bride Name: AISHWARYA */}
        <h1
          style={{
            position: "absolute",
            top: "33.6%",
            left: "50%",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.9rem, 2.8vw, 1.25rem)",
            letterSpacing: "0.14em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            margin: 0,
            padding: 0,
            lineHeight: 1.1,
            whiteSpace: "nowrap",
            ...getSingleTransition(1400, 12, "2.1s"),
          }}
        >
          AISHWARYA
        </h1>

        {/* 3. Calligraphy Connector: and */}
        <div
          className="hero-and-connector"
          style={{
            position: "absolute",
            top: "38.5%",
            left: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(60px, 15vw, 80px)",
            ...getSingleTransition(1900, 8, "2.0s"),
          }}
        >
          <img
            src={andCalligraphy}
            alt="and"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* 4. Groom Name: RAGHAV */}
        <h1
          style={{
            position: "absolute",
            top: "43.2%",
            left: "50%",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.9rem, 2.8vw, 1.25rem)",
            letterSpacing: "0.14em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            margin: 0,
            padding: 0,
            lineHeight: 1.1,
            whiteSpace: "nowrap",
            ...getSingleTransition(2300, 12, "2.1s"),
          }}
        >
          RAGHAV
        </h1>

        {/* 5. Date: 20 NOVEMBER 2026 */}
        <div
          style={{
            position: "absolute",
            top: "49.6%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.40rem, 1.25vw, 0.48rem)",
            letterSpacing: "0.20em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="20 November 2026"
            startDelay={2900}
            wordInterval={180}
            isInView={active}
          />
        </div>

        {/* 6. City: UDAIPUR, RAJASTHAN */}
        <div
          style={{
            position: "absolute",
            top: "52.3%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.38rem, 1.15vw, 0.46rem)",
            letterSpacing: "0.20em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="Udaipur, Rajasthan"
            startDelay={3450}
            wordInterval={180}
            isInView={active}
          />
        </div>

        {/* Royal Palace Illustration Artwork in WebP format */}
        <div
          style={{
            position: "absolute",
            top: "54.6%",
            left: "50%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9,
            ...getSingleTransition(3900, 12, "2.6s"),
          }}
        >
          <img
            src={palaceImg}
            alt="Palace Udaipur"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />
        </div>

        {/* 7. Palace Hotel: RAFFLES UDAIPUR */}
        <div
          style={{
            position: "absolute",
            top: "85.6%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.44rem, 1.3vw, 0.52rem)",
            letterSpacing: "0.24em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="Raffles Udaipur"
            startDelay={4500}
            wordInterval={190}
            isInView={active}
          />
        </div>

        {/* 8. Interactive VIEW LOCATION Pill with Pearl Tassel */}
        <div
          className="hero-view-location-wrap"
          style={{
            position: "absolute",
            top: "88.6%",
            left: "50%",
            pointerEvents: "auto",
            ...getSingleTransition(5050, 10, "2.3s"),
          }}
        >
          <a
            href="#venue"
            onClick={(e) => {
              e.preventDefault();
              const venueEl = document.getElementById("venue");
              if (venueEl) {
                venueEl.scrollIntoView({ behavior: "smooth" });
              }
            }}
            title="Go to Venue Section"
            className="hero-view-location-btn"
            style={{
              display: "block",
              width: "clamp(70px, 17vw, 90px)",
              cursor: "pointer",
              transition: "transform 0.2s ease, filter 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.filter = "brightness(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "brightness(1)";
            }}
          >
            <img
              src={viewLocationFrame}
              alt="View Location"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
