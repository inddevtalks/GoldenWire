import React, { useState } from "react";
import "./About.css";
import "../App.css";
import { Link } from "react-router-dom";
import WhatsAppButton from './WhatsAppButton';

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
    name: "Rishab",
    role: "Founder & Production Manager",
    bio: "Rishabh Gupta is the visionary creative driving force behind Goldenwire Media & Entertainment. Combining a deep passion for cinema-grade aesthetics with elite operational leadership, he has built Goldenwire into a trusted media production partner for premium corporate giants, leading development sector NGOs, and national broadcasters.",
    img: "/about_us_photos/1.jpeg",
  },
  {
    name: "Nikita",
    role: "Marketing and communication manager",
    bio: "At Goldenwire, Nikita bridges the gap between high-end media production and business performance, ensuring every project we deliver aligns seamlessly with our clients' commercial and communication goals.",
    img: "/about_us_photos/2.jpeg",
  },
  {
    name: "Raman Kumar",
    role: "Senior Video Editor",
    bio: "With 8 years of excellence in post-production, Raman Kumar is a master storyteller who blends technical precision with creative flair. He has a proven track record of delivering high-impact visual content across multiple diverse domains, ensuring every project connects deeply with its audience.",
    img: "/about_us_photos/3.jpeg",
  },
  {
    name: "Shelly",
    role: "Director of Photography (DoP)",
    bio: "Shelly is the master behind the lens at Goldenwire, specializing in high-end, cinema-grade framing and light manipulation. With a sharp eye for visual storytelling, she seamlessly transitions between complex, large-scale corporate sets and challenging, on-ground rural documentary setups.",
    img: "/about_us_photos/4.jpeg",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="about-page">

        {/* GLOBAL SYSTEM NAVIGATION */}
              <header className="site-header">
                <div className="nav-container">
                <title>Golden Wire</title>
                  
                  {/* Logo Section with Image Link */}
                  <a href="#home" className="site-logo" onClick={closeMenu}>
                    <img src="/logo/1.png" alt="Golden Wire Logo" className="logo-img" />
                  </a>
        
                  {/* Responsive Hamburger Toggle Button */}
                  <button 
                    className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                  >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </button>
        
                  {/* Navigation Links Menu */}
                  <nav className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
                    {/* Base Pages */}
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/about" className="nav-link active" onClick={closeMenu}>About Us</Link>
                    
                    {/* Services Dropdown updated with your explicit page routes */}
                    <div className="nav-dropdown">
                      <span className="nav-link" style={{ cursor: 'pointer' }}>Services</span>
                      <div className="services-dropdown">
                        <Link to="/documentary" onClick={closeMenu}>Documentary</Link>
                        <Link to="/corporate-videos" onClick={closeMenu}>Corporate Videos</Link>
                        <Link to="/video-podcast" onClick={closeMenu}>Video Podcast</Link>
                        <Link to="/drone-videography" onClick={closeMenu}>Drone Videography</Link>
                        <Link to="/event-videography" onClick={closeMenu}>Event Videography</Link>
                        <Link to="/social-media-videos" onClick={closeMenu}>Social Media Videos</Link>
                        <Link to="/photoshoots" onClick={closeMenu}>Photoshoots</Link>
                      </div>
                    </div>
        
                    {/* Dedicated Component Routes */}
                    <Link to="/blogs" className="nav-link" onClick={closeMenu}>Blogs</Link>
                    <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
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
              The Team Behind the Stories
            </h2>
            <hr className="divider" />
            <p className="section-sub" style={{ maxWidth: 480 }}>
              A lean, experienced team of reporters, editors, and digital
              team — all committed to the same standard of work.
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
            <a href="/contact" className="cta-btn-primary">
              Subscribe Now
            </a>
            <a href="/contact" className="cta-btn-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* NEW SECTION 9: CORPORATE FOOTER MATRICES SYSTEM */}
            <footer className="golden-cinema-footer">
            <div className="footer-container">
              
              {/* Top Grid Area */}
              <div className="footer-main-grid">
                
                {/* Brand Column */}
                <div className="footer-brand-column">
                  <Link to="/" className="footer-logo">
                    <img src="/logo/1.png" alt="Golden Wire Logo" className="footer-logo-img" />
                  </Link>
                  <p className="footer-brand-pitch">
                    An elite high-fidelity visual architecture studio engineering high-impact revenue videos, interactive multi-track players, and global cinematic ad campaigns.
                  </p>
                </div>
      
                {/* Quick Links Column */}
                <div className="footer-links-column">
                  <h4 className="footer-title-accent">Explore</h4>
                  <ul className="footer-nav-list">
                    <li><Link to="/">Home Base</Link></li>
                    <li><Link to="/about">Our Story</Link></li>
                    <li><Link to="/blogs">Insights & Blogs</Link></li>
                    <li><Link to="/contact">Get In Touch</Link></li>
                  </ul>
                </div>
      
                {/* Services Matrix Column */}
                <div className="footer-links-column">
                  <h4 className="footer-title-accent">Services</h4>
                  <ul className="footer-nav-list">
                    <li><Link to="/documentary">Documentary Film</Link></li>
                    <li><Link to="/corporate-videos">Corporate Masterpieces</Link></li>
                    <li><Link to="/video-podcast">Video Podcasts</Link></li>
                    <li><Link to="/drone-videography">Drone & Aerials</Link></li>
                    <li><Link to="/social-media-videos">Social Reels</Link></li>
                  </ul>
                </div>
      
                {/* Studio Connections Column */}
                <div className="footer-links-column contacts-column">
                  <h4 className="footer-title-accent">The Studio</h4>
                  <div className="footer-contact-item">
                    <span className="contact-label">Inquiries</span>
                    <a href="mailto: goldenwiremedia2@gmail.com" className="contact-value">goldenwiremedia2@gmail.com</a>
                  </div>
                  <div className="footer-contact-item address-node">
                    <span className="contact-label">Headquarters</span>
                    <p className="contact-value-static">
                      Ground floor, Shivalik A Block, A-89, Block A, Shivalik Colony, Malviya Nagar, New Delhi, Delhi 110017
                    </p>
                  </div>
                  
                  {/* Embedded Pure SVG Social Actions */}
                  <div className="footer-social-wrap">
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
      
              </div>
      
              {/* Bottom Clearance Bar */}
              <div className="footer-bottom-bar">
                <p className="footer-copyright-text">
                  &copy; {new Date().getFullYear()} GOLDEN WIRE CREATIVE INC. ALL RIGHTS RESERVED. IN CO-ALLIANCE WITH INDDEVTALKS INFRASTRUCTURE.
                </p>
                <div className="footer-legal-links">
                  <Link to="/privacy">Privacy Protocol</Link>
                  <span className="legal-divider">•</span>
                  <Link to="/terms">Terms of Asset Usage</Link>
                </div>
              </div>
      
            </div>
          </footer>
        <WhatsAppButton />
    </div>
  );
}