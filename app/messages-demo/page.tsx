"use client";

import Link from "next/link";
import { CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import "./messages-demo.css";

type Minister = {
  name: string;
  role: string;
  image: string;
  voiceLabel: string;
  placeholder?: boolean;
  messages: { title: string; scripture: string; summary: string; audio: string }[];
};

const hallwayAudio = "/images/messages-demo/voices/pastor-troy-walking-faith.mp3";

const ministers: Minister[] = [
  {
    name: "Pastor Troy",
    role: "Lead Pastor",
    image: "/images/pastor-troy-main-refined.png",
    voiceLabel: "Warm, measured AI demonstration voice",
    messages: [
      {
        title: "Keep Walking by Faith",
        scripture: "2 Corinthians 5:7",
        summary: "A sample message about trusting Christ for the next faithful step.",
        audio: hallwayAudio,
      },
      {
        title: "Christ Reveals the Way",
        scripture: "John 14:6",
        summary: "A sample message inspired by the Greater Expectation vision.",
        audio: "/images/messages-demo/voices/pastor-troy-christ-way.mp3",
      },
    ],
  },
  {
    name: "Minister Hakeem",
    role: "Sample profile",
    image: "/images/messages-demo/minister-hakeem-placeholder.png",
    voiceLabel: "Energetic, hopeful AI demonstration voice",
    placeholder: true,
    messages: [
      {
        title: "Grace for the Next Step",
        scripture: "2 Corinthians 12:9",
        summary: "Demonstration content that will be replaced with an approved sermon.",
        audio: "/images/messages-demo/voices/minister-hakeem-grace.mp3",
      },
    ],
  },
  {
    name: "Minister Jamal",
    role: "Sample profile",
    image: "/images/messages-demo/minister-jamal-placeholder.png",
    voiceLabel: "Calm, reflective AI demonstration voice",
    placeholder: true,
    messages: [
      {
        title: "Faith in the Waiting",
        scripture: "Isaiah 40:31",
        summary: "Demonstration content that will be replaced with an approved sermon.",
        audio: "/images/messages-demo/voices/minister-jamal-waiting.mp3",
      },
    ],
  },
  {
    name: "Minister Val",
    role: "Sample profile",
    image: "/images/messages-demo/minister-val-placeholder.png",
    voiceLabel: "Confident, uplifting AI demonstration voice",
    placeholder: true,
    messages: [
      {
        title: "Hope That Holds",
        scripture: "Hebrews 6:19",
        summary: "Demonstration content that will be replaced with an approved sermon.",
        audio: "/images/messages-demo/voices/minister-val-hope.mp3",
      },
    ],
  },
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export default function MessagesDemo() {
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [selectedMinister, setSelectedMinister] = useState<Minister | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const drawerRef = useRef<HTMLElement | null>(null);
  const drawerCloseRef = useRef<HTMLButtonElement | null>(null);
  const lastFocusedRef = useRef<HTMLButtonElement | null>(null);

  const beginAudio = useCallback(async (source = hallwayAudio) => {
    const audio = audioRef.current;
    if (!audio) return;

    const requestedSource = new URL(source, window.location.href).href;
    if (audio.src !== requestedSource) {
      audio.pause();
      audio.src = source;
      audio.load();
    }
    audio.loop = source === hallwayAudio;

    if (!audioContextRef.current) {
      const context = new AudioContext();
      const source = context.createMediaElementSource(audio);
      const filter = context.createBiquadFilter();
      const gain = context.createGain();

      filter.type = "lowpass";
      source.connect(filter);
      filter.connect(gain);
      gain.connect(context.destination);

      audioContextRef.current = context;
      filterRef.current = filter;
      gainRef.current = gain;
    }

    await audioContextRef.current.resume();
    audio.currentTime = 0;
    await audio.play().catch(() => undefined);
  }, []);

  const enterHallway = useCallback(async () => {
    setStarted(true);
    setProgress(0.05);
    await beginAudio();
  }, [beginAudio]);

  const skipToSanctuary = useCallback(async () => {
    setStarted(true);
    setProgress(1);
    await beginAudio();
  }, [beginAudio]);

  const walk = useCallback((amount: number) => {
    setSelectedMinister(null);
    setProgress((current) => clamp(current + amount));
  }, []);

  const closeDrawer = useCallback(() => {
    setSelectedMinister(null);
    window.requestAnimationFrame(() => lastFocusedRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!started) return;

    const handleWheel = (event: WheelEvent) => {
      if (selectedMinister) return;
      event.preventDefault();
      walk(event.deltaY * 0.00075);
    };
    const handleKey = (event: KeyboardEvent) => {
      if (selectedMinister) return;
      if (["ArrowUp", "ArrowRight", "w", "W"].includes(event.key)) walk(0.08);
      if (["ArrowDown", "ArrowLeft", "s", "S"].includes(event.key)) walk(-0.08);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, [selectedMinister, started, walk]);

  useEffect(() => {
    const now = audioContextRef.current?.currentTime ?? 0;
    gainRef.current?.gain.setTargetAtTime(muted ? 0 : 0.055 + progress * 0.82, now, 0.08);
    filterRef.current?.frequency.setTargetAtTime(360 + progress * 14500, now, 0.08);
  }, [muted, progress]);

  useEffect(() => {
    if (!selectedMinister) return;

    drawerCloseRef.current?.focus();
    const handleDialogKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeDrawer();
        return;
      }
      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], audio[controls], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleDialogKey);
    return () => document.removeEventListener("keydown", handleDialogKey);
  }, [closeDrawer, selectedMinister]);

  useEffect(() => {
    const audio = audioRef.current;

    return () => {
      audio?.pause();
      audioContextRef.current?.close().catch(() => undefined);
    };
  }, []);

  const atSanctuary = progress >= 0.92;
  const distance = Math.max(0, Math.round((1 - progress) * 90));
  const sceneStyle = { "--walk": progress } as CSSProperties;

  return (
    <main className="messages-demo" style={sceneStyle}>
      <audio ref={audioRef} src={hallwayAudio} preload="auto" />

      <header className="demo-header">
        <Link href="/" aria-label="Return to Greater Expectation Church">
          <img src="/images/greater-expectation-logo.jpg" alt="" />
          <span><strong>Greater Expectation</strong><small>Messages experience</small></span>
        </Link>
        <span className="demo-status">Faith • Purpose • Expectation</span>
      </header>

      <section className={`experience-stage ${started ? "is-started" : ""} ${atSanctuary ? "is-sanctuary" : ""}`}>
        <div className="hallway-layer" aria-hidden="true" />
        <div className="sanctuary-layer" aria-hidden="true" />
        <div className="atmosphere" aria-hidden="true" />

        <div className="sanctuary-doors" aria-hidden="true">
          <span className="door door-left" />
          <span className="door door-right" />
        </div>

        {!started && (
          <div className="entry-card">
            <p className="demo-eyebrow">An immersive message journey</p>
            <h1>Follow the sound.<br />Enter the sanctuary.</h1>
            <p>
              Walk toward the Word as a distant message becomes clear, then
              enter the sanctuary and choose a minister’s message.
            </p>
            <div className="entry-actions">
              <button type="button" className="primary-action" onClick={enterHallway}>Enter the Hallway</button>
              <button type="button" className="text-action" onClick={skipToSanctuary}>Skip to messages</button>
            </div>
            <small>Sound begins only after you choose to enter. Current sample voices are clearly labeled AI demonstrations.</small>
          </div>
        )}

        {started && !atSanctuary && (
          <div className="walk-interface">
            <div className="distance-card" aria-live="polite">
              <span>{distance} feet from the sanctuary</span>
              <strong>{progress < 0.32 ? "A message is stirring…" : progress < 0.58 ? "The words are getting clearer…" : progress < 0.84 ? "The sanctuary doors are opening…" : "Step through the open doors…"}</strong>
              <div className="progress-track"><span style={{ width: `${progress * 100}%` }} /></div>
            </div>
            <div className="walk-controls">
              <button type="button" onClick={() => walk(-0.1)} aria-label="Take a step back">←</button>
              <button type="button" className="walk-forward" onClick={() => walk(0.12)}>Walk forward</button>
              <button type="button" onClick={() => walk(0.1)} aria-label="Take a step forward">→</button>
            </div>
            <p className="walk-hint">Scroll, swipe with the controls, or use arrow keys</p>
          </div>
        )}

        {started && atSanctuary && (
          <div className="sanctuary-content">
            <div className="sanctuary-heading">
              <p className="demo-eyebrow">You have entered the sanctuary</p>
              <h1>Choose a voice.<br />Receive the message.</h1>
              <p>A joyful, diverse congregation welcomes you. Select a minister to preview each message library.</p>
            </div>

            <div className="minister-grid" aria-label="Sample minister profiles">
              {ministers.map((minister) => (
                <button
                  type="button"
                  className="minister-card"
                  key={minister.name}
                  onClick={(event) => {
                    lastFocusedRef.current = event.currentTarget;
                    setSelectedMinister(minister);
                  }}
                >
                  <img src={minister.image} alt={minister.placeholder ? `Fictional concept portrait for ${minister.name}` : minister.name} />
                  <span className="minister-shade" />
                  {minister.placeholder && <small>Concept portrait</small>}
                  <span className="minister-meta"><strong>{minister.name}</strong><em>{minister.role}</em></span>
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedMinister && (
          <aside
            ref={drawerRef}
            className="message-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="message-drawer-title"
          >
            <button ref={drawerCloseRef} type="button" className="drawer-close" onClick={closeDrawer} aria-label="Close message list">×</button>
            <div className="drawer-profile">
              <img src={selectedMinister.image} alt="" />
              <div><span>{selectedMinister.role}</span><h2 id="message-drawer-title">{selectedMinister.name}</h2></div>
            </div>
            <p className="ai-voice-notice"><strong>HeyGen AI demo voice</strong>{selectedMinister.voiceLabel}</p>
            {selectedMinister.placeholder && (
              <p className="placeholder-warning">This fictional concept portrait will be replaced by an approved real photograph.</p>
            )}
            <div className="sample-messages">
              {selectedMinister.messages.map((message) => (
                <article key={message.title}>
                  <span>{message.scripture}</span>
                  <h3>{message.title}</h3>
                  <p>{message.summary}</p>
                  <button type="button" onClick={() => beginAudio(message.audio)}>▶ Play HeyGen demo voice</button>
                </article>
              ))}
            </div>
          </aside>
        )}

        {started && (
          <div className="utility-controls">
            <button type="button" aria-pressed={muted} onClick={() => setMuted((value) => !value)}>{muted ? "Unmute sound" : "Mute sound"}</button>
            <button type="button" onClick={() => { setProgress(0); setSelectedMinister(null); void beginAudio(hallwayAudio); }}>Restart walk</button>
          </div>
        )}

        <p className="prototype-note">The congregation scene and “Concept portrait” images are AI-created; HeyGen voices are demonstrations</p>
      </section>
    </main>
  );
}
