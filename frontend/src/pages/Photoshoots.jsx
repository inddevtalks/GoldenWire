import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "../App.css";
import homepageVideo from "../assets/videos/homepage-banner.mp4";

function CorporateVideos() {
  const ourWork = [
    {
      category: "Corporate Films",
      title: "Brand Storytelling",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Business Growth",
      title: "Corporate Campaigns",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Industrial",
      title: "Manufacturing Films",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      category: "Marketing",
      title: "Product Launch Videos",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [openFaq, setOpenFaq] = useState(null);
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
                    <span className="nav-link active" style={{ cursor: 'pointer' }}>Services</span>
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

      {/* HERO */}
      <section className="video-homepage-fullscreen">
        <div className="absolute-viewport-video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-fluid-video-asset"
            src={homepageVideo}
          />
          <div className="hero-clearance-overlay-tint"></div>
        </div>

        <div className="hero-inner-content">

          <h1 className="main-heading">
            CORPORATE VIDEOS THAT
            <br />
            BUILD TRUST &
            <br />
            DRIVE BUSINESS GROWTH
          </h1>

          <p className="sub-heading-text">
            We create premium corporate films, company profiles, leadership
            interviews, brand stories and marketing videos that strengthen your
            brand presence.
          </p>

          <a href="#our-work" className="premium-cta-btn">
            <span>View Our Work</span>
          </a>
        </div>
      </section>
{/* **************************************************************************************************** */}
    {/* ################### 1 */}

    <section class="premium-golden-section">
      <div class="container">
        <div class="header-content">
          <h2 class="main-title">
            Elevate your brand with our fully<br />
            <span>customized video production services</span>
          </h2>
        </div>

        <div class="services-wrapper">
          <div class="bento-card">Documentaries</div>
          <div class="bento-card">Success Stories</div>
          <div class="bento-card">Project Videos</div>
          <div class="bento-card">Growth Journeys</div>
          <div class="bento-card">Travel & Lifestyle</div>
          <div class="bento-card">CSR Videos</div>
          <div class="bento-card">Social Messaging</div>
          <div class="bento-card">Patient Stories</div>
          <div class="bento-card">Biographies</div>
          <div class="bento-card">95% Impact Retention</div>
        </div>
      </div>
    </section>


  {/* ######### */}

  <section class="doc-expertise-section">
      <div class="container">
        <div class="header-content">
          <h2 class="section-heading">Our Expertise in Documentary Filmmaking</h2>
          <p class="section-subtext">Blending cinematic vision with strategic storytelling to bring your narrative to life.</p>
        </div>

        <div class="expertise-grid">
          <div class="expertise-card">
            <h3>In-Depth Research</h3>
            <p>We conduct thorough research to ensure every narrative is both accurate and insightful.</p>
          </div>

          <div class="expertise-card">
            <h3>Authentic Storytelling</h3>
            <p>Our focus is on capturing genuine stories that truly engage and inspire viewers.</p>
          </div>

          <div class="expertise-card">
            <h3>High-Quality Production</h3>
            <p>Utilizing state-of-the-art equipment to ensure a visually and audibly compelling result.</p>
          </div>

          <div class="expertise-card">
            <h3>Collaborative Approach</h3>
            <p>We work closely with you throughout the process to ensure alignment with your core vision.</p>
          </div>
        </div>

        <div class="cta-container">
          <a class="primary-button" href="#get-in-touch">Start Your Project</a>
        </div>
      </div>
    </section>

    {/* ############### */}

    <section class="doc-services-modern">
  <div class="container-fluid">
    <div class="layout-wrapper">
      
      <div class="video-side">
        <div class="video-frame">
          <div class="accent-box"></div>
          <iframe 
            src="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1&mute=1&loop=1&playlist=kcfs1-ryKWE&controls=0" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>
      </div>

      <div class="content-side">
        <span class="eyebrow">Our Process</span>
        <h2 class="main-heading">Documentary Film <br /><span>Services</span></h2>
        <p class="main-desc">
          We craft <b>real, impactful documentaries</b> that bring authentic stories to life. From research and interviews to stunning visuals and compelling narratives, we create films that <b>inform, inspire, and engage.</b>
        </p>
        <a href="#get-in-touch" class="btn-modern">
          <span>Discuss Your Vision</span>
          <div class="arrow">→</div>
        </a>
      </div>
      
    </div>
  </div>
</section>

    {/* ############# */}

    <section class="approach-refined">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Professional Approach</h2>
        </div>

        <div class="steps-grid">
          <div class="step-item">
            <div class="step-num">01</div>
            <div class="step-body">
              <h3>Pre-Production Planning</h3>
              <p>We build a solid foundation through in-depth research, precise scripting, and detailed storyboarding.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">02</div>
            <div class="step-body">
              <h3>On-Point Execution</h3>
              <p>High-end cinematography and seamless set coordination to capture the heart of the story.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">03</div>
            <div class="step-body">
              <h3>Top-Notch Post-Production</h3>
              <p>Meticulous editing, sound design, and color grading that elevate your content to cinematic standards.</p>
            </div>
          </div>

          <div class="step-item">
            <div class="step-num">04</div>
            <div class="step-body">
              <h3>Collaborative Partnership</h3>
              <p>A transparent, client-first workflow ensuring the final deliverable aligns perfectly with your vision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* **************************************************************************************************** */}
      {/* OUR WORK */}
      <section
        id="our-work"
        className="editorial-industries-canvas-section"
      >
        <div className="canvas-layout-container">

          <div className="canvas-section-header">

            <div className="editorial-badge-center-dark">
              <span className="badge-line-gold"></span>
              Featured Projects
              <span className="badge-line-gold"></span>
            </div>

            <h2 className="canvas-main-title">
              Our Work
            </h2>

            <p className="canvas-sub-desc">
              Explore selected projects and corporate productions created for
              growing businesses and enterprise brands.
            </p>

          </div>

          <div className="canvas-splitcard-matrix-grid">

            {ourWork.map((item, index) => (
              <div
                key={index}
                className="canvas-industry-media-card"
              >
                <div className="media-card-upper-deck">

                  <div className="card-indexing-header">
                    <span className="card-index-code">
                    </span>

                    <span className="card-meta-tag">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="card-display-title">
                    {item.title}
                  </h3>

                </div>

                <div className="media-card-lower-viewport">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-fluid-cinema-asset"
                  />
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>




      {/* ***************************************************************************************** */}

      {/* ####################### */}

      <section className="cta-full-black" id="get-in-touch">
        <div className="cta-content">
          <h2 className="cta-title">
            Bring Your Brand Defining Story to Light
          </h2>
          <p className="cta-desc">
            Shape narratives that matter. Inspire audiences globally with visionary
            <br /> 
            documentary production and world-class storytelling.
          </p>
          <a className="shapro-btn-modern" href="#contact-form">
            <span>Let’s Get Started</span>
          </a>
        </div>
      </section>


      {/* ################# */}

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

      {/* ############## */}

      <section id="get-in-touch" className="contact-section-layout4">
  <div className="layout4-container">
    <div className="layout4-grid">
      
      {/* LEFT COLUMN - TEXT COMBINED AT THE TOP */}
      <div className="layout4-info-pane">
        <p className="layout4-kicker">Get in Touch</p>
        <h2 className="layout4-headline">
          Ready to Turn Your  <br />
          <span>Vision into Cinematic Gold?</span>
        </h2>
        <p className="layout4-paragraph">
          Ready to scale your brand? Drop your project details below. Let’s co-author a powerful visual campaign and set a new industry standard together.
        </p>
      </div>

      {/* RIGHT COLUMN - INPUT MATRIX */}
      <div className="layout4-form-pane">
        <form 
          className="ov-enquiry-form" 
          data-form-type="get-in-touch" 
          method="post" 
          noValidate
        >
          <input type="hidden" name="form_type" value="get-in-touch" />
          <input type="hidden" name="source_page" value="Homepage" />
          <input type="hidden" name="recaptcha_token" value="" />

          {/* Row 1 */}
          <div className="layout4-input-row">
            <div className="layout4-input-field">
              <input type="text" name="full_name" placeholder="Full Name*" required />
            </div>
            <div className="layout4-input-field">
              <input type="text" name="job_title" placeholder="Job Title" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="layout4-input-row">
            <div className="layout4-input-field">
              <input type="email" name="work_email" placeholder="Work Email*" required />
            </div>
            <div className="layout4-input-field">
              <input type="tel" name="contact_number" placeholder="Contact Number*" required />
            </div>
          </div>

          {/* Row 3 */}
          <div className="layout4-input-row">
            <div className="layout4-input-field">
              <input type="text" name="company_name" placeholder="Company Name*" required />
            </div>
            <div className="layout4-input-field">
              <input type="url" name="website_url" placeholder="Website URL" />
            </div>
          </div>

          {/* Message field */}
          <div className="layout4-input-field full-width">
            <textarea name="message" rows="5" placeholder="Message"></textarea>
          </div>

          <div className="ov-form-msg" role="status"></div>
          
          <button type="submit" className="ov-submit-btn-layout4">Submit</button>
        </form>
      </div>

    </div>
  </div>
</section>
      




      {/* *************************************************************************************** */}

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
}

export default CorporateVideos;