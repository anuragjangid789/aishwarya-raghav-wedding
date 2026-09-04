import React, { useState, useRef } from "react";
import commonBg from "../assets/background.png";
import eventArch from "../assets/event-arch.png";
import arMonogram from "../assets/ar-monogram.png";
import { useSectionInView } from "../hooks/useSectionInView";

import btnDinner from "../assets/event-btn-dinner.png";
import btnMehendi from "../assets/event-btn-mehendi.png";
import btnHaldi from "../assets/event-btn-haldi.png";
import btnSangeet from "../assets/event-btn-sangeet.png";
import btnWedding from "../assets/event-btn-wedding.png";
import btnBrunch from "../assets/event-btn-brunch.png";

const eventSchedule = [
  {
    date: "18 NOV",
    time: "6:00 PM",
    title: "WELCOME DINNER",
    icon: btnDinner,
    topPct: "39.1%",
  },
  {
    date: "19 NOV",
    time: "11:00 AM",
    title: "MEHENDI",
    icon: btnMehendi,
    topPct: "47.2%",
  },
  {
    date: "19 NOV",
    time: "1:00 PM",
    title: "HALDI",
    icon: btnHaldi,
    topPct: "55.3%",
  },
  {
    date: "19 NOV",
    time: "7:00 PM",
    title: "SANGEET",
    icon: btnSangeet,
    topPct: "63.3%",
  },
  {
    date: "20 NOV",
    time: "4:00 PM",
    title: "WEDDING",
    icon: btnWedding,
    topPct: "71.3%",
  },
  {
    date: "21 NOV",
    time: "9:00 AM",
    title: "FAREWELL BRUNCH",
    icon: btnBrunch,
    topPct: "79.3%",
  },
];

export default function EventsSection() {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.25);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section ref={sectionRef} id="events" className="wedding-section">
      {/* Background Raw Silk Linen Art */}
      <img src={commonBg} alt="Event Section" className="wedding-section-img" />

      {/* Peacock & Floral Arch Frame PNG with Slow Royal Fade-In */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 6,
          opacity: isInView ? 1 : 0,
          transform: isInView ? "scale(1)" : "scale(1.025)",
          transition: "opacity 2.6s cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 2.6s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
        }}
      >
        <img
          src={eventArch}
          alt="Peacock Floral Arch Frame"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            display: "block",
            pointerEvents: "none",
            userSelect: "none",
            filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
          }}
        />
      </div>

      {/* Typography & Buttons Overlay Layer */}
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
        {/* 1. Header: CELEBRATION SCHEDULE (2 Rows, Centered & Slow Float-Up) */}
        <h1
          style={{
            position: "absolute",
            top: "24.6%",
            left: "50%",
            transform: isInView ? "translate(-50%, -50%)" : "translate(-50%, calc(-50% + 14px))",
            opacity: isInView ? 1 : 0,
            transition: "opacity 2.4s cubic-bezier(0.16, 1, 0.3, 1) 400ms, transform 2.4s cubic-bezier(0.16, 1, 0.3, 1) 400ms",
            width: "100%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "calc(clamp(0.70rem, 2.1vw, 0.92rem) - 2px)",
            letterSpacing: "0.24em",
            fontWeight: "600",
            color: "rgb(26, 38, 49)",
            margin: 0,
            padding: 0,
            lineHeight: 1.22,
            textTransform: "uppercase",
          }}
        >
          <span>CELEBRATION</span>
          <span>SCHEDULE</span>
        </h1>

        {/* 2. Subheader: 18-21 NOVEMBER 2026 (Centered & Slow Fade-In) */}
        <div
          style={{
            position: "absolute",
            top: "28.8%",
            left: "50%",
            transform: isInView ? "translate(-50%, -50%)" : "translate(-50%, calc(-50% + 10px))",
            opacity: isInView ? 1 : 0,
            transition: "opacity 2.4s cubic-bezier(0.16, 1, 0.3, 1) 650ms, transform 2.4s cubic-bezier(0.16, 1, 0.3, 1) 650ms",
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.38rem, 1.15vw, 0.46rem)",
            letterSpacing: "0.26em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          18–21 NOVEMBER 2026
        </div>

        {/* 3. Vertical Pearl Connector Cord with Slow Downward Draw Animation */}
        <div
          style={{
            position: "absolute",
            top: "31.8%",
            bottom: "16.8%",
            left: "50%",
            width: "1.5px",
            transform: isInView ? "translateX(-50%) scaleY(1)" : "translateX(-50%) scaleY(0.6)",
            transformOrigin: "top center",
            background: "linear-gradient(to bottom, #d2dbe2, #8596a5 6%, #8596a5 94%, #d2dbe2)",
            zIndex: 11,
            opacity: isInView ? 1 : 0,
            transition: "opacity 2.6s cubic-bezier(0.16, 1, 0.3, 1) 600ms, transform 2.6s cubic-bezier(0.16, 1, 0.3, 1) 600ms",
          }}
        >
          {/* Top Hanging Pearl Ring / Loop */}
          <div
            style={{
              position: "absolute",
              top: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #ece5d8 55%, #a89d88 100%)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.22)",
            }}
          />

          {/* Intermediate Decorative Pearl Beads along the Cord */}
          {[22.1, 37.8, 53.5, 69.1, 84.6].map((pct, pIdx) => (
            <div
              key={pIdx}
              style={{
                position: "absolute",
                top: `${pct}%`,
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #ece5d8 55%, #a89d88 100%)",
                boxShadow: "0 1px 1px rgba(0,0,0,0.18)",
              }}
            />
          ))}

          {/* Bottom Pearl Drop */}
          <div
            style={{
              position: "absolute",
              bottom: "-5px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "6px",
              height: "7px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #ece5d8 55%, #a89d88 100%)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.22)",
            }}
          />
        </div>

        {/* 4. The 6 Separated Event Rows with 2-Row Time & Slow Staggered Animations */}
        {eventSchedule.map((ev, index) => {
          const isSelected = selectedEvent === ev.title;
          const rowDelay = 900 + index * 220;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: ev.topPct,
                left: 0,
                right: 0,
                transform: "translateY(-50%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 1.25rem",
                zIndex: 15,
              }}
            >
              {/* Left Column: Date & Time in 2 Rows with Slow Glide Entrance */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  textAlign: "right",
                  paddingRight: "clamp(6px, 1.8vw, 10px)",
                  fontFamily: "'Cinzel', serif",
                  whiteSpace: "nowrap",
                  lineHeight: 1.25,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "none" : "translateX(-12px)",
                  transition: `opacity 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay}ms, transform 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay}ms`,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(0.42rem, 1.25vw, 0.50rem)",
                    letterSpacing: "0.15em",
                    fontWeight: "600",
                    color: "rgb(26, 38, 49)",
                    transition: "color 0.3s ease",
                  }}
                >
                  {ev.date}
                </span>
                <span
                  style={{
                    fontSize: "clamp(0.37rem, 1.1vw, 0.44rem)",
                    letterSpacing: "0.12em",
                    fontWeight: "500",
                    color: "rgb(26, 38, 49)",
                    marginTop: "2px",
                    transition: "color 0.3s ease",
                  }}
                >
                  {ev.time}
                </span>
              </div>

              {/* Middle Column: Clickable Medallion Button with Slow Bloom Entrance */}
              <button
                type="button"
                onClick={() => setSelectedEvent(isSelected ? null : ev.title)}
                title={`View ${ev.title} (${ev.date} • ${ev.time})`}
                aria-label={ev.title}
                style={{
                  flexShrink: 0,
                  background: "none",
                  border: "none",
                  padding: 0,
                  margin: 0,
                  width: "clamp(27px, 7.2vw, 37px)",
                  height: "clamp(27px, 7.2vw, 37px)",
                  borderRadius: "50%",
                  cursor: "pointer",
                  pointerEvents: "auto",
                  position: "relative",
                  zIndex: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: isInView ? 1 : 0,
                  transform: isInView
                    ? (isSelected ? "scale(1.18)" : "scale(1)")
                    : "scale(0.72) translateY(6px)",
                  filter: isSelected
                    ? "drop-shadow(0 0 10px rgba(212, 175, 55, 0.9))"
                    : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.22))",
                  transition: `opacity 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + 90}ms, transform 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + 90}ms, filter 0.25s ease`,
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = "scale(1.15)";
                    e.currentTarget.style.filter = "drop-shadow(0 0 8px rgba(212, 175, 55, 0.7))";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.22))";
                  }
                }}
              >
                <img
                  src={ev.icon}
                  alt={ev.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    pointerEvents: "none",
                  }}
                />
              </button>

              {/* Right Column: Event Title (2 Rows if 2 Words, Placed Closer to Center) */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  textAlign: "left",
                  paddingLeft: "clamp(6px, 1.8vw, 10px)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(0.44rem, 1.3vw, 0.54rem)",
                  letterSpacing: "0.15em",
                  fontWeight: "600",
                  color: "rgb(26, 38, 49)",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "none" : "translateX(12px)",
                  transition: `opacity 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + 160}ms, transform 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + 160}ms, color 0.25s ease`,
                }}
              >
                {ev.title.split(" ").map((word, wIdx) => (
                  <span key={wIdx} style={{ display: "block" }}>
                    {word}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* 5. Delicate Selected Event Badge Notification */}
        {selectedEvent && (
          <div
            style={{
              position: "absolute",
              bottom: "10.5%",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(22, 18, 28, 0.9)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(212, 175, 55, 0.55)",
              borderRadius: "20px",
              padding: "0.32rem 0.85rem",
              color: "#e8d8b8",
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.42rem, 1.2vw, 0.5rem)",
              letterSpacing: "0.14em",
              textAlign: "center",
              zIndex: 25,
              pointerEvents: "auto",
              boxShadow: "0 6px 16px rgba(0, 0, 0, 0.45)",
            }}
          >
            ✦ {selectedEvent} ✦
          </div>
        )}

        {/* 6. Bottom Embroidered Monogram Logo with Slow Grand Finale Entrance */}
        <div
          style={{
            position: "absolute",
            top: "92.2%",
            left: "50%",
            transform: isInView
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, calc(-50% + 14px)) scale(0.92)",
            opacity: isInView ? 1 : 0,
            transition: "opacity 2.6s cubic-bezier(0.16, 1, 0.3, 1) 2400ms, transform 2.6s cubic-bezier(0.16, 1, 0.3, 1) 2400ms",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(42px, 13.5vw, 56px)",
          }}
        >
          <img
            src={arMonogram}
            alt="A & R"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.15))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
