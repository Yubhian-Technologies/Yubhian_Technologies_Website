import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scroll = Math.round((scrollTop / docHeight) * 100);
    setScrollPercent(scroll);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full p-[3px] z-50"
      style={{
        background: `conic-gradient(from -90deg, #00b4d8 ${scrollPercent}%, #ffffff22 ${scrollPercent}% 100%)`,
      }}
    >
      <button
        onClick={scrollToTop}
        className="w-full h-full backdrop-blur-md bg-transparent rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Back to top"
      >
        <ArrowUp
          className="w-6 h-6"
          style={{
            background: "linear-gradient(to bottom right, #00b4d8, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
