import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import FoundersPhoto from "../components/FoundersPhoto";
import { IconBadge } from "../components/Icons";

// Data arrays remain unchanged...
const solutionCards = [
  { title: "Helio Box", icon: "sensor", bullets: ["Edge-sensor hardware on your roof", "Captures hyper-local irradiance and weather data", "Monitors electrical system performance in real time"] },
  { title: "Helio AI", icon: "ai", bullets: ["Transformer-based forecasting model", "Predicts generation from 15 minutes to days ahead", "Fuses rooftop sensors with system-level signals"] },
  { title: "Helio App", icon: "app", bullets: ["Turns predictions into routing decisions", "Automates power flow between solar, battery, and grid", "Guides homeowners with clear, actionable insights"] },
];

const howItWorksSteps = [
  { step: "01", title: "Sense", description: "Helio Box collects real-time environmental and electrical data from your rooftop.", icon: "sensor" },
  { step: "02", title: "Predict", description: "AI forecasts solar generation and household demand across multiple time horizons.", icon: "forecast" },
  { step: "03", title: "Route", description: "Power is automatically shifted between solar, battery, grid, and appliances.", icon: "route" },
  { step: "04", title: "Learn", description: "Anomaly detection catches shading, dirt, or degradation before they cost you.", icon: "learn" },
];

const differentiators = [
  { title: "Real-time automated power routing", description: "Not just monitoring — Helio actively shifts energy where it's needed most.", icon: "route" },
  { title: "Hyper-local predictive AI", description: "Rooftop sensor fusion, not generic weather APIs. Forecasts tuned to your array.", icon: "forecast" },
  { title: "Hardware-agnostic", description: "Integrates with existing inverters and batteries via API — no rip-and-replace.", icon: "plug" },
  { title: "Early fault detection", description: "Catches shading, soiling, and degradation early — before they compound.", icon: "alert" },
];

const programs = [
  { title: "NSF I-Corps", description: "Customer discovery and commercialization validation through the National Science Foundation program." },
{ title: "UConn CCEI Get Seeded Pitch Night Winner", description: "$500 Award, Connecticut Center for Entrepreneurship & Innovation — January 2026" },
  { title: "UConn CCEI Demo Day Finalist", description: "Top 5 Finalist, Connecticut Center for Entrepreneurship & Innovation — January 2026" }  ,
  { title: "Research Advisors", description: "Dr. Diego Cerrai (Eversource Energy Center) and Dr. Yuhao Nie (solar forecasting expert)." },
];

export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Belt-and-suspenders autoplay fix: React's JSX `muted` attribute doesn't
    // always set the actual DOM `muted` property on first paint, and Chrome
    // silently blocks autoplay on anything it doesn't consider truly muted.
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was blocked (e.g. low-power mode) — poster image still shows, so fail silently.
        });
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Helio | Predictive Solar Intelligence</title>
      </Head>

      {/* Hero Section — full-bleed background video */}
      <section className="relative min-h-[92vh] md:min-h-screen flex items-end md:items-center overflow-hidden border-b border-slate-200">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-solar-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — keeps headline/body legible regardless of what's playing underneath */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20 md:bg-gradient-to-r md:from-ink/90 md:via-ink/50 md:to-ink/10" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-white/60 mb-8">
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.05] text-white mb-8 max-w-2xl">
            Solar power is unpredictable. <br/>
            <span className="text-amber-400">Helio makes it intelligent.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl mb-12">
            Helio forecasts solar generation from 15 minutes to days ahead and automatically routes power between your solar array, battery, and the grid.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-helio-500 text-white px-8 py-4 font-mono text-xs uppercase tracking-widest hover:bg-helio-400 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem (Stark Data Grid) */}
      <section id="problem" className="border-b border-slate-200">
        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          <div className="p-12 lg:p-16 flex flex-col justify-between">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-8">/ 02 The Inefficiency</p>
            <h2 className="text-3xl lg:text-4xl font-display font-bold tracking-tight leading-snug text-ink">
              Production and usage don&apos;t align.
            </h2>
            <p className="mt-8 text-slate-600 font-light leading-relaxed">
              Power is generated when it isn&apos;t needed, and gone when it is. Homeowners export surplus at low rates and buy back from the grid at higher ones.
            </p>
          </div>
          {/* Stat callouts use Solar Amber — the one "spotlight" color per section */}
          <div className="p-12 lg:p-16 bg-white flex flex-col justify-end">
            <p className="text-7xl font-mono font-medium tracking-tighter text-amber-500 mb-6">20-40%</p>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500 leading-relaxed">Wasted solar energy generated per household</p>
          </div>
          <div className="p-12 lg:p-16 bg-white flex flex-col justify-end">
            <p className="text-7xl font-mono font-medium tracking-tighter text-amber-500 mb-6">$2,000</p>
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500 leading-relaxed">Maximum lost value across 3M+ U.S. residential setups</p>
          </div>
        </div>
      </section>

      {/* Full-width Image Break */}
      <section className="h-[40vh] md:h-[60vh] bg-mist border-b border-slate-200 flex items-center justify-center relative overflow-hidden">
         {/* INSERT ENVIRONMENTAL/LIFESTYLE IMAGE HERE */}
         <span className="font-mono text-slate-500 text-sm z-10">[ Full Bleed Architecture / Solar Array Image ]</span>
      </section>

      {/* The Solution Architecture */}
      <section id="solution" className="py-14 md:py-24 border-b border-slate-200 bg-paper">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">/ 03 Architecture</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-ink">Three layers of intelligence.</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 border-t border-l border-slate-200">
            {solutionCards.map(({ title, icon, bullets }) => (
              <div key={title} className="border-r border-b border-slate-200 bg-white p-10 hover:bg-mist/40 transition-colors">
                <IconBadge name={icon} className="mb-10 text-ink" />
                <h3 className="text-2xl font-display font-semibold tracking-tight mb-6 text-ink">{title}</h3>
                <ul className="space-y-4">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 text-sm font-light text-slate-600">
                      <span className="text-helio-500 font-mono shrink-0">{"->"}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Advantages */}
      <section id="how-it-works" className="border-b border-slate-200">
        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          <div className="p-10 md:p-16 bg-white">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-12">/ 04 The Process</p>
            <div className="space-y-12">
              {howItWorksSteps.map(({ step, title, description }) => (
                <div key={step} className="grid grid-cols-[auto_1fr] gap-8 items-start">
                  <span className="font-mono text-sm text-helio-500 mt-1">{step}</span>
                  <div>
                    <h3 className="text-xl font-display font-semibold tracking-tight mb-2 text-ink">{title}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-16 bg-paper">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-12">/ 05 Differentiators</p>
            <div className="space-y-12">
              {differentiators.map(({ title, description }) => (
                <div key={title} className="border-b border-slate-200 pb-12 last:border-0 last:pb-0">
                  <h3 className="text-xl font-display font-semibold tracking-tight mb-3 text-ink">{title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Recognition */}
      <section id="programs" className="border-b border-slate-200 bg-white">
        <div className="grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">

          <div className="lg:col-span-4 p-10 md:p-16 flex flex-col justify-between">
            <div>
               <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-6">/ 06 Traction</p>
               <h2 className="text-4xl font-display font-bold tracking-tight text-ink">Research-backed validation.</h2>
            </div>
            {/* Small Image inside the grid */}
            <div className="mt-12 aspect-square bg-mist flex items-center justify-center border border-slate-200 relative">
               <FoundersPhoto className="absolute inset-0 w-full h-full object-cover" />
               <span className="font-mono text-slate-400 text-[10px] uppercase">[ Event Photo ]</span>
            </div>
          </div>

          <div className="lg:col-span-8 p-10 md:p-16">
            <div className="border-t border-slate-200">
              {programs.map(({ title, description }) => (
                <div key={title} className="py-8 border-b border-slate-200 grid md:grid-cols-2 gap-6 items-start hover:bg-mist/40 transition-colors px-4 -mx-4">
                  <h3 className="text-lg font-display font-semibold tracking-tight text-ink">{title}</h3>
                  <p className="text-sm font-light text-slate-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 md:py-32 px-6 text-center bg-ink text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-12">
            The timing is right for hyper-local solar intelligence.
          </h2>
          <Link href="/contact" className="inline-block border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-widest hover:border-helio-400 hover:text-helio-400 transition-all duration-300">
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  );
}
