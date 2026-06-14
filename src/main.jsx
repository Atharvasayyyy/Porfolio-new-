import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  Code2,
  Database,
  Mail,
  Mic,
  GitBranch,
  Network,
  SquareArrowOutUpRight,
  BrainCircuit,
  FileText,
} from "lucide-react";
import "./styles.css";

const baseUrl = import.meta.env.BASE_URL;
const portraitImageSrc = `${baseUrl}assets/atharva-portrait.png`;
const cvHref = `${baseUrl}Atharva-Sable-CV.pdf`;

const stats = [
  ["2+", "Years building"],
  ["12+", "Projects shipped"],
  ["5+", "AI agents built"],
  ["8+", "AWS services used"],
];

const stack = [
  ["#2f80ed", "Frontend: React, Next.js, Tailwind"],
  ["#159947", "Backend: Node.js, Express, Python"],
  ["#8d52c7", "AI: OpenAI SDK, LangChain, LlamaIndex"],
  ["#de7a1f", "RAG: Pinecone, Weaviate, Vector DBs"],
  ["#d4a11d", "Cloud: AWS (Lambda, S3, EC2, RDS)"],
  ["#cc3f3f", "Databases: MongoDB, PostgreSQL, Redis"],
];

const projects = [
  {
    title: "AI Meeting Intelligence",
    copy:
      "An enterprise-grade platform that transcribes meetings in real-time, extracts action items using multi-agent workflows, and provides an LLM-powered chat interface over meeting history.",
    accent: "#1960a6",
    featured: true,
    metrics: [
      ["Connections", "500+"],
      ["Integrations", "5+"],
      ["Latency", "Real-time"],
    ],
    tags: ["Next.js", "OpenAI", "AWS"],
  },
  {
    title: "Multi-Agent Research System",
    copy:
      "Autonomous research agents that crawl the web, synthesize information, and write detailed technical reports with citations.",
    accent: "#8d52c7",
    metrics: [
      ["Gen Time", "60s"],
      ["Agents", "4"],
      ["Quality", "95%"],
    ],
    tags: ["Python", "Mistral AI", "LangChain", "Tavily API"],
  },
  {
    title: "Gen-AI Chat Platform",
    copy:
      "Custom LLM playground with support for multiple providers, prompt versioning, and collaborative testing.",
    accent: "#159947",
    metrics: [
      ["Conn.", "500+"],
      ["Accuracy", "+40%"],
      ["Sync", "Redis"],
    ],
    tags: ["FastAPI", "OpenAI GPT-4", "Redis", "MongoDB", "WebSockets"],
  },
];

const progress = [
  ["Manual work reduction", "50%"],
  ["DB query speed", "40%"],
  ["Automation coverage", "80%"],
];

const sectionGlowStyle = {
  backgroundColor: "#f8f9ff",
  backgroundImage:
    "radial-gradient(ellipse 80% 50% at 50% 0%, #E6F1FB 0%, transparent 70%)",
};

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}

function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Atharva.dev home">
          Atharva.dev
        </a>
        <div className="nav-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="button button-ghost compact" href="#contact">
          Hire me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="hero-grid-section"
      id="top"
      style={{
        backgroundColor: "#f8f9ff",
        backgroundImage:
          "linear-gradient(rgba(194,198,210,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(194,198,210,0.4) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      <div className="container hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span />
              Available for work - Full Stack + Gen-AI Engineer
            </div>
            <h1>I build full-stack systems and intelligent AI agents.</h1>
            <p>
              MERN stack developer and Gen-AI engineer. I ship production-grade web apps,
              multi-agent LLM systems, and RAG pipelines - from 0 to deployed.
            </p>
            <div className="actions">
              <a className="button button-dark" href="#work">
                View my work
              </a>
              <a className="button button-light" href={cvHref}>
                Download CV <ArrowDown size={16} />
              </a>
            </div>
          </div>
          <div className="portrait-wrap" aria-label="Atharva Sable portrait">
            <div className="portrait">
              <img
                className="portrait-image"
                src={portraitImageSrc}
                alt="Atharva Sable"
              />
            </div>
            <div className="experience-badge">
              <strong>2+</strong>
              <span>Years experience</span>
            </div>
          </div>
        </div>
        <div className="stats">
          {stats.map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="container section stack-section" id="stack" style={sectionGlowStyle}>
      <SectionLabel>Stack</SectionLabel>
      <div className="stack-list">
        {stack.map(([color, label]) => (
          <div className="chip" key={label}>
            <span style={{ backgroundColor: color }} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="container section" id="work" style={sectionGlowStyle}>
      <SectionLabel>Work</SectionLabel>
      <div className="work-grid">
        <FeaturedProject project={projects[0]} />
        {projects.slice(1).map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
        <HospitalProject />
      </div>
    </section>
  );
}

function FeaturedProject({ project }) {
  return (
    <article className="card featured-card" style={{ "--accent": project.accent }}>
      <div className="project-copy">
        <h3>{project.title}</h3>
        <p>{project.copy}</p>
        <Metrics items={project.metrics} />
        <Tags items={project.tags} />
        <ProjectActions />
      </div>
      <PipelineVisual />
    </article>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="card project-card" style={{ "--accent": project.accent }}>
      <h3>{project.title}</h3>
      <p>{project.copy}</p>
      <Metrics items={project.metrics} />
      <Tags items={project.tags} />
      <ProjectActions />
    </article>
  );
}

function HospitalProject() {
  return (
    <article className="card hospital-card" style={{ "--accent": "#de7a1f" }}>
      <div className="project-copy">
        <h3>Hospital ERP System</h3>
        <p>
          A comprehensive hospital management system handling patient records,
          appointments, and billing with role-based access control. Built for scalability
          and high-availability.
        </p>
        <Metrics
          items={[
            ["DB Opt.", "40%"],
            ["Effort", "-50%"],
            ["Compute", "Lambda"],
          ]}
        />
        <ProjectActions />
      </div>
      <div className="progress-panel">
        {progress.map(([label, width]) => (
          <div className="progress-row" key={label}>
            <div>
              <span>{label}</span>
              <strong>{width}</strong>
            </div>
            <div className="progress-track">
              <span style={{ width }} />
            </div>
          </div>
        ))}
        <Tags items={["Node.js", "PostgreSQL", "AWS Lambda", "Docker"]} light />
      </div>
    </article>
  );
}

function PipelineVisual() {
  const nodes = [
    [Mic, "Whisper"],
    [BrainCircuit, "NLP"],
    [Database, "RAG"],
    [FileText, "Output"],
  ];

  return (
    <div className="pipeline" aria-label="AI meeting intelligence flow">
      {nodes.map(([Icon, label], index) => (
        <React.Fragment key={label}>
          <div className="pipeline-node">
            <span>
              <Icon size={20} />
            </span>
            <strong>{label}</strong>
          </div>
          {index < nodes.length - 1 && <div className="pipeline-line" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Metrics({ items }) {
  return (
    <div className="metrics">
      {items.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </div>
  );
}

function Tags({ items, light = false }) {
  return (
    <div className="tags">
      {items.map((item) => (
        <span className={light ? "tag light" : "tag"} key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectActions() {
  return (
    <div className="project-actions">
      <a className="button button-dark small" href="#contact">
        <SquareArrowOutUpRight size={16} />
        Live Demo
      </a>
      <a className="button button-light small" href="https://github.com/" target="_blank">
        <Code2 size={16} />
        GitHub
      </a>
    </div>
  );
}

function About() {
  return (
    <section className="container section about-section" id="about" style={sectionGlowStyle}>
      <div className="split">
        <SectionLabel>Experience</SectionLabel>
        <div className="timeline">
          <div className="timeline-dot" />
          <span>2023 - Present</span>
          <h3>AI/Backend Developer & Co-founder</h3>
          <strong>TBI @ SAKEC</strong>
          <p>
            Leading the development of AI-driven tools for incubation management.
            Architecting RAG pipelines for knowledge retrieval and building custom agentic
            workflows to automate administrative tasks. Managing full-stack deployments on AWS.
          </p>
        </div>
      </div>
      <div className="split education">
        <SectionLabel>Education</SectionLabel>
        <div>
          <h3>B.Tech in Electronics & Computer Science</h3>
          <p>Shah & Anchor Kutchhi Engineering College</p>
          <div className="cert-grid">
            {["MERN Full Stack", "AWS Certified Dev", "IBM AI Professional"].map((item) => (
              <div className="cert" key={item}>
                <span>Certification</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="container section contact" id="contact" style={sectionGlowStyle}>
      <h2>Let's build something intelligent.</h2>
      <div className="contact-actions">
        <a className="button button-light" href="mailto:hello@atharva.dev">
          <Mail size={18} />
          Email
        </a>
        <a className="button button-light" href="https://linkedin.com/" target="_blank">
          <Network size={18} />
          LinkedIn
        </a>
        <a className="button button-light" href="https://github.com/" target="_blank">
          <GitBranch size={18} />
          GitHub
        </a>
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>;
}

createRoot(document.getElementById("root")).render(<App />);
