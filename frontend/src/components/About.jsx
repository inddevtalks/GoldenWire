import React from "react";
import "./About.css";
import "../App.css";
import { Link } from "react-router-dom";


/* ── Data ── */
const STATS = [
  { number: "2006",   label: "Founded" },
  { number: "2.4M+",  label: "Monthly Readers" },
  { number: "340+",   label: "Stories Published" },
  { number: "18 Yrs", label: "Of Journalism" },
];

const TIMELINE = [
  {
    year: "2006",
    title: "A Newsroom Born in Chandigarh",
    text:
      "Founded by a team of five journalists determined to cover North India with the depth it deserved. Our first edition was printed in a rented room in Sector 22.",
  },
  {
    year: "2010",
    title: "Going Digital",
    text:
      "We launched our first digital edition, reaching readers across Punjab, Haryana, and Himachal Pradesh — expanding far beyond our print circulation overnight.",
  },
  {
    year: "2015",
    title: "National Recognition",
    text:
      "Our investigative series on infrastructure corruption earned us the Press Council of India commendation — our first national award and a turning point for the team.",
  },
  {
    year: "2019",
    title: "Multimedia & Video Journalism",
    text:
      "We built out a dedicated video unit, bringing documentary-style storytelling to issues across the region. Our YouTube channel crossed 500,000 subscribers within the year.",
  },
  {
    year: "2024",
    title: "Reaching 2.4 Million Readers",
    text:
      "Today we are one of North India's most-read independent media brands — still editor-led, still independent, still telling the stories that matter.",
  },
];

const VALUES = [
  {
    tag: "Principle",
    title: "Independence Above All",
    desc:
      "We accept no political patronage and no advertiser influence over editorial decisions. Our funding comes from readers and from advertising that is clearly labelled and never shapes coverage.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=360&fit=crop&q=80",
  },
  {
    tag: "Commitment",
    title: "Accuracy Before Speed",
    desc:
      "We verify before we publish. In a landscape full of breaking-news noise, we believe our readers are better served by a story that is right than one that is first.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=360&fit=crop&q=80",
  },
  {
    tag: "Mission",
    title: "Voices From the Margins",
    desc:
      "Every community deserves coverage. We dedicate a third of our editorial budget to stories from rural districts, smaller towns, and communities that rarely see themselves on the front page.",
    img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&h=360&fit=crop&q=80",
  },
];

const TEAM = [
  {
    name: "Priya Mehta",
    role: "Editor-in-Chief",
    bio: "20 years in print and digital journalism. Former deputy editor at a national daily. Leads editorial strategy and investigative commissioning.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=440&fit=crop&q=80",
  },
  {
    name: "Arjun Dhaliwal",
    role: "Chief Reporter",
    bio: "Covers politics and governance across Punjab and Haryana. Known for deep sourcing and long-form accountability journalism.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=440&fit=crop&q=80",
  },
  {
    name: "Sunita Rathore",
    role: "Head of Digital",
    bio: "Leads product, SEO, and audience strategy. Grew our digital readership from 200k to 2.4M over six years.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=440&fit=crop&q=80",
  },
  {
    name: "Rahul Batra",
    role: "Video & Multimedia",
    bio: "Documentary journalist and video unit head. His series on Himalayan border communities won a national broadcast award in 2022.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=440&fit=crop&q=80",
  },
];

const AWARDS = [
  {
    year: "2023",
    title: "Digital Publisher of the Year",
    body: "Exchange4Media News Broadcasting Awards, North India category.",
    img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=120&h=120&fit=crop&q=80",
  },
  {
    year: "2022",
    title: "Best Investigative Broadcast Series",
    body: "National Broadcast Award for the Himalayan Border Communities documentary.",
    img: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=120&h=120&fit=crop&q=80",
  },
  {
    year: "2015",
    title: "Press Council Commendation",
    body: "Awarded for the infrastructure corruption investigative series published across six issues.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=120&h=120&fit=crop&q=80",
  },
  {
    year: "2020",
    title: "Reuters Institute Digital Award",
    body: "Recognised for audience engagement and local journalism innovation in South Asia.",
    img: "https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=120&h=120&fit=crop&q=80",
  },
  {
    year: "2019",
    title: "Most Trusted Regional News Brand",
    body: "Readers' poll conducted by the Indian Newspaper Society across five northern states.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=120&h=120&fit=crop&q=80",
  },
  {
    year: "2021",
    title: "Google News Initiative Grant",
    body: "Selected for innovation in local fact-checking and misinformation monitoring.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=120&fit=crop&q=80",
  },
];

/* ── Component ── */
export default function About() {
  return (
    <div className="about-page">

        <header className="site-header">
        <div className="nav-container">
            <a href="#home" className="site-logo">
            <span className="logo-icon">✦</span>
            <div className="logo-text">GOLDEN <span className="gold-accent">WIRE</span></div>
            </a>
          <nav className="nav-menu">
                <a href="/" className="nav-link">Home</a>
                <Link to="/about" className="nav-link">About</Link>
                
                <div className="nav-dropdown">
                  <a href="#bts-vault-anchor" className="nav-link">
                    Services
                  </a>
    
                  <div className="services-dropdown">
                    <Link to="/documentary">Documentary</Link>
                    <Link to="/corporate-videos">Corporate Videos</Link>
                    <Link to="/video-podcast">Video Podcast</Link>
                    <Link to="/drone-videography">Drone Videography</Link>
                    <Link to="/event-videography">Event Videography</Link>
                    <Link to="/social-media-videos">Social Media Videos</Link>
                    <Link to="/photoshoots">Photoshoots</Link>
                  </div>
                </div>
                
                {/* Change this from an anchor tag to a React Router Link */}
                <Link to="/blogs" className="nav-link">Blogs</Link>
                
                <Link to="/contact" className="nav-link">Contact</Link>
            </nav>
        </div>
    </header>

      {/* ── 1. Hero ── */}
      <section className="about-hero">
        <img
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1400&h=700&fit=crop&q=85"
          alt="Our newsroom"
          className="hero-img"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-eyebrow">About Us</span>
            <h1 className="hero-heading">
              Eighteen Years of <em>Telling It Straight</em>
            </h1>
            <p className="hero-desc">
              We are an independent media organisation built on the belief that
              rigorous, fearless journalism makes communities stronger. From a
              rented room in Chandigarh to 2.4 million monthly readers — here
              is our story.
            </p>
          </div>
        </div>
      </section>


      {/* ── 5. Values ── */}
      <section className="values-section">
        <div className="values-inner">
          <div className="values-header">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-heading" style={{ marginBottom: 8 }}>
              The Principles That Guide Our Work
            </h2>
            <hr className="divider" />
            <p className="section-sub" style={{ maxWidth: 520 }}>
              Every story we publish is measured against three commitments we
              made when we first launched — and have never walked back on.
            </p>
          </div>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div className="value-card" key={v.title}>
                <img src={v.img} alt={v.title} className="value-card-img" />
                <div className="value-card-body">
                  <span className="value-card-tag">{v.tag}</span>
                  <h3 className="value-card-title">{v.title}</h3>
                  <p className="value-card-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Team ── */}
      <section className="team-section">
        <div className="team-inner">
          <div className="team-header">
            <span className="section-label">The Team</span>
            <h2 className="section-heading" style={{ marginBottom: 8 }}>
              The Journalists Behind the Stories
            </h2>
            <hr className="divider" />
            <p className="section-sub" style={{ maxWidth: 480 }}>
              A lean, experienced team of reporters, editors, and digital
              journalists — all committed to the same standard of work.
            </p>
          </div>
          <div className="team-grid">
            {TEAM.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-card-img-wrap">
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>
                  <p className="team-card-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── 8. CTA ── */}
      <section className="cta-section">
        <img
          src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1400&h=500&fit=crop&q=80"
          alt="Newspaper printing press"
          className="cta-bg"
        />
        <div className="cta-overlay">
          <h2 className="cta-heading">
            Ready to <span>Read What Matters?</span>
          </h2>
          <p className="cta-sub">
            Join 2.4 million readers who trust us for independent, accurate
            reporting on the stories that shape the region.
          </p>
          <div className="cta-buttons">
            <a href="/subscribe" className="cta-btn-primary">
              Subscribe Now
            </a>
            <a href="/contact" className="cta-btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="corporate-system-footer-anchor">
        <div className="footer-layout-container">
          
          <div className="footer-top-distributor-row">
            <div className="footer-brand-summary-cell">
              <div className="site-logo">
                <span className="logo-icon">✦</span>
                <div className="logo-text">GOLDEN <span className="gold-accent">WIRE</span></div>
              </div>
              <p className="brand-meta-abstract-prose">
                An elite high-fidelity visual architecture studio engineering high-impact revenue videos, automated multi-track video players, and global cinematic ad film campaigns.
              </p>
            </div>

            <div className="footer-navigation-links-matrix-cell">
              <h5 className="matrix-column-title">System Portals</h5>
              <ul className="matrix-links-list">
                <li><a href="#home">Home Base</a></li>
                <li><a href="#expertise-wall-section">Portfolio Matrix</a></li>
                <li><a href="#bts-vault-anchor">Studio Action Vault</a></li>
                <li><a href="#testimonials-marquee-section">Client Perspectives</a></li>
              </ul>
            </div>

            <div className="footer-navigation-links-matrix-cell">
              <h5 className="matrix-column-title">Domain Expertise</h5>
              <ul className="matrix-links-list">
                <li><a href="#expertise-wall-section">Ad Films Production</a></li>
                <li><a href="#expertise-wall-section">SaaS Explainer Assets</a></li>
                <li><a href="#expertise-wall-section">Fintech Visual Identity</a></li>
                <li><a href="#expertise-wall-section">Heavy Industrial Logs</a></li>
              </ul>
            </div>

            <div className="footer-navigation-links-matrix-cell">
              <h5 className="matrix-column-title">Operational Hubs</h5>
              <ul className="matrix-links-list">
                <li><span className="static-hub-node">Mumbai, IN Hub</span></li>
                <li><span className="static-hub-node">New York, US Node</span></li>
                <li><span className="static-hub-node">London, UK Sector</span></li>
              </ul>
            </div>
          </div>

          <div className="footer-copyright-security-clearance-bar">
            <p className="copyright-notice-text">
              &copy; {new Date().getFullYear()} GOLDEN WIRE CREATIVE INC. ALL RIGHTS RESERVED. IN CO-ALLIANCE WITH INDDEVTALKS INFRASTRUCTURE.
            </p>
            <div className="footer-security-regulatory-links">
              <a href="#home" className="regulatory-link">Data Privacy Protocol</a>
              <span className="regulatory-divider">//</span>
              <a href="#home" className="regulatory-link">Terms of Asset Usage</a>
              <span className="regulatory-divider">//</span>
              <a href="#home" className="regulatory-link">System Ledger Log</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}