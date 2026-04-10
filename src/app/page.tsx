"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Type,
  MousePointer,
  CreditCard,
  Image,
  Loader2,
  ArrowUp,
  Sparkles,
  Palette,
  Layers,
  Code2,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextEffects, TEXT_EFFECTS_COUNT } from "@/components/css-effects/TextEffects";
import { ButtonEffects, BUTTON_EFFECTS_COUNT } from "@/components/css-effects/ButtonEffects";
import { CardEffects, CARD_EFFECTS_COUNT } from "@/components/css-effects/CardEffects";
import { BackgroundEffects, BACKGROUND_EFFECTS_COUNT } from "@/components/css-effects/BackgroundEffects";
import { LoadingEffects, LOADING_EFFECTS_COUNT } from "@/components/css-effects/LoadingEffects";
import { HoverEffects, HOVER_EFFECTS_COUNT } from "@/components/css-effects/HoverEffects";

/* ─── Category data ─── */
const categories = [
  { id: "text", label: "Text Effects", icon: Type, count: TEXT_EFFECTS_COUNT, color: "text-amber-500" },
  { id: "button", label: "Button Effects", icon: MousePointer, count: BUTTON_EFFECTS_COUNT, color: "text-rose-500" },
  { id: "card", label: "Card Effects", icon: CreditCard, count: CARD_EFFECTS_COUNT, color: "text-violet-500" },
  { id: "background", label: "Background Effects", icon: Image, count: BACKGROUND_EFFECTS_COUNT, color: "text-emerald-500" },
  { id: "loading", label: "Loading Effects", icon: Loader2, count: LOADING_EFFECTS_COUNT, color: "text-sky-500" },
  { id: "hover", label: "Hover Effects", icon: Layers, count: HOVER_EFFECTS_COUNT, color: "text-fuchsia-500" },
] as const;

const totalCount = categories.reduce((sum, c) => sum + c.count, 0);

/* ─── Animated counter ─── */
function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count}</span>;
}

/* ─── Section wrapper with scroll-triggered animation ─── */
function Section({
  id,
  title,
  description,
  icon: Icon,
  color,
  children,
}: {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className={`flex items-center justify-center w-10 h-10 rounded-xl bg-muted ${color}`}>
            <Icon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>
        <p className="text-muted-foreground text-sm ml-[52px]">{description}</p>
      </div>
      <AnimatePresence>
        {inView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

/* ─── Floating particles in hero ─── */
function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-amber-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Quick copy utility ─── */
function useCopyToast() {
  const [toast, setToast] = useState(false);
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };
  return { copy, toast };
}

/* ─── Main Page ─── */
export default function CSSEffectsLibrary() {
  const [activeSection, setActiveSection] = useState<string>("text");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { copy, toast } = useCopyToast();

  /* Track active section on scroll */
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = categories.map((c) => ({
        id: c.id,
        el: document.getElementById(c.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i].el;
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyAllCSS = () => {
    const cssContent = `.fx-gradient-text { ... }
.fx-neon-text { ... }
.fx-glitch-text { ... }
.fx-stroke-text { ... }
.fx-wave-text { ... }

/* ... and ${totalCount - 5} more effects! */
/* Visit the live demo to explore all CSS effects. */`;
    copy(cssContent);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ─── Hero Section ─── */}
      <header className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute inset-0 fx-bg-dot-pattern opacity-[0.03]" />
        <HeroParticles />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-300">
                Interactive CSS Library
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              CSS Effects{" "}
              <span className="fx-gradient-text">Playground</span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              A curated collection of{" "}
              <span className="text-white font-semibold">
                <AnimatedCounter target={totalCount} />
              </span>{" "}
              handcrafted CSS effects with live interactive demos and
              copy-ready code. Hover, click, and explore.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl px-6"
                onClick={() => scrollToSection("text")}
              >
                <Palette className="w-4 h-4 mr-2" />
                Explore Effects
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-xl px-6"
                onClick={copyAllCSS}
              >
                <Code2 className="w-4 h-4 mr-2" />
                Copy CSS
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 mt-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className="flex flex-col items-center gap-1 group cursor-pointer"
                >
                  <span className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    <AnimatedCounter target={cat.count} />
                  </span>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {cat.label.replace(" Effects", "")}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* ─── Sticky Category Navigation ─── */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-2 overflow-x-auto fx-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeSection === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => scrollToSection(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                  <Badge
                    variant="secondary"
                    className={`h-5 px-1.5 text-xs ${
                      isActive ? "bg-primary-foreground/20 text-primary-foreground" : ""
                    }`}
                  >
                    {cat.count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ─── Main Content ─── */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <Section
          id="text"
          title="Text Effects"
          description="Stunning typography effects — gradients, glow, glitch, and more."
          icon={Type}
          color="text-amber-500"
        >
          <TextEffects />
        </Section>

        <Section
          id="button"
          title="Button Effects"
          description="Interactive button animations — shine, morph, liquid fill, and pulse."
          icon={MousePointer}
          color="text-rose-500"
        >
          <ButtonEffects />
        </Section>

        <Section
          id="card"
          title="Card Effects"
          description="Modern card interactions — 3D tilt, glassmorphism, spotlight, and flip."
          icon={CreditCard}
          color="text-violet-500"
        >
          <CardEffects />
        </Section>

        <Section
          id="background"
          title="Background Effects"
          description="Atmospheric backgrounds — gradients, aurora, mesh, patterns, and noise."
          icon={Image}
          color="text-emerald-500"
        >
          <BackgroundEffects />
        </Section>

        <Section
          id="loading"
          title="Loading Effects"
          description="Smooth loading animations — spinners, dots, bars, and skeleton placeholders."
          icon={Loader2}
          color="text-sky-500"
        >
          <LoadingEffects />
        </Section>

        <Section
          id="hover"
          title="Hover Effects"
          description="Delightful hover interactions — underlines, scales, zooms, and glows."
          icon={Layers}
          color="text-fuchsia-500"
        >
          <HoverEffects />
        </Section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border bg-muted/30 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">CSS Effects Playground</p>
                <p className="text-xs text-muted-foreground">
                  {totalCount} handcrafted CSS effects with live demos
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* ─── Scroll to Top Button ─── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ─── Copy Toast ─── */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 text-zinc-100 shadow-xl text-sm font-medium"
          >
            <Copy className="w-4 h-4 text-green-400" />
            CSS copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
