import myPhoto from '../images/My_Photo1.jpeg';
import gfgLogo from '../images/gfg-logo.png';   // Add these logos in your images folder
import leetcodeLogo from '../images/leetcode-logo.png';
import hackerrankLogo from '../images/hackerrank-logo.png';
import codechefLogo from '../images/codechef-logo.png';
export default function About() {
  return (
    <section className="py-20 bg-gray-100 min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Top section with image and about me heading */}
        <div className="flex flex-col items-center mb-12">
          <img
            src={myPhoto} className='dow-lg border-4 rounded-lg border-white mb-8'
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">About Me</h2>
          <p className="text-gray-600 text-center max-w-2xl">
            To secure a challenging and rewarding position in a dynamic organization where I can leverage my expertise in Web Development for creating attractive UIs,
            my growing skills in DevOps and AWS technologies, and my foundation in Machine Learning fundamentals.
          </p>
        </div>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Competitive Programming Profiles</h3>

          {/* Use flex-wrap for responsive layout */}
          <div className="flex flex-wrap gap-6 justify-center">

            {/* LeetCode Profile */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto text-center">
              <img src={leetcodeLogo} alt="LeetCode Logo" className="w-10 h-10" />
              <a href="https://leetcode.com/u/sajangaikwad2002/" className="text-blue-500" target="_blank" rel="noreferrer">
                LeetCode
              </a>
              <span className="text-gray-600">Problems Solved: 307</span>
            </div>

            {/* GFG Profile */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto text-center">
              <img src={gfgLogo} alt="GFG Logo" className="w-10 h-10" />
              <a href="https://www.geeksforgeeks.org/user/sajangaikwad2002/" className="text-blue-500" target="_blank" rel="noreferrer">
                GeeksforGeeks
              </a>
              <span className="text-gray-600">Problems Solved: 445</span>
            </div>

            {/* CodeChef Profile */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto text-center">
              <img src={codechefLogo} alt="CodeChef Logo" className="w-10 h-10" />
              <a href="https://www.codechef.com/users/sajangaikwad20" className="text-blue-500" target="_blank" rel="noreferrer">
                CodeChef
              </a>
              <span className="text-gray-600">Problems Solved: 414</span>
            </div>

            {/* HackerRank Profile */}
            <div className="flex flex-col items-center space-y-2 w-full sm:w-auto text-center">
              <img src={hackerrankLogo} alt="HackerRank Logo" className="w-10 h-10" />
              <a href="https://www.hackerrank.com/profile/sajangaikwad2002" className="text-blue-500" target="_blank" rel="noreferrer">
                HackerRank
              </a>
              <span className="text-gray-600">3 star In Java</span>
            </div>
          </div>
        </div>



        {/* Details section */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
            <p className="text-gray-700">
              <strong>Pimpri Chinchwad College of Engineering Pune</strong><br />
              B.Tech in Information Technology (Nov 2021 - May 2025)<br />
              <span className="text-indigo-500">7.94 CGPA</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Work Experience</h3>
            <p className="text-gray-700">
              <strong>Cloud Virtual Internship</strong><br />
              Intern @ AICTE Virtual (Jan 2024 – Mar 2024)<br />
              <span className="block mt-2">• Completed AWS Foundation and Architecture courses</span>
              <span className="block">• Gained experience with AWS services like EC2, S3, and Lambda</span>
            </p>
            <p className="text-gray-700 mt-4">
              <strong>PCCOE IEEE Member</strong><br />
              Web Master (Nov 2022 - May 2023)<br />
              <span className="block mt-2">• Developed a website using React.js, Node.js, and PostgreSQL</span>
              <span className="block">• Integrated a payment gateway and managed deployment</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            <p className="text-gray-700">
              <span className="block mt-2">• Programming Languages: C++, Java, Python</span>
              <span className="block">• Technologies & Tools: React, Express, Git, Docker, Kubernetes, Jenkins</span>
              <span className="block">• Certifications: Machine Learning, AWS Cloud, Postman API Fundamentals</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Research & Publications</h3>
            <p className="text-gray-700">
              <strong>Deep Learning</strong><br />
              Enhancing Brain Tumor Classification (Jan 2024 - Feb 2024)<br />
              <span className="block mt-2">• Published research paper on brain tumor classification using CNNs</span>
              <span className="block">• Achieved high accuracy in tumor classification models</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Projects</h3>
            <p className="text-gray-700">
              <strong>Single Web Page On Finance Tracker App</strong><br />
              <span className="block mt-2 p-2">• Developed a Finance Tracker Web Application: Built using the MERN stack (MongoDB, Express.js, React.js, Node.js),
                featuring user authentication, expense tracking, and responsive design</span>
              <span className="block p-2">• Implemented Key Features: Created an expense list component to display and manage transaction details, including
                functionality for deleting transactions and integrating a backend API.</span>
            </p>
            <p className="text-gray-700">
              <strong>Event Management System</strong><br />
              <span className="block mt-2 p">• Built a scalable Single Page Application using React.js and Node.js</span>
              <span className="block">• Implemented admin interface for event organizers and participants</span>
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Job/Internship Portal</strong><br />
              <span className="block mt-2">• Developed a job/internship portal using PHP and MySQL</span>
              <span className="block">• Designed interfaces for recruiters to post listings and students to apply</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extra-Curricular Activities</h3>
            <p className="text-gray-700">
              <strong>Smart India Hackathon 2023</strong><br />
              <span className="block mt-2">• Contributed to the development of a smart self-cleaning toilet system</span>
              <span className="block">• Focused on water conservation, UV disinfection, and integrated bidet features</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
