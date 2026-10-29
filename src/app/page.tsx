"use client";

import { useState } from "react";
import {
  Terminal,
  Cpu,
  Server,
  Brain,
  ExternalLink,
  Copy,
  Check,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Activity,
  ArrowRight,
  Code2,
  Database,
  Mail,
  FileText,
  Zap,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#FFFFFF] font-sans selection:bg-[#38BDF8]/20 selection:text-white flex flex-col antialiased relative">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#38BDF8]/10 blur-[130px] rounded-full" />
        <div className="absolute top-[200px] left-1/4 w-[350px] h-[350px] bg-[#38BDF8]/5 blur-[120px] rounded-full" />
      </div>

      {/* 1. Minimalist Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050505]/85 border-b border-[#27272A] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo mark */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#38BDF8]"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#121212] border border-[#27272A] flex items-center justify-center group-hover:border-[#38BDF8]/60 transition-colors shadow-sm">
              {/* xAI Logo mark representation */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white group-hover:text-[#38BDF8] transition-colors"
              >
                <path
                  d="M4 4L14.5 19.5H20L9.5 4H4Z"
                  fill="currentColor"
                />
                <path
                  d="M14.2 4L4 19.5H9.5L19.7 4H14.2Z"
                  fill="#38BDF8"
                  opacity="0.85"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
                xAI
                <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-[#27272A] text-[#94A3B8] border border-[#27272A]">
                  Enterprise
                </span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#94A3B8]">
            <a
              href="#about"
              className="hover:text-white transition-colors hover:scale-105 transform duration-150"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-white transition-colors hover:scale-105 transform duration-150"
            >
              Core Services
            </a>
            <a
              href="#specs"
              className="hover:text-white transition-colors hover:scale-105 transform duration-150"
            >
              Specifications
            </a>
            <a
              href="#resources"
              className="hover:text-white transition-colors hover:scale-105 transform duration-150"
            >
              Developer Access
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://console.x.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-[#FFFFFF] text-[#050505] hover:bg-[#38BDF8] hover:text-[#050505] transition-all duration-200 shadow-sm hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
            >
              API Console
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#121212] border border-[#27272A] text-[#94A3B8] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#38BDF8]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#121212] border-b border-[#27272A] px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3 text-sm font-medium text-[#94A3B8]">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#27272A]/50 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#27272A]/50 hover:text-white transition-colors"
              >
                Core Services
              </a>
              <a
                href="#specs"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#27272A]/50 hover:text-white transition-colors"
              >
                Specifications
              </a>
              <a
                href="#resources"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#27272A]/50 hover:text-white transition-colors"
              >
                Developer Access
              </a>
            </nav>
            <div className="pt-2 border-t border-[#27272A]">
              <a
                href="https://console.x.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-semibold bg-[#FFFFFF] text-[#050505] hover:bg-[#38BDF8] transition-colors"
              >
                API Console
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow z-10">
        {/* 2. Hero Section */}
        <section className="relative pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 border-b border-[#27272A] overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Subtle Glowing Accent Badge with wording */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#27272A] mb-6 sm:mb-8 shadow-[0_0_20px_-5px_rgba(56,189,248,0.25)] hover:border-[#38BDF8]/40 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#38BDF8] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#38BDF8]" />
                </span>
                <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-[#38BDF8] font-semibold">
                  xAI Services &amp; Architecture
                </span>
              </div>

              {/* Bold White Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.15] sm:leading-[1.12] mb-6 sm:mb-8">
                Next-Generation Artificial Intelligence for Discovery and Enterprise
              </h1>

              {/* High-tech subtext intro */}
              <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl leading-relaxed mb-10 sm:mb-12">
                Accelerating human scientific understanding through frontier compute clusters, live multi-modal intelligence, and enterprise-grade developer infrastructure.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  href="https://console.x.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#FFFFFF] text-[#050505] hover:bg-[#38BDF8] hover:text-[#050505] transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                >
                  Launch API Console
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#resources"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm sm:text-base font-semibold bg-[#121212] text-white border border-[#27272A] hover:border-[#38BDF8]/50 hover:bg-[#121212]/80 transition-all duration-200"
                >
                  <Terminal className="w-4 h-4 text-[#38BDF8]" />
                  Developer Access
                </a>
              </div>

              {/* Real-time system pulse indicator */}
              <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#94A3B8] border-t border-[#27272A]/70 pt-6 w-full">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Network: Colossus Cluster Online</span>
                </div>
                <div className="hidden sm:block text-[#27272A]">•</div>
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Latency: Sub-millisecond routing</span>
                </div>
                <div className="hidden sm:block text-[#27272A]">•</div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>Uptime: 99.9% Enterprise SLA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ABOUT XAI Section */}
        <section id="about" className="py-16 sm:py-24 border-b border-[#27272A] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#38BDF8] uppercase">
                  <Sparkles className="w-3.5 h-3.5" />
                  About xAI
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  ABOUT XAI
                </h2>

                <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                  xAI is an artificial intelligence research company dedicated to building AI systems that accelerate human scientific understanding. From real-time conversational intelligence to scalable developer APIs, xAI powers next-generation applications.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272A]">
                    <div className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-[#38BDF8]" />
                      Scientific Discovery
                    </div>
                    <p className="text-xs text-[#94A3B8]">
                      Designed to ask fundamental questions and assist in deep scientific comprehension.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[#121212] border border-[#27272A]">
                    <div className="text-white font-semibold text-sm mb-1 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#38BDF8]" />
                      Enterprise Ready
                    </div>
                    <p className="text-xs text-[#94A3B8]">
                      Engineered for high throughput, mission-critical dependability, and scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Visualizer Card */}
              <div className="lg:col-span-5">
                <div className="rounded-xl bg-[#121212] border border-[#27272A] p-6 shadow-xl relative overflow-hidden group hover:border-[#38BDF8]/40 transition-colors">
                  {/* Subtle top card glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#38BDF8]/10 blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-4 border-b border-[#27272A] mb-5">
                    <span className="text-xs font-mono text-[#94A3B8] uppercase">
                      Architecture Overview
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#27272A] text-[#38BDF8]">
                      Frontier Tier
                    </span>
                  </div>

                  <div className="space-y-4 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Cpu className="w-4 h-4 text-[#38BDF8]" />
                        <span className="text-white font-medium">Colossus Supercomputer</span>
                      </div>
                      <span className="text-[#38BDF8] text-[11px]">100K+ GPUs</span>
                    </div>

                    <div className="flex justify-center my-1 text-[#27272A]">
                      ↓
                    </div>

                    <div className="p-3 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Brain className="w-4 h-4 text-[#38BDF8]" />
                        <span className="text-white font-medium">Grok Intelligence Core</span>
                      </div>
                      <span className="text-emerald-400 text-[11px]">Active</span>
                    </div>

                    <div className="flex justify-center my-1 text-[#27272A]">
                      ↓
                    </div>

                    <div className="p-3 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <Code2 className="w-4 h-4 text-[#38BDF8]" />
                        <span className="text-white font-medium">Developer API &amp; SDKs</span>
                      </div>
                      <span className="text-[#38BDF8] text-[11px]">REST / gRPC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CORE SERVICES Section */}
        <section id="services" className="py-16 sm:py-24 border-b border-[#27272A] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-3">
                <Cpu className="w-3.5 h-3.5" />
                Frontier Capabilities
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                CORE SERVICES
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                Integrated foundation models and developer systems optimized for speed, precision, and research breakthroughs.
              </p>
            </div>

            {/* 3-column Card Grid with dark borders and subtle hover glow */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Service 1: Grok Intelligence */}
              <div className="group rounded-xl bg-[#121212] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#38BDF8]/60 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.2)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#38BDF8]/5 group-hover:bg-[#38BDF8]/15 rounded-full blur-2xl transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/50 transition-colors">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors">
                      01
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    1. Grok Intelligence
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    A real-time conversational model with live web and social knowledge, deep reasoning, and multimodal vision capabilities.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272A]/70 flex flex-wrap gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    Live Web
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    Deep Reasoning
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    Multimodal Vision
                  </span>
                </div>
              </div>

              {/* Service 2: xAI Developer API */}
              <div className="group rounded-xl bg-[#121212] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#38BDF8]/60 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.2)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#38BDF8]/5 group-hover:bg-[#38BDF8]/15 rounded-full blur-2xl transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/50 transition-colors">
                      <Code2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors">
                      02
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    2. xAI Developer API
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    High-throughput, enterprise-ready REST APIs featuring structured outputs, function calling, and seamless model fine-tuning.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272A]/70 flex flex-wrap gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    REST APIs
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    Structured Outputs
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    Function Calling
                  </span>
                </div>
              </div>

              {/* Service 3: PromptIDE & Compute */}
              <div className="group rounded-xl bg-[#121212] border border-[#27272A] p-6 sm:p-8 flex flex-col justify-between hover:border-[#38BDF8]/60 hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.2)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#38BDF8]/5 group-hover:bg-[#38BDF8]/15 rounded-full blur-2xl transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-center text-[#38BDF8] group-hover:border-[#38BDF8]/50 transition-colors">
                      <Server className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#94A3B8] group-hover:text-[#38BDF8] transition-colors">
                      03
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    3. PromptIDE &amp; Compute
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    Advanced developer toolsets paired with the Colossus supercomputer cluster for high-performance AI inference and training.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#27272A]/70 flex flex-wrap gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    Colossus Cluster
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    PromptIDE
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#050505] text-[#94A3B8] border border-[#27272A]">
                    Training &amp; Inference
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. KEY SPECIFICATIONS Section */}
        <section id="specs" className="py-16 sm:py-24 border-b border-[#27272A] bg-[#050505]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-3">
                <Activity className="w-3.5 h-3.5" />
                Infrastructure Metrics
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                KEY SPECIFICATIONS
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                Benchmarked for ultra-low latency, planet-scale data feeds, and relentless enterprise dependability.
              </p>
            </div>

            {/* High-Contrast Stat Block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Specification 1 */}
              <div className="rounded-xl bg-[#121212] border border-[#27272A] p-6 sm:p-8 relative group hover:border-[#38BDF8]/50 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <span className="text-xs font-mono text-[#94A3B8] uppercase">
                    Compute Cluster
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight mb-3">
                  100K+
                </div>
                <div className="text-sm font-semibold text-white mb-2">
                  Colossus Supercomputer
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  100K+ GPU Colossus Supercomputer Infrastructure
                </p>
              </div>

              {/* Specification 2 */}
              <div className="rounded-xl bg-[#121212] border border-[#27272A] p-6 sm:p-8 relative group hover:border-[#38BDF8]/50 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-[#94A3B8] uppercase">
                    Streaming Feeds
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#38BDF8] tracking-tight mb-3">
                  Real-Time
                </div>
                <div className="text-sm font-semibold text-white mb-2">
                  Global Data Feeds
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Real-Time Live Global Data Integration
                </p>
              </div>

              {/* Specification 3 */}
              <div className="rounded-xl bg-[#121212] border border-[#27272A] p-6 sm:p-8 relative group hover:border-[#38BDF8]/50 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  <span className="text-xs font-mono text-[#94A3B8] uppercase">
                    Enterprise SLA
                  </span>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] tracking-tight mb-3">
                  99.9%
                </div>
                <div className="text-sm font-semibold text-white mb-2">
                  SLA Availability
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  99.9% API Reliability &amp; Low-Latency Responses
                </p>
              </div>
            </div>

            {/* Complete Bullet List directly quoting content.txt for clarity */}
            <div className="mt-8 rounded-lg bg-[#121212]/60 border border-[#27272A] p-4 sm:p-6">
              <div className="text-xs font-mono text-[#94A3B8] uppercase mb-3">
                Key Specifications Summary:
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-[#94A3B8]">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#38BDF8] font-bold mt-0.5">•</span>
                  <span>100K+ GPU Colossus Supercomputer Infrastructure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#38BDF8] font-bold mt-0.5">•</span>
                  <span>Real-Time Live Global Data Integration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#38BDF8] font-bold mt-0.5">•</span>
                  <span>99.9% API Reliability &amp; Low-Latency Responses</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. DEVELOPER ACCESS & RESOURCES Section */}
        <section id="resources" className="py-16 sm:py-24 border-b border-[#27272A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#38BDF8] uppercase mb-3">
                <Terminal className="w-3.5 h-3.5" />
                Build with xAI
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                DEVELOPER ACCESS &amp; RESOURCES
              </h2>
              <p className="text-base text-[#94A3B8] max-w-2xl mx-auto">
                Start building with xAI API models today. Explore documentation, manage API keys, and deploy enterprise AI solutions.
              </p>
            </div>

            {/* Clean Terminal-Style Block */}
            <div className="max-w-4xl mx-auto rounded-xl bg-[#121212] border border-[#27272A] shadow-2xl overflow-hidden mb-12">
              {/* Terminal Title Bar */}
              <div className="bg-[#050505] px-4 py-3 border-b border-[#27272A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                  <span className="text-xs font-mono text-[#94A3B8] ml-2">
                    xai-cli — bash — 80×24
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8]">
                  api.x.ai
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4">
                <div className="text-[#94A3B8]">
                  # Authenticate and query the Grok conversational model
                </div>
                <div className="bg-[#050505] p-3 sm:p-4 rounded-lg border border-[#27272A] flex items-start justify-between gap-4 overflow-x-auto">
                  <code className="text-white whitespace-pre text-xs sm:text-sm">
                    {`curl https://api.x.ai/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $XAI_API_KEY" \\
  -d '{
    "model": "grok-beta",
    "messages": [
      {"role": "system", "content": "You are Grok, an AI created by xAI."},
      {"role": "user", "content": "Explain quantum computing fundamentals."}
    ],
    "stream": false,
    "temperature": 0.2
  }'`}
                  </code>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopy(
                        `curl https://api.x.ai/v1/chat/completions \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $XAI_API_KEY" \\\n  -d '{\n    "model": "grok-beta",\n    "messages": [\n      {"role": "system", "content": "You are Grok, an AI created by xAI."},\n      {"role": "user", "content": "Explain quantum computing fundamentals."}\n    ],\n    "stream": false,\n    "temperature": 0.2\n  }'`,
                        "curl"
                      )
                    }
                    className="p-2 rounded bg-[#121212] border border-[#27272A] hover:border-[#38BDF8] text-[#94A3B8] hover:text-white shrink-0 transition-colors"
                    title="Copy curl command"
                  >
                    {copiedKey === "curl" ? (
                      <Check className="w-4 h-4 text-[#38BDF8]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Resource Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* API Console */}
              <div className="p-6 rounded-xl bg-[#121212] border border-[#27272A] flex flex-col justify-between hover:border-[#38BDF8]/60 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-center text-[#38BDF8]">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#27272A] text-[#94A3B8]">
                      Platform
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    API Console
                  </h3>
                  <p className="text-xs font-mono text-[#38BDF8] mb-3">
                    console.x.ai
                  </p>
                  <p className="text-xs text-[#94A3B8] mb-6">
                    Manage API keys, monitor billing, track token usage, and inspect active requests.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://console.x.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-[#FFFFFF] text-[#050505] hover:bg-[#38BDF8] text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    Launch Console
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("https://console.x.ai", "console")}
                    className="p-2 rounded-lg bg-[#050505] border border-[#27272A] hover:border-[#38BDF8] text-[#94A3B8] hover:text-white transition-colors"
                    title="Copy URL"
                  >
                    {copiedKey === "console" ? (
                      <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Documentation */}
              <div className="p-6 rounded-xl bg-[#121212] border border-[#27272A] flex flex-col justify-between hover:border-[#38BDF8]/60 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-center text-[#38BDF8]">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#27272A] text-[#94A3B8]">
                      Guides
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Documentation
                  </h3>
                  <p className="text-xs font-mono text-[#38BDF8] mb-3">
                    docs.x.ai
                  </p>
                  <p className="text-xs text-[#94A3B8] mb-6">
                    Comprehensive SDK guides, API references, parameter specifications, and sample code.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://docs.x.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-[#FFFFFF] text-[#050505] hover:bg-[#38BDF8] text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    View Docs
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("https://docs.x.ai", "docs")}
                    className="p-2 rounded-lg bg-[#050505] border border-[#27272A] hover:border-[#38BDF8] text-[#94A3B8] hover:text-white transition-colors"
                    title="Copy URL"
                  >
                    {copiedKey === "docs" ? (
                      <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Support */}
              <div className="p-6 rounded-xl bg-[#121212] border border-[#27272A] flex flex-col justify-between hover:border-[#38BDF8]/60 transition-colors group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#050505] border border-[#27272A] flex items-center justify-center text-[#38BDF8]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#27272A] text-[#94A3B8]">
                      Enterprise
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Support
                  </h3>
                  <p className="text-xs font-mono text-[#38BDF8] mb-3">
                    enterprise@x.ai
                  </p>
                  <p className="text-xs text-[#94A3B8] mb-6">
                    Direct access to dedicated engineering support, custom SLAs, and high-volume capacity.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:enterprise@x.ai"
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-[#FFFFFF] text-[#050505] hover:bg-[#38BDF8] text-center transition-colors flex items-center justify-center gap-1.5"
                  >
                    Contact Support
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy("enterprise@x.ai", "support")}
                    className="p-2 rounded-lg bg-[#050505] border border-[#27272A] hover:border-[#38BDF8] text-[#94A3B8] hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedKey === "support" ? (
                      <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 7. Clean Terminal-Style Developer Contact & Documentation Footer */}
      <footer className="bg-[#050505] border-t border-[#27272A] py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-[#27272A]/70">
            {/* Brand column */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#121212] border border-[#27272A] flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#38BDF8]"
                  >
                    <path
                      d="M4 4L14.5 19.5H20L9.5 4H4Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M14.2 4L4 19.5H9.5L19.7 4H14.2Z"
                      fill="#38BDF8"
                    />
                  </svg>
                </div>
                <span className="font-bold text-white tracking-wider text-base">
                  xAI
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] max-w-sm leading-relaxed">
                Building AI systems that accelerate human scientific understanding. Frontier models powered by the Colossus supercomputer.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <div className="text-white font-semibold uppercase tracking-wider text-[11px]">
                Navigation
              </div>
              <ul className="space-y-2 text-[#94A3B8]">
                <li>
                  <a href="#about" className="hover:text-[#38BDF8] transition-colors">
                    &gt; About xAI
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#38BDF8] transition-colors">
                    &gt; Core Services
                  </a>
                </li>
                <li>
                  <a href="#specs" className="hover:text-[#38BDF8] transition-colors">
                    &gt; Key Specifications
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-[#38BDF8] transition-colors">
                    &gt; Developer Access
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Endpoints info */}
            <div className="md:col-span-4 space-y-3 font-mono text-xs">
              <div className="text-white font-semibold uppercase tracking-wider text-[11px]">
                Developer Endpoints
              </div>
              <div className="space-y-2 text-[#94A3B8]">
                <div className="flex items-center justify-between p-2 rounded bg-[#121212] border border-[#27272A]">
                  <span>API Console:</span>
                  <a
                    href="https://console.x.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] hover:underline"
                  >
                    console.x.ai
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#121212] border border-[#27272A]">
                  <span>Documentation:</span>
                  <a
                    href="https://docs.x.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#38BDF8] hover:underline"
                  >
                    docs.x.ai
                  </a>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-[#121212] border border-[#27272A]">
                  <span>Support:</span>
                  <a
                    href="mailto:enterprise@x.ai"
                    className="text-[#38BDF8] hover:underline"
                  >
                    enterprise@x.ai
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Status */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
            <p>&copy; {new Date().getFullYear()} xAI Corp. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
