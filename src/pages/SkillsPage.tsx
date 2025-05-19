import React from 'react';
import SkillBar from '../components/SkillBar';
import Cube3D from '../components/Cube3D';

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
          
          <h1 className="section-title text-center">My Skills</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            I've developed a diverse skill set focused on full-stack web development and deep learning technologies.
          </p>
          
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
              <div className="project-card">
                <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Frameworks</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {frameworks.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-2 text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Databases */}
              <div className="project-card">
                <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Databases</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {databases.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-2 text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tools & Cloud */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="project-card">
                  <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Tools</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {tools.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="mr-2 text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="project-card">
                  <h3 className="text-xl font-medium text-portfolio-light-blue mb-4">Cloud/Platforms</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {cloud.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <span className="mr-2 text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
