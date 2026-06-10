import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, ExternalLink, Menu, X } from 'lucide-react';

const VideoHeroSection = () => {
  const [heroData, setHeroData] = useState({
    videoUrl: '',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1920',
    title: 'STORIES THAT SHAPE THE WORLD',
    subtitle: 'An independent digital-first network producing investigative journalism and dynamic visual storytelling.',
    ctaText: 'Watch Live Reel'
  });
  
  const [isMuted, setIsMuted] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/hero-config')
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.error("Connecting to Python Backend...", err));
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      
      {/* BACKGROUND VIDEO */}
      {heroData.videoUrl || (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          poster={heroData.fallbackImageUrl}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-news-studio-with-multiple-screens-and-broadcasters-33753-large.mp4" type="video/mp4" />
        </video>
      )}

      {/* CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 z-10" />

      {/* CONTENT WRAPPER */}
      <div className="absolute inset-0 z-20 flex flex-col justify-between">
        
        {/* ================= HEADER / NAVIGATION PANEL ================= */}
        <nav className="w-full backdrop-blur-md bg-black/10 border-b border-white/10 px-6 py-4 md:px-12 flex items-center justify-between transition-all">
          
          {/* Left Side: Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center font-black text-black text-xl">Ω</div>
            <span className="text-xl font-black tracking-wider uppercase bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              ORANGE<span className="text-orange-500">MEDIA</span>
            </span>
          </div>

          {/* Right Side: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#home" className="hover:text-orange-500 transition-colors border-b-2 border-orange-500 pb-1">Home</a>
            <a href="#about" className="text-gray-300 hover:text-orange-500 transition-colors pb-1">About</a>
            <a href="#shows" className="text-gray-300 hover:text-orange-500 transition-colors pb-1">Shows</a>
            <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors pb-1">Contact</a>
            
            <button className="bg-orange-500 text-white font-bold text-xs px-4 py-2 rounded uppercase hover:bg-orange-600 transition-all">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Dropdown Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-[69px] left-0 w-full bg-black/95 backdrop-blur-lg z-50 flex flex-col p-6 space-y-4 border-b border-white/10 animate-fadeIn md:hidden">
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-orange-500 text-lg font-semibold">Home</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 text-lg">About</a>
            <a href="#shows" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 text-lg">Shows</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 text-lg">Contact</a>
            <button className="w-full bg-orange-500 text-white font-bold py-3 rounded uppercase">Subscribe</button>
          </div>
        )}
        {/* ============================================================= */}


        {/* HERO CORE COPY (Middle/Lower Screen) */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col justify-center flex-grow pt-12">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-orange-400">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" /> Network Spotlight
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-none drop-shadow-lg">
              {heroData.title}
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 max-w-xl drop-shadow-md">
              {heroData.subtitle}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <button className="flex items-center gap-2 bg-orange-500 text-white font-bold px-8 py-4 rounded hover:bg-orange-600 transition-all transform active:scale-95 shadow-lg">
                <Play size={16} fill="currentColor" />
                {heroData.ctaText}
              </button>
            </div>
          </div>
        </div>


        {/* FOOTER ROW CONTROLS (Bottom Screen) */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-8 flex justify-between items-center z-20">
          <div className="text-xs text-gray-400 uppercase tracking-widest hidden sm:block">
            © 2026 Orange Media Group // Streaming Live
          </div>
          
          {/* Audio control pill */}
          <button 
            onClick={toggleMute}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-orange-500 backdrop-blur-md border border-white/10 transition-all text-sm text-gray-300 hover:text-white"
          >
            {isMuted ? (
              <>
                <VolumeX size={16} /> <span className="text-xs uppercase tracking-wider">Unmute Video</span>
              </>
            ) : (
              <>
                <Volume2 size={16} /> <span className="text-xs uppercase tracking-wider">Mute Audio</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
};

export default VideoHeroSection;