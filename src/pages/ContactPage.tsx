import React, { useState } from 'react';
import Cube3D from '../components/Cube3D';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactPage = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this data to an API
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon."
    });
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="relative">
          <Cube3D className="absolute -top-10 right-0 opacity-30" />
          <Cube3D className="absolute bottom-0 left-10 opacity-20" />
          
          <h1 className="section-title text-center">Contact Me</h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Contact Info */}
            <div className="md:col-span-5 project-card">
              <h2 className="text-2xl font-bold mb-6 text-portfolio-light-blue">Get in Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 font-medium mb-1">Name</p>
                  <p className="text-white text-lg">PEDDAPALLI LAXMI PAVAN KUMAR</p>
                </div>
                
                <div>
                  <p className="text-gray-300 font-medium mb-1">Location</p>
                  <p className="text-white text-lg">Chennai, Tamilnadu</p>
                </div>
                
                <div>
                  <p className="text-gray-300 font-medium mb-1">Phone</p>
                  <p className="text-white text-lg">(+91) 8121874093</p>
                </div>
                
                <div>
                  <p className="text-gray-300 font-medium mb-1">Email</p>
                  <p className="text-white text-lg">pavankumar.7200384@gmail.com</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-portfolio-light-blue">Connect with me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/Pavankumar098" target="_blank" rel="noopener noreferrer" className="bg-portfolio-dark-blue hover:bg-portfolio-blue transition-colors p-2 rounded-full">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/pavan-kumar-057285222/" target="_blank" rel="noopener noreferrer" className="bg-portfolio-dark-blue hover:bg-portfolio-blue transition-colors p-2 rounded-full">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:pavankumar.7200384@gmail.com" className="bg-portfolio-dark-blue hover:bg-portfolio-blue transition-colors p-2 rounded-full">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-7 project-card">
              <h2 className="text-2xl font-bold mb-6 text-portfolio-light-blue">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-gray-300 block mb-1">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-portfolio-light-blue focus:outline-none" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-gray-300 block mb-1">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-portfolio-light-blue focus:outline-none" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-gray-300 block mb-1">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-portfolio-light-blue focus:outline-none" required></textarea>
                </div>
                
                <button type="submit" className="bg-portfolio-blue hover:bg-portfolio-light-blue text-white px-6 py-3 rounded-md transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ContactPage;