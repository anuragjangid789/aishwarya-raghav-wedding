import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { initialWeddingData } from "./data/weddingData";
import { audioEngine } from "./utils/audioEngine";

import IPhoneFrame from "./components/layout/IPhoneFrame";
import IntroGate from "./components/IntroGate";
import HeroSection from "./components/HeroSection";
import CoupleStorySection from "./components/CoupleStorySection";
import EventsSection from "./components/EventsSection";
import GallerySection from "./components/GallerySection";
import CountdownSection from "./components/CountdownSection";
import VenueSection from "./components/VenueSection";
import ThankYouSection from "./components/ThankYouSection";
import PetalsCanvas from "./components/PetalsCanvas";
import { Volume2, VolumeX } from "lucide-react";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [gateMounted, setGateMounted] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const scrollContainerRef = useRef(null);
  const contentRef = useRef(null);

  // Initialize audio engine
  useEffect(() => {
    audioEngine.init(initialWeddingData.meta?.bgMusicUrl || "");
    const unsubscribe = audioEngine.subscribe(({ isMuted: muted }) => {
      setIsMuted(muted);
    });
    return () => unsubscribe();
  }, []);

  // Studio Freight Lenis Soft & Smooth Scroll Engine
  useEffect(() => {
    if (!hasEntered || !scrollContainerRef.current || !contentRef.current) return;

    const isMobile = window.innerWidth <= 600;

    const lenis = new Lenis({
      wrapper: isMobile ? window : scrollContainerRef.current,
      content: isMobile ? document.documentElement : contentRef.current,
      eventsTarget: window,
      duration: 1.6, // Soft, dreamy luxury glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.5,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Keyboard smooth navigation support with Lenis
    const handleKeyDown = (e) => {
      if (document.querySelector(".lightbox-modal-overlay")) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll + 260, { duration: 1.2 });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll - 260, { duration: 1.2 });
      } else if (e.key === "PageDown" || (e.key === " " && !e.target.matches("input, textarea, button, a"))) {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll + window.innerHeight * 0.85, { duration: 1.4 });
      } else if (e.key === "PageUp") {
        e.preventDefault();
        lenis.scrollTo(lenis.scroll - window.innerHeight * 0.85, { duration: 1.4 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [hasEntered]);

  // Handle Invitation Opening CTA
  const handleOpenInvitation = () => {
    setHasEntered(true);
    audioEngine.startAudio();
    // Fully unmount the intro gate after the fade animation completes
    setTimeout(() => {
      setGateMounted(false);
    }, 750);
  };

  const handleToggleMute = () => {
    audioEngine.toggleMute();
  };

  return (
    <div className="desktop-viewport-container">
      {/* Whole Website Contained Inside iPhone Chassis Frame */}
      <IPhoneFrame>
        {/* Floating Sound Toggle inside iPhone screen */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "16px",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleToggleMute}
            title={isMuted ? "Unmute Music" : "Mute Music"}
            style={{
              background: isMuted ? "rgba(35, 30, 42, 0.8)" : "rgba(22, 18, 28, 0.8)",
              backdropFilter: "blur(10px)",
              border: `1px solid ${isMuted ? "rgba(255,255,255,0.2)" : "rgba(212, 175, 55, 0.45)"}`,
              borderRadius: "50%",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isMuted ? "#888" : "#dfb877",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              transition: "all 0.3s ease",
            }}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

        {/* State 1: Intro Gate Video (INSIDE the iPhone Mockup Screen) */}
        {gateMounted && (
          <div
            className="intro-gate-wrapper"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 999,
              opacity: hasEntered ? 0 : 1,
              pointerEvents: hasEntered ? "none" : "auto",
              transition: "opacity 0.75s cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            <IntroGate onOpenInvitation={handleOpenInvitation} />
          </div>
        )}

        {/* State 2: Main Invitation View (5 Clean Background Sections INSIDE the iPhone Mockup Screen) */}
        <div
          ref={scrollContainerRef}
          className="inner-phone-scroll"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            opacity: hasEntered ? 1 : 0,
            transition: "opacity 0.75s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        >
          <div ref={contentRef} style={{ width: "100%", display: "flex", flexDirection: "column", backgroundColor: "#c0c7d0" }}>
            {/* Section 1: Home (home page.webp) */}
            <HeroSection hasEntered={hasEntered} />

            {/* Section 2: Couple (couple section.webp) */}
            <CoupleStorySection />

            {/* Section 3: Events (event section.webp) */}
            <EventsSection />

            {/* Section 4: Gallery (raw silk canvas) */}
            <GallerySection />

            {/* Section 5: Countdown (countdown section.webp) */}
            <CountdownSection />

            {/* Section 6: Venue (venue section.webp) */}
            <VenueSection />

            {/* Section 7: Thank You (raw silk canvas) */}
            <ThankYouSection />
          </div>
        </div>

        {/* Minimal Petals Shower Animation in Green, Pink, Cream theme */}
        {hasEntered && <PetalsCanvas />}
      </IPhoneFrame>
    </div>
  );
}
