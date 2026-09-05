import React, { useState, useRef } from "react";
import commonBg from "../assets/background.png";
import eventArch from "../assets/event-arch.png";
import arMonogram from "../assets/ar-monogram.png";
import { useSectionInView } from "../hooks/useSectionInView";
import EventCardModal from "./EventCardModal";

import btnDinner from "../assets/event-btn-dinner.png";
import btnMehendi from "../assets/event-btn-mehendi.png";
import btnHaldi from "../assets/event-btn-haldi.png";
import btnSangeet from "../assets/event-btn-sangeet.png";
import btnWedding from "../assets/event-btn-wedding.png";
import btnBrunch from "../assets/event-btn-brunch.png";

const eventSchedule = [
  {
    id: "welcome-dinner",
    date: "18 NOV",
    fullDate: "Wednesday, 18 Nov 2026",
    time: "6:00 PM",
    fullTime: "6:00 PM – 10:00 PM",
    title: "WELCOME DINNER",
    subtitle: "An Evening of Melodies & Welcomes",
    venue: "The Royal Courtyard, The Leela Palace, Udaipur",
    dressCode: "Indo-Western Chic / Emerald & Gold",
    description: "Kick off the celebrations with an enchanting starlit evening of acoustic folk melodies, warm family welcomes, and Rajasthani gourmet delicacies.",
    icon: btnDinner,
    topPct: "39.1%",
    startIso: "2026-11-18T18:00:00+05:30",
    endIso: "2026-11-18T22:00:00+05:30",
    mapUrl: "https://maps.google.com/?q=The+Leela+Palace+Udaipur",
  },
  {
    id: "mehendi",
    date: "19 NOV",
    fullDate: "Thursday, 19 Nov 2026",
    time: "11:00 AM",
    fullTime: "11:00 AM – 2:00 PM",
    title: "MEHENDI",
    subtitle: "Henna, Sunshine & Folk Beats",
    venue: "The Guava Garden Verandah, The Leela Palace",
    dressCode: "Vibrant Pastels, Floral Silk & Festive Brights",
    description: "An exuberant afternoon of intricate henna adornments, vibrant floral blooms, rhythmic dhol beats, signature cocktails, and spirited celebration.",
    icon: btnMehendi,
    topPct: "47.2%",
    startIso: "2026-11-19T11:00:00+05:30",
    endIso: "2026-11-19T14:00:00+05:30",
    mapUrl: "https://maps.google.com/?q=The+Leela+Palace+Udaipur",
  },
  {
    id: "haldi",
    date: "19 NOV",
    fullDate: "Thursday, 19 Nov 2026",
    time: "1:00 PM",
    fullTime: "1:00 PM – 3:30 PM",
    title: "HALDI",
    subtitle: "Auspicious Turmeric & Floral Showers",
    venue: "The Sunlit Marble Courtyard, The Leela Palace",
    dressCode: "Shades of Yellow & Festive Traditional",
    description: "Bathe the bride and groom in fragrant turmeric blessings, joyous marigold petal showers, and endless laughter with our loved ones.",
    icon: btnHaldi,
    topPct: "55.3%",
    startIso: "2026-11-19T13:00:00+05:30",
    endIso: "2026-11-19T15:30:00+05:30",
    mapUrl: "https://maps.google.com/?q=The+Leela+Palace+Udaipur",
  },
  {
    id: "sangeet",
    date: "19 NOV",
    fullDate: "Thursday, 19 Nov 2026",
    time: "7:00 PM",
    fullTime: "7:00 PM Onwards",
    title: "SANGEET",
    subtitle: "Music, Dance & Glitz",
    venue: "The Grand Mewar Ballroom, The Leela Palace",
    dressCode: "Royal Glam, Glittering Cocktail & Velvet",
    description: "A glamorous, high-octane night of synchronized family dances, live musical sensations, celebrity DJ sets, and celebration until the stars fade.",
    icon: btnSangeet,
    topPct: "63.3%",
    startIso: "2026-11-19T19:00:00+05:30",
    endIso: "2026-11-20T01:00:00+05:30",
    mapUrl: "https://maps.google.com/?q=The+Leela+Palace+Udaipur",
  },
  {
    id: "wedding",
    date: "20 NOV",
    fullDate: "Friday, 20 Nov 2026",
    time: "4:00 PM",
    fullTime: "Baraat 4:00 PM • Pheras 5:30 PM",
    title: "WEDDING",
    subtitle: "The Sacred Vows & Pheras",
    venue: "The Lakefront Mandap, The Leela Palace, Udaipur",
    dressCode: "Royal Heritage Indian / Rose Gold & Ivory",
    description: "Witness Aishwarya & Raghav unite for eternity with sacred Vedic mantras and seven sacred pheras as the sun sets over Lake Pichola.",
    icon: btnWedding,
    topPct: "71.3%",
    startIso: "2026-11-20T16:00:00+05:30",
    endIso: "2026-11-20T23:00:00+05:30",
    mapUrl: "https://maps.google.com/?q=The+Leela+Palace+Udaipur",
  },
  {
    id: "brunch",
    date: "21 NOV",
    fullDate: "Saturday, 21 Nov 2026",
    time: "9:00 AM",
    fullTime: "9:00 AM – 12:30 PM",
    title: "FAREWELL BRUNCH",
    subtitle: "Cherished Memories & Goodbyes",
    venue: "The Lakeside Dining Pavilion, The Leela Palace",
    dressCode: "Breezy Linen & Resort Chic",
    description: "A tranquil morning to reminisce over champagne mimosas, artisanal delicacies, and embrace our dearest family and friends before departing.",
    icon: btnBrunch,
    topPct: "79.3%",
    startIso: "2026-11-21T09:00:00+05:30",
    endIso: "2026-11-21T12:30:00+05:30",
    mapUrl: "https://maps.google.com/?q=The+Leela+Palace+Udaipur",
  },
];

export default function EventsSection() {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.25);
  const [modalEvent, setModalEvent] = useState(null);
  const [modalDirection, setModalDirection] = useState("right");
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const handleOpenEventModal = (event, index, clickSide = null) => {
    // Determine bounce direction: alternates or respects click
    const dir = clickSide || (index % 2 === 0 ? "right" : "left");
    setModalDirection(dir);
    setModalEvent(event);
  };

  const handleCloseModal = () => {
    setModalEvent(null);
  };

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
          const isHovered = hoveredEvent === ev.id;
          const isSelected = modalEvent?.id === ev.id;
          const rowDelay = 900 + index * 220;

          return (
            <div
              key={ev.id}
              onClick={() => handleOpenEventModal(ev, index)}
              onMouseEnter={() => setHoveredEvent(ev.id)}
              onMouseLeave={() => setHoveredEvent(null)}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View ${ev.title} details`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleOpenEventModal(ev, index);
                }
              }}
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
                cursor: "pointer",
                pointerEvents: "auto",
                outline: "none",
                userSelect: "none",
              }}
            >
              {/* Left Column: Date & Time in 2 Rows with Slow Glide Entrance */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenEventModal(ev, index, "left");
                }}
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
                  cursor: "pointer",
                  opacity: isInView ? 1 : 0,
                  transform: isInView
                    ? isHovered
                      ? "translateX(-2px)"
                      : "none"
                    : "translateX(-12px)",
                  transition: `opacity 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay}ms, transform 0.25s ease`,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(0.42rem, 1.25vw, 0.50rem)",
                    letterSpacing: "0.15em",
                    fontWeight: "600",
                    color: isHovered ? "#875f28" : "rgb(26, 38, 49)",
                    transition: "color 0.25s ease",
                  }}
                >
                  {ev.date}
                </span>
                <span
                  style={{
                    fontSize: "clamp(0.37rem, 1.1vw, 0.44rem)",
                    letterSpacing: "0.12em",
                    fontWeight: "500",
                    color: isHovered ? "#a37535" : "rgb(26, 38, 49)",
                    marginTop: "2px",
                    transition: "color 0.25s ease",
                  }}
                >
                  {ev.time}
                </span>
              </div>

              {/* Middle Column: Clickable Medallion Button with Slow Bloom Entrance */}
              <button
                type="button"
                className="event-medallion-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenEventModal(ev, index);
                }}
                title={`Click to view ${ev.title} details`}
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
                    ? isHovered || isSelected
                      ? "scale(1.18)"
                      : "scale(1)"
                    : "scale(0.72) translateY(6px)",
                  filter: isHovered || isSelected
                    ? "drop-shadow(0 0 10px rgba(212, 175, 55, 0.95))"
                    : "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.22))",
                  transition: `opacity 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + 90}ms, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s ease`,
                  outline: "none",
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

              {/* Right Column: Clickable Event Title Text with Hover Glow */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleOpenEventModal(ev, index, "right");
                }}
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
                  color: isHovered ? "#875f28" : "rgb(26, 38, 49)",
                  whiteSpace: "nowrap",
                  lineHeight: 1.2,
                  cursor: "pointer",
                  opacity: isInView ? 1 : 0,
                  transform: isInView
                    ? isHovered
                      ? "translateX(2px)"
                      : "none"
                    : "translateX(12px)",
                  transition: `opacity 2.25s cubic-bezier(0.16, 1, 0.3, 1) ${rowDelay + 160}ms, transform 0.25s ease, color 0.25s ease`,
                }}
              >
                {ev.title.split(" ").map((word, wIdx) => (
                  <span
                    key={wIdx}
                    style={{
                      display: "block",
                      borderBottom: isHovered ? "1px dashed rgba(212, 175, 55, 0.6)" : "1px dashed transparent",
                      transition: "border-color 0.25s ease",
                    }}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        {/* 5. Bottom Embroidered Monogram Logo with Slow Grand Finale Entrance */}
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

      {/* 6. Royal Ornamental Event Details Card Modal with Bounce Spring Animation */}
      <EventCardModal
        isOpen={Boolean(modalEvent)}
        event={modalEvent}
        direction={modalDirection}
        onClose={handleCloseModal}
      />
    </section>
  );
}

