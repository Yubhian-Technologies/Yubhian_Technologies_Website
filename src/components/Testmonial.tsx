import React, { useState, useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import testimonials from "../assets/testimonials.json";

const SLIDE_INTERVAL = 2500;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -50 : 50,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  }),
};

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const slideTimeout = useRef(null);

  const paginate = (newIndex) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent((newIndex + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    slideTimeout.current = setTimeout(() => {
      paginate((current + 1) % testimonials.length);
    }, SLIDE_INTERVAL);

    return () => {
      if (slideTimeout.current) clearTimeout(slideTimeout.current);
    };
  }, [current]);

  const t = testimonials[current];

  // Animation control for scroll-in
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-transparent to-rich-black/50 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 via-purple-900/10 to-black"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
            className="lg:col-span-5 flex flex-col justify-center items-start space-y-6 text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
              We Want The Best <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500 bg-clip-text text-transparent">
                Work For Us!
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-md">
              Collaborate Consulting exists to find the place where to being
              seemingly disparate interests meet.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent font-bold text-xl sm:text-2xl flex items-center">
                Let’s Talk <span className="ml-2">🤝</span>
              </span>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-blue-500 to-violet-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Contact Us
              </button>
            </div>
          </motion.div>

          {/* Right Testimonials */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
              },
            }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-xl">
              <div className="text-center mb-10">
                <h2 className="text-blue-400 text-xl font-bold tracking-wider uppercase mb-3">
                  TESTIMONIALS
                </h2>
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="relative h-[350px] sm:h-[400px] lg:h-[420px]">
                <AnimatePresence custom={direction} initial={false} mode="wait">
                  <motion.div
                    key={t.name}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl"
                  >
                    <div className="flex items-center gap-6 mb-6">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 border-blue-500/30 shadow-lg"
                      />
                      <div>
                        <h3 className="text-white text-2xl lg:text-3xl font-bold">
                          {t.name}
                        </h3>
                        <p className="text-blue-400 text-lg">{t.title}</p>
                      </div>
                    </div>
                    {/* <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6"
                          fill={i < t.rating ? "#3B82F6" : "#374151"}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div> */}
                    <blockquote className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed italic">
                      "{t.text}"
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Pagination & Arrows */}
              <div className="flex justify-between items-center mt-6 px-4">
                <div className="flex gap-3">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => paginate(idx)}
                      aria-label={`Go to testimonial ${idx + 1}`}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        idx === current
                          ? "bg-blue-500 scale-125"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => paginate(current - 1)}
                    aria-label="Previous"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/80 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition duration-300 hover:scale-110 border border-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => paginate(current + 1)}
                    aria-label="Next"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
