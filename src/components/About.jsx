import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parallax effect for the image
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax movement (25% of scroll speed)
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  const years = Math.max(0, new Date().getFullYear() - 2013);

  return (
    <section id="about" className="relative py-24 px-6 lg:px-8 bg-[#f5f1e8] overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4b896]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2a4a3a]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Image with rounded corners and parallax */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&w=1024"
                  srcSet="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&w=480 480w, https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&w=768 768w, https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&w=1024 1024w, https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&w=1440 1440w, https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&w=2070 2070w"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                  alt="MU Constructions Premium Villa Projects"
                  className="w-full h-[550px] object-cover"
                  style={{ y: imageY }}
                />
                {/* Very subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative accent frame */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#d4b896] rounded-2xl -z-10"></div>
              
              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -top-6 -left-6 bg-[#2a4a3a] px-8 py-6 rounded-xl shadow-xl"
              >
                <div className="text-[#d4b896] text-4xl font-medium mb-1">{years}+</div>
                <div className="text-[#e8e3da] text-sm font-light tracking-wide">Years</div>
                <div className="text-[#d4b896]/70 text-xs mt-1">Est. 2013</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#d4b896]/10 rounded-full mb-6">
                <span className="text-[#2a4a3a] text-xs font-light tracking-widest uppercase">
                  Our Story
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 
                className="text-5xl md:text-6xl font-light text-[#2a2a2a] leading-tight mb-4"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                About MU
                <span className="block mt-2">Constructions</span>
              </h2>
              <div className="flex items-center space-x-3 mt-4">
                <div className="w-12 h-[1px] bg-[#d4b896]"></div>
                <p className="text-[#d4b896] text-sm font-light tracking-wide">
                  Building quality homes since 2013
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-6"
            >
              <p className="text-[#5a5a5a] text-xl leading-relaxed">
                Established in 2013, MU Constructions has built a reputation for excellence in creating premium residential spaces across Chennai and surrounding areas.
              </p>
              
              <p className="text-[#5a5a5a] text-xl leading-relaxed">
                We specialize in crafting <span className="text-[#2a4a3a] font-medium">premium villas, duplex homes, row houses</span> and comprehensive residential developments that combine timeless design with modern functionality.
              </p>

              <p className="text-[#5a5a5a] text-xl leading-relaxed">
                Our commitment to <span className="text-[#2a4a3a] font-medium">strong structural quality, transparent processes, and on-time delivery</span> has made us the trusted choice for discerning homeowners seeking lasting value.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
