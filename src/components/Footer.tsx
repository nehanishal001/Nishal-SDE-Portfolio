
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-blue text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              <span className="text-portfolio-accent">My</span>Portfolio
            </h3>
            <p className="text-gray-300 mb-4">
              Software Engineer specializing in full-stack development, AI/ML integration, and cloud solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/nehanishal001" className="text-gray-300 hover:text-portfolio-accent transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/Neha_Nishal_S" className="text-gray-300 hover:text-portfolio-accent transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/neha-nishal-goud-s/" className="text-gray-300 hover:text-portfolio-accent transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-300 hover:text-portfolio-accent transition-colors" aria-label="Instagram"> */}
                {/* <Instagram className="h-5 w-5" /> */}
              {/* </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-portfolio-accent transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-portfolio-accent transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-portfolio-accent transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-portfolio-accent transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-portfolio-accent transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Key Skills</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Full Stack Development</li>
              <li className="text-gray-300">AI/ML Integration</li>
              <li className="text-gray-300">Database Architecture</li>
              <li className="text-gray-300">Cloud & DevOps</li>
              <li className="text-gray-300">API Development</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Tempe, Arizona, USA</li>
              <li className="text-gray-300">nngimg@gmail.com</li>
              <li className="text-gray-300">623-281-4699</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Neha Nishal Goud S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
