// components/ProjectShowcase.jsx
import { useState } from 'react';

// Icon for GitHub (Standard)
const GitHubIcon = (props) => (
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
const ArrowRightIcon = (props) => (
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
      title: "TDSB Homework Management Interface",
      description: "An application created for Toronto District School Board, with a Flask back-end and a Vue front-end.",
      technologies: ["Python (Flask)", "Vue.js", "Bootstrap", "SQL"],
      githubUrl: "https://github.com/username/tdsb-homework",
      deployedUrl: "https://tdsb-homework-app.vercel.app"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      deployedUrl: "https://ecommerce-platform-demo.netlify.app"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for managing daily tasks with drag-and-drop functionality and team collaboration features.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/username/task-manager",
      deployedUrl: "https://taskmanager-app.herokuapp.com"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive data visualization.",
      technologies: ["JavaScript", "API Integration", "Chart.js"],
      githubUrl: "https://github.com/username/weather-dashboard",
      deployedUrl: "https://weather-dashboard-app.vercel.app"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark/light mode toggle and smooth animations.",
      technologies: ["Next.js", "Framer Motion", "CSS3"],
      githubUrl: "https://github.com/username/portfolio",
      deployedUrl: "https://myportfolio-site.com"
    },
    {
      id: 6,
      title: "Chat Application",
      description: "Real-time messaging application with rooms, file sharing, and emoji reactions.",
      technologies: ["Socket.io", "React", "Express"],
      githubUrl: "https://github.com/username/chat-app",
      deployedUrl: "https://realtime-chat-app.herokuapp.com"
    }
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
            <div 
              key={project.id} 
              // Card Style: Deeper inset background, very rounded corners, border with gradient potential on hover
              className="group relative bg-slate-800 rounded-3xl p-px overflow-hidden 
                         transition-all duration-500 ease-in-out transform hover:scale-[1.01] hover:shadow-xl hover:shadow-teal-500/15"
            >
              {/* Floating Teal Accent (subtle visual interest) */}
              <span className="absolute top-0 left-0 h-1/2 w-full bg-teal-400/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></span>

              <div className="bg-slate-800 rounded-[calc(1.5rem-1px)] h-full flex flex-col p-6">
                
                {/* Header and Title */}
                <div className="flex flex-col mb-4">
                  {/* Subtle 'View' Indicator on Hover */}
                  <span className="text-xs font-semibold uppercase text-teal-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Project
                  </span>
                  
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-teal-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-base leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                {/* Technologies - Pill style with stronger contrast */}
                <div className="flex flex-wrap gap-2 mt-auto pb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-3 py-1 bg-slate-700/70 text-teal-300 rounded-lg border border-slate-700
                                 group-hover:bg-slate-700 transition-all duration-300 shadow-inner shadow-slate-900/10"
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
                <div className="flex justify-between items-center pt-5 border-t border-slate-700 mt-4">
                  
                  {/* GitHub Link - Subtle Text Link */}
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-500 hover:text-white transition-all duration-300 group/github p-2 -ml-2 rounded-lg"
                  >
                    <GitHubIcon className="group-hover/github:text-teal-400" />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                  
                  {/* Live Demo Button - Bolder CTA */}
                  <a 
                    href={project.deployedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-5 py-2 bg-teal-600 text-white rounded-xl font-bold text-sm
                               hover:bg-teal-500 transition-all duration-300 transform hover:scale-[1.03] 
                               shadow-lg shadow-teal-600/40 group/live"
                  >
                    Launch Demo
                    <ArrowRightIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;