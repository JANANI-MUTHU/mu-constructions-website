export default function Footer() {
  const navigationLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#2a2a2a] text-[#e8e3da] pt-16 pb-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#d4b896]/20">
          
          {/* Left Column - Company Info */}
          <div className="space-y-4">
            <div>
              <h3 
                className="text-2xl font-light text-[#d4b896] mb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                MU Constructions
              </h3>
              <p className="text-xs font-light tracking-widest text-[#d4b896]/70 uppercase">
                & Immoveables
              </p>
            </div>
            
            <p className="text-[#e8e3da]/70 text-sm font-light leading-relaxed pt-4">
              Building premium homes since 2013
            </p>
            
            <p className="text-[#e8e3da]/60 text-sm font-light leading-relaxed italic pt-2">
              Where architectural vision meets exceptional craftsmanship
            </p>
          </div>

          {/* Middle Column - Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-[#d4b896] tracking-wide mb-6">
              Quick Links
            </h4>
            
            <nav className="space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-[#e8e3da]/70 hover:text-[#d4b896] transition-colors duration-300 text-sm font-light tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-light text-[#d4b896] tracking-wide mb-6">
              Contact Us
            </h4>
            
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <svg 
                  className="w-5 h-5 text-[#d4b896] mt-0.5 flex-shrink-0" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a 
                  href="tel:+917338964530"
                  className="text-[#e8e3da]/70 hover:text-[#d4b896] transition-colors duration-300 text-sm font-light"
                >
                  +91 73389 64530
                </a>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <svg 
                  className="w-5 h-5 text-[#d4b896] mt-0.5 flex-shrink-0" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a 
                  href="mailto:mu.constructions.n.immovables@gmail.com"
                  className="text-[#e8e3da]/70 hover:text-[#d4b896] transition-colors duration-300 text-sm font-light break-words"
                >
                  mu.constructions.n.immovables@gmail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <svg 
                  className="w-5 h-5 text-[#d4b896] mt-0.5 flex-shrink-0" 
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
                <address className="text-[#e8e3da]/70 text-sm font-light not-italic leading-relaxed">
                  Plot No 24, Thirupathi Nagar Main Road,<br />
                  Thirupathi Nagar, Vengapakkam,<br />
                  Thirukazhukundram Taluk,<br />
                  Chengalpattu District,<br />
                  Tamil Nadu, India
                </address>
              </div>

              {/* Map Link */}
              <a
                href="https://maps.app.goo.gl/wupGoXQ7oYio4rDM7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#d4b896] hover:text-[#e8e3da] transition-colors duration-300 text-sm font-light mt-2"
                aria-label="Open MU Constructions location in Google Maps"
              >
                Open in Google Maps
              </a>

              {/* Embedded Google Map */}
              <div className="rounded-md overflow-hidden border border-[#d4b896]/20 mt-3">
                <iframe
                  title="MU Constructions Location"
                  src="https://www.google.com/maps?q=Plot+no+24,Thirupathi+Nagar+Main+road,Thirupathi+nagar,Vengapakkam,Thirukazhukundram+taluk,Chengalpattu&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="pt-8 text-center">
          <p className="text-[#e8e3da]/50 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} MU Constructions & Immoveables. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
