
import React from 'react';
import SkillBar from '../components/SkillBar';
import Cube3D from '../components/Cube3D';
import { Card, CardContent } from '@/components/ui/card';
import { Html, Css, FileCode, Database, Github } from 'lucide-react';

const SkillsPage = () => {
  const technicalSkills = [
    { name: "Python", percentage: 90 },
    { name: "Java", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "React.js", percentage: 85 },
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "Node.js", percentage: 80 },
    { name: "Express.js", percentage: 80 },
    { name: "SQL", percentage: 85 },
    { name: "Git", percentage: 80 },
  ];

  const skillIcons = [
    { icon: Html, name: "HTML", className: "text-orange-500" },
    { icon: Css, name: "CSS", className: "text-blue-500" },
    { icon: FileCode, name: "JavaScript", className: "text-yellow-400" },
    { icon: React, name: "React", className: "text-blue-400" },
    { icon: FileCode, name: "Node.js", className: "text-green-500" },
    { icon: Database, name: "MySQL", className: "text-blue-600" },
    { icon: Database, name: "Oracle", className: "text-red-500" },
    { icon: Github, name: "Git", className: "text-white" },
  ];

  const frameworks = [
    { icon: "📊", name: "React" },
    { icon: "🚀", name: "Express.js" },
    { icon: "🖥️", name: "Node.js" },
  ];

  const databases = [
    { icon: "🛢️", name: "MySQL" },
    { icon: "📊", name: "Oracle" },
    { icon: "🗄️", name: "SQL Server" },
  ];

  const tools = [
    { icon: "🔄", name: "Git" },
    { icon: "💻", name: "VS Code" },
  ];

  const cloud = [
    { icon: "☁️", name: "Oracle Cloud" },
    { icon: "☁️", name: "AWS (Basic)" },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Cube3D className="absolute -top-10 right-0 opacity-30" />
          <Cube3D className="absolute bottom-0 left-10 opacity-20" />
          
          <h1 className="section-title text-center mb-4">My Skills</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            I've developed a diverse skill set focused on full-stack web development and deep learning technologies.
          </p>
          
          {/* Skills Icons */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {skillIcons.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-lg bg-portfolio-dark-blue/50 border border-portfolio-blue/20 flex items-center justify-center mb-2 hover:blue-glow transition-all">
                  <skill.icon size={32} className={skill.className} />
                </div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Technical Skills */}
            <div className="project-card">
              <h2 className="section-subtitle mb-6">Technical Skills</h2>
              <div className="space-y-5">
                {technicalSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    percentage={skill.percentage} 
                  />
                ))}
              </div>
            </div>
            
            {/* Other Skills */}
            <div className="space-y-8">
              {/* Frameworks */}
              <Card className="project-card border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Frameworks</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {frameworks.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center mr-2 text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Databases */}
              <Card className="project-card border-none">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Databases</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {databases.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="w-8 h-8 flex items-center justify-center mr-2 text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Tools & Cloud */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="project-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Tools</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {tools.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center mr-2 text-lg">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="project-card border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Cloud/Platforms</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {cloud.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <span className="w-8 h-8 flex items-center justify-center mr-2 text-lg">{item.icon}</span>
                          <span>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
