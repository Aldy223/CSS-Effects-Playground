"use client";

import { EffectCard } from "./EffectCard";

export const BACKGROUND_EFFECTS_COUNT = 5;

const animatedGradientCode = `.fx-bg-animated-gradient {
  background: linear-gradient(
    -45deg,
    #ee7752,
    #e73c7e,
    #23a6d5,
    #23d5ab
  );
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`;

const auroraCode = `.fx-bg-aurora {
  position: relative;
  overflow: hidden;
  background: #0a0a1a;
}

.fx-bg-aurora::before,
.fx-bg-aurora::after {
  content: '';
  position: absolute;
  inset: 0;
  filter: blur(80px);
  opacity: 0.6;
}

.fx-bg-aurora::before {
  background: linear-gradient(
    135deg,
    #00ff88 0%,
    #00ccff 30%,
    #7b2ff7 60%,
    #ff006e 100%
  );
  animation: auroraDrift1 6s ease-in-out infinite alternate;
}

.fx-bg-aurora::after {
  background: linear-gradient(
    45deg,
    #00ccff 0%,
    #7b2ff7 40%,
    #ff006e 70%,
    #00ff88 100%
  );
  animation: auroraDrift2 8s ease-in-out infinite alternate;
}

@keyframes auroraDrift1 {
  0% {
    transform: translate(-30%, -30%) rotate(0deg);
  }
  100% {
    transform: translate(30%, 30%) rotate(20deg);
  }
}

@keyframes auroraDrift2 {
  0% {
    transform: translate(30%, 30%) rotate(0deg);
  }
  100% {
    transform: translate(-30%, -30%) rotate(-15deg);
  }
}`;

const meshGradientCode = `.fx-bg-mesh {
  background-color: #ffffff;
  background-image:
    radial-gradient(at 40% 20%, #ff6b6b 0px, transparent 50%),
    radial-gradient(at 80% 0%, #ffd93d 0px, transparent 50%),
    radial-gradient(at 0% 50%, #6bcb77 0px, transparent 50%),
    radial-gradient(at 80% 50%, #4d96ff 0px, transparent 50%),
    radial-gradient(at 0% 100%, #ff6b9d 0px, transparent 50%),
    radial-gradient(at 80% 100%, #c084fc 0px, transparent 50%);
  animation: meshFloat 10s ease-in-out infinite alternate;
}

@keyframes meshFloat {
  0% {
    background-size: 100% 100%;
    background-position: 0% 0%;
  }
  50% {
    background-size: 120% 120%;
    background-position: 50% 50%;
  }
  100% {
    background-size: 100% 100%;
    background-position: 100% 100%;
  }
}`;

const dotPatternCode = `.fx-bg-dot-pattern {
  background-color: #f8fafc;
  background-image: radial-gradient(circle, #94a3b8 1px, transparent 1px);
  background-size: 24px 24px;
}`;

const noiseTextureCode = `.fx-bg-noise {
  position: relative;
  overflow: hidden;
  background: #1e293b;
}

.fx-bg-noise::before {
  content: '';
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E");
  opacity: 0.15;
  animation: noiseShift 0.5s steps(10) infinite;
  pointer-events: none;
}

@keyframes noiseShift {
  0% {
    transform: translate(0, 0);
  }
  10% {
    transform: translate(-5%, -10%);
  }
  20% {
    transform: translate(-15%, 5%);
  }
  30% {
    transform: translate(7%, -25%);
  }
  40% {
    transform: translate(-5%, 25%);
  }
  50% {
    transform: translate(-15%, 10%);
  }
  60% {
    transform: translate(15%, 0%);
  }
  70% {
    transform: translate(0%, 15%);
  }
  80% {
    transform: translate(3%, 35%);
  }
  90% {
    transform: translate(-10%, 10%);
  }
  100% {
    transform: translate(0, 0);
  }
}`;

export function BackgroundEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <EffectCard
        title="Animated Gradient"
        description="Smoothly shifting multi-color gradient background"
        code={animatedGradientCode}
        filename="animated-gradient.css"
        demoBg="bg-muted/30"
      >
        <div className="fx-bg-animated-gradient w-full h-40 rounded-xl flex items-center justify-center">
          <span className="text-white text-lg font-semibold drop-shadow-md">
            Animated Gradient
          </span>
        </div>
      </EffectCard>

      <EffectCard
        title="Aurora"
        description="Northern lights aurora borealis effect"
        code={auroraCode}
        filename="aurora.css"
        demoBg="bg-muted/30"
      >
        <div className="fx-bg-aurora w-full h-40 rounded-xl flex items-center justify-center">
          <span className="text-white text-lg font-semibold drop-shadow-md z-10 relative">
            Aurora Borealis
          </span>
        </div>
      </EffectCard>

      <EffectCard
        title="Mesh Gradient"
        description="Colorful overlapping radial gradient mesh"
        code={meshGradientCode}
        filename="mesh-gradient.css"
        demoBg="bg-muted/30"
      >
        <div className="fx-bg-mesh w-full h-40 rounded-xl flex items-center justify-center">
          <span className="text-gray-900 text-lg font-semibold drop-shadow-md">
            Mesh Gradient
          </span>
        </div>
      </EffectCard>

      <EffectCard
        title="Dot Pattern"
        description="Clean dot grid pattern background"
        code={dotPatternCode}
        filename="dot-pattern.css"
        demoBg="bg-muted/30"
      >
        <div className="fx-bg-dot-pattern w-full h-40 rounded-xl flex items-center justify-center">
          <span className="text-gray-700 text-lg font-semibold">
            Dot Pattern
          </span>
        </div>
      </EffectCard>

      <EffectCard
        title="Noise Texture"
        description="Animated grain/noise texture overlay"
        code={noiseTextureCode}
        filename="noise-texture.css"
        demoBg="bg-muted/30"
      >
        <div className="fx-bg-noise w-full h-40 rounded-xl flex items-center justify-center">
          <span className="text-slate-200 text-lg font-semibold z-10 relative">
            Noise Texture
          </span>
        </div>
      </EffectCard>
    </div>
  );
}
