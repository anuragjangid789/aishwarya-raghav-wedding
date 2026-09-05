import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, Sparkles, Navigation } from "lucide-react";
import eventCardBg from "../assets/event-card-bg.png";

/**
 * EventCardModal
 * Royal Ornamental Card Modal with Spring Bounce Animation
 * Clean, elegant presentation of event essentials (Date, Time, Venue, Dress Code, Action Buttons)
 */
export default function EventCardModal({ isOpen, event, onClose, direction = "right" }) {
  // Lock background scrolling when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const innerScrollContainer = document.querySelector(".inner-phone-scroll");
    const prevInnerOverflow = innerScrollContainer ? innerScrollContainer.style.overflow : "";
    const prevBodyOverflow = document.body.style.overflow;

    if (innerScrollContainer) {
      innerScrollContainer.style.overflow = "hidden";
      innerScrollContainer.style.touchAction = "none";
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      if (innerScrollContainer) {
        innerScrollContainer.style.overflow = prevInnerOverflow;
        innerScrollContainer.style.touchAction = "";
      }
      document.body.style.overflow = prevBodyOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !event) return null;

  // Compute Google Calendar link for the event
  const createGoogleCalendarUrl = () => {
    if (!event.startIso || !event.endIso) {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        `Aishwarya & Raghav • ${event.title}`
      )}&details=${encodeURIComponent(
        `Aishwarya & Raghav Wedding Celebration\n\nVenue: ${event.venue}\nDress Code: ${event.dressCode || "Festive"}`
      )}&location=${encodeURIComponent(event.venue || "The Leela Palace, Udaipur")}`;
    }

    const start = event.startIso.replace(/[-:]/g, "").split(".")[0];
    const end = event.endIso.replace(/[-:]/g, "").split(".")[0];
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Aishwarya & Raghav • ${event.title}`
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      `Aishwarya & Raghav Wedding Celebration\n\nVenue: ${event.venue}\nDress Code: ${event.dressCode || "Festive"}`
    )}&location=${encodeURIComponent(event.venue || "The Leela Palace, Udaipur")}`;
  };

  // Determine initial bounce offset
  const initialX = direction === "left" ? -280 : 280;
  const initialRotate = direction === "left" ? -6 : 6;

  return (
    <AnimatePresence>
      <div
        className="event-card-modal-overlay"
        onClick={onClose}
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px",
          background: "rgba(10, 14, 20, 0.76)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          cursor: "pointer",
        }}
      >
        {/* Floating Modal Card */}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{
            opacity: 0,
            x: initialX,
            scale: 0.65,
            rotate: initialRotate,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            x: -initialX * 0.75,
            scale: 0.7,
            rotate: -initialRotate * 0.5,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 22,
            mass: 0.82,
          }}
          style={{
            position: "relative",
            width: "min(335px, 88vw)",
            maxWidth: "335px",
            aspectRatio: "408 / 612",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "default",
            userSelect: "none",
            WebkitUserSelect: "none",
            filter: "drop-shadow(0 20px 45px rgba(0, 0, 0, 0.68))",
          }}
        >
          {/* Card PNG Frame Background */}
          <img
            src={eventCardBg}
            alt="Royal Ornamental Card Frame"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "fill",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Compact Close / Cancel (X) Button positioned on top-right pearl arch */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Event Card"
            title="Close Card"
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "rgba(26, 38, 49, 0.85)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(212, 175, 55, 0.65)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#e8d8b8",
              cursor: "pointer",
              zIndex: 20,
              boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
              transition: "transform 0.25s ease, background 0.25s ease, color 0.25s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.12) rotate(90deg)";
              e.currentTarget.style.background = "rgba(184, 134, 40, 0.95)";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              e.currentTarget.style.background = "rgba(26, 38, 49, 0.85)";
              e.currentTarget.style.color = "#e8d8b8";
            }}
          >
            <X size={12} strokeWidth={2.4} />
          </button>

          {/* Inner Card Content Overlay (Centered within ornamental frame) */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              width: "90%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "16% 11% 14% 11%",
              boxSizing: "border-box",
              textAlign: "center",
              color: "rgb(24, 35, 46)",
              gap: "8px",
            }}
          >
            {/* Main Event Title */}
            <h2
              className="event-card-title"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(0.95rem, 3vw, 1.18rem)",
                fontWeight: "700",
                letterSpacing: "0.14em",
                color: "rgb(18, 28, 38)",
                textTransform: "uppercase",
                margin: 0,
                padding: "0 4px",
                lineHeight: 1.15,
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.5)",
              }}
            >
              {event.title}
            </h2>

            {/* Delicate Pearl / Gold Divider Line */}
            <div
              style={{
                width: "44%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(140, 110, 60, 0.6), transparent)",
                margin: "1px 0",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#d4af37",
                  boxShadow: "0 0 4px rgba(212, 175, 55, 0.8)",
                }}
              />
            </div>

            {/* Date & Time Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                margin: "2px 0",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(0.50rem, 1.55vw, 0.62rem)",
                  fontWeight: "700",
                  letterSpacing: "0.12em",
                  color: "rgb(20, 32, 44)",
                }}
              >
                <Calendar size={13} color="#875f28" strokeWidth={2.2} />
                <span className="event-card-date">{event.fullDate || `${event.date} 2026`}</span>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(0.44rem, 1.35vw, 0.54rem)",
                  fontWeight: "600",
                  letterSpacing: "0.10em",
                  color: "#6e4f1a",
                }}
              >
                <Clock size={12} color="#875f28" strokeWidth={2.2} />
                <span className="event-card-time">{event.fullTime || event.time}</span>
              </div>
            </div>

            {/* Venue & Location */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: "4px 9px",
                borderRadius: "6px",
                background: "rgba(255, 255, 255, 0.42)",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                width: "90%",
                maxWidth: "240px",
              }}
            >
              <MapPin size={12} color="#875f28" strokeWidth={2.2} style={{ flexShrink: 0 }} />
              <span
                className="event-card-venue"
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(0.38rem, 1.15vw, 0.46rem)",
                  fontWeight: "600",
                  letterSpacing: "0.08em",
                  color: "rgb(20, 31, 42)",
                  lineHeight: 1.25,
                }}
              >
                {event.venue || "The Leela Palace, Udaipur"}
              </span>
            </div>

            {/* Dress Code / Attire */}
            {event.dressCode && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(0.56rem, 1.7vw, 0.66rem)",
                  fontWeight: "600",
                  color: "rgb(42, 54, 68)",
                  lineHeight: 1.2,
                }}
              >
                <Sparkles size={11} color="#b88628" />
                <span className="event-card-dresscode">
                  <strong>Dress Code:</strong> {event.dressCode}
                </span>
              </div>
            )}

            {/* Compact Action Buttons in 2 Rows (Placed Lower Down on the Right Side) */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                alignSelf: "flex-end",
                gap: "5px",
                marginTop: "16px",
                marginRight: "6px",
                marginBottom: "2px",
                zIndex: 15,
              }}
            >
              {/* Row 1: Add to Calendar CTA */}
              <a
                href={createGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Add to Google Calendar"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  padding: "3.5px 9px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2b3947 0%, #15202b 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.6)",
                  color: "#f5e6a8",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(0.34rem, 1.05vw, 0.40rem)",
                  fontWeight: "600",
                  letterSpacing: "0.09em",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.22)",
                  transition: "transform 0.2s ease, background 0.2s ease",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px) scale(1.03)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #3d4f61 0%, #202e3c 100%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "linear-gradient(135deg, #2b3947 0%, #15202b 100%)";
                }}
              >
                <Calendar size={9} color="#d4af37" />
                <span className="event-card-btn-text">Add to Calendar</span>
              </a>

              {/* Row 2: View Directions CTA */}
              <a
                href={event.mapUrl || "https://maps.google.com/?q=The+Leela+Palace+Udaipur"}
                target="_blank"
                rel="noopener noreferrer"
                title="View Venue on Google Maps"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  padding: "3.5px 9px",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.75)",
                  border: "1px solid rgba(140, 110, 60, 0.45)",
                  color: "rgb(20, 31, 42)",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(0.34rem, 1.05vw, 0.40rem)",
                  fontWeight: "600",
                  letterSpacing: "0.09em",
                  textDecoration: "none",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.10)",
                  transition: "transform 0.2s ease, background 0.2s ease",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px) scale(1.03)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.95)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.75)";
                }}
              >
                <Navigation size={9} color="#875f28" />
                <span className="event-card-btn-text">View Directions</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
