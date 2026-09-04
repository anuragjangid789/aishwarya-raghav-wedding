import React, { useRef } from "react";
import commonBg from "../assets/background.png";
import ganeshaEmblem from "../assets/ganesha-emblem.webp";
import vineVertical from "../assets/couple-vine-v.webp";
import vineCorner from "../assets/couple-vine-corner.webp";
import coupleLotus from "../assets/couple-lotus.webp";
import pearlDivider from "../assets/pearl-divider.png";
import arMonogram from "../assets/ar-monogram.png";
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

export default function CoupleStorySection() {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.25);

  const getCenterTransition = (delayMs, yOffset = 10, duration = "2.3s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate(-50%, -50%)" : `translate(-50%, calc(-50% + ${yOffset}px))`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  const getCornerTransition = (delayMs, xOffset = -8, yOffset = -8, scaleX = 1, duration = "2.3s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? `scaleX(${scaleX}) translate(0, 0)` : `scaleX(${scaleX}) translate(${xOffset}px, ${yOffset}px)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  const getSideTransition = (delayMs, xOffset = -10, scaleX = 1, duration = "2.3s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? `scaleX(${scaleX}) translate(0, -50%)` : `scaleX(${scaleX}) translate(${xOffset}px, -50%)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  return (
    <section ref={sectionRef} id="couple" className="wedding-section">
      {/* Background Raw Silk Linen Art */}
      <img src={commonBg} alt="Couple Section" className="wedding-section-img" />

      {/* Royal Artwork & Typography Overlay Layer */}
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
        {/* 1. Top-Left Corner Vine */}
        <div
          className="couple-corner-vine"
          style={{
            position: "absolute",
            top: "3.5%",
            left: "4.5%",
            width: "clamp(55px, 14vw, 80px)",
            pointerEvents: "none",
            zIndex: 8,
            ...getCornerTransition(200, -8, -8, 1),
          }}
        >
          <img
            src={vineCorner}
            alt="Corner vine"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 2. Top-Right Corner Vine (Flipped) */}
        <div
          className="couple-corner-vine"
          style={{
            position: "absolute",
            top: "3.5%",
            right: "4.5%",
            width: "clamp(55px, 14vw, 80px)",
            pointerEvents: "none",
            zIndex: 8,
            ...getCornerTransition(200, 8, -8, -1),
          }}
        >
          <img
            src={vineCorner}
            alt="Corner vine"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 3. Lord Ganesha Emblem in Lotus Arch */}
        <div
          className="couple-ganesha-emblem"
          style={{
            position: "absolute",
            top: "19.5%",
            left: "50%",
            width: "clamp(68px, 16vw, 92px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            zIndex: 9,
            ...getCenterTransition(450, 10, "2.5s"),
          }}
        >
          <img
            src={ganeshaEmblem}
            alt="Lord Ganesha"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 4. Header: WITH THE BLESSINGS OF */}
        <div
          className="couple-blessings-header"
          style={{
            position: "absolute",
            top: "29.0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.35rem, 1.05vw, 0.42rem)",
            letterSpacing: "0.22em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
            paddingBottom: "clamp(10px, 2.2vw, 20px)",
          }}
        >
          <AnimatedWords
            text="With The Blessings Of"
            startDelay={700}
            wordInterval={180}
            isInView={isInView}
          />
        </div>

        {/* 5. Upper-Left Vertical Vine (Flanking Bride's Parents) */}
        <div
          className="couple-vertical-vine"
          style={{
            position: "absolute",
            top: "40.0%",
            left: "5.0%",
            width: "clamp(16px, 4.2vw, 23px)",
            pointerEvents: "none",
            zIndex: 8,
            ...getSideTransition(950, -10, 1),
          }}
        >
          <img
            src={vineVertical}
            alt="Vine"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 6. Upper-Right Vertical Vine (Flanking Bride's Parents, Flipped) */}
        <div
          className="couple-vertical-vine"
          style={{
            position: "absolute",
            top: "40.0%",
            right: "5.0%",
            width: "clamp(16px, 4.2vw, 23px)",
            pointerEvents: "none",
            zIndex: 8,
            ...getSideTransition(950, 10, -1),
          }}
        >
          <img
            src={vineVertical}
            alt="Vine"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 7. Bride's Parents Unified Block (Generous Horizontal Clearance) */}
        <div
          style={{
            position: "absolute",
            top: "40.0%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "76%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.18rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.58rem, 1.8vw, 0.80rem)",
              letterSpacing: "0.08em",
              fontWeight: "500",
              color: "rgb(26, 38, 49)",
              whiteSpace: "nowrap",
            }}
          >
            <AnimatedWords
              text="SMT. MEERA &"
              startDelay={1050}
              wordInterval={180}
              isInView={isInView}
            />
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.58rem, 1.8vw, 0.80rem)",
              letterSpacing: "0.08em",
              fontWeight: "500",
              color: "rgb(26, 38, 49)",
              whiteSpace: "nowrap",
            }}
          >
            <AnimatedWords
              text="SHRI RAJEEV SHARMA"
              startDelay={1500}
              wordInterval={180}
              isInView={isInView}
            />
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.35rem, 1.05vw, 0.42rem)",
              letterSpacing: "0.20em",
              fontWeight: "500",
              color: "rgb(26, 38, 49)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              marginTop: "0.24rem",
            }}
          >
            <AnimatedWords
              text="Parents of the Bride"
              startDelay={1950}
              wordInterval={170}
              isInView={isInView}
            />
          </div>
        </div>

        {/* 8. Middle Pearl Divider Line */}
        <div
          className="couple-pearl-divider"
          style={{
            position: "absolute",
            top: "50.5%",
            left: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(70px, 17vw, 92px)",
            ...getCenterTransition(2350, 6, "2.3s"),
          }}
        >
          <img
            src={pearlDivider}
            alt="divider"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 9. Lower-Left Vertical Vine (Flanking Groom's Parents) */}
        <div
          className="couple-vertical-vine"
          style={{
            position: "absolute",
            top: "60.5%",
            left: "5.0%",
            width: "clamp(16px, 4.2vw, 23px)",
            pointerEvents: "none",
            zIndex: 8,
            ...getSideTransition(2500, -10, 1),
          }}
        >
          <img
            src={vineVertical}
            alt="Vine"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 10. Lower-Right Vertical Vine (Flanking Groom's Parents, Flipped) */}
        <div
          className="couple-vertical-vine"
          style={{
            position: "absolute",
            top: "60.5%",
            right: "5.0%",
            width: "clamp(16px, 4.2vw, 23px)",
            pointerEvents: "none",
            zIndex: 8,
            ...getSideTransition(2500, 10, -1),
          }}
        >
          <img
            src={vineVertical}
            alt="Vine"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 11. Groom's Parents Unified Block (Generous Horizontal Clearance) */}
        <div
          style={{
            position: "absolute",
            top: "60.5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "76%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.18rem",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.58rem, 1.8vw, 0.80rem)",
              letterSpacing: "0.08em",
              fontWeight: "500",
              color: "rgb(26, 38, 49)",
              whiteSpace: "nowrap",
            }}
          >
            <AnimatedWords
              text="SMT. KAVITA &"
              startDelay={2650}
              wordInterval={180}
              isInView={isInView}
            />
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.58rem, 1.8vw, 0.80rem)",
              letterSpacing: "0.08em",
              fontWeight: "500",
              color: "rgb(26, 38, 49)",
              whiteSpace: "nowrap",
            }}
          >
            <AnimatedWords
              text="SHRI SANJAY MEHRA"
              startDelay={3100}
              wordInterval={180}
              isInView={isInView}
            />
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.35rem, 1.05vw, 0.42rem)",
              letterSpacing: "0.20em",
              fontWeight: "500",
              color: "rgb(26, 38, 49)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              marginTop: "0.24rem",
            }}
          >
            <AnimatedWords
              text="Parents of the Groom"
              startDelay={3550}
              wordInterval={170}
              isInView={isInView}
            />
          </div>
        </div>

        {/* 12. Bottom Pearl Divider Line */}
        <div
          className="couple-pearl-divider"
          style={{
            position: "absolute",
            top: "70.0%",
            left: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(70px, 17vw, 92px)",
            ...getCenterTransition(3950, 6, "2.3s"),
          }}
        >
          <img
            src={pearlDivider}
            alt="divider"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 13. Left Embroidered Lotus Flower */}
        <div
          className="couple-lotus-flower-left"
          style={{
            position: "absolute",
            top: "80.5%",
            left: "calc(50% - clamp(78px, 20.5vw, 108px))",
            width: "clamp(85px, 22vw, 118px)",
            pointerEvents: "none",
            zIndex: 9,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translate(-50%, -50%) scale(1)" : "translate(-50%, -40%) scale(0.92)",
            transition: "opacity 2.3s cubic-bezier(0.16, 1, 0.3, 1) 4300ms, transform 2.3s cubic-bezier(0.16, 1, 0.3, 1) 4300ms",
          }}
        >
          <img
            src={coupleLotus}
            alt="Lotus Flower"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 14. Right Embroidered Lotus Flower (Flipped) */}
        <div
          className="couple-lotus-flower-right"
          style={{
            position: "absolute",
            top: "80.5%",
            left: "calc(50% + clamp(78px, 20.5vw, 108px))",
            width: "clamp(85px, 22vw, 118px)",
            pointerEvents: "none",
            zIndex: 9,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translate(-50%, -50%) scaleX(-1) scale(1)" : "translate(-50%, -40%) scaleX(-1) scale(0.92)",
            transition: "opacity 2.3s cubic-bezier(0.16, 1, 0.3, 1) 4300ms, transform 2.3s cubic-bezier(0.16, 1, 0.3, 1) 4300ms",
          }}
        >
          <img
            src={coupleLotus}
            alt="Lotus Flower"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28))",
            }}
          />
        </div>

        {/* 15. Center Embroidered A & R Monogram with Pearl Drop */}
        <div
          className="couple-ar-monogram"
          style={{
            position: "absolute",
            top: "81.5%",
            left: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "clamp(42px, 11vw, 56px)",
            zIndex: 10,
            ...getCenterTransition(4700, 8, "2.5s"),
          }}
        >
          <img
            src={arMonogram}
            alt="A & R"
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
