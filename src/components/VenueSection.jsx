import React, { useRef } from "react";
import venueBg from "../assets/countdown-bg-clean.webp";
import venuePeacocks from "../assets/venue-peacocks.webp";
import venueDivider from "../assets/venue-divider.webp";
import venueSideVine from "../assets/venue-side-vine.webp";
import venueDirectionBtn from "../assets/venue-direction-btn.webp";
import { useSectionInView } from "../hooks/useSectionInView";
import { PhoneCall, Sparkles, Car, Coffee, Compass } from "lucide-react";

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

export default function VenueSection() {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.20);

  const getSingleTransition = (delayMs, yOffset = 10, duration = "2.2s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate(-50%, 0)" : `translate(-50%, ${yOffset}px)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  const venueFeatures = [
    { icon: Sparkles, title: "Royal Heritage", desc: "Palace Architecture" },
    { icon: Car, title: "Valet Parking", desc: "24/7 Gate Service" },
    { icon: Coffee, title: "Royal Hospitality", desc: "Welcome Refreshments" },
    { icon: Compass, title: "Boat Transfers", desc: "Lake Pichola Jetty" },
  ];

  const representatives = [
    {
      id: "bride-rep",
      side: "BRIDE'S REPRESENTATIVE",
      nameLine1: "MR. RAJESH",
      nameLine2: "SHARMA",
      phone: "+91 98765 43210",
      tel: "+919876543210",
      delay: 2400,
    },
    {
      id: "groom-rep",
      side: "GROOM'S REPRESENTATIVE",
      nameLine1: "MR. VIKRAMADITYA",
      nameLine2: "SINGH",
      phone: "+91 91234 56789",
      tel: "+919123456789",
      delay: 2650,
    },
  ];

  return (
    <section ref={sectionRef} id="venue" className="wedding-section">
      {/* Background Raw Silk Linen Canvas */}
      <img
        src={venueBg}
        alt="Venue Section"
        className="wedding-section-img"
      />

      {/* Left Framing Floral Vine (Double Size, Full Height of Page) with 2px Backdrop Shadow */}
      <div
        className="venue-side-vine venue-side-vine-left"
        style={{
          position: "absolute",
          top: "0.5%",
          bottom: "0.5%",
          left: "0",
          width: "clamp(55px, 15vw, 90px)",
          height: "99%",
          pointerEvents: "none",
          zIndex: 8,
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateX(-16px)",
          transition: "opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 2.5s cubic-bezier(0.16, 1, 0.3, 1) 300ms",
        }}
      >
        <img
          src={venueSideVine}
          alt="Decorative Vine Left"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            display: "block",
            filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
          }}
        />
      </div>

      {/* Right Framing Floral Vine (Double Size, Full Height of Page, Horizontally Flipped) with 2px Backdrop Shadow */}
      <div
        className="venue-side-vine venue-side-vine-right"
        style={{
          position: "absolute",
          top: "0.5%",
          bottom: "0.5%",
          right: "0",
          width: "clamp(55px, 15vw, 90px)",
          height: "99%",
          pointerEvents: "none",
          zIndex: 8,
          opacity: isInView ? 1 : 0,
          transform: isInView ? "scaleX(-1)" : "scaleX(-1) translateX(-16px)",
          transition: "opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 2.5s cubic-bezier(0.16, 1, 0.3, 1) 300ms",
        }}
      >
        <img
          src={venueSideVine}
          alt="Decorative Vine Right"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "fill",
            display: "block",
            filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
          }}
        />
      </div>

      {/* Foreground Content Layer */}
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
        {/* 1. Top Embroidered Peacocks Crest with 2px Backdrop Shadow */}
        <div
          style={{
            position: "absolute",
            top: "1.0%",
            left: "50%",
            width: "clamp(90px, 12vw, 130px)",
            pointerEvents: "none",
            zIndex: 9,
            ...getSingleTransition(200, 10, "2.4s"),
          }}
        >
          <img
            src={venuePeacocks}
            alt="Embroidered Peacocks Crest"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
            }}
          />
        </div>


        {/* 3. Main Venue Title: THE LEELA PALACE */}
        <h1
          style={{
            position: "absolute",
            top: "16.0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "74%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.85rem, 2.7vw, 1rem)",
            fontWeight: "600",
            color: "rgb(26, 38, 49)",
            margin: 0,
            padding: 0,
            lineHeight: 1.1,
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="THE LEELA PALACE"
            startDelay={800}
            wordInterval={180}
            isInView={isInView}
          />
        </h1>

        {/* 4. City & State: UDAIPUR, RAJASTHAN */}
        <div
          style={{
            position: "absolute",
            top: "19.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "74%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.34rem, 1.05vw, 0.42rem)",
            letterSpacing: "0.22em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="Udaipur, Rajasthan"
            startDelay={1200}
            wordInterval={180}
            isInView={isInView}
          />
        </div>

        {/* 5. Address Details */}
        <div
          style={{
            position: "absolute",
            top: "22.2%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "68%",
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(0.29rem, 0.90vw, 0.52rem)",
            letterSpacing: "0.06em",
            fontWeight: "400",
            color: "rgba(26, 38, 49, 0.85)",
            margin: 0,
            padding: 0,
            lineHeight: 1.4,
          }}
        >
          <AnimatedWords
            text="Lake Pichola, P.O. Box No. 125, Udaipur, Rajasthan 313001, India"
            startDelay={1450}
            wordInterval={100}
            isInView={isInView}
          />
        </div>

        {/* 6. Venue Features (Top Highlights) */}
        <div
          style={{
            position: "absolute",
            top: "27.0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "72%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(8px, 2.0vw, 12px)",
            zIndex: 12,
          }}
        >
          {venueFeatures.map((feat, idx) => {
            const delayTitle = 1700 + idx * 120;
            const delayDesc = 1780 + idx * 120;
            return (
              <div
                key={feat.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "clamp(1px, 0.4vw, 3px) 0",
                  gap: "clamp(2px, 0.6vw, 4px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "clamp(0.36rem, 1.15vw, 0.48rem)",
                    fontWeight: "700",
                    color: "rgb(26, 38, 49)",
                    letterSpacing: "0.06em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${delayTitle}ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${delayTitle}ms`,
                  }}
                >
                  {feat.title}
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "clamp(0.28rem, 0.90vw, 0.36rem)",
                    fontWeight: "500",
                    color: "rgba(26, 38, 49, 0.72)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${delayDesc}ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${delayDesc}ms`,
                  }}
                >
                  {feat.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* 7. Direction Button Plaque Frame in WebP with Minimal Drop Shadow */}
        <div
          className="venue-direction-btn-wrap"
          style={{
            position: "absolute",
            top: "44.0%",
            left: "50%",
            width: "clamp(90px, 24vw, 120px)",
            aspectRatio: "728 / 161",
            zIndex: 14,
            pointerEvents: "auto",
            ...getSingleTransition(1950, 10, "2.2s"),
          }}
        >
          <a
            href="https://maps.google.com/?q=The+Leela+Palace+Udaipur"
            target="_blank"
            rel="noopener noreferrer"
            title="Get Directions on Google Maps"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              cursor: "pointer",
              filter: "drop-shadow(0 3px 5px rgba(0, 0, 0, 0.16))",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.06)";
              e.currentTarget.style.filter = "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.22)) drop-shadow(0 0 10px rgba(212, 175, 55, 0.65))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.filter = "drop-shadow(0 3px 5px rgba(0, 0, 0, 0.16))";
            }}
          >
            {/* Background Plaque Artwork in WebP with 2px Backdrop Shadow */}
            <img
              src={venueDirectionBtn}
              alt="Get Directions Plaque"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                display: "block",
                filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
              }}
            />
            {/* Text Overlay Centered in Plaque */}
            <span
              className="venue-direction-btn-text"
              style={{
                position: "absolute",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Cinzel', serif",
                fontSize: "calc(clamp(0.30rem, 1.0vw, 0.40rem) + 2px)",
                fontWeight: "700",
                letterSpacing: "0.08em",
                color: "rgb(26, 38, 49)",
                textTransform: "uppercase",
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.75)",
                whiteSpace: "nowrap",
                userSelect: "none",
                transform: "translateY(-0.5px)",
              }}
            >
              GET DIRECTIONS
            </span>
          </a>
        </div>

        {/* 8. Middle Lotus Vine Divider with 2px Backdrop Shadow */}
        <div
          style={{
            position: "absolute",
            top: "50.0%",
            left: "50%",
            width: "clamp(135px, 38vw, 180px)",
            pointerEvents: "none",
            zIndex: 9,
            ...getSingleTransition(2100, 8, "2.2s"),
          }}
        >
          <img
            src={venueDivider}
            alt="Lotus Vine Divider"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
            }}
          />
        </div>

        {/* 9. Contacts Section Subtitle: FOR ASSISTANCE & RSVP */}
        <div
          style={{
            position: "absolute",
            top: "56.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "74%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.36rem, 1.15vw, 0.46rem)",
            letterSpacing: "0.24em",
            fontWeight: "600",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="Family Representatives & RSVP"
            startDelay={2200}
            wordInterval={160}
            isInView={isInView}
          />
        </div>

        {/* 10. Two Family Representative Contacts with Call Buttons */}
        <div
          style={{
            position: "absolute",
            top: "61.8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "68%",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(12px, 3.2vw, 18px)",
            zIndex: 14,
            pointerEvents: "auto",
          }}
        >
          {representatives.map((rep) => {
            const sideDelay = rep.delay + 100;
            const nameDelay = rep.delay + 220;
            const phoneDelay = rep.delay + 340;
            const btnDelay = rep.delay + 450;
            return (
              <div
                key={rep.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "clamp(2px, 0.6vw, 4px) 0",
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(12px)",
                  transition: `opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${rep.delay}ms, transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) ${rep.delay}ms`,
                }}
              >
                {/* Name and Info */}
                <div style={{ display: "flex", flexDirection: "column", textAlign: "left", minWidth: 0, gap: "clamp(2px, 0.6vw, 3px)" }}>
                  <span
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "clamp(0.30rem, 0.95vw, 0.38rem)",
                      letterSpacing: "0.14em",
                      fontWeight: "600",
                      color: "rgba(26, 38, 49, 0.65)",
                      textTransform: "uppercase",
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "translateY(0)" : "translateY(6px)",
                      transition: `opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${sideDelay}ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${sideDelay}ms`,
                    }}
                  >
                    {rep.side}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      lineHeight: 1.15,
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "translateY(0)" : "translateY(6px)",
                      transition: `opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${nameDelay}ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${nameDelay}ms`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "clamp(0.44rem, 1.4vw, 0.58rem)",
                        letterSpacing: "0.08em",
                        fontWeight: "700",
                        color: "rgb(26, 38, 49)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {rep.nameLine1}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "clamp(0.44rem, 1.4vw, 0.58rem)",
                        letterSpacing: "0.08em",
                        fontWeight: "700",
                        color: "rgb(26, 38, 49)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {rep.nameLine2}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "clamp(0.33rem, 1.05vw, 0.42rem)",
                      letterSpacing: "0.06em",
                      fontWeight: "500",
                      color: "rgba(26, 38, 49, 0.80)",
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "translateY(0)" : "translateY(6px)",
                      transition: `opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${phoneDelay}ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${phoneDelay}ms`,
                    }}
                  >
                    {rep.phone}
                  </span>
                </div>

                {/* Interactive Call Icon Only (No button background, with periodic vibration) */}
                <a
                  href={`tel:${rep.tel}`}
                  title={`Call ${rep.nameLine1} ${rep.nameLine2}`}
                  className="venue-call-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    color: "rgb(26, 38, 49)",
                    textDecoration: "none",
                    flexShrink: 0,
                    cursor: "pointer",
                    padding: "4px",
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "scale(1)" : "scale(0.85)",
                    transition: `opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) ${btnDelay}ms, transform 0.25s ease, filter 0.25s ease`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.22)";
                    e.currentTarget.style.filter = "drop-shadow(0 2px 4px rgba(212, 175, 55, 0.6))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.filter = "none";
                  }}
                >
                  <span className="call-icon-vibrate">
                    <PhoneCall size={17} color="rgb(26, 38, 49)" strokeWidth={2.2} />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
