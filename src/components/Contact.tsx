import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="px-6 md:px-12 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Cultivating Connections</h2>
        <p className="text-gray-600 text-center mb-12">Reach Out And Connect With Me</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-sm">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-orange-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-orange-500"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-orange-500"
          >
            <option value="">Select Service</option>
            <option value="design">UI/UX Design</option>
            <option value="development">Web Development</option>
            <option value="video">Video Editing</option>
          </select>
          <textarea
            name="message"
            placeholder="Project Details..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="md:col-span-2 border border-gray-300 px-4 py-3 rounded focus:outline-none focus:border-orange-500 resize-none"
          />
          <button
            type="submit"
            className="md:col-span-2 bg-orange-500 text-white px-8 py-3 rounded font-medium hover:bg-orange-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
