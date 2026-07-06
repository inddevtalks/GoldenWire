import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import "../App.css";
import WhatsAppButton from './WhatsAppButton';

/* ── Data ── */
const STATS = [
  { number: "2.4M+", label: "Monthly Readers" },
  { number: "18 Yrs", label: "In Journalism" },
  { number: "340+",  label: "Stories Published" },
  { number: "< 24h", label: "Response Time" },
];

const INFO_CARDS = [
  {
    label: "Email Us",
    value: "goldenwiremedia2@gmail.com",
    note: "For press enquiries & partnerships",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=80&h=80&fit=crop&q=80",
  },
  {
    label: "Call Us",
    value: "+91-8077369216",
    note: "Mon – Fri, 9 AM – 6 PM IST",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=80&fit=crop&q=80",
  },
  {
    label: "Newsroom",
    value: "Ground floor, Shivalik A Block, A-89, Block A, Shivalik Colony, Malviya Nagar, New Delhi, Delhi 110017",
    note: "Visits by appointment only",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=80&h=80&fit=crop&q=80",
  },
];



const SUBJECTS = [
  "Select a topic",
  "General Enquiry",
  "Advertising & Partnerships",
  "Press & Media Kit",
  "Editorial Feedback",
  "Technical Support",
  "Other",
];

const FAQS = [
  {
    q: " What services does Goldenwire provide?",
    a: "We are a full-service production house specializing in cinema-grade video content. Our services include end-to-end management of Corporate & Brand Films, Event Coverage, CSR & Rural Impact Documentaries, and specialized promotional videos for the healthcare, real estate, cleantech, and education sectors.",
  },
  {
    q: "What is your production process?",
    a: "We operate a seamless, three-phase workflow:\n1.	Pre-Production: Scripting, storyboarding, and narrative strategy.\n2.	Production: On-ground filming using cinema-grade configurations, professional crews, and specialized lighting.\n3.	Post-Production: In-house editing, precision color grading, and multi-track sound design.",
  },
  {
    q: "Do you handle on-location and rural field shoots?",
    a: "Yes. Our production crew and Directors of Photography (DoPs) are highly experienced in challenging, remote field environments. We manage all logistics and mobile equipment setups to deliver premium, broadcast-ready visuals regardless of the location.",
  },
  {
    q: "How do you ensure the video aligns with our brand guidelines?",
    a: "Our marketing and sales heads collaborate directly with your team during pre-production. We analyze your commercial goals, audience demographics, and core messaging to ensure the visual flow and narrative structure perfectly match your brand identity.",
  },
  {
    q: "How can we get a project quotation or commercial proposal?",
    a: "You can request a tailored commercial proposal using the contact form above. Please share your expected project duration, location, and baseline goals, and our sales desk will deliver a customized timeline and budget roadmap.",
  },
];

/* ── Component ── */
export default function Contact() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your API here
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ firstName:"", lastName:"", email:"", phone:"", subject:"", message:"" });
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="homepage-root">
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
                <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
                
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
                <Link to="/contact" className="nav-link active" onClick={closeMenu}>Contact</Link>
              </nav>
    
            </div>
          </header>
  
    <div className="contact-page">
      {/* ── 1. Hero ── */}
      <section className="contact-hero">
        <img
          src="https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1400&h=600&fit=crop&q=85"
          alt="Newsroom"
          className="hero-img"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-eyebrow">Contact Us</span>
            <h1 className="hero-heading">
              Stories Start With <span>Conversations</span>
            </h1>
            <p className="hero-desc">
              Whether you have a tip, a story idea, an advertising query, or
              simply want to say hello — our newsroom is always listening.
            </p>
          </div>
        </div>
      </section>
      {/* ── 3. Form + Sidebar ── */}
      <div className="contact-main">

        {/* Form */}
        <div className="form-card">
          {submitted ? (
            <div className="success-state">
              <div className="success-icon">✓</div>
              <h2 className="success-heading">Message Sent</h2>
              <p className="success-text">
                Thank you for reaching out. A member of our team will be in
                touch within 24 hours.
              </p>
              <button className="reset-btn" onClick={resetForm}>
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <span className="section-label">Send a Message</span>
              <h2 className="section-heading" style={{ marginBottom: 6 }}>
                Write to Our Team
              </h2>
              <p className="form-intro">
                Fill in the form and the right department will follow up
                directly. We read every message.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" type="text"
                      placeholder="Rohan" value={form.firstName}
                      onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" type="text"
                      placeholder="Sharma" value={form.lastName}
                      onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email"
                      placeholder="you@example.com" value={form.email}
                      onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input id="phone" name="phone" type="tel"
                      placeholder="+91 00000 00000" value={form.phone}
                      onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Website Url</label>
                  <input id="web_url" name="web_url" type="text"
                      placeholder="eg.com" value={form.web_url}
                      onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message"
                    placeholder="Tell us what's on your mind…"
                    value={form.message} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message →
                </button>
              </form>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="contact-sidebar">

          <div className="sidebar-img-card">
            <img
              src="/contact/1.jpeg"
              alt="Our office"
            />

          </div>

          {INFO_CARDS.map((card) => (
            <div className="info-card" key={card.label}>
              <div className="info-card-icon-wrap">
                <img src={card.img} alt={card.label} />
              </div>
              <div className="info-card-body">
                <p className="info-card-label">{card.label}</p>
                <p className="info-card-value">{card.value}</p>
                <p className="info-card-note">{card.note}</p>
              </div>
            </div>
          ))}

        </aside>
      </div>

      {/* ── 5. Location ── */}
      <section className="location-section">
        <div className="location-inner">
          <div className="location-img-wrap">
            <img
              src="/contact/1.jpeg"
              alt="Chandigarh office building"
            />
          </div>

          <div className="location-details">
            <span className="section-label">Find Us</span>
            <h2 className="section-heading">Visit Our Newsroom</h2>
            <hr className="divider" />

            <div className="location-info-item">
              <p className="location-info-title">Address</p>
              <p className="location-info-val">
                {"Ground floor, Shivalik A Block, A-89, Block A, Shivalik Colony, Malviya Nagar, New Delhi, Delhi 110017"}
              </p>
            </div>

            <div className="location-info-item">
              <p className="location-info-title">Office Hours</p>
              <p className="location-info-val">
                {"Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM\nSunday: Closed"}
              </p>
            </div>

            <a
              href="https://maps.app.goo.gl/XVkua2vWWxMwDcDk8"
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-intro">
            <span className="section-label">FAQs</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <hr className="divider" />
            <p className="section-sub" style={{ margin: "0 auto" }}>
              Quick answers to the questions we hear most. If yours isn't here,
              use the form above.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((item, i) => (
              <div
                className={`faq-item${openFaq === i ? " open" : ""}`}
                key={i}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <span className="faq-chevron">▾</span>
                </button>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
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
                    <a href="mailto:hello@goldenwirecreative.com" className="contact-value">hello@goldenwirecreative.com</a>
                  </div>
                  <div className="footer-contact-item address-node">
                    <span className="contact-label">Headquarters</span>
                    <p className="contact-value-static">
                      Golden Wire Suite, Visual Production Hub, <br />
                      Patiala, Punjab, IN
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

  </div>
  );
}