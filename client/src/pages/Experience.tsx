import { useState } from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Void Innovation.",
      period: "2025 - Present",
      description: "Developed responsive web applications using React, TypeScript, and modern CSS frameworks. Collaborated with UX designers to implement pixel-perfect interfaces.",
      technologies: ["React", "TypeScript", "GraphQL", "RestApi", "Nestjs"]
    },
    {
      id: 2,
      title: "Web Developement Intern",
      company: "SkyBase Innovation",
      period: "2025 August -October 2025",
      description: "Built and maintained client websites, implemented new features, and optimized performance for better user experience.",
      technologies: ["JavaScript", "Next.js", "Tailwind", "REST APIs"]
    },
    {
      id: 3,
      title: "Zoho CRM Intern",
      company: "National Innovation Center",
      period: "2024 - 2025",
      description: "Assisted in developing web applications, fixed bugs, and participated in code reviews and team meetings.",
      technologies: ["Zoho Creator", "Zoho Forms", "Zoho Writer"]
    }
  ];

  const [selectedCompany, setSelectedCompany] = useState(experiences[0].id);

  const selectedExperience = experiences.find(exp => exp.id === selectedCompany);

  return (
    <div className="bg-slate-900 p-6 sm:p-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-white whitespace-nowrap">
            <span className="text-white mr-2">/</span> experiences
          </h2>
          <div className="ml-4 mt-3 w-130 h-px bg-teal-200 opacity-30 rounded-full grow"></div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Company Selector - Left Side */}
          <div className="lg:w-1/3">
            <div className="space-y-1">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setSelectedCompany(exp.id)}
                  className={`w-full text-left p-4 transition-all duration-300 relative ${
                    selectedCompany === exp.id
                      ? 'text-teal-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <p className="text-sm mt-1">{exp.period}</p>
                  {/* Line indicator for selected company */}
                  {selectedCompany === exp.id && (
                    <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-teal-400 "></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details - Right Side */}
          <div className="lg:w-2/3">
            {selectedExperience && (
              <div className="text-gray-400">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedExperience.title}
                </h3>
                <p className="text-teal-400 text-lg mb-6">{selectedExperience.period}</p>
                <p className="leading-relaxed mb-8 text-gray-300">
                  {selectedExperience.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {selectedExperience.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-teal-300 text-sm px-4 py-2 rounded border border-teal-800 bg-teal-900 bg-opacity-20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;