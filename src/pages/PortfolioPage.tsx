
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Cube3D from '../components/Cube3D';

const PortfolioPage = () => {
  const projects = [
    {
      title: "Voice to Text Application",
      description: "Developed an innovative Voice-to-Text Application using React.js, offering accurate and efficient speech recognition with a user-friendly interface and robust data security measures.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
      technologies: ["React.js", "Speech Recognition API", "CSS", "JavaScript"],
      githubLink: "https://github.com/Pavankumar098"
    },
    {
      title: "Fitness Management System",
      description: "Developed a user-centric Fitness Management App platform designed to streamline fitness training services with sections for exploring programs, membership plans, and fitness-related content.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
      githubLink: "https://github.com/Pavankumar098"
    },
    {
      title: "Multi-Modal Emotion Recognition System",
      description: "Developed a system integrating audio, video, and facial expression analysis for detecting emotions using deep learning techniques with real-time processing and a web-based interface.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800",
      technologies: ["Python", "CNN", "Deep Learning", "Web Interface"],
      githubLink: "https://github.com/Pavankumar098"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Cube3D className="absolute -top-10 right-0 opacity-30" />
          <Cube3D className="absolute bottom-0 left-10 opacity-20" />
          
          <h1 className="section-title text-center">My Portfolio</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Here are some of my notable projects that showcase my skills in full-stack web development and deep learning technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
