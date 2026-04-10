"use client";

import { EffectCard } from "./EffectCard";

export const LOADING_EFFECTS_COUNT = 7;

const RING_SPINNER_CODE = `.fx-spinner-ring {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: fx-spinner-ring-rotate 0.8s linear infinite;
}

@keyframes fx-spinner-ring-rotate {
  to {
    transform: rotate(360deg);
  }
}`;

const DUAL_RING_CODE = `.fx-spinner-dual-ring {
  width: 48px;
  height: 48px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: relative;
  animation: fx-spinner-dual-ring-rotate 1.2s linear infinite;
}

.fx-spinner-dual-ring::after {
  content: "";
  position: absolute;
  inset: 4px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-bottom-color: currentColor;
  border-radius: 50%;
  animation: fx-spinner-dual-ring-rotate-reverse 0.8s linear infinite;
}

@keyframes fx-spinner-dual-ring-rotate {
  to { transform: rotate(360deg); }
}

@keyframes fx-spinner-dual-ring-rotate-reverse {
  to { transform: rotate(-360deg); }
}`;

const STRETCHING_BARS_CODE = `.fx-spinner-bars {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 40px;
}

.fx-spinner-bars span {
  width: 6px;
  height: 100%;
  background: currentColor;
  border-radius: 3px;
  animation: fx-spinner-bars-stretch 1.2s ease-in-out infinite;
}

.fx-spinner-bars span:nth-child(1) { animation-delay: 0s; }
.fx-spinner-bars span:nth-child(2) { animation-delay: 0.1s; }
.fx-spinner-bars span:nth-child(3) { animation-delay: 0.2s; }
.fx-spinner-bars span:nth-child(4) { animation-delay: 0.3s; }
.fx-spinner-bars span:nth-child(5) { animation-delay: 0.4s; }

@keyframes fx-spinner-bars-stretch {
  0%, 100% { transform: scaleY(0.4); }
  50% { transform: scaleY(1); }
}`;

const BOUNCING_DOTS_CODE = `.fx-spinner-dots {
  display: flex;
  align-items: center;
  gap: 8px;
}

.fx-spinner-dots span {
  width: 12px;
  height: 12px;
  background: currentColor;
  border-radius: 50%;
  animation: fx-spinner-dots-bounce 0.6s ease-in-out infinite alternate;
}

.fx-spinner-dots span:nth-child(1) { animation-delay: 0s; }
.fx-spinner-dots span:nth-child(2) { animation-delay: 0.2s; }
.fx-spinner-dots span:nth-child(3) { animation-delay: 0.4s; }

@keyframes fx-spinner-dots-bounce {
  0% { transform: translateY(0); opacity: 0.4; }
  100% { transform: translateY(-16px); opacity: 1; }
}`;

const ORBIT_SPINNER_CODE = `.fx-spinner-orbit {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  position: relative;
}

.fx-spinner-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
  background: currentColor;
  border-radius: 50%;
  animation: fx-spinner-orbit-revolve 1s linear infinite;
}

@keyframes fx-spinner-orbit-revolve {
  to { transform: rotate(360deg) translateX(19px); }
}`;

const PROGRESS_BAR_CODE = `.fx-progress-bar-animated {
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
}

.fx-progress-bar-animated::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 40%;
  background: currentColor;
  border-radius: 9999px;
  animation: fx-progress-indeterminate 1.5s ease-in-out infinite;
}

@keyframes fx-progress-indeterminate {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}`;

const SKELETON_SHIMMER_CODE = `.fx-skeleton-shimmer {
  background: rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  position: relative;
  overflow: hidden;
}

.fx-skeleton-shimmer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.6) 50%,
    transparent 100%
  );
  animation: fx-shimmer-slide 1.5s ease-in-out infinite;
}

@keyframes fx-shimmer-slide {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`;

export function LoadingEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* 1. Ring Spinner */}
      <EffectCard
        title="Ring Spinner"
        description="Classic spinning ring loader"
        code={RING_SPINNER_CODE}
        filename="ring-spinner.css"
      >
        <div className="fx-spinner-ring text-blue-500" />
      </EffectCard>

      {/* 2. Dual Ring */}
      <EffectCard
        title="Dual Ring"
        description="Two counter-rotating rings"
        code={DUAL_RING_CODE}
        filename="dual-ring.css"
      >
        <div className="fx-spinner-dual-ring text-purple-500" />
      </EffectCard>

      {/* 3. Stretching Bars */}
      <EffectCard
        title="Stretching Bars"
        description="Bars that stretch up and down"
        code={STRETCHING_BARS_CODE}
        filename="stretching-bars.css"
      >
        <div className="fx-spinner-bars text-emerald-500">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </EffectCard>

      {/* 4. Bouncing Dots */}
      <EffectCard
        title="Bouncing Dots"
        description="Three dots that bounce in sequence"
        code={BOUNCING_DOTS_CODE}
        filename="bouncing-dots.css"
      >
        <div className="fx-spinner-dots text-orange-500">
          <span />
          <span />
          <span />
        </div>
      </EffectCard>

      {/* 5. Orbit Spinner */}
      <EffectCard
        title="Orbit Spinner"
        description="A dot orbiting in a circle"
        code={ORBIT_SPINNER_CODE}
        filename="orbit-spinner.css"
      >
        <div className="fx-spinner-orbit text-rose-500" />
      </EffectCard>

      {/* 6. Progress Bar */}
      <EffectCard
        title="Progress Bar"
        description="Animated indeterminate progress bar"
        code={PROGRESS_BAR_CODE}
        filename="progress-bar.css"
      >
        <div className="w-full max-w-xs">
          <div className="fx-progress-bar-animated text-sky-500" />
        </div>
      </EffectCard>

      {/* 7. Skeleton Shimmer */}
      <EffectCard
        title="Skeleton Shimmer"
        description="Shimmer loading placeholder"
        code={SKELETON_SHIMMER_CODE}
        filename="skeleton-shimmer.css"
      >
        <div className="w-full max-w-xs space-y-3">
          <div className="fx-skeleton-shimmer h-4 w-3/4" />
          <div className="fx-skeleton-shimmer h-4 w-full" />
          <div className="fx-skeleton-shimmer h-4 w-5/6" />
          <div className="fx-skeleton-shimmer h-10 w-full rounded-lg" />
          <div className="fx-skeleton-shimmer h-4 w-2/3" />
        </div>
      </EffectCard>
    </div>
  );
}
