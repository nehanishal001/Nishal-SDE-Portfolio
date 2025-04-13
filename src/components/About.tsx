import { Card, CardContent } from "@/components/ui/card";
import { UserCircle2, Calendar, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue">About Me</h2>
          <div className="mt-3 h-1 w-24 bg-portfolio-accent mx-auto"></div>
        </div>

        {/* About Summary + Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: About Text */}
          <div className="space-y-6">
            <p className="text-lg text-portfolio-gray">
              Hi there! I'm a passionate Software Engineer with expertise in Full Stack Development, AI/ML integration,
              and cloud technologies. I specialize in building modern web applications and AI-powered solutions.
            </p>
            <p className="text-lg text-portfolio-gray">
              I'm currently pursuing my Master's in Software Engineering at Arizona State University, expanding my knowledge
              in advanced software development practices and emerging technologies.
            </p>
            <p className="text-lg text-portfolio-gray">
              With over 2 years and 7 months of full-time industry experience, I’ve contributed to enterprise-grade solutions
              across HR tech, fintech, and conversational AI platforms.
            </p>
            {/* <a href="#experience" className="text-sm text-portfolio-accent underline">
              Jump to Professional Experience
            </a> */}
          </div>

          {/* Right Column: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <UserCircle2 className="h-10 w-10 text-portfolio-accent mb-3" />
                <h3 className="text-xl font-semibold text-portfolio-blue mb-2">Personal Info</h3>
                <p className="text-portfolio-gray">
                  <strong>Name:</strong> Neha Nishal Goud S<br />
                  <strong>Email:</strong> nngimg@gmail.com<br />
                  <strong>Phone:</strong> 623-281-4699
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Calendar className="h-10 w-10 text-portfolio-accent mb-3" />
                <h3 className="text-xl font-semibold text-portfolio-blue mb-2">Experience</h3>
                <p className="text-portfolio-gray text-sm">
                  2 years 7 months of Full-Time Experience<br />
                  Across AI, Cloud, and FinTech
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <GraduationCap className="h-10 w-10 text-portfolio-accent mb-3" />
                <h3 className="text-xl font-semibold text-portfolio-blue mb-2">Education</h3>
                <p className="text-portfolio-gray text-sm">
                  <strong>MS in Software Engineering</strong><br />
                  Arizona State University<br />
                  2023 – 2025 (GPA: 3.9/4.0)
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-portfolio-accent mb-3" />
                <h3 className="text-xl font-semibold text-portfolio-blue mb-2">Key Skills</h3>
                <p className="text-portfolio-gray text-sm">
                  Full Stack Development<br />
                  AI/ML Integration<br />
                  Cloud & DevOps
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience" className="mt-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-blue mb-6 text-center">Professional Experience</h3>

            {/* Experience 1: Darwinbox */}
            <div className="mb-8 border border-gray-100 bg-white shadow-sm rounded-lg p-6">
              <div className="flex justify-between flex-wrap gap-y-2">
                <h4 className="text-xl font-semibold text-portfolio-blue">Full Stack Developer – Darwinbox</h4>
                <span className="text-sm text-portfolio-gray">Apr 2022 – Jul 2023 · Hyderabad, India</span>
              </div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-portfolio-gray">
                <li>Built HR automation tools with Node.js, TypeScript, and Azure Bot Services</li>
                <li>Integrated LUIS NLP and REST APIs for chatbot query resolution</li>
                <li>Implemented RBAC, JWT auth, and adaptive cards for MS Teams</li>
                <li>Reduced turnaround time for approvals by 50%</li>
              </ul>
            </div>

            {/* Experience 2: Fiserv */}
            <div className="mb-8 border border-gray-100 bg-white shadow-sm rounded-lg p-6">
              <div className="flex justify-between flex-wrap gap-y-2">
                <h4 className="text-xl font-semibold text-portfolio-blue">Software Engineer – Fiserv</h4>
                <span className="text-sm text-portfolio-gray">Aug 2021 – Mar 2022 · Pune, India</span>
              </div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-portfolio-gray">
                <li>Developed secure payment APIs using Java and Spring Boot</li>
                <li>Built internal admin dashboards with React and Redux</li>
                <li>Improved CI/CD deployment cycles with Jenkins and Docker</li>
                <li>Created unit/integration tests to maintain 85%+ coverage</li>
              </ul>
            </div>

            {/* Experience 3: Kore.ai */}
            <div className="mb-8 border border-gray-100 bg-white shadow-sm rounded-lg p-6">
              <div className="flex justify-between flex-wrap gap-y-2">
                <h4 className="text-xl font-semibold text-portfolio-blue">Software Engineer Intern – Kore.ai</h4>
                <span className="text-sm text-portfolio-gray">Jan 2021 – Jun 2021 · Hyderabad, India</span>
              </div>
              <ul className="list-disc list-inside mt-4 space-y-2 text-sm text-portfolio-gray">
                <li>Built conversation flows for enterprise virtual assistants using Kore.ai platform</li>
                <li>Integrated backend logic for dynamic entity resolution using JavaScript</li>
                <li>Worked closely with UX teams to enhance bot usability across web and mobile</li>
                <li>Documented workflows and automation logic for client onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
