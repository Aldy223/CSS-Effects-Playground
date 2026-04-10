"use client";

import { EffectCard } from "./EffectCard";

export const TEXT_EFFECTS_COUNT = 5;

const waveText = "Wave Text";

export function TextEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* Gradient Text */}
      <EffectCard
        title="Gradient Text"
        description="Smooth animated gradient flowing across text"
        filename="gradient-text.css"
        code={`.fx-gradient-text {
  background: linear-gradient(
    90deg,
    #f59e0b, #ef4444, #ec4899,
    #8b5cf6, #06b6d4, #10b981, #f59e0b
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fx-gradient-shift 3s linear infinite;
}

@keyframes fx-gradient-shift {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}`}
      >
        <h2 className="text-4xl font-bold fx-gradient-text">CSS Effects</h2>
      </EffectCard>

      {/* Neon Glow */}
      <EffectCard
        title="Neon Glow"
        description="Flickering neon sign glow effect"
        demoBg="bg-black/90"
        filename="neon-text.css"
        code={`.fx-neon-text {
  color: #0ff;
  text-shadow:
    0 0 7px #0ff,
    0 0 10px #0ff,
    0 0 21px #0ff,
    0 0 42px #0fa,
    0 0 82px #0fa;
  animation: fx-neon-flicker 1.5s infinite alternate;
}

@keyframes fx-neon-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 7px #0ff,
      0 0 10px #0ff,
      0 0 21px #0ff,
      0 0 42px #0fa,
      0 0 82px #0fa;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}`}
      >
        <h2 className="text-4xl font-bold fx-neon-text">Hello World</h2>
      </EffectCard>

      {/* Glitch Text */}
      <EffectCard
        title="Glitch Text"
        description="Digital glitch distortion with color splits"
        filename="glitch-text.css"
        code={`.fx-glitch-text {
  position: relative;
  animation: fx-glitch-skew 1s infinite linear alternate-reverse;
}

/* Set text content via data-text attribute */
/* The ::before and ::after pseudo-elements
   read it with content: attr(data-text) */

.fx-glitch-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  color: #ff0;
  animation: fx-glitch-effect 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  transform: translate(-2px);
}

.fx-glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  color: #0ff;
  animation: fx-glitch-effect-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  transform: translate(2px);
}

@keyframes fx-glitch-effect {
  0%   { transform: translate(0); }
  20%  { transform: translate(-3px, 3px); }
  40%  { transform: translate(-3px, -3px); }
  60%  { transform: translate(3px, 3px); }
  80%  { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
}

@keyframes fx-glitch-effect-2 {
  0%   { transform: translate(0); }
  20%  { transform: translate(3px, -3px); }
  40%  { transform: translate(3px, 3px); }
  60%  { transform: translate(-3px, -3px); }
  80%  { transform: translate(-3px, 3px); }
  100% { transform: translate(0); }
}

@keyframes fx-glitch-skew {
  0%   { transform: skew(0deg); }
  2%   { transform: skew(1deg); }
  4%   { transform: skew(0deg); }
  48%  { transform: skew(0deg); }
  50%  { transform: skew(-1deg); }
  52%  { transform: skew(0deg); }
  100% { transform: skew(0deg); }
}`}
      >
        <h2
          className="text-4xl font-bold fx-glitch-text"
          data-text="GLITCH FX"
        >
          GLITCH FX
        </h2>
      </EffectCard>

      {/* Stroke / Outline Text */}
      <EffectCard
        title="Stroke / Outline Text"
        description="Outlined text that fills with color on hover"
        filename="stroke-text.css"
        code={`.fx-stroke-text {
  -webkit-text-stroke: 2px currentColor;
  -webkit-text-fill-color: transparent;
  transition: all 0.4s ease;
}

.fx-stroke-text:hover {
  -webkit-text-fill-color: currentColor;
}`}
      >
        <h2 className="text-4xl font-bold fx-stroke-text">CSS Effects</h2>
      </EffectCard>

      {/* Wave Text */}
      <EffectCard
        title="Wave Text"
        description="Letters bounce in a staggered wave animation"
        filename="wave-text.css"
        code={`.fx-wave-text span {
  display: inline-block;
  animation: fx-wave-bounce 1s ease-in-out infinite;
}

/* Stagger each letter with animation-delay */
.fx-wave-text span:nth-child(1)  { animation-delay: 0s; }
.fx-wave-text span:nth-child(2)  { animation-delay: 0.1s; }
.fx-wave-text span:nth-child(3)  { animation-delay: 0.2s; }
.fx-wave-text span:nth-child(4)  { animation-delay: 0.3s; }
.fx-wave-text span:nth-child(5)  { animation-delay: 0.4s; }
.fx-wave-text span:nth-child(6)  { animation-delay: 0.5s; }
.fx-wave-text span:nth-child(7)  { animation-delay: 0.6s; }
.fx-wave-text span:nth-child(8)  { animation-delay: 0.7s; }
.fx-wave-text span:nth-child(9)  { animation-delay: 0.8s; }
.fx-wave-text span:nth-child(10) { animation-delay: 0.9s; }

@keyframes fx-wave-bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-16px); }
}`}
      >
        <h2 className="text-4xl font-bold fx-wave-text">
          {waveText.split("").map((char, i) => (
            <span key={i}>{char === " " ? "\u00A0" : char}</span>
          ))}
        </h2>
      </EffectCard>
    </div>
  );
}
