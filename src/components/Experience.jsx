import React from 'react';

// Import logos
import aicteLogo from '../assets/logos/aicte.png';
import ieeeLogo from '../assets/logos/ieee.jpg';
import smartIndiaLogo from '../assets/logos/sih.png';
import navoDita from '../assets/logos/navinfotech_logo.jpg';

const experiences = [
  {
    title: "ML Virtual Intern",
    company: "Novodita Infotech",
    duration: "Jul 2024 - Aug 2024",
    description: "During this internship I develop DL models for brain tumor classification using CNN algorithm and how to preprocess Image Dataset",
    logo: navoDita,
  },
  {
    title: "Cloud Virtual Internship",
    company: "AICTE Virtual",
    duration: "Jan 2024 - Mar 2024",
    description: "Completed AWS Foundation and AWS Architecture courses, gaining hands-on experience with AWS services like EC2, S3, and Lambda, and deploying projects using these services.",
    logo: aicteLogo,
  },
  {
    title: "Web Master",
    company: "PCCOE IEEE",
    duration: "Nov 2022 - May 2023",
    description: "Created a website using React, Express, and PostgreSQL, resolved bugs, deployed the web app and database, and integrated a payment gateway option with a professional Git/GitHub workflow.",
    logo: ieeeLogo,
  },
  {
    title: "Smart India Hackathon 2023",
    company: "Government of India",
    duration: "Oct 2023 - Nov 2023",
    description: "Contributed to the development of a smart self-cleaning toilet, focused on water conservation, UV disinfection technology, and integrated bidet features, enhancing hygiene and sustainability in sanitation solutions.",
    logo: smartIndiaLogo,
  },
  // Add more experiences as needed
];

export default function Experience() {
  return (
    <section className="py-20 px-5 bg-gray-50 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <div className="flex items-center mb-4 justify-between">
                <h3 className="text-2xl font-semibold text-gray-800">{experience.title}</h3>
                <img src={experience.logo} alt={`${experience.company} logo`} className="h-10 w-10 object-contain mr-3"/>
              </div>
              <p className="text-lg text-indigo-500 mb-1 text-center">{experience.company}</p>
              <p className="text-sm text-gray-500 mb-4 text-center">{experience.duration}</p>
              <p className="text-base text-gray-700 text-center">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
