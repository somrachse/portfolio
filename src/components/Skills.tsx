export default function Skills() {
  const skills = [
    { name: 'Java', level: 'Basic', percentage: 75, logo: 'Java.png' },
    { name: 'C#', level: 'Basic', percentage: 50, logo: 'CSharp.png' },
    { name: 'C++', level: 'Basic', percentage: 50, logo: 'CPlusPlus.png' },
    { name: 'Angular', level: 'Basic', percentage: 50, logo: 'Angular.png' },
    { name: 'JavaScript', level: 'Basic', percentage: 50, logo: 'JS.png' },
    { name: 'HTML', level: 'Basic', percentage: 50, logo: 'HTML.png' },
    { name: 'CSS', level: 'Basic', percentage: 50, logo: 'CSS.png' },

  ];

  return (
    <section id="portfolio" className="px-6 md:px-12 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What I Learn</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="mx-auto mb-4 flex justify-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 transition-all duration-500 group-hover:from-orange-50 group-hover:to-orange-100 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img src={`img/${skill.logo}`} alt={skill.name} className="w-32 h-32 md:w-40 md:h-40 object-contain filter transition-all duration-500 group-hover:brightness-110 group-hover:drop-shadow-2xl group-hover:scale-110" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg transition-all duration-300 group-hover:text-orange-600 group-hover:scale-105">{skill.name}</h3>
              <p className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-orange-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
