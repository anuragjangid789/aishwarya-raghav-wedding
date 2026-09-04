// Audio engine with custom audio playback & romantic Web Audio synthesizer fallback

class RomanticAudioEngine {
  constructor() {
    this.audioElement = null;
    this.audioCtx = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.synthInterval = null;
    this.currentTrackUrl = "";
    this.volume = 0.6;
    this.listeners = new Set();
  }

  init(audioUrl = "") {
    this.currentTrackUrl = audioUrl;
    if (audioUrl) {
      if (!this.audioElement) {
        this.audioElement = new Audio(audioUrl);
        this.audioElement.loop = true;
        this.audioElement.volume = 0;
      } else {
        this.audioElement.src = audioUrl;
      }
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach((cb) =>
      cb({
        isPlaying: this.isPlaying,
        isMuted: this.isMuted,
        volume: this.volume,
      })
    );
  }

  startAudio() {
    if (this.currentTrackUrl) {
      this.playHtml5Audio();
    } else {
      this.startSynthAmbient();
    }
    this.isPlaying = true;
    this.isMuted = false;
    this.notify();
  }

  playHtml5Audio() {
    if (!this.audioElement) {
      this.audioElement = new Audio(this.currentTrackUrl);
      this.audioElement.loop = true;
    }
    this.audioElement.volume = 0;
    this.audioElement
      .play()
      .then(() => {
        this.fadeInAudioElement();
      })
      .catch((err) => {
        console.warn("Audio file playback blocked, falling back to Web Audio synth", err);
        this.startSynthAmbient();
      });
  }

  fadeInAudioElement() {
    let currentVol = 0;
    const targetVol = this.volume;
    const interval = setInterval(() => {
      if (!this.audioElement || this.isMuted) {
        clearInterval(interval);
        return;
      }
      currentVol = Math.min(targetVol, currentVol + 0.05);
      this.audioElement.volume = currentVol;
      if (currentVol >= targetVol) {
        clearInterval(interval);
      }
    }, 100);
  }

  startSynthAmbient() {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      if (!this.audioCtx) {
        this.audioCtx = new AudioContextClass();
      }
      if (this.audioCtx.state === "suspended") {
        this.audioCtx.resume();
      }

      // Create master gain
      if (!this.masterGain) {
        this.masterGain = this.audioCtx.createGain();
        this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);
        this.masterGain.gain.linearRampToValueAtTime(0.18, this.audioCtx.currentTime + 3);
        this.masterGain.connect(this.audioCtx.destination);
      } else {
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.18, this.audioCtx.currentTime);
      }

      // Beautiful romantic chord progressions in D Major / B Minor pentatonic harp
      // Notes: D4, F#4, A4, B4, C#5, D5, E5, F#5
      const notes = [
        293.66, 369.99, 440.0, 493.88, 554.37, 587.33, 659.25, 739.99, 880.0
      ];
      
      const chordProgressions = [
        [293.66, 369.99, 440.0, 587.33], // D maj
        [246.94, 293.66, 369.99, 440.0],  // B min7
        [220.00, 277.18, 329.63, 440.0],  // A maj
        [196.00, 246.94, 293.66, 369.99]   // G maj7
      ];

      let chordIndex = 0;

      const playPluck = (freq, delay, duration = 3.5) => {
        if (!this.audioCtx || this.isMuted || !this.isPlaying) return;
        const now = this.audioCtx.currentTime + delay;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        
        // Gentle warm sine/triangle blend
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.12, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + duration);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + duration + 0.1);
      };

      const triggerArpeggio = () => {
        if (!this.isPlaying || this.isMuted) return;
        const currentChord = chordProgressions[chordIndex % chordProgressions.length];
        chordIndex++;

        // Stagger harp notes
        currentChord.forEach((freq, idx) => {
          playPluck(freq, idx * 0.35, 4.0);
        });

        // Add a high twinkle note occasionally
        const randomTwinkle = notes[Math.floor(Math.random() * notes.length)];
        playPluck(randomTwinkle * 2, 1.2, 2.5);
      };

      triggerArpeggio();
      if (this.synthInterval) clearInterval(this.synthInterval);
      this.synthInterval = setInterval(triggerArpeggio, 3600);
    } catch (e) {
      console.warn("Synth error:", e);
    }
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.startAudio();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(
        this.isMuted ? 0 : 0.18,
        this.audioCtx.currentTime
      );
    }
    this.notify();
  }

  pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(0, this.audioCtx.currentTime);
    }
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    this.notify();
  }
}

export const audioEngine = new RomanticAudioEngine();
