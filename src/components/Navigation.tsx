interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const menuItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About me', id: 'about' },
  { label: 'What I Learned', id: 'portfolio' },
  { label: 'Contact me', id: 'contact' },
];

export default function Navigation({ isMenuOpen, setIsMenuOpen }: NavigationProps) {
  const handleScroll = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-white shadow-sm sticky top-0 z-50">
      <button 
        onClick={() => handleScroll('home')}
        className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition"
      >
        Se Somrach
      </button>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {menuItems.map((item) => (
          <button 
            key={item.id} 
            onClick={() => handleScroll(item.id)}
            className="text-gray-600 hover:text-orange-500 transition font-medium"
          >
            {item.label}
          </button>
        ))}
      </div>

      <button 
        onClick={() => handleScroll('contact')}
        className="hidden md:block bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition font-medium"
      >
        Hire Me
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden z-40">
          <div className="flex flex-col p-4 gap-4">
            {menuItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleScroll(item.id)}
                className="text-gray-600 hover:text-orange-500 transition font-medium text-left"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => handleScroll('contact')}
              className="bg-orange-500 text-white px-6 py-2 rounded w-full font-medium hover:bg-orange-600 transition"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
