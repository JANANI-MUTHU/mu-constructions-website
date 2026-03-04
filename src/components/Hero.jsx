import { motion, useScroll, useTransform, useMotionValue, useTransform as useT, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Counter({ value, suffix = '+', duration = 2, className = '' }) {
  const mv = useMotionValue(0);
  const rounded = useT(mv, (v) => Math.round(v));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setCurrent(v));
    const controls = animate(mv, value, { duration, ease: 'easeOut' });
    return () => {
      unsub();
      controls.stop();
    };
  }, [value, duration, rounded, mv]);

  return (
    <span className={className}>
      {current}{suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Subtle parallax effect - image moves slower than scroll (0.3 = 30% of scroll speed)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const years = Math.max(0, new Date().getFullYear() - 2013);
  const location = useLocation();
  const navigate = useNavigate();

  const handleViewProjects = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate('/projects');
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen w-full bg-[#f5f1e8] pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-0">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '80px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-[1px] bg-[#d4b896]"
            />

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-[#2a2a2a] leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Building Beautiful
              <span className="block mt-2">Homes That Last</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[#5a5a5a] font-light leading-relaxed max-w-xl"
            >
              Premium villas, duplex homes and luxury residential construction across Chennai
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              {/* Primary Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#d4b896] text-[#2a2a2a] hover:bg-[#c4a886] transition-all duration-300 text-sm font-light tracking-wide uppercase shadow-md hover:shadow-lg"
              >
                Get a Free Estimate
              </a>

              {/* Secondary Button */}
              <button
                onClick={handleViewProjects}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#2a2a2a] text-[#2a2a2a] hover:bg-[#2a2a2a] hover:text-[#f5f1e8] transition-all duration-300 text-sm font-medium tracking-wide uppercase"
              >
                View Our Projects
              </button>
            </motion.div>

            {/* Stats or Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-[#d4b896]/30"
            >
              <div>
                <Counter value={years} suffix="+" duration={1.8} className="text-3xl font-medium text-[#d4b896]" />
                <div className="text-sm text-[#5a5a5a] font-medium tracking-wide mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#d4b896]">20+</div>
                <div className="text-sm text-[#5a5a5a] font-medium tracking-wide mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-semibold text-[#d4b896]">100%</div>
                <div className="text-sm text-[#5a5a5a] font-medium tracking-wide mt-1">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative h-[500px] lg:h-[700px] order-first lg:order-last"
          >
            {/* Main Image with Parallax Effect */}
            <div className="relative h-full w-full overflow-hidden shadow-2xl">
              <motion.img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                alt="Luxury villa construction"
                className="h-full w-full object-cover"
                style={{ y }}
              />
              {/* Very subtle overlay to enhance text contrast if needed */}
              <div className="absolute inset-0 bg-[#2a2a2a]/5"></div>
            </div>

            {/* Decorative accent element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#d4b896] hidden lg:block"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#d4b896] opacity-20 hidden lg:block"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-6 h-6 text-[#d4b896]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}


