import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Contact Me</h2>
        <p className="text-lg mb-10 text-gray-700">
          Feel free to reach out via email or connect with me on social media.
        </p>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <textarea
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-12">
          <p className="text-lg text-gray-700">Or connect with me:</p>
          <div className="flex justify-center space-x-6 mt-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/sajan-gaikwad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/SAJanGAIKwad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-colors duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
