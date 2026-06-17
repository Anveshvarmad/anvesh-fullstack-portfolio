import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const firstName = "ANVESH";
const middleName = "VARMA";
const lastName = "DANTULURI";

function AnimatedWord({ word, delay = 0 }: { word: string; delay?: number }) {
  return (
    <span className="cinematic-word">
      {word.split("").map((letter, index) => (
        <span
          className="cinematic-letter"
          style={{ animationDelay: `${delay + index * 0.055}s` }}
          key={`${word}-${letter}-${index}`}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

export default function HomePage() {
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsLeaving(true);
    }, 3000);

    const routeTimer = setTimeout(() => {
      navigate("/about");
    }, 3700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(routeTimer);
    };
  }, [navigate]);

  return (
    <main className={isLeaving ? "cinematic-intro leaving" : "cinematic-intro"}>
      <div className="cinematic-noise"></div>
      <div className="cinematic-grid"></div>
      <div className="cinematic-scan"></div>

      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>
      <div className="orb orb-three"></div>

      <section className="cinematic-content">
        <div className="intro-chip">
          <span className="chip-dot"></span>
          Portfolio Loading
        </div>

        <p className="cinematic-role">
          Software Engineer · Backend Systems · AI Integration
        </p>

        <h1 className="cinematic-name" aria-label="Anvesh Varma Dantuluri">
          <AnimatedWord word={firstName} delay={0.25} />
          <AnimatedWord word={middleName} delay={0.65} />
          <AnimatedWord word={lastName} delay={1.05} />
        </h1>

        <p className="cinematic-subtitle">
          Building scalable APIs, cloud-native platforms, and intelligent software systems.
        </p>

        <div className="cinematic-loader">
          <span></span>
        </div>
      </section>

      <div className="corner-frame corner-left-top"></div>
      <div className="corner-frame corner-right-bottom"></div>
    </main>
  );
}
