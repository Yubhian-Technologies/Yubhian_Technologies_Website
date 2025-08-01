import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Home, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import SEO from "../components/SEO";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ref: notFoundRef, isVisible } = useScrollAnimation(0.2);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access:", location.pathname);
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(glitchInterval);
  }, [location.pathname]);

  const goHome = () => navigate("/");

  return (
    <>
      <SEO
        title="Page Not Found - 404 Error"
        description="The page you're looking for doesn't exist. Return to Yubhian Technologies LLP homepage to explore our AI and technology solutions."
        keywords="404 error, page not found, Yubhian Technologies, error page"
        url={`https://yubhiantechnologies.com${location.pathname}`}
        type="website"
      />
      <section
        ref={notFoundRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white px-6"
      >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 198, 255, 0.3); }
          50% { box-shadow: 0 0 40px rgba(0, 198, 255, 0.6), 0 0 60px rgba(0, 198, 255, 0.3); }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          10% { transform: translate(-2px, 2px); }
          20% { transform: translate(-2px, -2px); }
          30% { transform: translate(2px, 2px); }
          40% { transform: translate(2px, -2px); }
          50% { transform: translate(-2px, 2px); }
          60% { transform: translate(-2px, -2px); }
          70% { transform: translate(2px, 2px); }
          80% { transform: translate(-2px, -2px); }
          90% { transform: translate(2px, 2px); }
          100% { transform: translate(0); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-glitch { animation: glitch 0.2s ease-in-out; }
        .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }

        .gradient-text {
          background: linear-gradient(135deg, #00c6ff, #0072ff, #7c3aed, #ec4899);
          background-size: 300% 300%;
          animation: gradient-shift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }

        .hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 198, 255, 0.2);
        }

        .bg-brand-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .text-shadow {
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-full animate-float animate-pulse-glow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl rotate-45 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-xl animate-float" style={{ animationDelay: "1s" }}></div>

        {/* Sparkles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 text-cyan-400 animate-sparkle">
          <Sparkles className="w-4 h-4" />
        </div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 text-purple-400 animate-sparkle" style={{ animationDelay: "1s" }}>
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-1/2 right-1/4 w-5 h-5 text-pink-400 animate-sparkle" style={{ animationDelay: "2s" }}>
          <Sparkles className="w-5 h-5" />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,198,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,198,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <div className="mb-8">
          <h1 className={`text-8xl md:text-9xl font-black mb-4 transition-all duration-1000 text-shadow ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${glitchActive ? "animate-glitch" : ""}`}>
            <span className="gradient-text">404</span>
          </h1>
          <div className={`text-2xl md:text-3xl font-bold text-gray-300 mb-2 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            Page Not Found
          </div>
        </div>

        {/* Card */}
        <div className={`glass-card rounded-3xl p-8 md:p-12 mb-12 transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            The page you're looking for seems to have vanished into the digital void.
            <br className="hidden md:block" />
            But don't worry, every great journey has a few detours!
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button
              onClick={goHome}
              className={`group inline-flex btn-primary items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover-lift bg-brand-gradient text-white shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Home className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              Go Home
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <p className={`text-sm text-gray-500 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          "Not all who wander are lost... but this page definitely is!" ✨
        </p>
      </div>
    </section>
    </>
  );
};

export default NotFound;
