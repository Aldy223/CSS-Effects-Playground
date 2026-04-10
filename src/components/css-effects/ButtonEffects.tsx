"use client";

import { EffectCard } from "./EffectCard";

export const BUTTON_EFFECTS_COUNT = 5;

export function ButtonEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* 1. Shine Sweep */}
      <EffectCard
        title="Shine Sweep"
        description="A glare that sweeps across the button on hover"
        code={`.fx-btn-shine {
  position: relative;
  overflow: hidden;
}

.fx-btn-shine::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -60%;
  width: 40%;
  height: 200%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.25),
    transparent
  );
  transform: skewX(-25deg);
  transition: left 0.6s ease;
}

.fx-btn-shine:hover::after {
  left: 120%;
}`}
        filename="shine-button.css"
      >
        <button className="fx-btn-shine bg-black text-white py-3 px-8 font-semibold text-sm rounded-lg">
          Shine Sweep
        </button>
      </EffectCard>

      {/* 2. Gradient Border */}
      <EffectCard
        title="Gradient Border"
        description="Animated rotating gradient border around the button"
        code={`.fx-btn-gradient-border {
  position: relative;
  background: white;
  border: none;
  z-index: 1;
}

.fx-btn-gradient-border::before {
  content: "";
  position: absolute;
  inset: -2px;
  z-index: -2;
  border-radius: inherit;
  background: conic-gradient(
    from var(--angle, 0deg),
    #f97316, #ec4899, #8b5cf6,
    #3b82f6, #10b981, #f97316
  );
  animation: rotate-gradient 3s linear infinite;
}

.fx-btn-gradient-border::after {
  content: "";
  position: absolute;
  inset: 2px;
  z-index: -1;
  border-radius: inherit;
  background: white;
}

@property --angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes rotate-gradient {
  to {
    --angle: 360deg;
  }
}`}
        filename="gradient-border.css"
      >
        <button className="fx-btn-gradient-border py-3 px-8 font-semibold text-sm rounded-lg text-black">
          Gradient Border
        </button>
      </EffectCard>

      {/* 3. Pulse Ring */}
      <EffectCard
        title="Pulse Ring"
        description="Pulsing ring animation that radiates outward from the button"
        code={`.fx-btn-pulse-ring {
  position: relative;
}

.fx-btn-pulse-ring::before,
.fx-btn-pulse-ring::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  border: 2px solid #f59e0b;
  opacity: 0;
  animation: pulse-ring 2s ease-out infinite;
}

.fx-btn-pulse-ring::after {
  animation-delay: 1s;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.35);
    opacity: 0;
  }
}`}
        filename="pulse-ring.css"
      >
        <button className="fx-btn-pulse-ring bg-amber-500 text-white py-3 px-8 font-semibold text-sm rounded-lg">
          Pulse Ring
        </button>
      </EffectCard>

      {/* 4. Morph Shape */}
      <EffectCard
        title="Morph Shape"
        description="Button that smoothly morphs to a pill shape on hover"
        code={`.fx-btn-morph {
  border-radius: 0.5rem;
  transition: border-radius 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.4s ease;
}

.fx-btn-morph:hover {
  border-radius: 9999px;
  transform: scale(1.05);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.25);
}`}
        filename="morph-shape.css"
      >
        <button className="fx-btn-morph bg-black text-white py-3 px-8 font-semibold text-sm rounded-lg">
          Morph Shape
        </button>
      </EffectCard>

      {/* 5. Liquid Fill */}
      <EffectCard
        title="Liquid Fill"
        description="Button that fills with color from bottom to top on hover"
        code={`.fx-btn-liquid-fill {
  position: relative;
  overflow: hidden;
  background: white;
  color: #1d4ed8;
  border: 2px solid #1d4ed8;
  transition: color 0.4s ease;
  z-index: 1;
}

.fx-btn-liquid-fill::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1d4ed8;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  z-index: -1;
}

.fx-btn-liquid-fill:hover {
  color: white;
}

.fx-btn-liquid-fill:hover::before {
  transform: translateY(0);
}`}
        filename="liquid-fill.css"
      >
        <button className="fx-btn-liquid-fill py-3 px-8 font-semibold text-sm rounded-lg">
          Liquid Fill
        </button>
      </EffectCard>
    </div>
  );
}
