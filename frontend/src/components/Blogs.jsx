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
};

export default Blogs;