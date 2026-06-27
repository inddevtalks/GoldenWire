import React, { useState } from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import "../App.css";

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
    value: "editorial@yourmedia.com",
    note: "For press enquiries & partnerships",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=80&h=80&fit=crop&q=80",
  },
  {
    label: "Call Us",
    value: "+91 98765 43210",
    note: "Mon – Fri, 9 AM – 6 PM IST",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=80&h=80&fit=crop&q=80",
  },
  {
    label: "Newsroom",
    value: "Sector 17, Chandigarh\nPunjab, India – 160017",
    note: "Visits by appointment only",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=80&h=80&fit=crop&q=80",
  },
];

const DEPARTMENTS = [
  {
    title: "Editorial Team",
    desc:
      "Reach our editors for story tips, corrections, or collaboration on investigative pieces and feature submissions.",
    email: "editorial@yourmedia.com",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=360&fit=crop&q=80",
  },
  {
    title: "Advertising & Partnerships",
    desc:
      "Explore brand integrations, sponsored content, display advertising, and long-term media partnership opportunities.",
    email: "advertising@yourmedia.com",
    img: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=360&fit=crop&q=80",
  },
  {
    title: "Technical Support",
    desc:
      "Report issues with subscriptions, app access, broken links, or any other technical problem on our platforms.",
    email: "support@yourmedia.com",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=360&fit=crop&q=80",
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
    q: "How quickly will I receive a response?",
    a: "Our team aims to respond to all messages within 24 business hours. For urgent editorial matters, please call us directly during office hours.",
  },
  {
    q: "How do I submit a story tip or press release?",
    a: "Send your tip or release directly to editorial@yourmedia.com. Include a brief summary in the subject line. Our editors review all submissions but can only respond to those selected for coverage.",
  },
  {
    q: "How can I advertise with your publication?",
    a: "We offer a range of advertising solutions including display ads, sponsored articles, newsletter placements, and video partnerships. Contact advertising@yourmedia.com for our current media kit and rate card.",
  },
  {
    q: "Can I request a correction to a published article?",
    a: "Yes. We take accuracy seriously. Email the article link and the specific correction to editorial@yourmedia.com with the subject line 'Correction Request'. We'll review and respond within 48 hours.",
  },
  {
    q: "Do you offer internships or freelance opportunities?",
    a: "We welcome applications from talented writers, photographers, and media professionals. Send your portfolio and a brief introduction to careers@yourmedia.com.",
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

  return (
    <div className="homepage-root">
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
                  <label htmlFor="subject">Department / Topic</label>
                  <select id="subject" name="subject" value={form.subject}
                    onChange={handleChange} required>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s === "Select a topic" ? "" : s}>{s}</option>
                    ))}
                  </select>
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
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&h=400&fit=crop&q=80"
              alt="Our office"
            />
            <div className="sidebar-img-overlay">
              <span className="sidebar-img-text">Our Chandigarh Newsroom</span>
            </div>
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
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&q=80"
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
                {"3rd Floor, Media Tower\nSector 17–B, Chandigarh\nPunjab, India – 160017"}
              </p>
            </div>

            <div className="location-info-item">
              <p className="location-info-title">Office Hours</p>
              <p className="location-info-val">
                {"Monday – Friday: 9:00 AM – 6:00 PM\nSaturday: 10:00 AM – 2:00 PM\nSunday: Closed"}
              </p>
            </div>

            <div className="location-info-item">
              <p className="location-info-title">Nearest Landmark</p>
              <p className="location-info-val">
                2 min walk from Sector 17 Bus Terminus
              </p>
            </div>

            <a
              href="https://maps.google.com"
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

  </div>
  );
}