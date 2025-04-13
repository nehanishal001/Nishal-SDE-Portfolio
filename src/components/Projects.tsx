
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Driven Chatbot Integration",
      description: "Integrated Microsoft Bot Framework with Node.js, TypeScript, and Azure Bot Services to deploy an AI-powered chatbot in Microsoft Teams, improving HR query resolution efficiency by 40%.",
      image: "https://images.unsplash.com/photo-1673187879819-c6e2b4cdbf1a?w=800&q=80",
      technologies: ["Node.js", "TypeScript", "Azure Bot Services", "Microsoft Teams", "LUIS NLP"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Exception Processing and Transaction Research",
      description: "Developed and optimized RESTful APIs using Java, Spring Boot, and OpenAPI for the STAR application, reducing exception processing times by 50% and implementing microservices architecture.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      technologies: ["Java", "Spring Boot", "Snowflake", "Oracle", "Kafka", "Jenkins"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Health Insurance Charge Prediction Model",
      description: "A full-stack machine learning application using Python for regression-based insurance charge prediction with 78% accuracy, deployed on IBM Cloud with an automated API.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b7e6a?w=800&q=80",
      technologies: ["Python", "Flask", "NumPy", "Pandas", "Scikit-learn", "IBM Cloud", "Node-RED"],
      liveLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue">My Projects</h2>
          <div className="mt-3 h-1 w-24 bg-portfolio-accent mx-auto"></div>
          <p className="mt-6 text-lg text-portfolio-gray max-w-2xl mx-auto">
            Here are some of my key projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-portfolio-blue">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-portfolio-blue-light text-white">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a 
                  href={project.liveLink} 
                  className="flex items-center text-portfolio-accent hover:text-portfolio-accent-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live Demo
                </a>
                <a 
                  href={project.githubLink}
                  className="flex items-center text-portfolio-accent hover:text-portfolio-accent-light transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/nehanishal001" 
            className="text-portfolio-accent hover:text-portfolio-accent-light transition-colors text-lg font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Projects on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
