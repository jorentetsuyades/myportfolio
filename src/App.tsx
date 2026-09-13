import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Database,
  Download,
  Mail,
  Menu,
  Network,
  Search,
  Server,
  Sparkles,
  X,
} from 'lucide-react'

type SectionId = 'home' | 'about' | 'expertise' | 'projects' | 'experience' | 'contact'

const navItems: { label: string; id: SectionId }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Expertise', id: 'expertise' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

const capabilities = [
  { number: '01', icon: BrainCircuit, title: 'AI & LLM Engineering', copy: 'Turning foundation models into useful, grounded product capabilities with RAG, evaluation, and intelligent automation.' },
  { number: '02', icon: Code2, title: 'Full-Stack Development', copy: 'Designing complete product experiences across Angular frontends, Node.js APIs, and maintainable application logic.' },
  { number: '03', icon: Cloud, title: 'Cloud & Serverless', copy: 'Building reliable AWS systems with Lambda, API Gateway, DynamoDB, S3, IAM, and event-driven patterns.' },
  { number: '04', icon: Search, title: 'Search & Retrieval', copy: 'Creating semantic search and knowledge pipelines that make enterprise information discoverable and useful.' },
]

const skillGroups = [
  ['AI & Generative AI', ['Amazon Bedrock', 'Claude', 'RAG', 'Prompt Engineering', 'Agentic AI', 'LLM Integration', 'Embeddings', 'Vector Search']],
  ['Frontend', ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS', 'Responsive UI', 'Component Architecture']],
  ['Backend', ['Node.js', 'REST APIs', 'Async Programming', 'API Integration', 'Application Logic']],
  ['Cloud', ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'IAM', 'Serverless Architecture']],
  ['Search & Data', ['Amazon OpenSearch', 'Vector Retrieval', 'Semantic Search', 'Knowledge Bases', 'NoSQL']],
  ['Engineering', ['Git', 'CI/CD', 'Agile', 'Debugging', 'Integration Testing', 'API Design']],
]

const projects = [
  { index: '01', type: 'AI AUTOMATION', title: 'AI Auto-Ticketing System', description: 'An intelligent workflow that interprets workplace issues, classifies requests, determines priority, and creates ServiceNow tickets automatically.', problem: 'Support teams lose time translating unstructured requests into consistent, actionable tickets.', solution: 'An LLM-powered orchestration layer turns natural language into structured, validated workflow actions.', stack: ['Bedrock', 'Lambda', 'Node.js', 'API Gateway'], accent: 'lime' },
  { index: '02', type: 'SEARCH SYSTEMS', title: 'Duplicate Detection Service', description: 'A semantic duplicate detection system using vector embeddings, OpenSearch retrieval, and LLM validation.', problem: 'Keyword matching misses meaning, creating duplicate work and noisy enterprise data.', solution: 'A two-stage pipeline finds semantically similar records, then uses model reasoning for a confident final match.', stack: ['OpenSearch', 'Embeddings', 'Bedrock', 'AWS'], accent: 'blue' },
  { index: '03', type: 'KNOWLEDGE SYSTEMS', title: 'RAG Knowledge Assistant', description: 'A grounded assistant that retrieves relevant enterprise knowledge before generating useful, traceable answers.', problem: 'Teams need fast answers without sacrificing trust, context, or source visibility.', solution: 'A retrieval-first architecture connects knowledge bases, vector search, and response generation.', stack: ['Bedrock', 'Knowledge Base', 'OpenSearch', 'RAG'], accent: 'orange' },
]

const principles = [
  ['Understand the Problem', 'Start from the actual user and business problem before choosing technology.'],
  ['Design for Simplicity', 'Prefer maintainable architectures and understandable systems over unnecessary complexity.'],
  ['Build Intelligently', 'Use AI where it creates meaningful value, not simply because it is available.'],
  ['Iterate & Improve', 'Test, evaluate, measure, debug, and continuously refine the solution.'],
]

function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id as SectionId)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.25, 0.5] })
    sections.forEach((section) => section && observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: SectionId) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Go to home">
          <span className="brand-mark">FJ</span><span>France Joren</span>
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map((item) => <button key={item.id} className={activeSection === item.id ? 'nav-link active' : 'nav-link'} onClick={() => scrollTo(item.id)}>{item.label}</button>)}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <a className="header-contact" href="mailto:francejoren@example.com">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Available for selected opportunities <span className="eyebrow-line" /></div>
            <p className="hero-kicker">Software Engineer <span>/</span> AI Engineer</p>
            <h1>Building systems<br /><em>with intent.</em></h1>
            <p className="hero-intro">I build intelligent applications that combine modern full-stack engineering with Generative AI, cloud infrastructure, and scalable backend systems.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo('projects')}>View projects <ArrowUpRight size={17} /></button>
              <button className="button button-quiet" onClick={() => scrollTo('experience')}>View experience <ChevronRight size={16} /></button>
            </div>
            <div className="hero-links"><a href="https://github.com" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Network size={16} /> LinkedIn</a><a href="mailto:francejoren@example.com"><Mail size={16} /> Email</a></div>
          </div>
          <div className="hero-aside reveal reveal-delay">
            <div className="coordinate">14° 35&apos; N<br />120° 59&apos; E</div>
            <div className="hero-portrait"><div className="portrait-grid" /><div className="portrait-initials">FJ<span>.</span></div><div className="portrait-caption">FRANCE JOREN<br />CUSTODIO</div></div>
            <div className="hero-note"><span>01</span><p>From a clear problem<br />to a reliable system.</p></div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><span className="scroll-line" /></div>
        </section>

        <section id="about" className="section-pad section-light">
          <div className="section-heading"><span className="section-index">01 / WHAT I DO</span><h2>Technical range.<br /><span>Practical outcomes.</span></h2><p>I work at the intersection of product engineering and applied AI, building systems that are useful in the real world and durable after launch.</p></div>
          <div className="capability-grid">{capabilities.map(({ number, icon: Icon, title, copy }) => <article className="capability" key={number}><div className="capability-top"><span>{number}</span><Icon size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{copy}</p><ArrowUpRight className="capability-arrow" size={18} /></article>)}</div>
        </section>

        <section id="expertise" className="section-pad expertise-section">
          <div className="section-heading heading-row"><div><span className="section-index">02 / CORE EXPERTISE</span><h2>The tools behind<br /><span>the work.</span></h2></div><p>A focused toolkit shaped by shipping enterprise applications, intelligent workflows, and cloud-native services.</p></div>
          <div className="skill-grid">{skillGroups.map(([title, skills]) => <div className="skill-group" key={title as string}><h3>{title as string}</h3><div className="skill-list">{(skills as string[]).map((skill) => <span key={skill}><Check size={13} />{skill}</span>)}</div></div>)}</div>
        </section>

        <section id="projects" className="section-pad projects-section section-light">
          <div className="section-heading heading-row"><div><span className="section-index">03 / SELECTED WORK</span><h2>Systems that<br /><span>do useful things.</span></h2></div><p>Selected projects where the engineering challenge was as important as the final interface.</p></div>
          <div className="project-list">{projects.map((project) => <article className={`project-card ${project.accent}`} key={project.title}><div className="project-meta"><span>{project.index}</span><span>{project.type}</span></div><div className="project-main"><div><h3>{project.title}</h3><p className="project-description">{project.description}</p></div><button className="project-link" aria-label={`View ${project.title}`}><ArrowUpRight size={20} /></button></div><div className="project-details"><div><span>THE PROBLEM</span><p>{project.problem}</p></div><div><span>THE APPROACH</span><p>{project.solution}</p></div></div><div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section id="experience" className="section-pad experience-section">
          <div className="section-heading"><span className="section-index">04 / EXPERIENCE</span><h2>Where craft meets<br /><span>responsibility.</span></h2></div>
          <div className="experience-layout"><div className="experience-side"><span className="big-year">2022</span><span className="side-label">Present</span></div><div className="experience-content"><div className="role-header"><div><h3>Software Engineer</h3><p>Accenture</p></div><span>April 2022 — Present</span></div><p className="role-summary">Developing enterprise applications and AI-powered systems across the full delivery lifecycle, from an early architecture decision through production integration.</p><ul className="role-list"><li>Develop and maintain web applications using Angular, TypeScript, and Node.js.</li><li>Build Generative AI capabilities with Amazon Bedrock and large language models.</li><li>Design RAG workflows using OpenSearch, embeddings, and enterprise knowledge sources.</li><li>Develop AWS serverless APIs with Lambda, API Gateway, DynamoDB, S3, and IAM.</li><li>Collaborate across development, testing, integration, and production deployment.</li></ul><div className="experience-tags"><span>Full-Stack</span><span>Generative AI</span><span>AWS</span><span>Enterprise Systems</span></div></div></div>
          <div className="previous-role"><span>EARLIER EXPERIENCE</span><p>Previous roles and collaborations in software development, integration, and technical delivery.</p><ChevronRight size={18} /></div>
        </section>

        <section className="principles section-pad section-light"><div className="section-heading heading-row"><div><span className="section-index">05 / HOW I BUILD</span><h2>Good engineering<br /><span>is a practice.</span></h2></div><p>My approach stays grounded in clarity, useful constraints, and a healthy respect for the people who use what we ship.</p></div><div className="principles-grid">{principles.map(([title, copy], index) => <div className="principle" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>

        <section id="contact" className="contact-section section-pad"><div className="contact-top"><span className="section-index">06 / CONTACT</span><span className="contact-availability"><span className="status-dot" /> Open to conversations</span></div><h2>Let&apos;s build<br /><em>something thoughtful.</em></h2><p>I&apos;m interested in opportunities involving software engineering, AI engineering, Generative AI, cloud applications, and intelligent systems.</p><a className="button button-primary contact-button" href="mailto:francejoren@example.com">Get in touch <ArrowUpRight size={17} /></a><div className="contact-links"><a href="mailto:francejoren@example.com"><Mail size={17} /> francejoren@example.com</a><a href="https://linkedin.com" target="_blank" rel="noreferrer"><Network size={17} /> LinkedIn</a><a href="https://github.com" target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub</a></div><div className="footer-line"><span>FRANCE JOREN CUSTODIO</span><span>SOFTWARE ENGINEER / AI ENGINEER</span><span>© 2025</span></div></section>
      </main>
    </div>
  )
}

export default App
