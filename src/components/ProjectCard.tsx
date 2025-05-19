
import React from 'react';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  image, 
  githubLink 
}) => {
  return (
    <div className="project-card">
      {image && (
        <div className="mb-4 overflow-hidden rounded-md">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover object-top hover:object-bottom transition-all duration-5000 ease-in-out"
          />
        </div>
      )}
      
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-portfolio-light-blue">{title}</h3>
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        )}
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="bg-portfolio-dark-blue px-2 py-1 rounded-md text-xs text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
