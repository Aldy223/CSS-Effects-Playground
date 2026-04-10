"use client";

import React from "react";
import { EffectCard } from "./EffectCard";

export const CARD_EFFECTS_COUNT = 5;

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
};

export function CardEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* 1. 3D Tilt */}
      <EffectCard
        title="3D Tilt"
        description="Card tilts in 3D space on hover following mouse position"
        filename="card-3d-tilt.css"
        code={`/* 3D Tilt Card */
.fx-card-3d-tilt {
  perspective: 800px;
  transform-style: preserve-3d;
  transition: transform 0.3s ease-out;
}

.fx-card-3d-tilt:hover {
  transform: rotateX(var(--rotate-x, 5deg)) rotateY(var(--rotate-y, -5deg));
  box-shadow:
    10px 10px 30px rgba(0, 0, 0, 0.15),
    -5px -5px 20px rgba(255, 255, 255, 0.03);
}

/* Usage: Add onMouseMove/onMouseLeave to set
   --rotate-x and --rotate-y via JS */`}
      >
        <div className="fx-card-3d-tilt w-64 rounded-xl overflow-hidden bg-card shadow-lg border border-border">
          <div className="h-36 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600" />
          <div className="p-5">
            <h4 className="font-semibold text-foreground text-sm">Mountain Vista</h4>
            <p className="text-xs text-muted-foreground mt-1.5">
              Hover over this card to see the 3D perspective tilt effect in action.
            </p>
          </div>
        </div>
      </EffectCard>

      {/* 2. Glassmorphism */}
      <EffectCard
        title="Glassmorphism"
        description="Frosted glass effect with backdrop blur and transparency"
        filename="glass-card.css"
        code={`/* Glassmorphism Card */
.fx-glass-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}

.fx-glass-card:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Place over a gradient or image background
   for the effect to be visible */`}
        demoBg="bg-gradient-to-br from-purple-500 to-pink-500"
      >
        <div className="fx-glass-card w-64 rounded-xl p-6 text-white">
          <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-lg mb-4">
            ✦
          </div>
          <h4 className="font-semibold text-white text-sm">Frosted Glass</h4>
          <p className="text-xs text-white/75 mt-1.5">
            A translucent card with backdrop blur, creating a frosted glass appearance.
          </p>
        </div>
      </EffectCard>

      {/* 3. Spotlight */}
      <EffectCard
        title="Spotlight"
        description="Mouse-following radial gradient spotlight effect on card"
        filename="card-spotlight.css"
        code={`/* Spotlight Card */
.fx-card-spotlight {
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.fx-card-spotlight::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(255, 255, 255, 0.06),
    transparent 40%
  );
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.fx-card-spotlight:hover::before {
  opacity: 1;
}

.fx-card-spotlight:hover {
  border-color: rgba(255, 255, 255, 0.15);
}

/* Set --mouse-x and --mouse-y via JS onMouseMove */`}
      >
        <div
          className="fx-card-spotlight w-64 rounded-xl p-6 bg-card border border-border shadow-lg"
          onMouseMove={handleMouseMove}
        >
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm font-bold mb-4">
              ☀
            </div>
            <h4 className="font-semibold text-foreground text-sm">Spotlight</h4>
            <p className="text-xs text-muted-foreground mt-1.5">
              Move your mouse over this card to see the radial spotlight follow the cursor.
            </p>
          </div>
        </div>
      </EffectCard>

      {/* 4. Hover Lift */}
      <EffectCard
        title="Hover Lift"
        description="Card lifts upward with an expanded shadow on hover"
        filename="card-hover-lift.css"
        code={`/* Hover Lift Card */
.fx-card-hover-lift {
  transition:
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.fx-card-hover-lift:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.12),
    0 8px 10px -6px rgba(0, 0, 0, 0.08);
}

/* Uses a bouncy cubic-bezier for a playful lift.
   Adjust translateY for more/less elevation. */`}
      >
        <div className="fx-card-hover-lift w-64 rounded-xl overflow-hidden bg-card border border-border shadow-sm">
          <div className="h-28 bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
          <div className="p-5">
            <h4 className="font-semibold text-foreground text-sm">Quick Launch</h4>
            <p className="text-xs text-muted-foreground mt-1.5">
              Hover to lift this card up with a smooth bouncy animation and expanded shadow.
            </p>
          </div>
        </div>
      </EffectCard>

      {/* 5. 3D Flip */}
      <EffectCard
        title="3D Flip"
        description="Card flips to reveal content on the back side"
        filename="card-flip.css"
        code={`/* 3D Flip Card */
.fx-card-flip {
  perspective: 1000px;
}

.fx-card-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.fx-card-flip:hover .fx-card-flip-inner,
.fx-card-flip.flipped .fx-card-flip-inner {
  transform: rotateY(180deg);
}

.fx-card-flip-front,
.fx-card-flip-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.fx-card-flip-back {
  transform: rotateY(180deg);
}

/* Ensure the container has a fixed height.
   Use .flipped class or :hover to trigger flip. */`}
      >
        <div className="fx-card-flip w-64 h-48">
          <div className="fx-card-flip-inner">
            <div className="fx-card-flip-front w-64 h-48 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex flex-col items-center justify-center text-white p-6 shadow-lg">
              <span className="text-3xl mb-3">🎴</span>
              <h4 className="font-semibold text-lg">Front</h4>
              <p className="text-xs text-white/70 mt-1">Hover to flip</p>
            </div>
            <div className="fx-card-flip-back w-64 h-48 rounded-xl bg-gradient-to-br from-fuchsia-600 to-violet-500 flex flex-col items-center justify-center text-white p-6 shadow-lg">
              <span className="text-3xl mb-3">✨</span>
              <h4 className="font-semibold text-lg">Back</h4>
              <p className="text-xs text-white/70 mt-1">Revealed content</p>
            </div>
          </div>
        </div>
      </EffectCard>
    </div>
  );
}
