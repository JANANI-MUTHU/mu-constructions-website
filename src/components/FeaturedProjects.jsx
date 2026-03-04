import individualVilla01 from '../assets/projects/individual-villas/individual-villa-01.png';
import individualVilla02 from '../assets/projects/individual-villas/individual-villa-02.png';
import individualVilla03 from '../assets/projects/individual-villas/individual-villa-03.png';
import duplexVilla01 from '../assets/projects/duplex-villas/duplex-villa-01.png';
import duplexVilla02 from '../assets/projects/duplex-villas/duplex-villa-02.png';

export default function FeaturedProjects() {
  const projects = [
    { id: 1, image: individualVilla01, title: 'Individual Villa 01', type: 'Villa' },
    { id: 2, image: individualVilla02, title: 'Individual Villa 02', type: 'Villa' },
    { id: 3, image: individualVilla03, title: 'Individual Villa 03', type: 'Villa' },
    { id: 4, image: duplexVilla01, title: 'Duplex Villa 01', type: 'Duplex' },
    { id: 5, image: duplexVilla02, title: 'Duplex Villa 02', type: 'Duplex' },
  ];

  return (
    <section id="projects" aria-label="Featured Projects" className="py-16 md:py-20 px-6 lg:px-8 bg-[#f5f1e8]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2a2a2a] mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Our Projects
        </h2>
        
        <p className="text-[#5a5a5a] text-lg md:text-xl mb-6 font-light">
          A glimpse of our recent work
        </p>
        
        <p className="text-[#5a5a5a] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          From luxury villas to modern commercial spaces, our projects reflect quality, precision, and long-lasting value.
        </p>
      </div>
      
      {/* Full-width Auto-scrolling Image Carousel */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll">
          {/* First set of images */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-80 h-64 mx-4 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.type} construction by MU Constructions & Immoveables, premium builders in Tamil Nadu`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {projects.map((project) => (
            <div
              key={`duplicate-${project.id}`}
              className="flex-shrink-0 w-80 h-64 mx-4 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.type} construction by MU Constructions & Immoveables, premium builders in Tamil Nadu`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
