export default function Projects() {
  return (
    <section aria-label="Our Projects" className="py-16 md:py-20 px-6 lg:px-8 bg-[#f5f1e8]">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-light text-[#2a2a2a] mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Our Projects
        </h2>
        
        <p className="text-[#5a5a5a] text-lg md:text-xl mb-6 font-light">
          A glimpse of our recent work
        </p>
        
        <p className="text-[#5a5a5a] text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
          From luxury villas to modern commercial spaces, our projects reflect quality, precision, and long-lasting value.
        </p>
        
        <button
          onClick={() => {
            // Navigate to projects page or show projects
            console.log('Navigate to projects page');
          }}
          className="inline-block px-8 py-3 bg-[#2a4a3a] hover:bg-[#1e3b2a] text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
        >
          View All Projects
        </button>
      </div>
    </section>
  );
}
