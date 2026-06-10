import React, { useState, useEffect, useRef } from 'react';
import './App.css'; 
import homepageVideo from './assets/videos/homepage-banner.mp4';

function App() {
  // SECTION 2: PROJECTS DATA-STORE
  const [projects] = useState([
    { id: 1, category: 'Real Estate', title: 'Video & Film for Real Estate', vId: '23UNLBhUtW4', thumb: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80' },
    { id: 2, category: 'Pharma', title: 'Video & Film for Pharma Industry', vId: 'oenZAOmsiOY', thumb: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80' },
    { id: 3, category: 'Automotive', title: 'Video & Film for Automotive Industry', vId: 'gmaXp_csn1I', thumb: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80' },
    { id: 4, category: 'Packaging', title: 'Video & Film for Packaging Industry', vId: 'f9vGmjEO-T0', thumb: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80' },
    { id: 5, category: 'Lifestyle', title: 'TVC & Lifestyle Showreel', vId: 'HTaJRfTCHTA', thumb: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80' },
    { id: 6, category: 'Machinery', title: 'Video & Film for Steel Industry', vId: 'esjhbZC2zLo', thumb: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80' },
    { id: 7, category: 'Corporate', title: 'Global Identity Showreel', vId: '23UNLBhUtW4', thumb: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80' }
  ]);

  // SECTION 3: LIVE RE-LINKED LOGOS
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalVideo, setActiveModalVideo] = useState(null);
  const autoPlayRef = useRef(null);

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

  return (
    <div className="homepage-root">
      
      {/* GLOBAL NAVIGATION */}
      <header className="site-header">
        <div className="nav-container">
          <a href="#home" className="site-logo">
            <span className="logo-icon">✦</span>
            <div className="logo-text">GOLDEN <span className="gold-accent">WIRE</span></div>
          </a>
          <nav className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#expertise-wall-section" className="nav-link active">Portfolio</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* SECTION 1: HERO SCREEN VIEWPORT */}
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
          <div className="action-button-wrapper">
            <a href="#expertise-wall-section" className="premium-cta-btn">
              <span>Explore Portfolio</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: METALLIC GOLD SPLIT VIEWPORT SYSTEM */}
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

      {/* ================= SECTION 3: BRANDS CAROUSEL (EXACT CLEAN LAYOUT - WHITE BACKGROUND) ================= */}
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
          
          {/* TRACK ROW 1 */}
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

          {/* TRACK ROW 2 */}
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

      {/* MODAL LIGHTBOX */}
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