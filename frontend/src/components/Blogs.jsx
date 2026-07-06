import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import homepageVideo from "../assets/videos/homepage-banner.mp4";
import "./Blogs.css";

const blogData = [
  {
    id: 1,
    title: "Best Locations in Mumbai for Commercial Video Shoots",
    image:
      "https://vastvikfilms.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-25-2026-12_45_55-PM.png",
    excerpt:
      "Mumbai is often called the entertainment capital of India, and for good reason. The city offers a diverse range of shooting locations...",
    category: "Film Making",
    readTime: "5 min read",
    date: "June 2026",
    author: "Team IndDevtalks",
    content:
      "Mumbai offers a mix of corporate hubs, beaches, studios, and heritage locations perfect for commercial shoots.",
  },
  {
    id: 2,
    title:
      "Video Marketing for Shopify Stores: How to Turn Product Videos into Sales in 2026",
    image:
      "https://vastvikfilms.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-22-2026-01_08_10-PM.png",
    excerpt:
      "Running a Shopify store in 2026 is more challenging than ever...",
    category: "Video Marketing",
    readTime: "6 min read",
    date: "June 2026",
    author: "Team IndDevtalks",
    content:
      "Video marketing increases conversions by building trust and showing product value clearly.",
  },
  {
    id: 3,
    title:
      "UGC Videos vs Influencer Marketing: Which Works Better for Brands in 2026?",
    image:
      "https://vastvikfilms.com/wp-content/uploads/2026/06/ChatGPT-Image-Jun-19-2026-11_48_57-AM.png",
    excerpt:
      "Digital marketing is changing quickly...",
    category: "Video Marketing",
    readTime: "4 min read",
    date: "June 2026",
    author: "Team IndDevtalks",
    content:
      "UGC builds authenticity while influencer marketing boosts reach. Both work best together.",
  },
  {
    id: 4,
    title: "AI Avatars for Marketing: 7 Business Videos You Should Create with AI",
    image:
      "https://vastvikfilms.com/wp-content/uploads/2026/06/AI-Avatars-for-Marketing-7-Business-Videos-You-Should-Create-with-AI-And-5-You-Never-Should.jpg-1.jpeg",
    excerpt: "AI avatars are changing how brands create content...",
    category: "AI Video Editing",
    readTime: "5 min read",
    date: "June 2026",
    author: "Team IndDevtalks",
    content: "AI avatars are best used for explainer videos and automation content.",
  },
  {
    id: 5,
    title: "Instagram Reels Ideas for Business Growth",
    image:
      "https://vastvikfilms.com/wp-content/uploads/2026/06/Best-Types-of-Video-Content-for-Instagram-Growth.jpg.jpeg",
    excerpt: "Instagram Reels continue to dominate engagement...",
    category: "Social Media Marketing",
    readTime: "4 min read",
    date: "June 2026",
    author: "Team IndDevtalks",
    content: "Reels are powerful for reach, storytelling, and brand awareness.",
  },
  {
    id: 6,
    title: "Future of Commercial Filmmaking in India",
    image:
      "https://vastvikfilms.com/wp-content/uploads/2026/05/Future-of-Commercial-Filmmaking-in-India.jpg-3.jpeg",
    excerpt: "India’s commercial filmmaking industry is evolving...",
    category: "Video Marketing",
    readTime: "6 min read",
    date: "June 2026",
    author: "Team IndDevtalks",
    content: "AI, drones, and digital platforms are shaping the future of filmmaking.",
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
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
                  <Link to="/blogs" className="nav-link active" onClick={closeMenu}>Blogs</Link>
                  <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
                </nav>
      
              </div>
            </header>
      

      {/* HERO */}
        <section className="video-homepage-fullscreen">
        <div className="absolute-viewport-image-wrapper">
            <img 
            className="hero-fluid-image-asset"
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop" 
            alt="Professional cinema camera setup for corporate video production"
            />
            <div className="hero-clearance-overlay-tint"></div>
        </div>

        <div className="hero-inner-content">
            <h1 className="main-heading">
            Corporate Video Production <br />
            <span>That Drives Growth</span>
            </h1>

            <p className="sub-heading-text">
            We architect high-impact brand films, commercial videos, and corporate content 
            designed to engage your audience, build trust, and scale your business.
            </p>

            <a href="#blog" className="premium-cta-btn">
            Explore Our Insights
            </a>
        </div>
        </section>

      {/* BLOGS */}
      <section className="blogs" id="blogs">
        <div className="container">
          <div className="section-heading">
            <h2>Latest Blogs</h2>
            <p>Creative insights, trends and production knowledge.</p>
          </div>

          <div className="blog-grid">
            {blogData.map((blog) => (
              <div
                className="blog-card"
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-card-image"
                />

                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <button className="read-btn">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedBlog && (
        <div className="modal-overlay" onClick={() => setSelectedBlog(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedBlog(null)}>
              ×
            </button>

            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="modal-image"
            />

            <div className="modal-body">
              <div className="blog-info">
                <span>{selectedBlog.date}</span>
                <span>•</span>
                <span>{selectedBlog.author}</span>
              </div>

              <h2>{selectedBlog.title}</h2>
              <p>{selectedBlog.content}</p>
            </div>
          </div>
        </div>
      )}

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

    </div>
  );
};

export default Blogs;