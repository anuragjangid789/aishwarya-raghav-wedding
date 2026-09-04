import React, { useState } from "react";
import { X, Check, Copy, RefreshCw, Save, Code } from "lucide-react";
import { initialWeddingData } from "../data/weddingData";

export default function DataCustomizerModal({ isOpen, onClose, currentData, onSaveData }) {
  if (!isOpen) return null;

  const [jsonText, setJsonText] = useState(() => JSON.stringify(currentData, null, 2));
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      onSaveData(parsed);
      setError("");
      onClose();
    } catch (err) {
      setError("Invalid JSON format. Please verify commas, brackets, and quotes.");
    }
  };

  const handleReset = () => {
    setJsonText(JSON.stringify(initialWeddingData, null, 2));
    setError("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "rgba(8, 6, 11, 0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "850px",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          padding: "2rem",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.9)",
          backgroundColor: "#110e16",
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.25rem",
            borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
            paddingBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "rgba(212, 175, 55, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#dfb877",
              }}
            >
              <Code size={18} />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "#fff8e7" }}>
                Live Wedding Content Schema Editor
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "#a89b90" }}>
                Update text, images, dates, or events instantly
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#d1c4b9",
              cursor: "pointer",
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Error notification if JSON invalid */}
        {error && (
          <div
            style={{
              padding: "10px 14px",
              background: "rgba(255, 77, 79, 0.15)",
              border: "1px solid #ff4d4f",
              borderRadius: "8px",
              color: "#ff7875",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              marginBottom: "1rem",
            }}
          >
            {error}
          </div>
        )}

        {/* JSON Code Editor Area */}
        <div style={{ flexGrow: 1, minHeight: "350px", marginBottom: "1.25rem", display: "flex" }}>
          <textarea
            value={jsonText}
            onChange={(e) => {
              setJsonText(e.target.value);
              if (error) setError("");
            }}
            spellCheck="false"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "350px",
              background: "#0a080e",
              color: "#93e088",
              fontFamily: "'Courier New', Courier, monospace",
              fontSize: "0.85rem",
              lineHeight: "1.5",
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid rgba(212, 175, 55, 0.25)",
              outline: "none",
              resize: "vertical",
            }}
          />
        </div>

        {/* Action Controls */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            borderTop: "1px solid rgba(212, 175, 55, 0.2)",
            paddingTop: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={handleCopy}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "6px",
                color: "#d1c4b9",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                cursor: "pointer",
              }}
            >
              {copied ? <Check size={14} color="#52c41a" /> : <Copy size={14} />}
              <span>{copied ? "Copied!" : "Copy JSON"}</span>
            </button>

            <button
              onClick={handleReset}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "6px",
                color: "#d1c4b9",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                cursor: "pointer",
              }}
            >
              <RefreshCw size={14} />
              <span>Reset to Default</span>
            </button>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={onClose}
              style={{
                padding: "8px 18px",
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "6px",
                color: "#d1c4b9",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

            <button
              onClick={handleSave}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 22px",
                background: "linear-gradient(135deg, #dfb877 0%, #aa820a 100%)",
                border: "1px solid #fff2cc",
                borderRadius: "6px",
                color: "#0f0d13",
                fontFamily: "var(--font-heading)",
                fontSize: "0.82rem",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <Save size={14} />
              <span>Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
