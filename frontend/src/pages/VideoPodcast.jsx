import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import homepageVideo from "../assets/videos/homepage-banner.mp4";

function CorporateVideos() {
  const ourWork = [
    {
      code: "01",
      category: "Corporate Films",
      title: "Brand Storytelling",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      code: "02",
      category: "Business Growth",
      title: "Corporate Campaigns",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      code: "03",
      category: "Industrial",
      title: "Manufacturing Films",
      img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      code: "04",
      category: "Marketing",
      title: "Product Launch Videos",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <div className="homepage-root">

      {/* GLOBAL SYSTEM NAVIGATION */}
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
          <div class="bento-card"><span>01</span> Documentaries</div>
          <div class="bento-card"><span>02</span> Success Stories</div>
          <div class="bento-card"><span>03</span> Project Videos</div>
          <div class="bento-card"><span>04</span> Growth Journeys</div>
          <div class="bento-card"><span>05</span> Travel & Lifestyle</div>
          <div class="bento-card"><span>06</span> CSR Videos</div>
          <div class="bento-card"><span>07</span> Social Messaging</div>
          <div class="bento-card"><span>08</span> Patient Stories</div>
          <div class="bento-card"><span>09</span> Biographies</div>
          <div class="bento-card"><span>10</span> 95% Impact Retention</div>
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
            <div class="card-number">01</div>
            <h3>In-Depth Research</h3>
            <p>We conduct thorough research to ensure every narrative is both accurate and insightful.</p>
          </div>

          <div class="expertise-card">
            <div class="card-number">02</div>
            <h3>Authentic Storytelling</h3>
            <p>Our focus is on capturing genuine stories that truly engage and inspire viewers.</p>
          </div>

          <div class="expertise-card">
            <div class="card-number">03</div>
            <h3>High-Quality Production</h3>
            <p>Utilizing state-of-the-art equipment to ensure a visually and audibly compelling result.</p>
          </div>

          <div class="expertise-card">
            <div class="card-number">04</div>
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
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ" 
                frameborder="0" allowfullscreen>
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
                      {item.code}
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

      <section className="faq-section">
        <div className="faq-main-wrapper">
          {/* Left: Image */}
          <div className="faq-image-side">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiMNAtfEbSYBCj62OV0V7cW2rEpFIOfpf0masKIqfMQ&s=10" alt="FAQ" />
          </div>

          {/* Right: 10 Questions */}
          <div className="faq-questions-side">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              {/* Repeat this faq-card block 10 times */}
              {[...Array(10)].map((_, i) => (
                <div className="faq-card" key={i}>
                  <button className="faq-btn" onClick={(e) => {
                    const answer = e.currentTarget.nextElementSibling;
                    const span = e.currentTarget.querySelector('span');
                    answer.classList.toggle('active');
                    span.textContent = answer.classList.contains('active') ? '-' : '+';
                  }}>
                    Question Number {i + 1}? <span>+</span>
                  </button>
                  <div className="faq-answer">
                    This is the professional answer for question {i + 1}. We ensure your documentary project is handled with the highest standards.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ############## */}

      <section className="get-in-touch">
  <div className="container">
    <div className="content-wrapper">
      
      {/* LEFT SIDE */}
      <div className="text-side">
        <h2 className="professional-title">
          Work <br />
          <span className="gold-text">With Us</span>
        </h2>
        <p className="description-text">
          Ready to turn your ideas into reality? <br />
          Drop us a line and we'll take it from there.
        </p>
        <div className="contact-footer">
          <p>Or email us at</p>
          <a href="mailto:growth@storytailors.co.in" className="email-link">
            growth@storytailors.co.in
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="form-side">
        <form>
          <div className="form-row">
            <div className="field-group">
              <input type="text" required placeholder='Full Name' />
            </div>
            <div className="field-group">
              <input type="text" placeholder='Job Title'/>
            </div>
          </div>
          <div className="form-row">
            <div className="field-group">
              <input type="email" required placeholder='Work Email'/>
            </div>
            <div className="field-group">
              <input type="tel" required  placeholder='Contact Number'/>
            </div>
          </div>
          <div className="field-group">
            <input type="text" required placeholder='Company Name'/>
          </div>
          <div className="field-group">
            <input type="url"  placeholder='Website URL'/>
          </div>
          <div className="field-group">
            <textarea placeholder='Mesage'></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>
      




      {/* *************************************************************************************** */}
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

export default CorporateVideos;