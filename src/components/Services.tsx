export default function Services() {
  const services = [
    { title: 'Portfolio', logo: '/img/portfolio.svg', desc: 'Personal portfolio projects.' },
    { title: 'POS System', logo: '/img/pos.svg', desc: 'Point-of-sale systems for retail businesses.' },
    { title: 'Salary Management', logo: '/img/salary.svg', desc: 'Payroll and salary management solutions.' },
    { title: 'Inventory System', logo: '/img/inventory.svg', desc: 'Inventory tracking and stock control.' },
    { title: 'E‑commerce', logo: '/img/ecommerce.svg', desc: 'Online stores and e‑commerce integrations.' },
    { title: 'Video Editing', logo: '/img/video.svg', desc: 'Video editing and creative post-production.' },
    { title: 'MIS', logo: '/img/mis.svg', desc: 'Management Information Systems implementation.' },
  ];

  return (
    <section id="services" className="px-6 md:px-12 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <p className="text-gray-500 mb-2">My Services</p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          
          </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <img src={service.logo} alt={service.title + ' logo'} className="w-10 h-10 object-contain rounded-full" />
            </div>
            <h3 className="text-lg font-bold text-orange-500 mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
