import React from 'react';
import event from "../images/Event.png"
import finance from "../images/Finance.png"
const projects = [
  {
    title: "Finance Tracker",
    description: "A MERN stack application deploy on live environment for tracking personal finances with set goal daily expence tracker like features added.",
    link: "https://personalfinancetrackerrr.netlify.app/",
    image: finance, // Add the actual image path
    technologies: "MongoDB, Express, React, Node.js"
  },
  {
    title: "Event Management System",
    description: "A MERN stack application for managing college events using React, Express, and MongoDB.",
    link: "https://github.com/SAJanGAIKwad/PCCOE-ALL-Event-Frontend",
    image: event,
    technologies: "MongoDB, Express, React, Node.js"
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="py-20 bg-white min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <img
                src={project.image}
                alt={`${project.title} Image`}
                className="w-full h-52 object-cover mb-4"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-6">Technologies: {project.technologies}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
