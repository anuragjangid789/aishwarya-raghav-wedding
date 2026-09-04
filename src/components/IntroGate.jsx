import React, { useRef, useEffect } from "react";
import openingVideo from "../assets/opening animation.webm";

export default function IntroGate({ onOpenInvitation }) {
  const videoRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  const triggerOpen = () => {
    if (!hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      onOpenInvitation();
    }
  };

  const handleVideoEnded = () => {
    triggerOpen();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      // Transition right as video concludes
      if (videoRef.current.currentTime >= videoRef.current.duration - 0.1) {
        triggerOpen();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.setAttribute("playsinline", "");
      videoRef.current.setAttribute("webkit-playsinline", "");
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy prevented playback until user interaction
        });
      }
    }

    // Safety fallback in case video takes long to load or browser stalls
    const timer = setTimeout(() => {
      triggerOpen();
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      onClick={triggerOpen}
      onTouchStart={triggerOpen}
      title="Click to open invitation"
      className="intro-gate-container"
      style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "#0d0a11",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Fullscreen Opening Animation Video - Plays 1 time, transitions automatically on completion */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        webkit-playsinline="true"
        src={openingVideo}
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        className="intro-gate-video"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
    </div>
  );
}
