import React, { useRef } from "react";
import thankYouBg from "../assets/countdown-bg-clean.webp";
import thankYouPeacocks from "../assets/thankyou-peacocks.webp";
import thankYouCornerVine from "../assets/thankyou-corner-vine.webp";
import thankYouDivider from "../assets/venue-divider.webp";
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

export default function ThankYouSection() {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.20);

  const getSingleTransition = (delayMs, yOffset = 10, duration = "2.2s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate(-50%, 0)" : `translate(-50%, ${yOffset}px)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  const getCornerTransition = (delayMs, xOffset = -8, yOffset = -8, scaleStyle = "none", duration = "2.5s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? scaleStyle : `${scaleStyle} translate(${xOffset}px, ${yOffset}px)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  return (
    <section ref={sectionRef} id="thank-you" className="wedding-section">
      {/* Background Raw Silk Linen Canvas */}
      <img
        src={thankYouBg}
        alt="Thank You Section Background"
        className="wedding-section-img"
      />

      {/* 4 Corner Framing Vines in WebP with 2px Backdrop Shadow */}
      {/* Top Left Corner */}
      <div
        className="thankyou-corner-vine"
        style={{
          position: "absolute",
          top: "1.2%",
          left: "1.2%",
          width: "clamp(48px, 13vw, 75px)",
          pointerEvents: "none",
          zIndex: 8,
          ...getCornerTransition(200, -8, -8, "none"),
        }}
      >
        <img
          src={thankYouCornerVine}
          alt="Corner Vine Top Left"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
          }}
        />
      </div>

      {/* Top Right Corner (Horizontally Flipped) */}
      <div
        className="thankyou-corner-vine"
        style={{
          position: "absolute",
          top: "1.2%",
          right: "1.2%",
          width: "clamp(48px, 13vw, 75px)",
          pointerEvents: "none",
          zIndex: 8,
          ...getCornerTransition(200, 8, -8, "scaleX(-1)"),
        }}
      >
        <img
          src={thankYouCornerVine}
          alt="Corner Vine Top Right"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
          }}
        />
      </div>

      {/* Bottom Left Corner (Vertically Flipped) */}
      <div
        className="thankyou-corner-vine"
        style={{
          position: "absolute",
          bottom: "1.2%",
          left: "1.2%",
          width: "clamp(48px, 13vw, 75px)",
          pointerEvents: "none",
          zIndex: 8,
          ...getCornerTransition(200, -8, 8, "scaleY(-1)"),
        }}
      >
        <img
          src={thankYouCornerVine}
          alt="Corner Vine Bottom Left"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
          }}
        />
      </div>

      {/* Bottom Right Corner (Both Flipped) */}
      <div
        className="thankyou-corner-vine"
        style={{
          position: "absolute",
          bottom: "1.2%",
          right: "1.2%",
          width: "clamp(48px, 13vw, 75px)",
          pointerEvents: "none",
          zIndex: 8,
          ...getCornerTransition(200, 8, 8, "scale(-1, -1)"),
        }}
      >
        <img
          src={thankYouCornerVine}
          alt="Corner Vine Bottom Right"
          style={{
            width: "100%",
            height: "auto",
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
        {/* 1. Top Embroidered Royal Peacocks Crest */}
        <div
          className="thankyou-peacocks-crest"
          style={{
            position: "absolute",
            top: "13.5%",
            left: "50%",
            width: "clamp(100px, 28vw, 140px)",
            aspectRatio: "557 / 448",
            pointerEvents: "none",
            zIndex: 9,
            ...getSingleTransition(350, 10, "2.4s"),
          }}
        >
          <img
            src={thankYouPeacocks}
            alt="Embroidered Royal Peacocks Crest"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
              filter: "drop-shadow(0 2.5px 3px rgba(0, 0, 0, 0.22))",
            }}
          />
        </div>

        {/* 2. Main "Thank You" Heading in Script Font */}
        <div
          className="thankyou-heading"
          style={{
            position: "absolute",
            top: "36.5%",
            left: "50%",
            width: "88%",
            textAlign: "center",
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(1.9rem, 6.2vw, 2.7rem)",
            fontWeight: "400",
            color: "rgb(26, 38, 49)",
            letterSpacing: "0.02em",
            lineHeight: 1.05,
            whiteSpace: "nowrap",
            textShadow: "0 1px 2px rgba(212, 175, 55, 0.45)",
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.92)",
            transition: "opacity 2.2s cubic-bezier(0.16, 1, 0.3, 1) 750ms, transform 2.2s cubic-bezier(0.16, 1, 0.3, 1) 750ms",
          }}
        >
          Thank You
        </div>

        {/* 3. Short Heartfelt Thought to the Guests */}
        <div
          className="thankyou-thought"
          style={{
            position: "absolute",
            top: "47.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "74%",
            textAlign: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(0.60rem, 1.85vw, 0.78rem)",
            fontWeight: "500",
            color: "rgba(26, 38, 49, 0.88)",
            lineHeight: 1.55,
          }}
        >
          <AnimatedWords
            text="With hearts full of gratitude, we thank you for being a cherished part of our lives and celebrating the beginning of our forever."
            startDelay={1100}
            wordInterval={90}
            isInView={isInView}
          />
        </div>

        {/* 4. Middle Lotus Divider with 2px Backdrop Shadow */}
        <div
          className="thankyou-divider"
          style={{
            position: "absolute",
            top: "62.0%",
            left: "50%",
            width: "clamp(115px, 32vw, 150px)",
            pointerEvents: "none",
            zIndex: 9,
            ...getSingleTransition(1800, 8, "2.2s"),
          }}
        >
          <img
            src={thankYouDivider}
            alt="Lotus Divider"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
            }}
          />
        </div>

        {/* 5. Signature & Family Section with Couple Name: AISHWARYA & RAGHAV */}
        <div
          className="thankyou-signature"
          style={{
            position: "absolute",
            top: "70.0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "74%",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(2px, 0.6vw, 4px)",
          }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.30rem, 0.95vw, 0.38rem)",
              letterSpacing: "0.22em",
              fontWeight: "600",
              color: "rgba(26, 38, 49, 0.65)",
              textTransform: "uppercase",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) 2000ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) 2000ms",
            }}
          >
            WITH WARMEST LOVE
          </span>

          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(0.68rem, 2.1vw, 0.88rem)",
              letterSpacing: "0.14em",
              fontWeight: "700",
              color: "rgb(26, 38, 49)",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) 2200ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) 2200ms",
            }}
          >
            AISHWARYA &amp; RAGHAV
          </span>

          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(0.44rem, 1.4vw, 0.58rem)",
              letterSpacing: "0.06em",
              fontWeight: "500",
              color: "rgba(26, 38, 49, 0.80)",
              marginTop: "2px",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(6px)",
              transition: "opacity 2.0s cubic-bezier(0.16, 1, 0.3, 1) 2400ms, transform 2.0s cubic-bezier(0.16, 1, 0.3, 1) 2400ms",
            }}
          >
            &amp; The Entire Family
          </span>
        </div>
      </div>
    </section>
  );
}
