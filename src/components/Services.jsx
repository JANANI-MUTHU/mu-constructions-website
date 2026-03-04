// import React from 'react';
// import { motion } from 'framer-motion';
// import { services } from '../data/services';

// const Services = () => {
//   // Animation variants for container
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   // Animation variants for cards
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut',
//       },
//     },
//   };

//   return (
//     <section id="services" className="py-20 bg-gray-900">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Our <span className="text-amber-500">Services</span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto text-lg">
//             We offer a comprehensive range of construction and property services
//             tailored to meet your needs
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: '-100px' }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {services.map((service) => (
//             <motion.div
//               key={service.id}
//               variants={cardVariants}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 },
//               }}
//               className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300"
//             >
//               {/* Image Container */}
//               <div className="relative h-64 overflow-hidden">
//                 <motion.img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                   whileHover={{ scale: 1.1 }}
//                   transition={{ duration: 0.4 }}
//                 />
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
//               </div>

//               {/* Card Content */}
//               <div className="p-6 relative">
//                 {/* Gold accent line */}
//                 <div className="w-16 h-1 bg-amber-500 mb-4 group-hover:w-24 transition-all duration-300"></div>
                
//                 <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-gray-400 leading-relaxed">
//                   {service.description}
//                 </p>
//               </div>

//               {/* Glow effect on hover */}
//               <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
//                 <div className="absolute inset-0 rounded-lg ring-2 ring-amber-500/50"></div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 1,
      title: "Individual Villas",
      description: "Custom-designed luxury villas built with premium materials and expert engineering, tailored to your vision.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075"
    },
    {
      id: 2,
      title: "Duplex Villas",
      description: "Modern duplex homes designed for families who need both luxury and space with intelligent floor planning.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
    },
    {
      id: 3,
      title: "Twin Villas",
      description: "Elegant twin villas offering privacy with shared infrastructure, combining independence with community.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
    },
    {
      id: 4,
      title: "Row Houses",
      description: "Smartly planned row houses that maximize space, comfort, and long-term value for modern living.",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2087"
    },
    {
      id: 5,
      title: "Interior Design",
      description: "Bespoke interior designs customized to your taste, budget, and lifestyle with timeless elegance.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2100"
    },
    {
      id: 6,
      title: "Rental & Property Development",
      description: "Construction and rental-ready properties developed for consistent returns and sustainable growth.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073"
    }
  ];

  // Helper: convert title to clean URL slug
  const toSlug = (title) =>
    title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  // Animation for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-[#f5f1e8]">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-[#d4b896]/10 rounded-full mb-6">
            <span className="text-[#2a4a3a] text-xs font-light tracking-widest uppercase">
              What We Offer
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-light text-[#2a2a2a] mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Our Services
          </h2>
          
          <p className="text-[#5a5a5a] text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive construction and interior solutions crafted with precision and care
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                {/* Very subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a]/30 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Decorative line */}
                <div className="w-16 h-[1px] bg-[#d4b896] mb-5 group-hover:w-24 transition-all duration-300"></div>

                <h3 className="text-2xl font-light text-[#2a2a2a] mb-4 group-hover:text-[#2a4a3a] transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-[#5a5a5a] text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Button → navigates to service detail */}
                <Link
                  to={`/services/${toSlug(service.title)}`}
                  className="inline-flex items-center text-[#d4b896] hover:text-[#2a4a3a] font-light text-sm tracking-wide uppercase transition-colors duration-300 group"
                >
                  View Service
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
