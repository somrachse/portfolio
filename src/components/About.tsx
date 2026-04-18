export default function About() {
  type FloatingImage = {
    src: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    delay?: string;
  };

  const floatingImages: FloatingImage[] = [
    
  ];

  return (
    <section id="about" className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image with floating skills */}
        <div className="flex-1 relative min-h-96 overflow-visible flex items-center justify-center" style={{backgroundImage: 'url(/img/NoBG.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
          {/* Floating skill images */}
          {floatingImages.map((img, i) => (
            <div
              key={i}
              className="absolute w-25 h-16 md:w-20 md:h-20 float"
              style={{
                top: img.top,
                bottom: img.bottom,
                left: img.left,
                right: img.right,
                animationDelay: img.delay,
              }}
            >
              <img
                src={img.src}
                alt="Skill"
                className="w-full h-full object-cover rounded-lg border-2 border-white shadow-lg"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Web Development, MIS Solutions, POS Systems
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            I design intuitive interfaces, build responsive portfolios, produce engaging videos, and deliver tailored MIS solutions that help clients communicate and operate more effectively.
          </p>
          <div className="flex gap-4 mb-6">
            <a href="img/CV.pdf" download="CV.pdf" className="bg-orange-500 text-white px-8 py-3 rounded font-medium hover:bg-orange-600 transition inline-block">
              Download CV
            </a>
          </div>
          {/* Social Media Links */}
          
        </div>
      </div>
    </section>
  );
}
