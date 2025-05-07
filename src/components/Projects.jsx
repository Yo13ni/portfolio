import React from 'react';
import weatherapp from '../assets/weatherapp.jpg';

const projects = [
  {
    id: 1,
    name: "weather app",
    technologies: "react js",
    image: weatherapp,
    github: "https://github.com/Yo13ni",
  },
  {
    id: 2,
    name: "weather app",
    technologies: "react js",
    image: weatherapp,
    github: "https://github.com/Yo13ni",
  },
  {
    id: 3,
    name: "weather app",
    technologies: "react js",
    image: weatherapp,
    github: "https://github.com/Yo13ni",
  },
  {
    id: 4,
    name: "weather app",
    technologies: "react js",
    image: weatherapp,
    github: "https://github.com/Yo13ni",
  }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 overflow-x-hidden">
        <h2 className="text-4xl font-bold text-center mb-12">Projec<span className='text-yellow-400'>ts</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-transparent border border-white p-6 rounded-lg shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all transform hover:scale-105 w-full h-[28rem]"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover" 
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold transition-transform transform hover:scale-105"
              >
                Github
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
