import React from 'react';
import Cube3D from '../components/Cube3D';
const AboutPage = () => {
  const education = [{
    degree: "B.E Computer Science and Engineering",
    institution: "Sathyabama Institute of Science and Technology",
    period: "2021-2025",
    grade: "CGPA - 7.9"
  }, {
    degree: "Intermediate in MPC",
    institution: "Narayana Junior College",
    period: "2019-2021",
    grade: "Percentage - 82.6"
  }, {
    degree: "Secondary School of Education",
    institution: "Triveni talent School",
    period: "2018-2019",
    grade: "CGPA - 9.5"
  }];
  return <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Cube3D className="absolute -top-10 right-0 opacity-30" />
          <Cube3D className="absolute bottom-0 left-10 opacity-20" />
          
          <h1 className="section-title text-center">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-10">
            {/* Image */}
            <div className="md:col-span-5 flex justify-center md:justify-end">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-portfolio-blue rounded-lg opacity-20 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 md:w-72 md:h-72 rounded-lg overflow-hidden border-2 border-portfolio-light-blue/30">
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800" alt="Placeholder - Add professional headshot of Pavan Kumar" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bio */}
            <div className="md:col-span-7 project-card">
              <h2 className="text-2xl font-bold text-portfolio-light-blue mb-4">Peddapalli Laxmi Pavan Kumar</h2>
              <p className="text-gray-300 mb-4 text-justify">An enthusiastic Computer Science Engineering student with a keen interest in technology and innovation.
Experienced in designing and developing full-stack web solutions and deep learning models.
Well-versed in programming languages like Python, Java, JavaScript, along with HTML and CSS.
Adept at using modern libraries and frameworks such as React to build dynamic interfaces.
Familiar with software development life cycle, Agile practices, and efficient debugging techniques.
Always eager to embrace new challenges and create meaningful tech-driven experiences.</p>
              <p className="text-gray-300 mb-6"></p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Phone:</p>
                  <p>(+91) 8121874093</p>
                </div>
                <div>
                  <p className="text-gray-400">Email:</p>
                  <p>pavankumar.7200384@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400">Location:</p>
                  <p>Chennai, Tamilnadu</p>
                </div>
                <div>
                  <p className="text-gray-400">Availability:</p>
                  <p>open to work at any time </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="mt-16">
            <h2 className="section-subtitle">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {education.map((edu, index) => <div key={index} className="project-card">
                  <div className="mb-2">
                    <span className="text-xs text-portfolio-light-blue font-semibold">{edu.period}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="mt-2 text-portfolio-light-blue font-medium">{edu.grade}</p>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default AboutPage;