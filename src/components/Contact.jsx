import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Send email through API
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you for your enquiry! We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "917338964530";
    const message = "Hello MU Constructions, I would like to discuss building a premium home.";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-[#f5f1e8] relative">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-[#d4b896]/10 rounded-full mb-6">
            <span className="text-[#2a4a3a] text-xs font-light tracking-widest uppercase">
              Get In Touch
            </span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-light text-[#2a2a2a] mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Contact Us
          </h2>
          
          <p className="text-[#5a5a5a] text-xl max-w-2xl mx-auto leading-relaxed">
            Let's discuss your dream home project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-10 space-y-8"
          >
            {/* Company Name */}
            <div>
              <h3 
                className="text-3xl font-light text-[#2a2a2a] mb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                MU Constructions
              </h3>
              <p className="text-sm font-light tracking-widest text-[#d4b896] uppercase">
                & Immoveables
              </p>
            </div>

            <div className="w-16 h-[1px] bg-[#d4b896]"></div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#d4b896]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg 
                    className="w-5 h-5 text-[#d4b896]" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#5a5a5a] text-sm font-light mb-1">Phone</p>
                  <a 
                    href="tel:+917338964530" 
                    className="text-[#2a2a2a] text-lg hover:text-[#d4b896] transition-colors duration-300"
                  >
                    +91 73389 64530
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#d4b896]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg 
                    className="w-5 h-5 text-[#d4b896]" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#5a5a5a] text-sm font-light mb-1">Email</p>
                  <a 
                    href="mailto:mu.constructions.n.immovables@gmail.com" 
                    className="text-[#2a2a2a] text-base hover:text-[#d4b896] transition-colors duration-300 break-words"
                  >
                    mu.constructions.n.immovables@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-[#d4b896]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg 
                    className="w-5 h-5 text-[#d4b896]" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[#5a5a5a] text-sm font-light mb-2">Office Address</p>
                  <address className="text-[#2a2a2a] text-base not-italic leading-relaxed">
                    Plot No 24, Thirupathi Nagar Main Road,<br />
                    Thirupathi Nagar, Vengapakkam,<br />
                    Thirukazhukundram Taluk,<br />
                    Chengalpattu District,<br />
                    Tamil Nadu, India
                  </address>
                  <a 
                    href="https://maps.app.goo.gl/wupGoXQ7oYio4rDM7?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#d4b896] hover:text-[#2a4a3a] text-sm mt-3 transition-colors duration-300"
                  >
                    View on Google Maps
                    <svg className="w-4 h-4 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
              </svg>
              <span className="font-light tracking-wide">Chat on WhatsApp</span>
            </button>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-10"
          >
            <h3 
              className="text-2xl font-light text-[#2a2a2a] mb-8"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Request a Free Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[#5a5a5a] text-sm font-light mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f1e8] border border-[#d4b896]/20 rounded-lg text-[#2a2a2a] focus:outline-none focus:border-[#d4b896] transition-colors duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-[#5a5a5a] text-sm font-light mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f1e8] border border-[#d4b896]/20 rounded-lg text-[#2a2a2a] focus:outline-none focus:border-[#d4b896] transition-colors duration-300"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-[#5a5a5a] text-sm font-light mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f1e8] border border-[#d4b896]/20 rounded-lg text-[#2a2a2a] focus:outline-none focus:border-[#d4b896] transition-colors duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-[#5a5a5a] text-sm font-light mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#f5f1e8] border border-[#d4b896]/20 rounded-lg text-[#2a2a2a] focus:outline-none focus:border-[#d4b896] transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d4b896] hover:bg-[#c4a886] text-[#2a2a2a] py-4 rounded-lg font-light tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {/* Status Messages */}
              {status.message && (
                <div
                  className={`p-4 rounded-lg ${
                    status.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  <p className="text-sm">{status.message}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps?q=Plot+no+24,Thirupathi+Nagar+Main+road,Thirupathi+nagar,Vengapakkam,Thirukazhukundram+taluk,Chengalpattu&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
            title="MU Constructions Office Location"
          ></iframe>
        </motion.div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#1fb855] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </motion.button>
    </section>
  );
};

export default Contact;
