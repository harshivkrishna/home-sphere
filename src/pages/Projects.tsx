import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';
import PortfolioShowcase from '../components/PortfolioShowcase';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  year: string;
  location: string;
  details: string;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Renovation'];

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Residential",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "A stunning modern villa with clean lines and sophisticated finishes.",
      year: "2024",
      location: "Beverly Hills, CA",
      details: "This 6,000 sq ft luxury villa features an open-concept design with floor-to-ceiling windows, premium marble finishes, and custom millwork throughout. The project included a complete interior transformation focusing on maximizing natural light and creating seamless indoor-outdoor living spaces."
    },
    {
      id: 2,
      title: "Contemporary Kitchen Design",
      category: "Kitchen",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "A sleek, functional kitchen with premium appliances and custom cabinetry.",
      year: "2024",
      location: "Manhattan, NY",
      details: "This contemporary kitchen features custom walnut cabinetry, quartz countertops, and integrated premium appliances. The design maximizes storage while maintaining clean lines and includes a large island perfect for both cooking and entertaining."
    },
    {
      id: 3,
      title: "Executive Office Suite",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Professional office space designed for productivity and client meetings.",
      year: "2023",
      location: "Downtown Chicago, IL",
      details: "A sophisticated executive office suite spanning 3,000 sq ft, featuring custom furniture, acoustic treatments, and flexible meeting spaces. The design balances professionalism with comfort, incorporating biophilic elements to enhance productivity."
    },
    {
      id: 4,
      title: "Historic Home Renovation",
      category: "Renovation",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Careful restoration of a Victorian home while adding modern amenities.",
      year: "2023",
      location: "San Francisco, CA",
      details: "This historic Victorian home renovation preserved original architectural details while incorporating modern systems and finishes. The project included structural reinforcement, updated electrical and plumbing, and period-appropriate interior design elements."
    },
    {
      id: 5,
      title: "Penthouse Living Room",
      category: "Residential",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Elegant penthouse with panoramic city views and luxury finishes.",
      year: "2023",
      location: "Miami, FL",
      details: "This penthouse living space showcases floor-to-ceiling windows with stunning city views. The design features custom furniture, designer lighting, and a sophisticated color palette that complements the urban backdrop while creating a warm, inviting atmosphere."
    },
    {
      id: 6,
      title: "Boutique Hotel Lobby",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Welcoming hotel lobby with contemporary design and local influences.",
      year: "2022",
      location: "Austin, TX",
      details: "This boutique hotel lobby design creates an immediate sense of place with locally-sourced materials and custom artwork. The space includes flexible seating areas, a statement reception desk, and integrated technology for modern travelers."
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#D4AF37]">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of exceptional interior design projects. Each space tells a unique 
              story of transformation, creativity, and attention to detail.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  layout
                >
                  <div className="relative overflow-hidden rounded-xl bg-[#2A2A2A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-[#D4AF37] text-black p-3 rounded-full">
                        <ExternalLink className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <PortfolioShowcase />

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#1C1C1C] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-96 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-300"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4 text-[#D4AF37]">
                  {selectedProject.title}
                </h2>
                
                <div className="flex items-center space-x-6 mb-6 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-[#D4AF37]" />
                    <span>{selectedProject.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#D4AF37]" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedProject.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "15", label: "Years of Experience" },
              { number: "50+", label: "Awards Won" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Own <span className="text-[#D4AF37]">Transformation?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something extraordinary together. 
              Every great design starts with a conversation.
            </p>
            <motion.button
              className="bg-[#D4AF37] text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#B8941F] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;