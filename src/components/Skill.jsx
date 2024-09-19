import React from 'react';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiAmazonaws } from 'react-icons/si';
import gfgLogo from '../images/gfg-logo.png';   // Add these logos in your images folder
import leetcodeLogo from '../images/leetcode-logo.png';
import hackerrankLogo from '../images/hackerrank-logo.png';
import codechefLogo from '../images/codechef-logo.png';

const skills = [
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> }, // JavaScript yellow
  { name: "React.js", icon: <SiReact color="#61DAFB" /> }, // React blue
  { name: "Node.js", icon: <SiNodedotjs color="#339933" /> }, // Node.js green
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }, // MongoDB green
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" /> }, // Tailwind CSS teal
  { name: "AWS", icon: <SiAmazonaws color="#FF9900" /> }, // AWS orange
];

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg px-6 py-4 rounded-lg mb-4 transform transition-transform hover:scale-105"
            >
              <div className="text-4xl text-blue-500 mb-2">
                {skill.icon}
              </div>
              <span className="text-lg font-semibold text-gray-800">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Programming Profiles */}
      <div className="container mx-auto text-center mt-16">
        <h3 className="text-4xl font-bold mb-8">Competitive Programming Profiles</h3>
        <div className="flex flex-wrap justify-center space-x-4">
          {/* LeetCode Profile */}
          <div className="flex flex-col items-center bg-white shadow-lg px-6 py-4 rounded-lg mb-4 transform transition-transform hover:scale-105">
            <img src={leetcodeLogo} alt="LeetCode Logo" className="w-10 h-10 mb-2" />
            <a href="https://leetcode.com/u/sajangaikwad2002/" className="text-blue-500 font-semibold" target="_blank" rel="noreferrer">
              LeetCode
            </a>
            <span className="text-gray-600">Problems Solved: 307</span>
          </div>

          {/* GFG Profile */}
          <div className="flex flex-col items-center bg-white shadow-lg px-6 py-4 rounded-lg mb-4 transform transition-transform hover:scale-105">
            <img src={gfgLogo} alt="GFG Logo" className="w-10 h-10 mb-2" />
            <a href="https://www.geeksforgeeks.org/user/sajangaikwad2002/" className="text-blue-500 font-semibold" target="_blank" rel="noreferrer">
              GeeksforGeeks
            </a>
            <span className="text-gray-600">Problems Solved: 445</span>
          </div>

          {/* CodeChef Profile */}
          <div className="flex flex-col items-center bg-white shadow-lg px-6 py-4 rounded-lg mb-4 transform transition-transform hover:scale-105">
            <img src={codechefLogo} alt="CodeChef Logo" className="w-10 h-10 mb-2" />
            <a href="https://www.codechef.com/users/sajangaikwad20" className="text-blue-500 font-semibold" target="_blank" rel="noreferrer">
              CodeChef
            </a>
            <span className="text-gray-600">Problems Solved: 414</span>
          </div>

          {/* HackerRank Profile */}
          <div className="flex flex-col items-center bg-white shadow-lg px-6 py-4 rounded-lg mb-4 transform transition-transform hover:scale-105">
            <img src={hackerrankLogo} alt="HackerRank Logo" className="w-10 h-10 mb-2" />
            <a href="https://www.hackerrank.com/profile/sajangaikwad2002" className="text-blue-500 font-semibold" target="_blank" rel="noreferrer">
              HackerRank
            </a>
            <span className="text-gray-600">3 star In Java</span>
          </div>
        </div>
      </div>
    </section>
  );
}
