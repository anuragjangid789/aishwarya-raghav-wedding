import React, { useRef, useState, useEffect } from "react";
import galleryBg from "../assets/countdown-bg-clean.webp";
import venueDivider from "../assets/venue-divider.webp";
import { useSectionInView } from "../hooks/useSectionInView";
import { X, ZoomIn } from "lucide-react";

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

const galleryPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    alt: "Royal Couple Portrait",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    alt: "Golden Sunset Glance",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1609151162377-794fa68b02f6?auto=format&fit=crop&w=1200&q=85",
    alt: "Traditional Celebrations",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    alt: "Palace Courtyard Memories",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    alt: "Romantic Sunset Silhouette",
  },
];

export default function GallerySection() {
  const sectionRef = useRef(null);
  const isInView = useSectionInView(sectionRef, 0.20);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  // Touch swipe gesture support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
  };

  // Gentle auto-play (pauses when touching or modal open)
  useEffect(() => {
    if (!isInView || isPaused || lightboxImg !== null) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, isPaused, lightboxImg, currentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const getSingleTransition = (delayMs, yOffset = 10, duration = "2.2s") => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translate(-50%, 0)" : `translate(-50%, ${yOffset}px)`,
    transition: `opacity ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform ${duration} cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
  });

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="wedding-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Raw Silk Linen Canvas */}
      <img
        src={galleryBg}
        alt="Gallery Section Background"
        className="wedding-section-img"
      />

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
        {/* 1. Subheader */}
        <div
          style={{
            position: "absolute",
            top: "7.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.33rem, 1.05vw, 0.42rem)",
            letterSpacing: "0.26em",
            fontWeight: "500",
            color: "rgb(26, 38, 49)",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="Moments & Memories"
            startDelay={300}
            wordInterval={180}
            isInView={isInView}
          />
        </div>

        {/* 2. Main Title */}
        <h1
          style={{
            position: "absolute",
            top: "10.8%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            textAlign: "center",
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(0.95rem, 3.0vw, 1.30rem)",
            fontWeight: "600",
            color: "rgb(26, 38, 49)",
            margin: 0,
            padding: 0,
            lineHeight: 1.1,
            whiteSpace: "nowrap",
          }}
        >
          <AnimatedWords
            text="PHOTO GALLERY"
            startDelay={600}
            wordInterval={180}
            isInView={isInView}
          />
        </h1>

        {/* 3. Subtitle */}
        <div
          style={{
            position: "absolute",
            top: "15.2%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "74%",
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(0.28rem, 0.88vw, 0.36rem)",
            letterSpacing: "0.08em",
            fontWeight: "400",
            color: "rgba(26, 38, 49, 0.80)",
            lineHeight: 1.4,
          }}
        >
          <AnimatedWords
            text="Capturing glimpses of love, laughter, and timeless celebrations"
            startDelay={950}
            wordInterval={100}
            isInView={isInView}
          />
        </div>

        {/* 4. 3D Unique Image-Only Coverflow Carousel Stage */}
        <div
          className="gallery-carousel-stage"
          style={{
            position: "absolute",
            top: "22.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "58%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1000px",
            pointerEvents: "auto",
            zIndex: 12,
            ...getSingleTransition(1200, 15, "2.2s"),
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {galleryPhotos.map((photo, idx) => {
            const count = galleryPhotos.length;
            let offset = (idx - currentIndex + count) % count;
            if (offset > count / 2) {
              offset -= count;
            }

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isFarLeft = offset === -2;
            const isFarRight = offset === 2;

            let transformStyle = "";
            let zIndex = 1;
            let opacity = 0;
            let filter = "none";
            let pointerEvents = "none";

            if (isCenter) {
              transformStyle = "translateX(-50%) translateZ(0px) scale(1) rotateY(0deg)";
              zIndex = 10;
              opacity = 1;
              filter = "none";
              pointerEvents = "auto";
            } else if (isLeft) {
              transformStyle = "translateX(calc(-50% - var(--gallery-side-offset, clamp(44px, 12.5vw, 64px)))) translateZ(-60px) scale(0.82) rotateY(22deg)";
              zIndex = 6;
              opacity = 0.65;
              filter = "brightness(0.72) blur(0.5px)";
              pointerEvents = "auto";
            } else if (isRight) {
              transformStyle = "translateX(calc(-50% + var(--gallery-side-offset, clamp(44px, 12.5vw, 64px)))) translateZ(-60px) scale(0.82) rotateY(-22deg)";
              zIndex = 6;
              opacity = 0.65;
              filter = "brightness(0.72) blur(0.5px)";
              pointerEvents = "auto";
            } else if (isFarLeft) {
              transformStyle = "translateX(calc(-50% - var(--gallery-far-offset, clamp(80px, 23vw, 115px)))) translateZ(-120px) scale(0.66) rotateY(36deg)";
              zIndex = 3;
              opacity = 0.25;
              filter = "brightness(0.5) blur(1.5px)";
              pointerEvents = "none";
            } else if (isFarRight) {
              transformStyle = "translateX(calc(-50% + var(--gallery-far-offset, clamp(80px, 23vw, 115px)))) translateZ(-120px) scale(0.66) rotateY(-36deg)";
              zIndex = 3;
              opacity = 0.25;
              filter = "brightness(0.5) blur(1.5px)";
              pointerEvents = "none";
            } else {
              transformStyle = "translateX(-50%) translateZ(-200px) scale(0.5)";
              zIndex = 1;
              opacity = 0;
            }

            return (
              <div
                key={photo.id}
                className="gallery-carousel-card"
                onClick={() => {
                  if (isCenter) {
                    setLightboxImg(photo);
                  } else {
                    setCurrentIndex(idx);
                  }
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "4%",
                  width: "var(--gallery-card-width, clamp(160px, 47vw, 210px))",
                  aspectRatio: "3 / 4",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transform: transformStyle,
                  transformStyle: "preserve-3d",
                  zIndex,
                  opacity,
                  filter,
                  pointerEvents,
                  cursor: isCenter ? "zoom-in" : "pointer",
                  transition: "all 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
                  border: isCenter
                    ? "2px solid rgba(26, 38, 49, 0.80)"
                    : "1.5px solid rgba(26, 38, 49, 0.40)",
                  boxShadow: isCenter
                    ? "0 16px 32px rgba(0, 0, 0, 0.28), 0 2px 8px rgba(26, 38, 49, 0.2)"
                    : "0 8px 18px rgba(0, 0, 0, 0.20)",
                  background: "#1a1622",
                }}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />

                {/* Subtle Luxury Vignette for Center Active Card */}
                {isCenter && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "radial-gradient(ellipse at center, transparent 65%, rgba(26, 38, 49, 0.35) 100%)",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Click to Zoom Icon Indicator on Active Photo */}
                {isCenter && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: "rgba(255, 255, 255, 0.88)",
                      border: "1px solid rgba(26, 38, 49, 0.80)",
                      backdropFilter: "blur(6px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgb(26, 38, 49)",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                      opacity: 0.92,
                    }}
                  >
                    <ZoomIn size={13} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 5. Bottom Lotus Divider with 2px Backdrop Shadow */}
        <div
          className="gallery-divider"
          style={{
            position: "absolute",
            top: "90.0%",
            left: "50%",
            width: "clamp(120px, 34vw, 160px)",
            pointerEvents: "none",
            zIndex: 9,
            ...getSingleTransition(1600, 8, "2.2s"),
          }}
        >
          <img
            src={venueDivider}
            alt="Lotus Divider"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              filter: "drop-shadow(0 2px 2px rgba(0, 0, 0, 0.22))",
            }}
          />
        </div>
      </div>

      {/* 6. Fullscreen Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 9999,
            background: "rgba(10, 8, 14, 0.92)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "zoom-out",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxImg(null)}
            aria-label="Close Lightbox"
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.15)",
              border: "1px solid rgba(212, 175, 55, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ecd9b0",
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            <X size={20} />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "88%",
              maxHeight: "75%",
              borderRadius: "16px",
              overflow: "hidden",
              border: "2px solid rgba(26, 38, 49, 0.80)",
              boxShadow: "0 24px 60px rgba(0, 0, 0, 0.6)",
            }}
          >
            <img
              src={lightboxImg.url}
              alt={lightboxImg.alt}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "70vh",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
