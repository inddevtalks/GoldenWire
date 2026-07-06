import React, { useState, useEffect, useRef } from 'react';
import './App.css'; 
import { Link } from 'react-router-dom';
// Local Main Hero Video Asset (Keep or substitute with placeholder link if needed)
import homepageVideo from './assets/videos/homepage-banner.mp4';

function App() {
  // Navigation Menu Responsive Toggle State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { id: 'a1', name: 'Lucknow Metro', logoUrl: 'data:image/png;base64,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' },
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

  // 3. DISCOVER OUR EXPERTISE MOSAIC ARRAY
  const [expertiseServices] = useState([
    { title: 'Ad Films', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/ad-films-v1.webp' },
    { title: 'Brand Films', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/brand-films.webp' },
    { title: 'Corporate Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/corporate-videos.webp' },
    { title: 'Explainer Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/explainer-videos.webp' },
    { title: '2D Animation Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/animation-video.webp' },
    { title: 'Video Podcast', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/podcast-video.webp' },
    { title: 'Documentary Films', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/documentry-film.webp' },
    { title: 'Testimonial Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/testimonial.webp' },
    { title: 'Drone Videography', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/drone.webp' },
    { title: 'Event Videography', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/event.webp' },
    { title: 'Product Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/product-video.webp' },
    { title: 'Social Media Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/social-media-videos.webp' },
    { title: 'Photoshoots', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/photoshoots-v1.webp' },
    { title: '3D Animation Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/home/discover-our-expertise/3d-animation.webp' },
    { title: 'AI Videos', link: '#', imgUrl: 'https://www.orangevideos.in/assets/images/ai-videos/ai-videos-thumbnail.webp' }
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

  // Menu Drawer Handler
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Closes mobile screen tray smoothly when an option is selected
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="homepage-root">
      
      {/* GLOBAL SYSTEM NAVIGATION */}
      <header className="site-header">
        <div className="nav-container">
          
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
            <Link to="/" className="nav-link active" onClick={closeMenu}>Home</Link>
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
            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
          </nav>

        </div>
      </header>
      {/* SECTION 1: HERO ACTION FULLSCREEN VIEWPORT */}

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
            <span className="badge-line"></span>
            Global Creative Studio
            <span className="badge-line"></span>
          </div>
          <h1 className="main-heading">
            SHAPE REVENUE THROUGH HIGH-IMPACT VISUAL DIRECTION & CINEMATIC STORYTELLING.
          </h1>
          <p className="sub-heading-text">
            We partner with ambitious global brands to architect elite ad films, commercial campaigns, and digital assets that command industry attention.
          </p>
          <div className="hero-action-row">
            <a href="#bts-vault-anchor" className="premium-cta-btn">
              <span>Explore BTS</span>
            </a>
          </div>
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