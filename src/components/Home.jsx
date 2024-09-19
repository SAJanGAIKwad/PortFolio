import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import myPhoto from '../images/My_Photo1.jpeg'; // Replace with the correct path to your image

const Home = () => {
  return (
    <div className="home-container flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Banner Section */}
      <header className="text-center space-y-8 flex flex-col items-center">
        {/* Photo Section */}
        <div className="flex flex-col items-center">
          <img
            src={myPhoto}
            alt="Sajan Gaikwad"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg mb-4"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Hello, I'm <span className="text-red-500">Sajan Gaikwad</span>
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600 mb-4">
            <Typewriter
              words={['Web Developer', 'PCCOEIAN', 'Problem Solver', 'Full Stack Developer', 'Tech Enthusiast']}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto">
            This is Sajan Gaikwad, a passionate Web Developer and Full Stack Developer eager to solve real-world problems
            using technology.
          </p>
        </div>

        {/* Download Resume Button */}
        <a
          href="https://drive.google.com/file/d/1ZnmbF2ciwN5pIm4Bac4txSklUd7E8bUT/view?usp=sharing" // Update this path to your actual resume file
          download
          className="mt-6 inline-block bg-red-500 text-white font-medium py-3 px-8 rounded-full hover:bg-red-400 transition duration-300 ease-in-out shadow-lg"
        >
          Download CV
        </a>
      </header>

      {/* Spacing for layout structure */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;
