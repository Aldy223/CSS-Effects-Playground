"use client";

import { EffectCard } from "./EffectCard";

export const HOVER_EFFECTS_COUNT = 7;

export function HoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* 1. Animated Underline */}
      <EffectCard
        title="Animated Underline"
        description="Underline grows from left on hover"
        filename="animated-underline.css"
        code={`.fx-hover-underline {
  position: relative;
  text-decoration: none;
}

.fx-hover-underline::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.fx-hover-underline:hover::after {
  width: 100%;
}`}
      >
        <div className="flex flex-col items-center gap-6">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="fx-hover-underline text-blue-500 text-lg font-medium"
          >
            Hover over me
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="fx-hover-underline text-fuchsia-500 text-lg font-medium"
          >
            Another link
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="fx-hover-underline text-emerald-500 text-lg font-medium"
          >
            One more link
          </a>
        </div>
      </EffectCard>

      {/* 2. Center Underline */}
      <EffectCard
        title="Center Underline"
        description="Underline grows from center on hover"
        filename="center-underline.css"
        code={`.fx-hover-underline {
  position: relative;
  text-decoration: none;
}

.fx-hover-underline::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease;
}

.fx-hover-underline:hover::after {
  width: 100%;
}

.fx-hover-underline-center::after {
  left: 50%;
  transform: translateX(-50%);
}

.fx-hover-underline-center:hover::after {
  left: 0;
  transform: translateX(0);
  width: 100%;
}`}
      >
        <div className="flex flex-col items-center gap-6">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="fx-hover-underline fx-hover-underline-center text-blue-500 text-lg font-medium"
          >
            Hover over me
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="fx-hover-underline fx-hover-underline-center text-orange-500 text-lg font-medium"
          >
            Another link
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="fx-hover-underline fx-hover-underline-center text-teal-500 text-lg font-medium"
          >
            One more link
          </a>
        </div>
      </EffectCard>

      {/* 3. Scale + Shadow */}
      <EffectCard
        title="Scale + Shadow"
        description="Element scales up with shadow on hover"
        filename="scale-shadow.css"
        code={`.fx-hover-scale-shadow {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  transform: scale(1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.fx-hover-scale-shadow:hover {
  transform: scale(1.05);
  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.15),
    0 6px 10px rgba(0, 0, 0, 0.1);
}`}
      >
        <div className="fx-hover-scale-shadow bg-white rounded-xl p-6 w-56 text-center border border-gray-200">
          <div className="text-3xl mb-3">&#x1F30D;</div>
          <h4 className="text-sm font-semibold text-gray-800">
            Sample Card
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Hover over me to scale up
          </p>
        </div>
      </EffectCard>

      {/* 4. Text Fill */}
      <EffectCard
        title="Text Fill"
        description="Stroke text fills with color on hover"
        filename="text-fill.css"
        code={`.fx-hover-fill-text {
  -webkit-text-stroke: 2px currentColor;
  color: transparent;
  transition: color 0.3s ease, -webkit-text-stroke-color 0.3s ease;
}

.fx-hover-fill-text:hover {
  color: currentColor;
  -webkit-text-stroke-color: currentColor;
}`}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="fx-hover-fill-text text-4xl font-extrabold text-indigo-500 select-none">
            Hover me
          </span>
          <span className="fx-hover-fill-text text-3xl font-extrabold text-rose-500 select-none">
            Fill Effect
          </span>
          <p className="text-xs text-muted-foreground mt-2">
            Hover over the text above
          </p>
        </div>
      </EffectCard>

      {/* 5. Image Zoom */}
      <EffectCard
        title="Image Zoom"
        description="Image zooms in on hover"
        filename="image-zoom.css"
        code={`.fx-hover-image-zoom {
  overflow: hidden;
  border-radius: 0.75rem;
}

.fx-hover-image-zoom img {
  transition: transform 0.4s ease;
  transform: scale(1);
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fx-hover-image-zoom:hover img {
  transform: scale(1.12);
}`}
      >
        <div className="fx-hover-image-zoom w-72 h-48">
          <img
            src="https://picsum.photos/seed/csseffects/400/300"
            alt="Zoom demo"
            loading="lazy"
          />
        </div>
      </EffectCard>

      {/* 6. Border Glow */}
      <EffectCard
        title="Border Glow"
        description="Border glows on hover"
        filename="border-glow.css"
        code={`@keyframes border-glow-pulse {
  0% {
    box-shadow:
      0 0 5px rgba(99, 102, 241, 0.3),
      0 0 10px rgba(99, 102, 241, 0.1);
  }
  50% {
    box-shadow:
      0 0 15px rgba(99, 102, 241, 0.5),
      0 0 30px rgba(99, 102, 241, 0.2);
  }
  100% {
    box-shadow:
      0 0 5px rgba(99, 102, 241, 0.3),
      0 0 10px rgba(99, 102, 241, 0.1);
  }
}

.fx-hover-border-glow {
  border: 2px solid rgba(99, 102, 241, 0.3);
  transition: border-color 0.3s ease;
}

.fx-hover-border-glow:hover {
  border-color: rgba(99, 102, 241, 0.8);
  animation: border-glow-pulse 1.5s ease-in-out infinite;
}`}
      >
        <div className="fx-hover-border-glow rounded-2xl bg-white/80 backdrop-blur-sm p-8 w-60 text-center">
          <div className="text-2xl mb-2">&#x2728;</div>
          <h4 className="text-sm font-semibold text-gray-800">
            Glowing Card
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Hover over me to see the glow
          </p>
        </div>
      </EffectCard>

      {/* 7. Shadow Pop */}
      <EffectCard
        title="Shadow Pop"
        description="Pop-up shadow effect on hover"
        filename="shadow-pop.css"
        code={`.fx-hover-shadow-pop {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.fx-hover-shadow-pop:hover {
  transform: translateY(-4px);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.15),
    0 4px 8px rgba(0, 0, 0, 0.1);
}

.fx-hover-shadow-pop:active {
  transform: translateY(-1px);
  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.08);
}`}
      >
        <button className="fx-hover-shadow-pop bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-lg text-sm transition-colors">
          Hover over me
        </button>
      </EffectCard>
    </div>
  );
}
