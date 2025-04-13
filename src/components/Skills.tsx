
import { Progress } from "@/components/ui/progress";
import { Code2, Database, BarChart, Cloud, Bot, Shield } from "lucide-react";

const Skills = () => {
  const programmingSkills = [
    { name: "Python", value: 90 },
    { name: "JavaScript/TypeScript", value: 85 },
    { name: "Java", value: 80 },
    { name: "SQL", value: 85 },
    { name: "C++", value: 70 },
  ];

  const webSkills = [
    { name: "React", value: 85 },
    { name: "Node.js", value: 90 },
    { name: "Spring Boot", value: 80 },
    { name: "Flask/Django", value: 75 },
    { name: "REST APIs", value: 90 },
  ];

  const cloudSkills = [
    { name: "AWS", value: 80 },
    { name: "Azure", value: 85 },
    { name: "Docker", value: 80 },
    { name: "Kubernetes", value: 75 },
    { name: "CI/CD", value: 85 },
  ];

  const aiSkills = [
    { name: "NLP (LUIS, RAG)", value: 85 },
    { name: "LangChain", value: 80 },
    { name: "TensorFlow", value: 75 },
    { name: "Hugging Face", value: 80 },
  ];

  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="h-10 w-10 text-white" />,
      description: "Python, JavaScript, TypeScript, Java, SQL, C++",
      bgColor: "bg-blue-500",
    },
    {
      title: "Web Development",
      icon: <Code2 className="h-10 w-10 text-white" />,
      description: "React, Node.js, Spring Boot, Flask, Django, REST APIs",
      bgColor: "bg-purple-500",
    },
    {
      title: "AI/Machine Learning",
      icon: <Bot className="h-10 w-10 text-white" />,
      description: "NLP, LangChain, TensorFlow, Hugging Face",
      bgColor: "bg-pink-500",
    },
    {
      title: "Databases",
      icon: <Database className="h-10 w-10 text-white" />,
      description: "Snowflake, Oracle, PostgreSQL, MongoDB, Redis",
      bgColor: "bg-green-500",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-10 w-10 text-white" />,
      description: "AWS, Azure, Docker, Kubernetes, Jenkins, Git, CI/CD",
      bgColor: "bg-yellow-500",
    },
    {
      title: "Security",
      icon: <Shield className="h-10 w-10 text-white" />,
      description: "Fortify, WebInspect, Sonatype, OAuth 2.0, JWT",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue">My Skills</h2>
          <div className="mt-3 h-1 w-24 bg-portfolio-accent mx-auto"></div>
          <p className="mt-6 text-lg text-portfolio-gray max-w-2xl mx-auto">
            I've developed a diverse set of technical skills through my education, professional experience, and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className={`${category.bgColor} rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-portfolio-blue mb-2">{category.title}</h3>
              <p className="text-portfolio-gray">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">Programming</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-gray">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">Web Development</h3>
            <div className="space-y-6">
              {webSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-gray">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">Cloud & DevOps</h3>
            <div className="space-y-6">
              {cloudSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-gray">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-portfolio-blue mb-6">AI & Machine Learning</h3>
            <div className="space-y-6">
              {aiSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-portfolio-gray">{skill.name}</span>
                    <span className="text-portfolio-accent">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
