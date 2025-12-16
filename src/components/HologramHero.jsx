// HologramHero.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 *  - imageSrc: string URL of the image to show in the hologram
 *  - name: optional string to show under the hologram
 *  - size: optional (px) default 220
 */
const HologramHero = ({ imageSrc, name = "Your Name", size = 220 }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light"
  );

  useEffect(() => {
    // Keep html.class in sync with component state (so Tailwind dark: works)
    document.documentElement.classList.toggle("dark", theme === "dark");
    // also add small transition class to body for smooth color changes
    document.documentElement.classList.add("theme-transition");
    const t = setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 500);
    return () => clearTimeout(t);
  }, [theme]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Parallax + tilt on mouse move for the hologram container
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5 .. 0.5
      const dy = (e.clientY - cy) / rect.height;

      // subtle transforms for depth
      const rotateY = dx * 10; // deg
      const rotateX = -dy * 10; // deg
      const translateX = dx * 8; // px
      const translateY = dy * 8; // px

      el.style.transform = `perspective(900px) translate3d(${translateX}px, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      // shift layers inside for chromatic aberration
      if (imgRef.current) {
        imgRef.current.style.transform = `translate3d(${-dx * 6}px, ${-dy * 6}px, 0)`;
      }
    };

    const onLeave = () => {
      el.style.transform = `perspective(900px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1)`;
      if (imgRef.current) imgRef.current.style.transform = `translate3d(0,0,0)`;
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // ripple effect on click (optional)
  const spawnRipple = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const ripple = document.createElement("span");
    const rect = el.getBoundingClientRect();
    ripple.className =
      "absolute rounded-full opacity-70 pointer-events-none animate-ripple";
    const sizePx = Math.max(rect.width, rect.height) * 1.6;
    ripple.style.width = ripple.style.height = `${sizePx}px`;
    ripple.style.left = `${e.clientX - rect.left - sizePx / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - sizePx / 2}px`;
    el.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  };

  return (
    <>
      <style>{`
        /* ---------- Custom CSS for hologram + theme transitions ---------- */

        /* Smooth theme transitions (applied briefly when toggling) */
        :root.theme-transition, .theme-transition {
          --tw-transition-duration: 300ms;
        }
        .theme-transition * {
          transition: background-color var(--tw-transition-duration) ease, color var(--tw-transition-duration) ease, box-shadow var(--tw-transition-duration) ease, transform var(--tw-transition-duration) ease;
        }

        /* Hologram container basic setup */
        .holo-wrap {
          perspective: 1100px;
          -webkit-perspective: 1100px;
        }

        .holo-card {
          width: ${size}px;
          height: ${size}px;
          max-width: 60vw;
          max-height: 60vw;
          border-radius: 9999px;
          position: relative;
          margin: 0 auto;
          display: grid;
          place-items: center;
          transform-style: preserve-3d;
          transition: transform 280ms cubic-bezier(.2,.9,.3,1), box-shadow 300ms ease;
        }

        /* Image layer (main) */
        .holo-img {
          width: 92%;
          height: 92%;
          border-radius: 9999px;
          object-fit: cover;
          display: block;
          position: relative;
          z-index: 20;
          transform: translate3d(0,0,0);
          transition: transform 350ms ease;
          border: 2px solid rgba(255,255,255,0.06);
          box-shadow: 0 8px 30px rgba(2,6,23,0.6), inset 0 0 40px rgba(96,165,250,0.03);
        }

        /* Chromatic aberration layers (duplicate images, slight color offsets) */
        .holo-aberration {
          position: absolute;
          inset: 6%;
          border-radius: 9999px;
          overflow: hidden;
          z-index: 10;
          filter: blur(6px) saturate(140%);
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .holo-aberration img { width: 100%; height: 100%; object-fit: cover; display:block; }

        .ab-red { transform: translate3d(6px, -4px, 0) scale(1.02); opacity: 0.18; filter: hue-rotate(-20deg) saturate(140%) blur(6px); }
        .ab-cyan { transform: translate3d(-6px, 4px, 0) scale(1.02); opacity: 0.14; filter: hue-rotate(60deg) saturate(180%) blur(6px); }

        /* Hologram scanlines */
        .holo-scan {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background-image: linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px);
          background-size: 100% 6px;
          z-index: 30;
          pointer-events: none;
          mix-blend-mode: overlay;
          animation: scanlines 3.8s linear infinite;
        }
        @keyframes scanlines {
          from { background-position: 0 0; }
          to { background-position: 0 50px; }
        }

        /* Diagonal hologram sweep */
        .holo-sweep {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          z-index: 40;
          pointer-events: none;
          background: linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 100%);
          transform: skewX(-18deg) translateX(-140%);
          opacity: 0.0;
        }
        .holo-card:hover .holo-sweep {
          animation: sweep 1.1s ease-in-out 0s 1 forwards;
        }
        @keyframes sweep {
          to { transform: skewX(-18deg) translateX(180%); opacity: 0.35; }
        }

        /* Neon glow ring */
        .holo-ring {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          z-index: 5;
          pointer-events: none;
          box-shadow: 0 0 30px rgba(37,99,235,0.18), 0 0 60px rgba(96,165,250,0.06) inset;
          transition: box-shadow 300ms ease;
          filter: saturate(120%);
        }
        .holo-card:hover .holo-ring {
          box-shadow: 0 8px 55px rgba(37,99,235,0.28), 0 0 90px rgba(99,102,241,0.12) inset;
        }

        /* Floating gentle animation */
        @keyframes gentleFloat {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .gentle {
          animation: gentleFloat 6s ease-in-out infinite;
        }

        /* Ripple animation used on click */
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.6; }
          100% { transform: scale(4); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 800ms linear forwards;
          background: radial-gradient(circle at 50% 50%, rgba(96,165,250,0.25), rgba(59,130,246,0.08));
          z-index: 50;
          backdrop-filter: blur(2px);
        }

        /* small subtitle */
        .holo-name {
          margin-top: 1rem;
          font-weight: 700;
          letter-spacing: 0.6px;
        }

        /* color tokens for light/dark */
        :root {
          --bg: #0b1220;
          --muted: #9aa9c7;
          --accent: #60a5fa;
          --panel: rgba(255,255,255,0.02);
        }
        .dark :root, .dark { }
        :root.dark, .dark {
          --bg: #031027;
          --muted: #c8daf8;
          --accent: #60a5fa;
          --panel: rgba(96,165,250,0.03);
        }

        /* small helper responsive */
        @media (max-width: 640px) {
          .holo-card { width: ${Math.max(120, size * 0.7)}px; height: ${Math.max(120, size * 0.7)}px; }
        }
      `}</style>

      <div className="w-full flex flex-col items-center gap-4">
        {/* Theme toggle */}
        <div className="flex items-center gap-3">
          <button
            aria-pressed={theme === "dark"}
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="px-3 py-2 rounded-full bg-white/6 dark:bg-white/8 hover:bg-white/10 transition inline-flex items-center gap-2"
            title="Toggle theme"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              {theme === "dark" ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.7.7M18.36 18.36l.7.7M1 12h1m20 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 5a7 7 0 100 14 7 7 0 000-14z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C10.7 3 9.41 3.2 8.22 3.58A9 9 0 1012 3z" />
              )}
            </svg>
            <span className="text-xs text-slate-300">{theme === "dark" ? "Dark" : "Light"}</span>
          </button>
        </div>

        {/* Hologram container */}
        <div
          ref={containerRef}
          onClick={spawnRipple}
          className="holo-wrap"
          role="img"
          aria-label={`Hologram portrait of ${name}`}
        >
          <div className="holo-card gentle group" style={{ willChange: "transform" }}>
            {/* chromatic aberration layers (soft colored blurs) */}
            <div className="holo-aberration ab-red pointer-events-none" aria-hidden>
              <img src={imageSrc} alt="" />
            </div>
            <div className="holo-aberration ab-cyan pointer-events-none" aria-hidden>
              <img src={imageSrc} alt="" />
            </div>

            {/* main image */}
            <img ref={imgRef} className="holo-img" src={imageSrc} alt={name} />

            {/* ring + inner glow */}
            <div className="holo-ring rounded-full pointer-events-none" aria-hidden />

            {/* subtle scanlines */}
            <div className="holo-scan rounded-full" aria-hidden />

            {/* hologram sweep */}
            <div className="holo-sweep rounded-full" aria-hidden />

            {/* small top-left particle (decor) */}
            <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-blue-500/30 blur-xl pointer-events-none" />

            {/* top-right tiny glow */}
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cyan-300/20 blur-lg pointer-events-none" />
          </div>

          {/* name / caption */}
          <div className="holo-name text-sm md:text-base text-slate-300/80 mt-2 select-none">
            {name}
          </div>
        </div>
      </div>
    </>
  );
};

export default HologramHero;
