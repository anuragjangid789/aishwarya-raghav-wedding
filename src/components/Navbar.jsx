import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, Sliders, Heart } from "lucide-react";

export default function Navbar({ data, isMuted, onToggleMute, onOpenCustomizer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "couple", label: "Our Story" },
    { id: "events", label: "Schedule" },
    { id: "countdown", label: "Countdown" },
    { id: "gallery", label: "Gallery" },
    { id: "venue", label: "Venue" },
    { id: "thankyou", label: "RSVP & Wishes" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll Spy
      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.4s ease",
        background: isScrolled
          ? "rgba(15, 12, 19, 0.88)"
          : "linear-gradient(180deg, rgba(15, 12, 19, 0.75) 0%, rgba(15, 12, 19, 0) 100%)",
        backdropFilter: isScrolled ? "blur(16px)" : "blur(4px)",
        borderBottom: isScrolled ? "1px solid rgba(212, 175, 55, 0.2)" : "1px solid transparent",
        padding: isScrolled ? "12px 0" : "20px 0",
      }}
    >
      <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Monogram / Brand */}
        <div
          onClick={() => scrollToSection("home")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1px solid var(--color-gold-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(212, 175, 55, 0.1)",
              fontFamily: "var(--font-heading)",
              fontSize: "0.85rem",
              fontWeight: "600",
              color: "#f5e6a8",
            }}
          >
            {data.openingScreen?.monogramSvg?.slice(0, 3) || "A&S"}
          </div>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.95rem",
              letterSpacing: "0.15em",
              color: "#f5e6a8",
              fontWeight: "600",
            }}
          >
            {data.home?.brideName?.split(" ")[0]} &amp; {data.home?.groomName?.split(" ")[0]}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "1.75rem",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: "none",
                border: "none",
                color: activeSection === link.id ? "#dfb877" : "#d1c4b9",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: activeSection === link.id ? "600" : "400",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                position: "relative",
                padding: "6px 0",
                transition: "color 0.3s ease",
              }}
            >
              {link.label}
              {activeSection === link.id && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, transparent, #dfb877, transparent)",
                  }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Actions (Sound toggle, Content customizer modal & Mobile toggle) */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Customizer trigger button */}
          <button
            onClick={onOpenCustomizer}
            title="Edit Wedding JSON Data"
            style={{
              background: "rgba(224, 169, 150, 0.15)",
              border: "1px solid rgba(224, 169, 150, 0.4)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#dfa393",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            <Sliders size={16} />
          </button>

          {/* Sticky Sound Button */}
          <button
            onClick={onToggleMute}
            title={isMuted ? "Unmute Music" : "Mute Music"}
            style={{
              background: isMuted ? "rgba(40, 35, 45, 0.7)" : "rgba(212, 175, 55, 0.15)",
              border: `1px solid ${isMuted ? "rgba(255,255,255,0.15)" : "rgba(212, 175, 55, 0.5)"}`,
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: isMuted ? "#888" : "#dfb877",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: "transparent",
              border: "none",
              color: "#dfb877",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "rgba(15, 12, 19, 0.98)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
            padding: "1.5rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.25rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.8)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: "none",
                border: "none",
                color: activeSection === link.id ? "#dfb877" : "#f5f0eb",
                fontFamily: "var(--font-heading)",
                fontSize: "1rem",
                letterSpacing: "0.15em",
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
