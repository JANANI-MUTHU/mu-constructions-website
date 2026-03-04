import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function Counter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  // Subscribe to motion value changes and update local state for rendering
  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setCurrent(v));
    return () => unsubscribe();
  }, [rounded]);

  // Kick off animation when the element enters the viewport
  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, value, duration]);

  return (
    <motion.span ref={ref}>
      {current}
      {suffix}
    </motion.span>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const years = Math.max(0, new Date().getFullYear() - 2013);

  const stats = [
    {
      id: 1,
      number: years,
      suffix: '+',
      label: 'Years of',
      labelBold: 'Experience',
      duration: 2
    },
    {
      id: 2,
      number: 20,
      suffix: '+',
      label: 'Projects',
      labelBold: 'Completed',
      duration: 2.5
    },
    {
      id: 3,
      number: 100,
      suffix: '%',
      label: 'Client',
      labelBold: 'Satisfaction',
      duration: 2
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-[#f5f1e8] relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#d4b896]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#2a4a3a]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Card with subtle shadow */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-10 text-center shadow-lg hover:shadow-xl transition-shadow duration-500">
                {/* Number */}
                <div 
                  className="text-6xl md:text-7xl font-light text-[#d4b896] mb-4"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  <Counter 
                    value={stat.number} 
                    suffix={stat.suffix}
                    duration={stat.duration}
                  />
                </div>

                {/* Label */}
                <div className="space-y-1">
                  <p className="text-[#5a5a5a] text-lg font-light tracking-wide">
                    {stat.label}
                  </p>
                  <p className="text-[#2a2a2a] text-xl font-normal tracking-wide">
                    {stat.labelBold}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#d4b896] to-transparent"></div>
              </div>

              {/* Divider line between cards (hidden on mobile and after last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 w-[1px] h-24 bg-[#d4b896]/30"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Optional tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p 
            className="text-[#2a4a3a] text-2xl font-light italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Building trust, one home at a time
          </p>
        </motion.div>
      </div>
    </section>
  );
}
