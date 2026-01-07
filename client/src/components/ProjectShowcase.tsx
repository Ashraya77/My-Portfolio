// components/ProjectShowcase.jsx
import { useState } from 'react';

// Icon for GitHub (Standard)
const GitHubIcon = (props: any) => (
  <svg 
    className="w-5 h-5 group-hover/github:text-teal-400 transition-colors duration-300" 
    fill="currentColor" 
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Icon for Live Demo (Arrow Right)
const ArrowRightIcon = (props: any) => (
    <svg 
        className="w-5 h-5 ml-1 transition-transform duration-300 group-hover/live:translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        {...props}
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const ProjectShowcase = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Solution Computer House",
      description: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      technologies: ["Nextjs", "Expressjs", "Tailwind", "MongoDB"],
      githubUrl: "https://github.com/Ashraya77/SolutionComputerHouse",
      deployedUrl: "https://tdsb-homework-app.vercel.app"
    },
    {
      id: 2,
      title: "Hotel Forest",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
      technologies: ["Nextjs", "Taiwind"],
      githubUrl: "https://github.com/Ashraya77/Hotel-Forest1",
      deployedUrl: "https://ecommerce-platform-demo.netlify.app"
    },
      {
      id: 3,
      title: "Hotel Forest",
      description: "A full-stack webapp with Nestjs, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
      technologies: ["Nextjs", "Taiwind"],
      githubUrl: "https://github.com/TIWARIANKIT10/Void-Innovation",
      deployedUrl: "https://void-innovation.vercel.app/"
    },
    
    
      
  ]);

  return (
    <div className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <p className="text-teal-400 font-medium uppercase tracking-widest text-sm">
            Recent Work
          </p>
          <h2 className="text-5xl font-extrabold text-white mt-3 border-l-4 border-teal-400 pl-4">
            Creative Showcase
          </h2>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <a 
              key={project.id} 
              href={project.deployedUrl} // Make the entire card a link
              target="_blank"
              rel="noopener noreferrer"
              // REVISED CARD STYLE: Smooth lift effect on hover (translate-y-1) and background shift.
              className="group block bg-slate-800 rounded-xl p-6 h-full 
                         transition-all duration-300 ease-in-out 
                         hover:bg-slate-700/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-700/40"
            >
              <div className="h-full flex flex-col">
                
                {/* Header and Title */}
                <div className="flex flex-col mb-4">
                  
                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-teal-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                {/* Technologies - Clean pills with clear text contrast */}
                <div className="flex flex-wrap gap-2 mt-auto pb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-3 py-1 bg-slate-700 text-teal-300 rounded-full border border-slate-600
                                 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs font-medium px-3 py-1 text-slate-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Footer with Links */}
                {/* Removed the separate button/link structure and made the entire card the link to the demo. 
                    The GitHub link remains separate for a secondary action. */}
                <div className="flex justify-between items-center pt-5 border-t border-slate-700 mt-4">
                  
                  {/* GitHub Link - Subtle Secondary Link */}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent card link from being triggered
                    className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group/github"
                  >
                    <GitHubIcon className="group-hover/github:text-teal-400" />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                  
                  {/* Indicator that the card itself is the primary CTA */}
                  <span
                    className="flex items-center text-sm font-semibold text-teal-400 group-hover:text-teal-300 transition-colors duration-300"
                  >
                    View Demo
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;