import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ChevronRight,
  Eye,
  Flame,
  Globe,
  Lock,
  SatelliteDish,
  ShieldCheck,
  Target,
} from "lucide-react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IkTajMonogram } from "@/components/brand/IkTajMonogram";
import { SbTradexWordmark } from "@/components/brand/SbTradexWordmark";

/* ============================================
   Animated Section Wrapper
   ============================================ */
function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.23, 1.0, 0.32, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================
   Ticker Bar
   ============================================ */
function TickerBar() {
  const tickerData = [
    { symbol: "BTC/USD", price: "67,842.50", change: "+2.41%", profit: true },
    { symbol: "ETH/USD", price: "3,521.80", change: "+1.87%", profit: true },
    { symbol: "XAU/USD", price: "2,438.15", change: "+0.34%", profit: true },
    { symbol: "SPX 500", price: "5,842.30", change: "-0.12%", profit: false },
    { symbol: "EUR/USD", price: "1.0847", change: "+0.08%", profit: true },
    { symbol: "NAS 100", price: "20,341.50", change: "+0.67%", profit: true },
    { symbol: "GBP/USD", price: "1.2714", change: "-0.23%", profit: false },
    { symbol: "WTI OIL", price: "78.42", change: "+1.15%", profit: true },
  ];

  const items = [...tickerData, ...tickerData];

  return (
    <div className="relative overflow-hidden border-b border-border/50 bg-bg-secondary/50">
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-bg-primary to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-bg-primary to-transparent" />
      <div className="animate-ticker flex whitespace-nowrap py-2.5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 px-6">
            <span className="font-mono-data text-xs text-text-muted">{item.symbol}</span>
            <span className="font-mono-data text-xs text-text-primary">{item.price}</span>
            <span
              className={cn(
                "font-mono-data text-xs",
                item.profit ? "text-profit" : "text-loss"
              )}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================
   Navigation
   ============================================ */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1.0, 0.32, 1.0] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 luxury-ease",
        scrolled
          ? "glass border-b border-border/50 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <IkTajMonogram size="sm" />
          <SbTradexWordmark showTagline />
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {["Signals", "Education", "Portfolio", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="label-uppercase text-text-muted hover:text-text-primary transition-colors duration-300 luxury-ease"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline-gold" size="sm">
            Request Access
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}

/* ============================================
   Hero Section
   ============================================ */
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background atmosphere */}
      <div className="absolute inset-0">
        {/* Radial gold glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-[0.04]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(197,162,62,1) 0%, transparent 70%)",
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(197,162,62,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(197,162,62,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
        {/* Top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />
      </div>

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1.0, 0.32, 1.0] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent-gold/20 bg-accent-gold/5 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-gold animate-pulse" />
          <span className="label-uppercase text-accent-gold text-[10px]">
            Invite-Only Access — Limited Positions Available
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.23, 1.0, 0.32, 1.0] }}
          className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Where Capital
          <br />
          Meets{" "}
          <span className="relative inline-block">
            <span className="gold-text-glow text-accent-gold">Conviction</span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-accent-gold/60 via-accent-gold to-accent-gold/60" />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.23, 1.0, 0.32, 1.0] }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg"
        >
          Institutional-grade signals. War-room education. Portfolio intelligence
          designed for those who move markets. Not a course — a{" "}
          <span className="text-text-primary font-medium">private arsenal</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.23, 1.0, 0.32, 1.0] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button variant="primary-gold" size="lg">
            <span>Request Membership</span>
            <ArrowRight size={16} />
          </Button>
          <Button variant="ghost" size="lg">
            <Eye size={16} />
            <span>View Live Performance</span>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border/30 pt-8"
        >
          {[
            { value: "2,400+", label: "Active Members" },
            { value: "87.3%", label: "Win Rate (12mo)" },
            { value: "$4.2B", label: "Member AUM" },
            { value: "14", label: "Markets Covered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono-data text-xl font-semibold text-text-primary sm:text-2xl">
                {stat.value}
              </div>
              <div className="label-uppercase text-text-muted mt-1 text-[10px]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="label-uppercase text-text-muted text-[9px]">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-text-muted/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ============================================
   Signals Section
   ============================================ */
function SignalsSection() {
  const signals = [
    {
      pair: "BTC/USD",
      direction: "LONG" as const,
      entry: "66,200",
      target: "72,400",
      stop: "63,800",
      confidence: 92,
      status: "ACTIVE" as const,
    },
    {
      pair: "XAU/USD",
      direction: "LONG" as const,
      entry: "2,390",
      target: "2,520",
      stop: "2,340",
      confidence: 87,
      status: "ACTIVE" as const,
    },
    {
      pair: "EUR/USD",
      direction: "SHORT" as const,
      entry: "1.0890",
      target: "1.0620",
      stop: "1.0960",
      confidence: 78,
      status: "ACTIVE" as const,
    },
    {
      pair: "NAS 100",
      direction: "LONG" as const,
      entry: "20,100",
      target: "21,450",
      stop: "19,600",
      confidence: 84,
      status: "ACTIVE" as const,
    },
  ];

  return (
    <section id="signals" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="label-uppercase text-accent-gold mb-4 text-[10px]">
              High-Conviction Signals
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Precision Targeting
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary">
              Every signal is born from institutional analysis frameworks — deployed only when
              probability aligns with conviction.
            </p>
          </div>
        </AnimatedSection>

        {/* Signal Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, i) => (
            <AnimatedSection key={signal.pair} delay={i * 0.1}>
              <Card variant="default" hover className="relative p-5">
                {/* Header */}
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono-data text-sm font-semibold text-text-primary">
                    {signal.pair}
                  </span>
                  <span
                    className={cn(
                      "label-uppercase rounded-[2px] px-2 py-0.5 text-[9px]",
                      signal.direction === "LONG"
                        ? "bg-profit/10 text-profit"
                        : "bg-loss/10 text-loss"
                    )}
                  >
                    {signal.direction}
                  </span>
                </div>

                {/* Confidence meter */}
                <div className="mb-4">
                  <div className="mb-1 flex justify-between">
                    <span className="text-[10px] text-text-muted">Confidence</span>
                    <span className="font-mono-data text-xs text-accent-gold">
                      {signal.confidence}%
                    </span>
                  </div>
                  <div className="h-[2px] w-full rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-accent-gold transition-all duration-1000"
                      style={{ width: `${signal.confidence}%` }}
                    />
                  </div>
                </div>

                {/* Price data */}
                <div className="space-y-2">
                  {[
                    { label: "Entry", value: signal.entry },
                    { label: "Target", value: signal.target },
                    { label: "Stop", value: signal.stop },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-text-muted">
                        {row.label}
                      </span>
                      <span className="font-mono-data text-xs text-text-primary">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="mt-4 flex items-center gap-1.5 border-t border-border/50 pt-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-profit animate-pulse" />
                  <span className="label-uppercase text-profit text-[9px]">{signal.status}</span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Features Grid
   ============================================ */
function FeaturesSection() {
  const features = [
    {
      icon: <Target size={20} strokeWidth={1.5} />,
      title: "High-Conviction Signals",
      description:
        "Institutional-grade trade signals with defined entry, target, and risk parameters. Every signal carries conviction — never noise.",
    },
    {
      icon: <SatelliteDish size={20} strokeWidth={1.5} />,
      title: "Live Market Intelligence",
      description:
        "Real-time analysis across 14 markets. Macro narratives, order flow, and sentiment — synthesized into actionable intelligence.",
    },
    {
      icon: <ShieldCheck size={20} strokeWidth={1.5} />,
      title: "Risk Architecture",
      description:
        "Portfolio-level risk frameworks designed for capital preservation. Position sizing, correlation analysis, and drawdown protocols.",
    },
    {
      icon: <Flame size={20} strokeWidth={1.5} />,
      title: "War-Room Education",
      description:
        "Not a course — a combat environment. Live sessions, case studies, and real-time trade breakdowns with institutional methodologies.",
    },
    {
      icon: <BarChart3 size={20} strokeWidth={1.5} />,
      title: "Portfolio Intelligence",
      description:
        "Track performance across strategies with institutional-grade analytics. Sharpe ratios, alpha generation, and risk-adjusted returns.",
    },
    {
      icon: <Globe size={20} strokeWidth={1.5} />,
      title: "Global Macro Coverage",
      description:
        "Forex, indices, commodities, crypto, and equities. A unified intelligence framework across every liquid market.",
    },
  ];

  return (
    <section id="education" className="relative py-24 lg:py-32">
      {/* Divider */}
      <div className="absolute top-0 left-1/2 h-[1px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="label-uppercase text-accent-gold mb-4 text-[10px]">
              The Arsenal
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Instruments of Precision
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary">
              Every tool, every framework, every signal — engineered for one purpose:
              asymmetric edge.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.title} delay={i * 0.08}>
              <Card variant="default" hover className="group h-full p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[2px] border border-accent-gold/20 bg-accent-gold/5 text-accent-gold transition-all duration-500 group-hover:border-accent-gold/40 group-hover:bg-accent-gold/10 group-hover:shadow-[0_0_20px_-4px_rgba(197,162,62,0.15)]">
                  {feature.icon}
                </div>
                <h3 className="font-display text-base font-semibold text-text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {feature.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Performance Section
   ============================================ */
function PerformanceSection() {
  const performanceData = [
    { month: "JAN", result: "+8.4%", profit: true },
    { month: "FEB", result: "+12.1%", profit: true },
    { month: "MAR", result: "-2.3%", profit: false },
    { month: "APR", result: "+15.7%", profit: true },
    { month: "MAY", result: "+6.8%", profit: true },
    { month: "JUN", result: "+22.4%", profit: true },
    { month: "JUL", result: "-1.8%", profit: false },
    { month: "AUG", result: "+9.3%", profit: true },
    { month: "SEP", result: "+18.6%", profit: true },
    { month: "OCT", result: "+4.2%", profit: true },
    { month: "NOV", result: "+14.9%", profit: true },
    { month: "DEC", result: "+7.1%", profit: true },
  ];

  const maxBar = Math.max(...performanceData.map((d) => parseFloat(d.result)));

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 h-[1px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left - Stats */}
          <AnimatedSection>
            <div>
              <span className="label-uppercase text-accent-gold mb-4 block text-[10px]">
                Verified Track Record
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                Performance Speaks
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Every number is verified. Every trade is recorded. Transparency is not a feature
                — it's a non-negotiable standard.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "12-Month Return", value: "+115.4%", sub: "Compound Growth" },
                  { label: "Sharpe Ratio", value: "2.84", sub: "Risk-Adjusted" },
                  { label: "Max Drawdown", value: "-4.2%", sub: "Capital Preservation" },
                  { label: "Win Rate", value: "87.3%", sub: "Across All Markets" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[2px] border border-border/50 bg-surface/50 p-4">
                    <span className="label-uppercase text-text-muted block text-[9px]">
                      {stat.label}
                    </span>
                    <span className="font-mono-data mt-1 block text-xl font-bold text-text-primary sm:text-2xl">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-text-muted">{stat.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Chart */}
          <AnimatedSection delay={0.2}>
            <Card variant="gold" hover={false} className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span className="label-uppercase text-text-muted block text-[9px]">
                    Monthly Performance
                  </span>
                  <span className="font-mono-data text-sm text-text-primary">2024 FY</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-[1px] bg-profit" />
                    <span className="text-[10px] text-text-muted">Profit</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-[1px] bg-loss" />
                    <span className="text-[10px] text-text-muted">Loss</span>
                  </div>
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-48">
                {performanceData.map((bar) => {
                  const height = Math.abs(parseFloat(bar.result)) / maxBar * 100;
                  return (
                    <div key={bar.month} className="flex flex-1 flex-col items-center gap-2">
                      <span className="font-mono-data text-[9px] text-text-muted">
                        {bar.result}
                      </span>
                      <div className="w-full flex items-end justify-center" style={{ height: "120px" }}>
                        <div
                          className={cn(
                            "w-full max-w-[24px] rounded-t-[2px] transition-all duration-700",
                            bar.profit ? "bg-profit/70" : "bg-loss/70"
                          )}
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <span className="font-mono-data text-[9px] text-text-muted">
                        {bar.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Testimonials
   ============================================ */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "SB TRADEX isn't another signal group. It's an institutional framework that happened to be accessible to private capital. The discipline alone is worth the membership.",
      author: "A. Kessler",
      title: "Family Office Director",
      location: "Zürich",
    },
    {
      quote:
        "The risk architecture changed how I approach every position. I went from retail gambling to institutional execution in six months.",
      author: "M. Chen",
      title: "Portfolio Manager",
      location: "Hong Kong",
    },
    {
      quote:
        "Conviction over quantity. Every signal has a thesis, every thesis has data. This is what Bloomberg should have built for private traders.",
      author: "R. Okonkwo",
      title: "Private Investor",
      location: "London",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-bg-secondary/30">
      <div className="absolute top-0 left-1/2 h-[1px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="label-uppercase text-accent-gold mb-4 text-[10px]">
              Member Voices
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Capital's Trust
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.author} delay={i * 0.12}>
              <Card variant="default" hover className="h-full p-6 flex flex-col">
                {/* Quote mark */}
                <div className="mb-4 font-display text-4xl leading-none text-accent-gold/30">
                  "
                </div>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary italic">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-border/40 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-text-primary">{t.author}</div>
                      <div className="text-[10px] text-text-muted">{t.title}</div>
                    </div>
                    <div className="text-[10px] text-text-muted">{t.location}</div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   Pricing Section
   ============================================ */
function PricingSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 h-[1px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="label-uppercase text-accent-gold mb-4 text-[10px]">
              Membership Tiers
            </span>
            <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Choose Your Arsenal
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary">
              Every tier delivers institutional value. The question is only how deep you want to go.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Tier 1 */}
          <AnimatedSection delay={0}>
            <Card variant="default" hover className="flex h-full flex-col p-6 lg:p-8">
              <div className="mb-6">
                <span className="label-uppercase text-text-muted block text-[9px]">Tier I</span>
                <h3 className="font-display mt-2 text-xl font-bold text-text-primary">Operator</h3>
                <p className="mt-1 text-sm text-text-secondary">
                  For the disciplined trader ready to evolve.
                </p>
              </div>
              <div className="mb-6">
                <span className="font-mono-data text-3xl font-bold text-text-primary">$497</span>
                <span className="text-sm text-text-muted">/month</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {[
                  "Daily high-conviction signals",
                  "Live market briefings (3x/week)",
                  "Risk management framework",
                  "Member community access",
                  "Performance dashboard",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <ChevronRight size={14} className="mt-0.5 shrink-0 text-accent-gold/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline-gold" size="md" className="w-full">
                Apply for Access
              </Button>
            </Card>
          </AnimatedSection>

          {/* Tier 2 - Featured */}
          <AnimatedSection delay={0.12}>
            <Card variant="gold" hover className="relative flex h-full flex-col p-6 lg:p-8">
              {/* Featured badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="gold-shimmer label-uppercase rounded-[2px] bg-accent-gold px-4 py-1 text-[9px] font-bold text-bg-primary">
                  Most Selected
                </span>
              </div>
              <div className="mb-6">
                <span className="label-uppercase text-accent-gold block text-[9px]">Tier II</span>
                <h3 className="font-display mt-2 text-xl font-bold text-text-primary">
                  Architect
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  For those building empires, not just trades.
                </p>
              </div>
              <div className="mb-6">
                <span className="font-mono-data text-3xl font-bold text-accent-gold">$1,247</span>
                <span className="text-sm text-text-muted">/month</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {[
                  "Everything in Operator",
                  "Institutional signal suite (all 14 markets)",
                  "Daily live war-room sessions",
                  "Portfolio intelligence dashboard",
                  "Position sizing calculator",
                  "Priority support & 1-on-1 reviews",
                  "Macro analysis reports (weekly)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <ChevronRight size={14} className="mt-0.5 shrink-0 text-accent-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="primary-gold" size="md" className="w-full">
                Apply for Architect
                <ArrowRight size={14} />
              </Button>
            </Card>
          </AnimatedSection>

          {/* Tier 3 */}
          <AnimatedSection delay={0.24}>
            <Card variant="default" hover className="flex h-full flex-col p-6 lg:p-8">
              <div className="mb-6">
                <span className="label-uppercase text-text-muted block text-[9px]">Tier III</span>
                <h3 className="font-display mt-2 text-xl font-bold text-text-primary">
                  Sovereign
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Private capital. Private intelligence. Absolute discretion.
                </p>
              </div>
              <div className="mb-6">
                <span className="font-mono-data text-3xl font-bold text-text-primary">
                  $4,997
                </span>
                <span className="text-sm text-text-muted">/month</span>
              </div>
              <ul className="mb-8 flex-1 space-y-3">
                {[
                  "Everything in Architect",
                  "Personal strategy advisor",
                  "Custom algorithmic signals",
                  "Family office frameworks",
                  "Private quarterly summits",
                  "White-glove onboarding",
                  "Institutional research library",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <ChevronRight size={14} className="mt-0.5 shrink-0 text-accent-gold/60" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="outline-gold" size="md" className="w-full">
                Inquire Discreetly
              </Button>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   CTA Section
   ============================================ */
function CTASection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 h-[1px] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] opacity-[0.06]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(197,162,62,1) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <AnimatedSection>
          <IkTajMonogram size="lg" className="mx-auto mb-8" />

          <h2 className="font-display text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Ready to Enter the
            <br />
            <span className="text-accent-gold gold-text-glow">War Room</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-text-secondary leading-relaxed">
            Membership is by application only. Not everyone who applies is accepted. We curate for
            discipline, capital seriousness, and alignment with our philosophy.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary-gold" size="lg">
              Submit Application
              <ArrowRight size={16} />
            </Button>
          </div>

          <p className="mt-6 text-[10px] text-text-muted tracking-wider uppercase">
            <Lock size={10} className="mr-1 inline-block" />
            Your information is encrypted and never shared
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ============================================
   Footer
   ============================================ */
function Footer() {
  return (
    <footer className="border-t border-border/30 bg-bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <IkTajMonogram size="sm" />
              <SbTradexWordmark showTagline />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-text-muted">
              Where Capital Meets Conviction.
              <br />
              Architect of Wealth.
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="label-uppercase text-text-muted block text-[9px] mb-3">Platform</span>
            {["Signals", "Education", "Portfolio", "Pricing"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 luxury-ease"
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <span className="label-uppercase text-text-muted block text-[9px] mb-3">Company</span>
            {["About", "Careers", "Press", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="block py-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 luxury-ease"
              >
                {link}
              </a>
            ))}
          </div>

          <div>
            <span className="label-uppercase text-text-muted block text-[9px] mb-3">Legal</span>
            {["Terms", "Privacy", "Risk Disclosure", "Compliance"].map((link) => (
              <a
                key={link}
                href="#"
                className="block py-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-300 luxury-ease"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 md:flex-row">
          <p className="text-[10px] text-text-muted">
            © {new Date().getFullYear()} IKTAJ GROUP. All rights reserved.
          </p>
          <p className="text-[10px] text-text-muted max-w-xl text-center md:text-right leading-relaxed">
            Trading involves significant risk of loss. Past performance is not indicative of future results. 
            SB TRADEX is an educational and informational service — not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   Main App
   ============================================ */
export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary">
      <Navigation />
      <TickerBar />
      <main>
        <HeroSection />
        <SignalsSection />
        <FeaturesSection />
        <PerformanceSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
