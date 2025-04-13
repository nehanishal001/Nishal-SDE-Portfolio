import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-12">
        
        {/* === Image Section === */}
        <div className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full shadow-md border-4 border-portfolio-accent">
          <img
            src="/nishal-preview.jpg" // make sure this image is in your public folder
            alt="Neha Nishal Goud S"
            className="w-full h-full object-cover"
          />
        </div>

        {/* === Text Section === */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-blue mb-6 animate-fade-in">
            Hello, I'm <span className="text-portfolio-accent">Neha Nishal Goud S</span>
          </h1>
          <p className="text-xl md:text-2xl text-portfolio-gray mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Software Engineer & Full Stack Developer
          </p>
          <p className="text-lg text-portfolio-gray-light mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            I specialize in building modern web applications, integrating AI/ML solutions, and developing scalable cloud-based systems.
            Currently pursuing MS in Software Engineering at Arizona State University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild className="bg-portfolio-accent hover:bg-portfolio-accent-light text-portfolio-blue font-semibold">
              <a href="/Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>

            <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
              <a href="https://github.com/nehanishal001" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View My Projects
              </a>
            </Button>

            <Button asChild variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue hover:text-white">
              <a href="https://www.linkedin.com/in/neha-nishal-goud-s/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* === Scroll Down Icon === */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-6 w-6 text-portfolio-accent" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
