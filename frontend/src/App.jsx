import React, { useState, useEffect, useRef } from 'react';
import './App.css'; 

// Local Main Hero Video Asset (Keep or substitute with placeholder link if needed)
import homepageVideo from './assets/videos/homepage-banner.mp4';

import { Link } from "react-router-dom";


function App() {
  // 1. PROJECTS CAROUSEL DATA-STORE
  const [projects] = useState([
    { id: 1, category: 'Real Estate', title: 'Video & Film for Real Estate', vId: '23UNLBhUtW4', thumb: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80' },
    { id: 2, category: 'Pharma', title: 'Video & Film for Pharma Industry', vId: 'oenZAOmsiOY', thumb: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80' },
    { id: 3, category: 'Automotive', title: 'Video & Film for Automotive Industry', vId: 'gmaXp_csn1I', thumb: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80' },
    { id: 4, category: 'Packaging', title: 'Video & Film for Packaging Industry', vId: 'f9vGmjEO-T0', thumb: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80' },
    { id: 5, category: 'Lifestyle', title: 'TVC & Lifestyle Showreel', vId: 'HTaJRfTCHTA', thumb: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80' },
    { id: 6, category: 'Machinery', title: 'Video & Film for Steel Industry', vId: 'esjhbZC2zLo', thumb: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80' },
    { id: 7, category: 'Corporate', title: 'Global Identity Showreel', vId: '23UNLBhUtW4', thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' }
  ]);

  // 2. BRAND ALLIANCES (TIER A)
  const [clientsTierA] = useState([
    { id: 'a1', name: 'Nike', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1200px-Logo_NIKE.svg.png' },
    { id: 'a2', name: 'Apple', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png' },
    { id: 'a3', name: 'Mercedes-Benz', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Benz_Logo_2010.svg/1024px-Mercedes-Benz_Logo_2010.svg.png' },
    { id: 'a4', name: 'Sony', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1024px-Sony_logo.svg.png' },
    { id: 'a5', name: 'Netflix', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png' },
    { id: 'a6', name: 'Canon', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Canon_logo.svg/1280px-Canon_logo.svg.png' },
    { id: 'a7', name: 'Samsung', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png' },
    { id: 'a8', name: 'Porsche', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Porsche_Wordmark.svg/1280px-Porsche_Wordmark.svg.png' },
    { id: 'a9', name: 'Intel', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Intel-logo.svg/1280px-Intel-logo.svg.png' },
    { id: 'a10', name: 'Red Bull', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Red_Bull_Logo.svg/1280px-Red_Bull_Logo.svg.png' }
  ]);

  // BRAND ALLIANCES (TIER B)
  const [clientsTierB] = useState([
    { id: 'b1', name: 'Audi', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Audi-Logo_2016.svg/1280px-Audi-Logo_2016.svg.png' },
    { id: 'b2', name: 'Disney', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Walt_Disney_Pictures_logo.svg/1280px-Walt_Disney_Pictures_logo.svg.png' },
    { id: 'b3', name: 'Google', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png' },
    { id: 'b4', name: 'Amazon', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' },
    { id: 'b5', name: 'Coca-Cola', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo_2015.svg/1280px-Coca-Cola_logo_2015.svg.png' },
    { id: 'b6', name: 'Panasonic', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Panasonic_logo.svg/1280px-Panasonic_logo.svg.png' },
    { id: 'b7', name: 'Siemens', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1280px-Siemens-logo.svg.png' },
    { id: 'b8', name: 'Hyundai', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/1280px-Hyundai_Motor_Company_logo.svg.png' },
    { id: 'b9', name: 'Yamaha', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yamaha_logo.svg/1280px-Yamaha_logo.svg.png' },
    { id: 'b10', name: 'Shell', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Shell_logo.svg/1024px-Shell_logo.svg.png' }
  ]);

  // 4. INDUSTRIES CORE BLOCK MATRIX (PREMIUM EDITORIAL GRIDS)
  const [excelIndustries] = useState([
    { title: "BFSI & Fintech", code: "01", category: "Institutional", img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80" },
    { title: "Healthcare & Pharma", code: "02", category: "Medical Science", img: "https://images.unsplash.com/photo-1530026405186-ed1eaae6bbd4?auto=format&fit=crop&w=800&q=80" },
    { title: "Food & Beverages", code: "03", category: "Consumer Goods", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80" },
    { title: "Logistics & Supply Chain", code: "04", category: "Enterprise Systems", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" },
    { title: "Manufacturing Sector", code: "05", category: "Heavy Industrial", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" },
    { title: "Architecture & Interiors", code: "06", category: "Structural Assets", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { title: "Consumer Brands", code: "07", category: "Retail Commerce", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80" },
    { title: "Beauty & Personal Care", code: "08", category: "Premium Cosmetics", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80" },
    { title: "Lifestyle & Fashion", code: "09", category: "High Luxury TVC", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80" },
    { title: "Conglomerates & Firms", code: "10", category: "Global Strategy", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
    { title: "Consulting, VC & PE", code: "11", category: "Capital Direction", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80" },
    { title: "Training & Education", code: "12", category: "EdTech Frameworks", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" },
    { title: "IT, ITES & SaaS Platforms", code: "13", category: "Digital Software", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" },
    { title: "Real Estate Markets", code: "14", category: "Commercial Estate", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" },
    { title: "NGO & Public Sector", code: "15", category: "Social Frameworks", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" }
  ]);

  // 5. LIVE BEHIND THE SCENES VAULT
  const [btsItems] = useState([
    { id: 1, title: 'Coin DCX', vId: '23UNLBhUtW4', label: 'PRODUCTION CAMPAIGN', duration: '0:15' },
    { id: 2, title: 'LINK BNK', vId: 'oenZAOmsiOY', label: 'FINTECH COMMERCIAL', duration: '0:30' },
    { id: 3, title: 'Mentco', vId: 'gmaXp_csn1I', label: 'BRAND STORYTELLING', duration: '0:20' },
    { id: 4, title: 'Zero B', vId: 'f9vGmjEO-T0', label: 'PRODUCT VISUALIZATION', duration: '0:15' },
    { id: 5, title: 'All About Marketing', vId: 'HTaJRfTCHTA', label: 'GREEN SCREEN STUDIO', duration: '0:45' },
    { id: 6, title: 'Morgan Stanley', vId: 'esjhbZC2zLo', label: 'ENTERPRISE IDENTITY', duration: '0:30' }
  ]);

  // 6. PREMIUM CLIENT TESTIMONIAL DATA
  const [testimonials] = useState([
    { id: 1, quote: "Golden Wire transformed our corporate identity completely. Their absolute dedication to premium, high-density editorial framing set our SaaS platform funding video apart from every competitor.", clientName: "Marcus Sterling", designation: "VP of Growth, LinkBnk Global" },
    { id: 2, quote: "The execution precision on our lifestyle launch was flawless. They understand lighting and color grading at a depth that matches premium Italian luxury brands.", clientName: "Elena Rostova", designation: "Creative Director, Vélour Cosmetics" },
    { id: 3, quote: "Production speed paired with spectacular cinematic quality. The multi-track video loop system built for our fintech dashboard instantly resonated with our enterprise partners.", clientName: "Devon Cho", designation: "Co-Founder, CoinDCX Ventures" },
    { id: 4, quote: "Flawless industrial automation filming. They managed to make heavy machinery layouts look incredibly sleek, clean, and beautifully cinematic.", clientName: "Arjan Singh", designation: "Managing Director, SteelCorp Solutions" }
  ]);

  // Carousel Framework States
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const autoPlayRef = useRef(null);

  // Form Field State Handling
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });


  const specs = [
    { title: "High-Density React", desc: "Architecture optimized for complex, data-heavy dashboard visualizations." },
    { title: "Cinematic Revenue Design", desc: "Production-grade visuals engineered specifically to drive conversion funnels." },
    { title: "12H Dispatch Velocity", desc: "Rapid deployment cycles that match your venture's operational tempo." },
    { title: "Bespoke Automation", desc: "Backend logistics tailored to your specific business intelligence needs." }
  ];


  
  useEffect(() => {
    startAutoRotation();
    return () => stopAutoRotation();
  }, [projects.length]);

  const startAutoRotation = () => {
    stopAutoRotation();
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 2500); 
  };

  const stopAutoRotation = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const handleCardHoverEnter = (index) => {
    stopAutoRotation();
    setCurrentIndex(index); 
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Premium Lead Captured Context:", formData);
    alert("Strategic Brief Dispatched Safely. Our Direction Partners Will Contact You Within 12 Hours.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    // This starts them from a tiny point in the center
    hidden: { opacity: 0, scale: 0, y: 100 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

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

      {/* SECTION 1: HERO ACTION FULLSCREEN VIEWPORT */}
      <section className="video-homepage-fullscreen" id="home">
        <div className="absolute-viewport-video-wrapper">
          <video autoPlay loop muted playsInline className="hero-fluid-video-asset" src={homepageVideo}>
            Your browser does not support the video tag.
          </video>
          <div className="hero-clearance-overlay-tint"></div>
        </div>

        <div className="hero-inner-content">
          <div className="editorial-badge">
            <span className="badge-line"></span>Global Creative Studio<span className="badge-line"></span>
          </div>
          <h1 className="main-heading">
            SHAPE REVENUE THROUGH <br />
            <span className="gold-word">HIGH-IMPACT</span> VISUAL DIRECTION <br />
            & <span className="gold-word">CINEMATIC</span> STORYTELLING.
          </h1>
          <p className="sub-heading-text">
            We partner with ambitious global brands to architect elite ad films, commercial campaigns, and digital assets that command industry attention.
          </p>
        </div>
      </section>

      {/* SECTION 2: 3D CAROUSEL SPLIT ROW LAYER */}
      <section className="section-projects-golden-fullscreen" id="expertise-wall-section">
        <div className="metallic-shimmer-layer"></div>
        <div className="split-view-panoramic-matrix">
          <div className="projects-header-editorial-row">
            <div className="editorial-badge-dark">
              <span className="badge-line-dark"></span>The Wall of Expertise
            </div>
            <h2 className="section-title-dark">Showcasing Our <br /><span>Finest Works</span></h2>
            <p className="section-description-dark">
              Explore our diverse portfolio including Corporate films, TVCs, and Documentaries built across a wide range of global sectors.
            </p>
            <div className="header-action-left">
              <a href="https://www.mediandesigns.com/portfolio/" target="_blank" rel="noreferrer" className="premium-explore-dark-btn">
                <span>Explore All Works</span>
              </a>
            </div>

            <div className="carousel-indicator-dots-row">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator-bullet ${idx === currentIndex ? 'bullet-active' : ''}`}
                  onClick={() => { setCurrentIndex(idx); startAutoRotation(); }}
                  aria-label={`Go to item ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="circular-carousel-unbounded-stage">
            <div className="carousel-3d-axis">
              {projects.map((project, index) => {
                let offset = index - currentIndex;
                const total = projects.length;
                if (offset < -Math.floor(total / 2)) offset += total;
                if (offset > Math.floor(total / 2)) offset -= total;

                const isActive = offset === 0;
                const absOffset = Math.abs(offset);
                const rotateY = offset * (360 / total) * 0.4; 
                const translateX = offset * 290; 
                const translateZ = -absOffset * 280; 
                const scale = isActive ? 1.1 : 1 - absOffset * 0.14; 
                const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3;
                const zIndex = 100 - absOffset;

                return (
                  <div
                    key={project.id}
                    className={`project-fluid-3d-card ${isActive ? 'card-popped' : 'card-drifting'}`}
                    style={{
                      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex
                    }}
                    onMouseEnter={() => handleCardHoverEnter(index)}
                    onMouseLeave={startAutoRotation}
                    onClick={() => setActiveModalVideo(project.vId)}
                  >
                    <div className="card-media-frame">
                      <img src={project.thumb} alt={project.title} className="card-image-render" />
                      <div className="card-gradient-shading"></div>
                      <div className="card-play-hub"><div className="play-glass-circle"><i className="play-triangle-svg"></i></div></div>
                      <div className="card-meta-plate">
                        <span className="card-badge-category">{project.category}</span>
                        <h3 className="card-title-text">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: AUTOMATED MARQUEE BRANDS ROW */}
      <section className="section-kinetic-alliance-deck">
        <div className="alliance-central-header">
          <div className="editorial-badge-center">
            <span className="badge-line"></span> Established Global Alliances <span className="badge-line"></span>
          </div>
          <h2 className="alliance-display-headline">TRUSTED BY INDUSTRY TITANS</h2>
          <p className="alliance-display-subtext">
            Partnering across premium sectors to broadcast vision, maximize reach, and transform brand authority globally.
          </p>
        </div>

        <div className="kinetic-marquee-viewport-container">
          <div className="kinetic-scroll-row track-direction-left">
            <div className="kinetic-scroll-rail">
              {clientsTierA.map((client) => (
                <div key={`tierA-1-${client.id}`} className="monolithic-logo-capsule">
                  <div className="capsule-glass-back">
                    <img src={client.logoUrl} alt={client.name} className="monolithic-svg-asset" />
                  </div>
                </div>
              ))}
              {clientsTierA.map((client) => (
                <div key={`tierA-2-${client.id}`} className="monolithic-logo-capsule" aria-hidden="true">
                  <div className="capsule-glass-back">
                    <img src={client.logoUrl} alt={client.name} className="monolithic-svg-asset" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="kinetic-scroll-row track-direction-right">
            <div className="kinetic-scroll-rail">
              {clientsTierB.map((client) => (
                <div key={`tierB-1-${client.id}`} className="monolithic-logo-capsule">
                  <div className="capsule-glass-back">
                    <img src={client.logoUrl} alt={client.name} className="monolithic-svg-asset" />
                  </div>
                </div>
              ))}
              {clientsTierB.map((client) => (
                <div key={`tierB-2-${client.id}`} className="monolithic-logo-capsule" aria-hidden="true">
                  <div className="capsule-glass-back">
                    <img src={client.logoUrl} alt={client.name} className="monolithic-svg-asset" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* SECTION 5: PREMIUM LIGHT MATTE IVORY INDUSTRIES BLOCK GRID */}
      <section className="editorial-industries-canvas-section">
        <div className="canvas-layout-container">
          
          <div className="canvas-section-header">
            <div className="editorial-badge-center-dark">
              <span className="badge-line-gold"></span> Strategic Core Domains <span className="badge-line-gold"></span>
            </div>
            <h2 className="canvas-main-title">Industries We Excel In</h2>
            <p className="canvas-sub-desc">
              Delivering high-fidelity visual architecture, targeted advertising layouts, and cinematic communications for specialized global industry domains.
            </p>
          </div>

          <div className="canvas-splitcard-matrix-grid">
            {excelIndustries.map((ind, index) => (
              <div key={index} className="canvas-industry-media-card">
                
                <div className="media-card-upper-deck">
                  <div className="card-indexing-header">
                    <span className="card-index-code">{ind.code} //</span>
                    <span className="card-meta-tag">{ind.category}</span>
                  </div>
                  <h3 className="card-display-title">{ind.title}</h3>
                </div>

                <div className="media-card-lower-viewport">
                  <img src={ind.img} alt={ind.title} className="card-fluid-cinema-asset" loading="lazy" />
                  <div className="card-vignette-overlay"></div>
                  <div className="card-interactive-hud-element">
                    <span className="hud-label-status">View Domain Showcase</span>
                    <span className="hud-arrow-vector">➔</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: THE AMBER-GOLD STUDIO BTS VAULT METRO GRID */}
      <section className="premium-bts-studio-canvas-section" id="bts-vault-anchor">
        <div className="studio-ambient-light-leak"></div>

        <div className="bts-layout-container">

          <div className="bts-section-editorial-header">
            <div className="bts-editorial-badge">
              <span className="bts-badge-laser"></span>
              Studio Access Portal // <span className="gold-text">Live Action Vault</span>
            </div>

            <h2 className="bts-main-display-title">BTS // Inside The Frame</h2>

            <p className="bts-sub-narrative-desc">
              Step directly into the creative mechanism. Explore live on-set camera logs,
              green-screen spatial mapping, and production rollouts engineering our core
              commercial ad films.
            </p>
          </div>

          <div className="bts-asymmetric-metro-grid">
            {btsItems.map((item, index) => (
              <div
                key={item.id}
                className={`bts-metro-card-wrapper grid-span-preset-${index + 1}`}
                onClick={() => setActiveModalVideo(item.vId)}
                style={{ cursor: "pointer" }}
              >
                <div className="bts-interactive-viewport-capsule">

                  {/* VIDEO */}
                  <div
                    className="bts-fluid-video-rendering-asset"
                    style={{
                      pointerEvents: "none",
                      overflow: "hidden"
                    }}
                  >
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    >
                      <source src="/Videos/123.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="bts-viewport-shading-curtain"></div>

                  <div className="bts-hud-top-deck">
                    <span className="bts-hud-tag">{item.label}</span>
                    <span className="bts-hud-counter">
                      LOG_{(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="bts-content-lower-dock">
                    <div className="bts-title-group-box">
                      <h3 className="bts-project-card-title">{item.title}</h3>
                      <p className="bts-project-micro-metric">
                        Studio Master Print // {item.duration} sec
                      </p>
                    </div>

                    <div className="bts-action-radar-pulse">
                      <div className="radar-circle-element">
                        <span className="radar-play-vector">➔</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: CLIENT PERSPECTIVES MATRIX (LIGHT THEME) */}
      <section className="testimonials-marquee-section" id="testimonials-marquee-section">
        <div className="testi-layout-container">
          
          <div className="testi-header-grid">
            <div className="editorial-badge-center-dark">
              <span className="badge-line-gold"></span> Trusted By Industry Leaders
            </div>
            <h2 className="testi-display-headline">CLIENT PERSPECTIVES <br /><span>& VENTURE SUCCESS</span></h2>
          </div>

          <div className="testi-grid-matrix">
            
            {/* Testimonial Card 1 */}
            <div className="testi-card-snippet">
              <div className="card-top-header">
                <span className="client-brand-tag">FINTECH VENTURES</span>
                <div className="rating-star-cluster">★★★★★</div>
              </div>
              <p className="testi-body-prose">
                "Golden Wire’s integration of high-density video assets into our React dashboard completely transformed our user engagement metrics. Their technical precision is unmatched."
              </p>
              <div className="client-identity-node">
                <div className="avatar-placeholder">MS</div>
                <div className="identity-data">
                  <span className="name-tag">Marcus Sterling</span>
                  <span className="title-tag">CTO @ LinkBnk</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="testi-card-snippet">
              <div className="card-top-header">
                <span className="client-brand-tag">HHK ASSOCIATION</span>
                <div className="rating-star-cluster">★★★★★</div>
              </div>
              <p className="testi-body-prose">
                "The automated donation receipt system they built for us has reduced our manual labor by 90%. It’s rare to find a team that understands both creative design and complex backend logistics."
              </p>
              <div className="client-identity-node">
                <div className="avatar-placeholder">AH</div>
                <div className="identity-data">
                  <span className="name-tag">Ananya H.</span>
                  <span className="title-tag">Director, HHK</span>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="testi-card-snippet">
              <div className="card-top-header">
                <span className="client-brand-tag">GLOBAL MEDIA OPS</span>
                <div className="rating-star-cluster">★★★★★</div>
              </div>
              <p className="testi-body-prose">
                "The most professional production studio I’ve worked with. They treat every ad film like a piece of high-frequency engineering. The visual impact has been phenomenal."
              </p>
              <div className="client-identity-node">
                <div className="avatar-placeholder">JL</div>
                <div className="identity-data">
                  <span className="name-tag">Julian Laurent</span>
                  <span className="title-tag">Head of Growth, Lumina</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


{/* ########### */}

<section className="why-us-section">
  <div className="container">
    <div className="section-header">
      <h2>Why Choose Our Media Team</h2>
      <p>We combine artistic vision with strategic precision to elevate your brand presence.</p>
    </div>
    
    <div className="why-us-grid">
      {[
        { title: "Professional Video Production", desc: "High-quality video content from concept to final cut, using industry-standard equipment and techniques." },
        { title: "Expert Photography", desc: "Stunning visuals that tell your story, from corporate events to brand campaigns and product shots." },
        { title: "Creative Design", desc: "Branding, graphics, and visual designs that make your brand stand out and resonate with audiences." },
        { title: "Audience Analytics", desc: "Data-driven insights to optimize content performance and maximize reach across all platforms." },
        { title: "Fast Delivery", desc: "Quick turnaround times without compromising quality, ensuring your content hits the market when it matters." },
        { title: "Custom Solutions", desc: "Tailored media strategies that align with your brand goals, budget, and target audience needs." }
      ].map((item, index) => (
        <div className="why-us-card" key={index}>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>



{/* ############### */}
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
      
      

      

      


      {/* NEW SECTION 9: CORPORATE FOOTER MATRICES SYSTEM */}
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

      {/* CINEMATIC VIDEO LIGHTBOX COMPONENT */}
      {activeModalVideo && (
        <div className="video-modal-lightbox-portal" onClick={() => setActiveModalVideo(null)}>
          <div className="modal-kill-zone">
            <button className="close-portal-btn" onClick={() => setActiveModalVideo(null)}>✕</button>
            <div className="iframe-fluid-aspect-ratio" onClick={(e) => e.stopPropagation()}>
              <iframe
                title="Golden Wire Production Stream"
                src={`https://www.youtube.com/embed/${activeModalVideo}?autoplay=1&rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;