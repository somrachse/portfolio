import { useState } from 'react';

export default function Hero() {
  const [showCV, setShowCV] = useState(false);

  return (
    <section id="home" className="px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Content */}
      <div className="flex-1">
        <p className="text-gray-500 text-sm mb-2">Hi I am</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          SE SOMRACH
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
          WEB DEVERLOPER
        </h2>
        
        {/* Social Media Links */}
        <div className="flex gap-4 mb-8">
          <a href="https://web.facebook.com/gtgshtejh5" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z"/></svg>
          </a>
          <a href="https://t.me/ftsomrazh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-sky-500 hover:text-white transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.393 0-.32-.147-.451-.52l-1.443-4.716m4.518-4.871l-5.515 5.153c-.056.053-.105.1-.15.145-.222.206-.40.373-.04.96l1.432 4.687.065-.965m3.208-3.187l-4.25-3.185c-.267-.2-.267-.734.056-.734h.773c.267 0 .5.12.724.32l3.228 2.44.469.355z"/></svg>
          </a>
          <a href="https://www.instagram.com/daviddong900/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-pink-600 hover:text-white transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/></svg>
          </a>
          <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-700 hover:text-white transition">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19.27 5.26C17.04 3.58 14.3 2.75 11.5 2.75c-8.99 0-16.18 7.18-16.18 16.18S2.51 35.11 11.5 35.11c2.8 0 5.54-.83 7.77-2.51M11.5 5.74c.89 0 1.73.2 2.5.55.96-1.47 2.38-2.71 4.07-3.4-1.44-.48-2.96-.74-4.57-.74-5.56 0-10.3 4.04-10.3 9.35M6.5 9c1.38 0 2.5 1.12 2.5 2.5S7.88 14 6.5 14 4 12.88 4 11.5 5.12 9 6.5 9m11 0c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5M11.5 15.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"/></svg>
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button onClick={() => {
            const element = document.getElementById('contact');
            element?.scrollIntoView({ behavior: 'smooth' });
          }} className="bg-orange-500 text-white px-6 py-3 rounded font-medium hover:bg-orange-600 transition">
            Hire Me
          </button>
          <button onClick={() => setShowCV(true)} className="border border-gray-300 text-gray-600 px-6 py-3 rounded font-medium hover:border-orange-500 hover:text-orange-500 transition">
            View CV
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-12 mt-12">
          <div>
            <p className="text-orange-500 font-bold">1+</p>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
          <div>
            <p className="text-orange-500 font-bold">5+</p>
            <p className="text-sm text-gray-500">Project Done</p>
          </div>
          <div>
            <p className="text-orange-500 font-bold">10+</p>
            <p className="text-sm text-gray-500">Happy Client</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <div className="w-64 h-64 md:w-72 md:h-72 rounded-lg flex items-center justify-center">
          <img src="img/P1.JPG" />
        </div>
      </div>

      {/* CV Overlay Modal */}
      {showCV && (
        <div
          onClick={() => setShowCV(false)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl max-h-[90vh] overflow-auto bg-white rounded-lg"
          >
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
            >
              ✕
            </button>
            <img
              src="/img/CV.jpg"
              alt="CV"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
