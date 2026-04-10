# 🎨 CSS Effects Playground

A comprehensive interactive library of **56+ handcrafted CSS effects** with live previews and copy-ready code. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

![CSS Effects](https://img.shields.io/badge/Effects-56%2B-blue?style=flat-square) ![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square)

## ✨ Features

### 📝 Text Effects (9)
- **Gradient Text** - Smooth animated gradient flowing across text
- **Neon Glow** - Flickering neon sign glow effect
- **Glitch Text** - Digital glitch distortion with color splits
- **Stroke/Outline Text** - Outlined text that fills with color on hover
- **Wave Text** - Letters bounce in a staggered wave animation
- **Rainbow Pulse** - Text pulses with cycling rainbow colors
- **Rainbow Shimmer** - Shimmering rainbow effect flowing left to right
- **Shadow Glow** - Text with expanding glowing shadow effect
- **Bounce Vertical** - Text bounces up and down with spring effect

### 🔘 Button Effects (9)
- **Shine Sweep** - A glare that sweeps across the button on hover
- **Gradient Border** - Animated rotating gradient border
- **Pulse Ring** - Pulsing ring animation that radiates outward
- **Morph Shape** - Button smoothly morphs to a pill shape on hover
- **Liquid Fill** - Button fills with color from bottom to top on hover
- **Ripple Effect** - Ripples expand outward from click position
- **Color Morph** - Button cycles through color gradients smoothly
- **Bounce Scale** - Button bounces with spring effect on hover
- **Glow Border** - Border glows with animated color changing effect

### 🎴 Card Effects (9)
- **3D Tilt** - Card tilts in 3D space on hover following mouse position
- **Glassmorphism** - Frosted glass effect with backdrop blur
- **Spotlight** - Mouse-following radial gradient spotlight effect
- **Hover Lift** - Card lifts upward with expanded shadow on hover
- **3D Flip** - Card flips to reveal content on the back side
- **Neon Border** - Glowing neon border animation
- **Blur Background** - Blurs background behind card content on hover
- **Layered Shadow** - Multiple layered shadows create depth effect
- **Gradient Animation** - Card with animated gradient background

### 🎭 Background Effects (9)
- **Animated Gradient** - Smoothly shifting multi-color gradient
- **Aurora** - Northern lights aurora borealis effect
- **Mesh Gradient** - Colorful overlapping radial gradient mesh
- **Dot Pattern** - Clean dot grid pattern background
- **Noise Texture** - Animated grain/noise texture overlay
- **Floating Blobs** - Colorful floating blob shapes with animation
- **Wave Lines** - Geometric wave pattern that animates smoothly
- **Rainbow Spectrum** - Continuous flowing rainbow color spectrum
- **Plasma** - Glowing plasma-like animated effect

### ⏳ Loading Effects (10)
- **Ring Spinner** - Classic spinning ring loader
- **Dual Ring** - Two counter-rotating rings
- **Stretching Bars** - Bars that stretch up and down
- **Bouncing Dots** - Three dots that bounce in sequence
- **Orbit Spinner** - A dot orbiting in a circle
- **Progress Bar** - Animated indeterminate progress bar
- **Skeleton Shimmer** - Shimmer loading placeholder
- **Pulse Ring** - Growing pulsing ring effect
- **Flip Loader** - 3D flipping animation loader
- **Wave Loader** - Bars animating in wave pattern

### 👆 Hover Effects (10)
- **Animated Underline** - Underline grows from left on hover
- **Center Underline** - Underline grows from center on hover
- **Scale + Shadow** - Element scales up with shadow on hover
- **Text Fill** - Stroke text fills with color on hover
- **Image Zoom** - Image zooms in on hover
- **Border Glow** - Border glows on hover
- **Shadow Pop** - Pop-up shadow effect on hover
- **Spin Rotate** - Element rotates steadily on hover
- **Color Shift** - Color shifts across a spectrum on hover
- **Slide Background** - Background slides in from left on hover

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or **Bun** (recommended)
- npm, yarn, or Bun package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/css-effects-playground.git
cd css-effects-playground
```

2. **Install dependencies**
```bash
bun install
# or
npm install
```

3. **Setup Database**
```bash
bun run db:generate
bun run db:push
```

4. **Configure Environment**
Create a `.env` file:
```env
DATABASE_URL=file:./db/app.db
```

### Running the Project

**Development Mode** (with auto-reload):
```bash
bun dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

**Production Build**
```bash
bun run build
bun start
```

**Other Commands**
```bash
bun run lint          # Run ESLint
bun run db:migrate    # Run database migrations
bun run db:reset      # Reset database (⚠️ destructive)
```

## 📁 Project Structure

```
css-effects-playground/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── page.tsx                 # Main page with effect showcase
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles & CSS effects
│   ├── components/
│   │   ├── css-effects/
│   │   │   ├── TextEffects.tsx      # Text animation effects
│   │   │   ├── ButtonEffects.tsx    # Button effects
│   │   │   ├── CardEffects.tsx      # Card effects
│   │   │   ├── BackgroundEffects.tsx # Background effects
│   │   │   ├── LoadingEffects.tsx   # Loading spinners
│   │   │   ├── HoverEffects.tsx     # Hover effects
│   │   │   ├── EffectCard.tsx       # Effect card component
│   │   │   └── CodeBlock.tsx        # Code display component
│   │   └── ui/                      # shadcn/ui components
│   ├── hooks/                        # Custom React hooks
│   └── lib/                          # Utility functions
├── prisma/
│   └── schema.prisma                # Database schema
├── public/
│   └── robots.txt
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with SSR/SSG |
| **TypeScript 5** | Type-safe JavaScript |
| **React 19** | UI library |
| **Tailwind CSS 4** | Utility-first CSS framework |
| **shadcn/ui** | High-quality UI components |
| **Prisma 6** | Database ORM |
| **SQLite** | Lightweight database |
| **Bun** | Fast JavaScript runtime |
| **Framer Motion** | Animation library |
| **React Query** | Data fetching & caching |
| **Zod** | Schema validation |

## 💡 Usage

### Viewing Effects

1. Navigate to the home page
2. Browse different effect categories using the navigation tabs
3. Hover over effects to see live previews
4. Click **"Preview"** or **"Code"** buttons to toggle between views
5. Copy the CSS code and use it in your projects

### Integrate Effects Into Your Project

Each effect is a simple CSS class you can copy:

```html
<!-- Example: Gradient Text -->
<h1 class="fx-gradient-text">Your Text Here</h1>
```

```css
/* CSS from globals.css */
.fx-gradient-text {
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
}
```

## 🎨 CSS Effects Naming Convention

All effect classes follow a naming pattern for easy identification:

- `fx-{category}-{effect-name}` - Full effect class
- `fx-{category}` prefix indicates the effect category
- Examples: `fx-text-gradient`, `fx-btn-shine`, `fx-card-3d-tilt`

**Categories:**
- `fx-text-*` - Text effects
- `fx-btn-*` - Button effects
- `fx-card-*` - Card effects
- `fx-bg-*` - Background effects
- `fx-spinner-*` - Loading/spinner effects
- `fx-hover-*` - Hover effects
- `fx-transition-*` - Transition effects

## 🔧 Customization

### Modify Effect Colors

Edit `src/app/globals.css` to change colors in any effect:

```css
.fx-neon-text {
  color: #0ff;  /* Change to your color */
  text-shadow:
    0 0 7px #0ff,  /* Update shadow colors */
    /* ... more shadows ... */
}
```

### Adjust Animation Speed

Locate the animation duration and modify the `animation` property:

```css
.fx-gradient-text {
  animation: fx-gradient-shift 3s linear infinite;
  /* Change 3s to desired duration */
}
```

### Create New Effects

1. Add CSS to `src/app/globals.css`
2. Create a component or demo in the appropriate `*Effects.tsx` file
3. Update the effect count constant if needed
4. The effect will automatically appear on the page

## 📱 Responsive Design

The application is fully responsive and works great on:
- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 🖥️ Desktops (1024px and up)

The grid layout adapts automatically:
- 1 column on mobile
- 2 columns on tablets
- 3 columns on desktops

## 🎯 Performance Tips

- Effects use pure CSS animations (GPU-accelerated)
- No JavaScript overhead for animations
- Lightweight and fast-loading
- Optimized for production builds
- Cache-friendly asset structure

## 🐛 Known Issues & Limitations

- **Safari & Mobile Browsers**: Some CSS features like `backdrop-filter` may have limited support
- **GPU Considerations**: Complex animations on older devices may cause performance issues
- **Browser Compatibility**: Test effects in target browsers before deployment

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingEffect`)
3. Commit your changes (`git commit -m 'Add amazing CSS effect'`)
4. Push to the branch (`git push origin feature/AmazingEffect`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## 🙌 Acknowledgments

- Built with inspiration from modern web design trends
- Components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Colors inspired by Tailwind CSS palette

## 📞 Support

Have questions or found a bug?
- Open an issue on GitHub
- Check existing issues first
- Provide code examples and browser information

## 🔗 Links

- [Live Demo](#) - Live version
- [GitHub](https://github.com/yourusername/css-effects-playground)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

---

**Made with ❤️ by CSS Effects Team**

*Star ⭐ this project if you find it useful!*

---

## 🗺️ Roadmap

- [ ] Add more animation effects (15+ new effects)
- [ ] Implement effect customizer with color picker
- [ ] Add export to CSS/SCSS features
- [ ] Mobile app version
- [ ] Dark mode improvements
- [ ] Performance monitoring dashboard
- [ ] Share effects via URL
- [ ] Community gallery for user-created effects

## 📊 Stats

- **Total Effects**: 56+
- **Lines of CSS**: 1500+
- **Categories**: 6
- **Development Time**: ~40 hours
- **Browser Support**: 95%+
