import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  Mail,
  Copy,
  Check,
  ChevronDown,
  Compass,
  Code2,
  ExternalLink,
  Menu,
  X,
  Play,
  Activity,
  MapPin,
  Clock,
  ArrowUp
} from "lucide-react";

function GithubIcon({ size = 16, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  // Navigation & Scroll State
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);

  // Interactive Discipline Explorer State (Chapter 01)
  const [activeDiscipline, setActiveDiscipline] = useState(0);

  // Accordion State (Chapter 03: Methodology)
  const [openAccordion, setOpenAccordion] = useState(0);

  // Stack Filter State (Chapter 04)
  const [stackFilter, setStackFilter] = useState("all");

  // Copy Email State
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Time in IST
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      setLocalTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Progress and Sticky Nav calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 40);

      const sections = ["top", "about", "work", "methodology", "stack", "beyond", "journey", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("ekanshbannsal@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2600);
  };

  const disciplines = [
    {
      id: "logic",
      num: "01",
      title: "System Logic & Algorithms",
      label: "C++ & Data Structures",
      desc: "Delving into low-level memory mechanics, time complexity, and robust problem-solving. Writing algorithmic solutions where every CPU cycle and byte allocation is respected.",
      tags: ["C++", "DSA", "Algorithmic Complexity", "Memory Models"],
      shape: "binary-tree"
    },
    {
      id: "interface",
      num: "02",
      title: "Interface Architecture",
      label: "Full-Stack Web Engineering",
      desc: "Connecting backend APIs to fluid, accessible user interfaces. Structuring modular Node.js/Express architectures and reactive component trees with modern React and clean CSS.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
      shape: "grid-mesh"
    },
    {
      id: "ai",
      num: "03",
      title: "Applied Intelligence",
      label: "Machine Learning Exploration",
      desc: "Investigating how machine intelligence can analyze chaotic physical systems. Formulating anomaly detection and forecast-bust probability frameworks for complex real-world data.",
      tags: ["Python", "ForecastGuard AI", "Statistical Models", "Error Analytics"],
      shape: "neural-cluster"
    }
  ];

  const methodologyItems = [
    {
      num: "01",
      title: "Dig to First Principles",
      subtitle: "Understand the underlying machine before relying on abstractions.",
      content: "When encountering an engineering challenge, I resist copying libraries or stack traces without understanding the mechanism. Whether analyzing pointer manipulation in C++, the Node.js event loop, or React's virtual DOM reconciliation, true debugging starts with knowing how the machine executes the code."
    },
    {
      num: "02",
      title: "Build to Verify, Not Just to Ship",
      subtitle: "Software comes alive through rigorous experimentation.",
      content: "Theory is only proven when put into production. I prioritize building complete working architectures—from relational and document database schemas to resilient endpoints and clean interfaces—intentionally stress-testing edge cases to discover what breaks."
    },
    {
      num: "03",
      title: "Respect the User's Attention",
      subtitle: "Performance is an invisible feature; clarity is a visible one.",
      content: "A powerful algorithmic backend is undermined if the interface is laggy, cluttered, or confusing. Great software unites computational discipline with intuitive, responsive design that respects the human on the other side of the glass."
    }
  ];

  const stackCategories = [
    {
      category: "languages",
      title: "Languages & Core",
      skills: [
        { name: "C++", note: "DSA, Pointer Mechanics, OOP" },
        { name: "Python", note: "Data processing, AI/ML concepts" },
        { name: "JavaScript (ES6+)", note: "Asynchronous execution, DOM" }
      ]
    },
    {
      category: "frontend",
      title: "Frontend Architecture",
      skills: [
        { name: "HTML5 & Semantic Structure", note: "Accessible markup" },
        { name: "Modern CSS3", note: "Flexbox, Grid, Custom Variables" },
        { name: "React.js", note: "Component trees, state hooks" },
        { name: "Responsive UI", note: "Mobile-first layouts" },
        { name: "React Router", note: "Declarative client routing" }
      ]
    },
    {
      category: "backend",
      title: "Backend & Persistence",
      skills: [
        { name: "Node.js", note: "Event-driven runtime" },
        { name: "Express.js", note: "RESTful routing, middleware" },
        { name: "MongoDB & Mongoose", note: "Document schemas & queries" },
        { name: "EJS", note: "Server-side dynamic templating" },
        { name: "REST APIs", note: "Payload design & integration" }
      ]
    },
    {
      category: "tooling",
      title: "Engineering Tools",
      skills: [
        { name: "Git & GitHub", note: "Version control & collaboration" },
        { name: "Visual Studio Code", note: "Development & debugging" },
        { name: "DSA Problem Solving", note: "Algorithmic thinking" }
      ]
    }
  ];

  const filteredStack = stackFilter === "all"
    ? stackCategories
    : stackCategories.filter(cat => cat.category === stackFilter);

  return (
    <div className={`app-root ${!motionEnabled ? "motion-reduced" : ""}`}>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Floating Glass Navigation */}
      <header className={`header-nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#top" className="nav-brand" aria-label="Ekansh Bansal">
          <span className="serif-display" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>EB</span>
          <span>Ekansh Bansal</span>
          <span className="nav-status-indicator">
            <i className="pulse-dot"></i>
            <span>2ND YEAR CSE</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#top" className={`nav-link ${activeSection === "top" ? "active" : ""}`}>
            Presence
          </a>
          <a href="#about" className={`nav-link ${activeSection === "about" ? "active" : ""}`}>
            About
          </a>
          <a href="#work" className={`nav-link ${activeSection === "work" ? "active" : ""}`}>
            Work
          </a>
          <a href="#methodology" className={`nav-link ${activeSection === "methodology" ? "active" : ""}`}>
            How I Think
          </a>
          <a href="#stack" className={`nav-link ${activeSection === "stack" ? "active" : ""}`}>
            Stack
          </a>
          <a href="#journey" className={`nav-link ${activeSection === "journey" ? "active" : ""}`}>
            Journey
          </a>
        </nav>

        <div className="nav-actions">
          <button
            onClick={() => setMotionEnabled(!motionEnabled)}
            className="motion-toggle"
            aria-label="Toggle animations"
            title="Toggle Animations"
          >
            <Activity size={12} />
            <span>{motionEnabled ? "MOTION ON" : "MOTION OFF"}</span>
          </button>

          <a href="#contact" className="nav-cta">
            <span>Let’s talk</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: "84px",
          left: "20px",
          right: "20px",
          background: "rgba(11, 15, 18, 0.98)",
          backdropFilter: "blur(20px)",
          border: "1px solid var(--border-medium)",
          borderRadius: "20px",
          padding: "24px",
          zIndex: 890,
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          <a
            href="#top"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.1rem", padding: "8px 0" }}
          >
            Presence ↗
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.1rem", padding: "8px 0" }}
          >
            About & Perspective ↗
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.1rem", padding: "8px 0" }}
          >
            Selected Work ↗
          </a>
          <a
            href="#methodology"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.1rem", padding: "8px 0" }}
          >
            How I Think ↗
          </a>
          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.1rem", padding: "8px 0" }}
          >
            Toolkit & Stack ↗
          </a>
          <a
            href="#journey"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: "1.1rem", padding: "8px 0" }}
          >
            The Journey ↗
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-pill-primary"
            style={{ justifyContent: "center", marginTop: "12px" }}
          >
            <span>Start a conversation ↗</span>
          </a>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main id="main">
        {/* CHAPTER 00: THE HORIZON (HERO SECTION) */}
        <section id="top" className="hero-section">
          <div className="hero-grid-bg" aria-hidden="true" />

          <div className="container">
            {/* Topline Telemetry */}
            <div className="hero-topline">
              <span className="mono-telemetry" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <i className="pulse-dot"></i>
                DEVELOPER · COMPUTER SCIENCE STUDENT · ASPIRING AI/ML ENGINEER
              </span>
              <span className="mono-telemetry" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Clock size={12} />
                <span>IST {localTime || "09:30:00"} · MIRAI SCHOOL OF TECH</span>
              </span>
            </div>

            {/* Main Hero Split Grid */}
            <div className="hero-main-grid">
              <div className="hero-text-column">
                <span className="hero-kicker">
                  A Human Perspective on Technology & Code
                </span>

                <h1 className="hero-headline serif-display">
                  Ekansh <em>Bansal</em>
                </h1>

                <p className="hero-tagline">
                  Building useful things with code. Learning something new every day.
                  Exploring the bridge between robust software engineering and applied artificial intelligence.
                </p>

                <div className="hero-actions">
                  <a href="#work" className="btn-pill-primary">
                    <span>Explore Selected Work</span>
                    <ArrowDown size={16} />
                  </a>
                  <a href="#contact" className="btn-pill-secondary">
                    <span>Start a Conversation</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              {/* Portrait Visual Plate (Authentic Photograph) */}
              <div className="portrait-plate-wrapper">
                <div className="portrait-plate">
                  {/* Corner Scientific Telemetry Markers */}
                  <span className="portrait-corner-marker tl">+ PLATE NO. 01</span>
                  <span className="portrait-corner-marker tr">ELEV: +1,400M</span>
                  <span className="portrait-corner-marker bl">HIMALAYAN FOOTHILLS</span>
                  <span className="portrait-corner-marker br">NATURAL LIGHT</span>

                  {/* Authentic User Photograph */}
                  <img
                    src="/assets/ekansh-portrait.jpg"
                    alt="Ekansh Bansal portrait against mountains and pine slopes"
                    className="portrait-image"
                    loading="eager"
                  />

                  <div className="portrait-overlay-gradient" />

                  {/* Location & Status Badge */}
                  <div className="portrait-location-pill">
                    <MapPin size={12} style={{ color: "var(--accent-sky)" }} />
                    <span>EKANSH BANSAL · 2ND YEAR CSE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Bottom Strip */}
            <div className="hero-bottom-strip">
              <a href="#about" className="scroll-indicator-link">
                <span className="scroll-tick-bar"></span>
                <span>SCROLL TO DISCOVER</span>
                <ArrowDown size={14} />
              </a>

              <span>FOUNDATIONS IN C++ · EXPANDING TO AI</span>
              <span style={{ color: "var(--accent-sky)" }}>AN ONGOING EXPLORATION ↗</span>
            </div>
          </div>
        </section>

        {/* PROOF & HIGHLIGHT STRIP */}
        <section className="container">
          <div className="proof-strip">
            <div className="proof-item">
              <div className="proof-value">
                2nd<span>Year</span>
              </div>
              <p className="proof-label">B.Tech Computer Science & Engineering at Mirai School of Technology</p>
            </div>

            <div className="proof-item">
              <div className="proof-value">
                04<span>+</span>
              </div>
              <p className="proof-label">Core applications & analytical concept prototypes developed</p>
            </div>

            <div className="proof-item">
              <div className="proof-value">
                100<span>+</span>
              </div>
              <p className="proof-label">Algorithmic problems & data structure challenges solved</p>
            </div>

            <a href="#work" className="proof-cta-box">
              <div>
                <span style={{ display: "block", color: "var(--accent-sky)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", marginBottom: "4px" }}>
                  EXPLORE THE REPOSITORIES
                </span>
                <span>THE CODE. THE REAL-WORLD EXPERIMENTS.</span>
              </div>
              <ArrowUpRight size={22} style={{ color: "var(--accent-sky)" }} />
            </a>
          </div>
        </section>

        {/* CHAPTER 01: THE PERSON BEHIND THE WORK */}
        <section id="about" className="section-wrapper">
          <div className="container">
            <div className="section-label">
              <span>01 / THE PERSON BEHIND THE TERMINAL</span>
              <span>A CONNECTED PERSPECTIVE</span>
            </div>

            <div className="about-grid">
              <div className="about-text-column">
                <h2 className="editorial-headline serif-display">
                  Programming is the syntax.<br />
                  <em>People and problems are the point.</em>
                </h2>

                <p className="editorial-lead">
                  I connect algorithmic fundamentals, full-stack software development, and machine intelligence.
                </p>

                <p className="editorial-body">
                  My journey began with the raw essentials of computer science—wrestling with pointer arithmetic, memory management, and time complexity in C++. That foundational discipline taught me to respect how computers execute instructions.
                </p>

                <p className="editorial-body">
                  From there, my curiosity naturally demanded construction: creating functional backend services with Node.js and MongoDB, designing responsive user interfaces with React, and turning my attention to artificial intelligence and predictive modeling.
                </p>

                <p className="editorial-body">
                  I don't claim to be an industry veteran with decades of enterprise war stories. I am an ambitious, deeply curious second-year engineer who loves understanding how things work under the hood and is hungry to contribute to a world-class engineering team.
                </p>

                <div className="identity-badges-row">
                  <span className="identity-tag">ENGINEERING MINDSET</span>
                  <span className="identity-tag">CONTINUOUS LEARNING</span>
                  <span className="identity-tag">BUILDER’S CURIOSITY</span>
                </div>
              </div>

              {/* Interactive Discipline Explorer */}
              <div className="discipline-explorer-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span className="mono-telemetry" style={{ color: "var(--accent-sky)" }}>
                    THREE DISCIPLINES. ONE CONTINUOUS DRIVE.
                  </span>
                  <span className="mono-telemetry">
                    0{activeDiscipline + 1} / 03
                  </span>
                </div>

                {/* Tabs */}
                <div className="discipline-tabs" role="tablist">
                  {disciplines.map((d, index) => (
                    <button
                      key={d.id}
                      onClick={() => setActiveDiscipline(index)}
                      className={`discipline-tab-btn ${activeDiscipline === index ? "active" : ""}`}
                    >
                      {d.num} / {d.id.toUpperCase()} ↗
                    </button>
                  ))}
                </div>

                {/* Dynamic Generative Visual Box */}
                <div className="discipline-visual-box">
                  {activeDiscipline === 0 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <Terminal size={40} style={{ color: "var(--accent-sky)" }} />
                      <span className="mono-telemetry" style={{ color: "var(--text-secondary)" }}>
                        SYSTEM_LOGIC :: C++ [PTR_REF]
                      </span>
                    </div>
                  )}

                  {activeDiscipline === 1 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <Layers size={40} style={{ color: "#A3E7D8" }} />
                      <span className="mono-telemetry" style={{ color: "var(--text-secondary)" }}>
                        REACT_VDOM &lt;REST_API_PIPELINE&gt;
                      </span>
                    </div>
                  )}

                  {activeDiscipline === 2 && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                      <Sparkles size={40} style={{ color: "var(--accent-burgundy)" }} />
                      <span className="mono-telemetry" style={{ color: "var(--text-secondary)" }}>
                        APPLIED_AI :: UNCERTAINTY_SPREAD
                      </span>
                    </div>
                  )}
                </div>

                {/* Dynamic Content */}
                <div>
                  <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "6px" }}>
                    {disciplines[activeDiscipline].label}
                  </span>
                  <h3 className="discipline-content-heading">
                    {disciplines[activeDiscipline].title}
                  </h3>
                  <p className="discipline-content-desc">
                    {disciplines[activeDiscipline].desc}
                  </p>

                  <div className="tech-pills-row">
                    {disciplines[activeDiscipline].tags.map(tag => (
                      <span key={tag} className="tech-pill">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 02: SELECTED WORK */}
        <section id="work" className="section-wrapper">
          <div className="container">
            <div className="section-label">
              <span>02 / SELECTED WORK</span>
              <span>BUILT. TESTED. PUT INTO THE WORLD.</span>
            </div>

            <div style={{ marginBottom: "56px" }}>
              <h2 className="editorial-headline serif-display">
                Ideas are a start.<br />
                <em>This is the work.</em>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", maxWidth: "600px" }}>
                From machine learning concepts analyzing weather forecast bust probabilities
                to full-stack backend systems and pure JavaScript DOM mechanics.
              </p>
            </div>

            <div className="work-grid">
              {/* Project 01: ForecastGuard AI */}
              <article className="project-card featured">
                <div className="project-visual-frame">
                  <div className="project-browser-bar">
                    <div className="browser-dots">
                      <i></i><i></i><i></i>
                    </div>
                    <span>forecastguard-ai.internal</span>
                    <ExternalLink size={12} />
                  </div>
                  <img
                    src="/assets/forecastguard-preview.jpg"
                    alt="ForecastGuard AI meteorological bust detection dashboard"
                    className="project-preview-img"
                    loading="lazy"
                  />
                </div>

                <div className="project-details">
                  <div className="project-meta-row">
                    <span className="project-number">01</span>
                    <span className="mono-telemetry">AI & METEOROLOGICAL ANALYTICS</span>
                  </div>

                  <h3 className="project-title serif-display">
                    ForecastGuard AI
                  </h3>

                  <p className="project-premise">
                    <strong>AI-Based Forecast Bust Detection for Medium-Range Weather Forecasts.</strong> A project concept focused on identifying situations where numerical weather predictions may experience sudden, severe inaccuracies (forecast busts).
                  </p>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    The framework examines historical forecast errors and ensemble model agreement to estimate bust probability, locate error-prone regions, and communicate uncertainty through visual dashboards.
                  </p>

                  <div className="tech-pills-row">
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">AI/ML Concepts</span>
                    <span className="tech-pill">Error Analytics</span>
                    <span className="tech-pill">Uncertainty Modeling</span>
                  </div>

                  <div className="project-action-links">
                    <span className="mono-telemetry" style={{ color: "var(--accent-sky)" }}>
                      REPRESENTS APPLIED AI AMBITION
                    </span>
                  </div>
                </div>
              </article>

              {/* Project 02: Employee Management System */}
              <article className="project-card">
                <div className="project-visual-frame">
                  <div className="project-browser-bar">
                    <div className="browser-dots">
                      <i></i><i></i><i></i>
                    </div>
                    <span>github.com/ekanshbannsal/Employee_Management_system</span>
                    <ExternalLink size={12} />
                  </div>
                  <img
                    src="/assets/ems-preview.jpg"
                    alt="Employee Management System admin dashboard preview"
                    className="project-preview-img"
                    loading="lazy"
                  />
                </div>

                <div className="project-details">
                  <div className="project-meta-row">
                    <span className="project-number">02</span>
                    <span className="mono-telemetry">FULL-STACK WEB APPLICATION</span>
                  </div>

                  <h3 className="project-title serif-display">
                    Employee Management System
                  </h3>

                  <p className="project-premise">
                    A web application built around employee administration workflows. The project explores backend architectural patterns, application routing, MongoDB schema design, and server-side template rendering with EJS.
                  </p>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    Built with clean MVC organization to understand the entire backend lifecycle: receiving HTTP requests, processing authentication and data validation, persisting records, and serving dynamic templates.
                  </p>

                  <div className="tech-pills-row">
                    <span className="tech-pill">Node.js</span>
                    <span className="tech-pill">Express.js</span>
                    <span className="tech-pill">MongoDB</span>
                    <span className="tech-pill">EJS</span>
                    <span className="tech-pill">REST Architecture</span>
                  </div>

                  <div className="project-action-links">
                    <a
                      href="https://github.com/ekanshbannsal/Employee_Management_system"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-with-arrow"
                    >
                      <GithubIcon size={16} />
                      <span>Inspect Repository on GitHub</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </article>

              {/* Project 03: Todo List & State Architecture */}
              <article className="project-card">
                <div className="project-visual-frame">
                  <div className="project-browser-bar">
                    <div className="browser-dots">
                      <i></i><i></i><i></i>
                    </div>
                    <span>vanilla-state.io/tasks</span>
                    <ExternalLink size={12} />
                  </div>
                  <img
                    src="/assets/taskflow-preview.jpg"
                    alt="Task Flow and State Architecture preview"
                    className="project-preview-img"
                    loading="lazy"
                  />
                </div>

                <div className="project-details">
                  <div className="project-meta-row">
                    <span className="project-number">03</span>
                    <span className="mono-telemetry">CORE JAVASCRIPT & DOM MECHANICS</span>
                  </div>

                  <h3 className="project-title serif-display">
                    Task Flow & State Synchronization
                  </h3>

                  <p className="project-premise">
                    A task-management application built directly with vanilla JavaScript. Focuses on state persistence, DOM manipulation, event bubbling, and keyboard shortcuts without the safety net of external frameworks.
                  </p>

                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
                    Explores state-to-DOM synchronization, localStorage serialization, and clean event handling to understand the browser's native mechanics before using higher-level abstractions like React.
                  </p>

                  <div className="tech-pills-row">
                    <span className="tech-pill">JavaScript ES6+</span>
                    <span className="tech-pill">DOM APIs</span>
                    <span className="tech-pill">Event Delegation</span>
                    <span className="tech-pill">State Management</span>
                  </div>

                  <div className="project-action-links">
                    <span className="mono-telemetry" style={{ color: "var(--accent-sky)" }}>
                      FOUNDATIONAL DOM CRAFT
                    </span>
                  </div>
                </div>
              </article>
            </div>

            {/* THE SANDBOX: Open Repositories on GitHub */}
            <div style={{ marginTop: "72px" }}>
              <div className="section-label" style={{ marginBottom: "24px" }}>
                <span>MORE WAYS I BUILD</span>
                <span>OPEN REPOSITORIES & CONTINUOUS PRACTICE</span>
              </div>

              <div className="sandbox-grid">
                <div className="sandbox-card">
                  <div>
                    <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                      04 / ALGORITHMIC FOUNDATIONS
                    </span>
                    <h4 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>DSA in C++ Practice</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      Systematic implementations of data structures (Linked Lists, Binary Search Trees, Graphs, Heaps) and algorithm patterns (Dynamic Programming, Backtracking, Sliding Window).
                    </p>
                  </div>
                  <a
                    href="https://github.com/ekanshbannsal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-with-arrow"
                    style={{ marginTop: "20px" }}
                  >
                    <span>View GitHub practice ↗</span>
                  </a>
                </div>

                <div className="sandbox-card">
                  <div>
                    <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                      05 / WEB EXPERIMENTS
                    </span>
                    <h4 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>Frontend Experiments</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      Responsive layout prototypes, API consumption tests with React Router, and CSS micro-animations exploring modern web APIs.
                    </p>
                  </div>
                  <a
                    href="https://github.com/ekanshbannsal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-with-arrow"
                    style={{ marginTop: "20px" }}
                  >
                    <span>View repositories ↗</span>
                  </a>
                </div>

                <div className="sandbox-card">
                  <div>
                    <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                      06 / DATA SCIENCE NOTEBOOKS
                    </span>
                    <h4 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>Data & ML Explorations</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                      Jupyter notebooks exploring exploratory data analysis (EDA), anomaly clustering, and data transformations in Python.
                    </p>
                  </div>
                  <a
                    href="https://github.com/ekanshbannsal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-with-arrow"
                    style={{ marginTop: "20px" }}
                  >
                    <span>Inspect notebooks ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 03: HOW I THINK & WORK */}
        <section id="methodology" className="section-wrapper">
          <div className="container">
            <div className="section-label">
              <span>03 / HOW I THINK & BUILD</span>
              <span>DEPTH MEETS PERSPECTIVE</span>
            </div>

            <div className="methodology-grid">
              <div>
                <h2 className="editorial-headline serif-display">
                  How I work.<br />
                  <em>From first principle to working system.</em>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.6" }}>
                  Engineering is more than syntax memorization. It is the ability to break an ambiguous real-world problem into discrete, testable components.
                </p>

                <div className="steps-list">
                  <div className="step-row">
                    <span className="step-num">01</span>
                    <span>Understand the constraints and requirements</span>
                  </div>
                  <div className="step-row">
                    <span className="step-num">02</span>
                    <span>Shape the data model and architectural pipeline</span>
                  </div>
                  <div className="step-row">
                    <span className="step-num">03</span>
                    <span>Build iteratively, test failure modes, and refine</span>
                  </div>
                </div>
              </div>

              {/* Accordion Principles */}
              <div className="accordion-list">
                {methodologyItems.map((item, index) => {
                  const isOpen = openAccordion === index;
                  return (
                    <div
                      key={item.num}
                      className={`accordion-item ${isOpen ? "open" : ""}`}
                    >
                      <button
                        onClick={() => setOpenAccordion(isOpen ? -1 : index)}
                        className="accordion-header"
                        aria-expanded={isOpen}
                      >
                        <div>
                          <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "4px" }}>
                            {item.num} / PRINCIPLE
                          </span>
                          <span className="accordion-title">{item.title}</span>
                        </div>
                        <span className="accordion-icon">
                          <ChevronDown size={20} />
                        </span>
                      </button>

                      {isOpen && (
                        <div className="accordion-body">
                          <p style={{ color: "var(--accent-sky)", fontSize: "0.88rem", marginBottom: "8px", fontWeight: "500" }}>
                            {item.subtitle}
                          </p>
                          <p>{item.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 04: THE THINGS I WORK WITH (TOOLKIT) */}
        <section id="stack" className="section-wrapper">
          <div className="container">
            <div className="section-label">
              <span>04 / TOOLKIT & CAPABILITIES</span>
              <span>VERIFIED TOOLS. NO FAKE PERCENTAGES.</span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px", marginBottom: "40px" }}>
              <div>
                <h2 className="editorial-headline serif-display">
                  The tools I work with.<br />
                  <em>Organized by domain.</em>
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>
                  A realistic overview of my technical stack across programming, frontend, backend, and development tools.
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="stack-filters">
                <button
                  onClick={() => setStackFilter("all")}
                  className={`stack-filter-btn ${stackFilter === "all" ? "active" : ""}`}
                >
                  ALL DISCIPLINES
                </button>
                <button
                  onClick={() => setStackFilter("languages")}
                  className={`stack-filter-btn ${stackFilter === "languages" ? "active" : ""}`}
                >
                  LANGUAGES
                </button>
                <button
                  onClick={() => setStackFilter("frontend")}
                  className={`stack-filter-btn ${stackFilter === "frontend" ? "active" : ""}`}
                >
                  FRONTEND
                </button>
                <button
                  onClick={() => setStackFilter("backend")}
                  className={`stack-filter-btn ${stackFilter === "backend" ? "active" : ""}`}
                >
                  BACKEND
                </button>
                <button
                  onClick={() => setStackFilter("tooling")}
                  className={`stack-filter-btn ${stackFilter === "tooling" ? "active" : ""}`}
                >
                  WORKFLOW
                </button>
              </div>
            </div>

            <div className="skills-cards-grid">
              {filteredStack.map(cat => (
                <div key={cat.title} className="skill-category-card">
                  <h3 className="skill-card-title">{cat.title}</h3>
                  <ul className="skill-items-list">
                    {cat.skills.map(s => (
                      <li key={s.name} className="skill-item-row">
                        <i className="skill-item-bullet"></i>
                        <div>
                          <span style={{ fontWeight: 500 }}>{s.name}</span>
                          <span style={{ display: "block", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                            {s.note}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 05: THE ACTIVE RADAR */}
        <section id="radar" className="section-wrapper">
          <div className="container">
            <div className="section-label">
              <span>05 / ACTIVE RESEARCH RADAR</span>
              <span>WHAT IS CURRENTLY ON MY SCREEN</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
                <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                  INQUIRY 01 / COMPUTATIONAL THEORY
                </span>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Graph Algorithms & DP</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Deepening fluency in shortest path algorithms (Dijkstra, Bellman-Ford) and multi-dimensional dynamic programming in C++.
                </p>
              </div>

              <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
                <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                  INQUIRY 02 / APPLIED INTELLIGENCE
                </span>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Loss Landscapes & Error Detection</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Studying mathematical formulations for identifying severe forecast busts and anomaly distributions in medium-range atmospheric models.
                </p>
              </div>

              <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
                <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                  INQUIRY 03 / DISTRIBUTED ARCHITECTURE
                </span>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Edge Execution & React Servers</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Investigating React Server Components, hydration boundaries, and edge computing runtimes to minimize client payload sizes.
                </p>
              </div>

              <div style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "20px", padding: "24px" }}>
                <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                  INQUIRY 04 / CREATIVE TECH
                </span>
                <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>GLSL Shader Mathematics</h4>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                  Exploring fragment shaders, noise functions, and interactive 2D canvas simulations to craft distinctive web experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 06: BEYOND THE TERMINAL */}
        <section id="beyond" className="section-wrapper">
          <div className="container">
            <div className="section-label">
              <span>06 / BEYOND THE TERMINAL</span>
              <span>THE HUMAN PERSPECTIVE</span>
            </div>

            <div className="beyond-card">
              <img
                src="/assets/mountain-himalayas.jpg"
                alt="Himalayan mountain ridges and pine slopes"
                className="beyond-image"
                loading="lazy"
              />
              <div className="beyond-shade-overlay"></div>

              <div className="beyond-content-box">
                <div>
                  <span className="mono-telemetry" style={{ color: "var(--accent-sky)", display: "block", marginBottom: "8px" }}>
                    NATURAL SCALE & ENDURANCE
                  </span>
                  <h2 className="beyond-title serif-display">
                    Perspective comes from stepping away from the screen.
                  </h2>
                </div>

                <div>
                  <p className="beyond-desc">
                    Spending time in expansive mountain environments provides clarity, stillness, and patience.
                    Just like traversing steep mountain terrain, building reliable software requires steady, disciplined steps—mastering the fundamentals before reaching for the peak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 07: THE TRAJECTORY (JOURNEY) */}
        <section id="journey" className="section-wrapper">
          <div className="container">
            <div className="section-label">
              <span>07 / THE TRAJECTORY</span>
              <span>A CHRONOLOGY OF BECOMING</span>
            </div>

            <div style={{ maxWidth: "800px" }}>
              <h2 className="editorial-headline serif-display">
                Started with code.<br />
                <em>Kept asking why.</em>
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", marginBottom: "32px" }}>
                A visual timeline of my development from writing my first program to building full-stack web applications and exploring AI.
              </p>

              <div className="timeline-container">
                <div className="timeline-entry">
                  <div className="timeline-dot">2024</div>
                  <div className="timeline-content-card">
                    <span className="timeline-year">2024 / THE FIRST LINE</span>
                    <h3 className="timeline-milestone-title">Syntax, Logic & C++</h3>
                    <p className="timeline-milestone-desc">
                      Wrote my first lines of code. Discovered the thrill of solving algorithmic puzzles in C++, understanding control flow, memory allocation, and problem decomposition.
                    </p>
                  </div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot">2025</div>
                  <div className="timeline-content-card">
                    <span className="timeline-year">2025 / CONNECTING THE SYSTEM</span>
                    <h3 className="timeline-milestone-title">Full-Stack Web & Databases</h3>
                    <p className="timeline-milestone-desc">
                      Expanded from competitive programming into web engineering. Built full-stack applications with Node.js, Express, MongoDB, and React, understanding client-server communication and database schemas.
                    </p>
                  </div>
                </div>

                <div className="timeline-entry current">
                  <div className="timeline-dot">NOW</div>
                  <div className="timeline-content-card" style={{ borderColor: "var(--accent-sky)" }}>
                    <span className="timeline-year" style={{ color: "var(--accent-emerald)" }}>
                      2026 / 2ND YEAR AT MIRAI SCHOOL OF TECHNOLOGY
                    </span>
                    <h3 className="timeline-milestone-title">Software Engineering & Applied AI</h3>
                    <p className="timeline-milestone-desc">
                      Currently exploring AI/ML concepts (ForecastGuard AI), refining frontend craft, and seeking high-impact 2026/2027 software engineering internship opportunities to collaborate with experienced engineers.
                    </p>
                  </div>
                </div>

                <div className="timeline-entry">
                  <div className="timeline-dot">NEXT</div>
                  <div className="timeline-content-card">
                    <span className="timeline-year">THE FUTURE / AMBITION</span>
                    <h3 className="timeline-milestone-title">Building High-Impact Systems</h3>
                    <p className="timeline-milestone-desc">
                      To become an engineer who turns complex real-world challenges into reliable, beautiful, and intelligent software products that serve millions of people.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 08: THE NEXT CHAPTER (CONTACT) */}
        <section id="contact" className="section-wrapper" style={{ borderBottom: "none" }}>
          <div className="container">
            <div className="section-label">
              <span>08 / THE NEXT CHAPTER</span>
              <span>LET’S MAKE IT MATTER</span>
            </div>

            <div className="contact-inner">
              <span className="contact-availability-badge">
                <i className="pulse-dot"></i>
                OPEN TO 2026 / 2027 INTERNSHIP OPPORTUNITIES
              </span>

              <h2 className="contact-headline serif-display">
                Something great starts with <em>a hello.</em>
              </h2>

              <p className="contact-sub">
                Whether you are looking for an ambitious intern who learns fast, want to discuss software engineering,
                or share ideas around artificial intelligence—my inbox is always open.
              </p>

              <div className="contact-actions-cluster">
                <button onClick={copyEmailToClipboard} className="btn-email-copy">
                  {copiedEmail ? <Check size={18} style={{ color: "var(--accent-emerald)" }} /> : <Copy size={18} />}
                  <span>{copiedEmail ? "Address Copied to Clipboard!" : "Copy: ekanshbannsal@gmail.com"}</span>
                </button>

                <a href="mailto:ekanshbannsal@gmail.com" className="btn-pill-secondary">
                  <Mail size={18} />
                  <span>Send Direct Email ↗</span>
                </a>
              </div>

              {/* Social Channels Pill Group */}
              <div className="social-links-pill-group">
                <a
                  href="https://github.com/ekanshbannsal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <GithubIcon size={16} />
                  <span>GitHub (@ekanshbannsal)</span>
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="https://www.linkedin.com/in/ekansh-bannsal-a45032381/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill-link"
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn (Ekansh Bansal)</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top-row">
            <div className="footer-wordmark serif-display">
              Ekansh Bansal<span>.</span>
            </div>

            <a href="#top" className="back-to-top-btn" aria-label="Back to top">
              <span>BACK TO TOP</span>
              <ArrowUp size={14} />
            </a>
          </div>

          <div className="footer-bottom-row">
            <span>© 2026 EKANSH BANSAL · ALL RIGHTS RESERVED</span>
            <span>BUILT WITH INTENT · 2ND YEAR CSE · MIRAI SCHOOL OF TECHNOLOGY</span>
            <span style={{ color: "var(--accent-sky)" }}>INDIA ↗ THE WORLD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
