import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import PricingSection from '../components/PricingSection';
import BlogSection from '../components/BlogSection';
import { Palette, Home as HomeIcon, Wrench, Sofa, ArrowRight, Award, Users, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior design solutions tailored to your unique style and preferences.",
      features: ["Space Planning", "Color Consultation", "Furniture Selection", "Custom Layouts"]
    },
    {
      icon: HomeIcon,
      title: "Modular Kitchen",
      description: "Modern, functional kitchens designed to maximize space and enhance your culinary experience.",
      features: ["Custom Cabinets", "Smart Storage", "Premium Appliances", "Ergonomic Design"]
    },
    {
      icon: Wrench,
      title: "Renovations",
      description: "Complete home renovations that transform your space while preserving its character.",
      features: ["Full Remodeling", "Structural Changes", "Modern Updates", "Quality Materials"]
    },
    {
      icon: Sofa,
      title: "Custom Furniture",
      description: "Bespoke furniture pieces crafted to perfectly fit your space and lifestyle needs.",
      features: ["Made-to-Order", "Premium Materials", "Unique Designs", "Perfect Fit"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Design Awards" }
  ];

  return (
    <div>
      <HeroSection />

      {/* About Section */}
      <section className="py-20 bg-[#1C1C1C] overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Creating <span className="text-[#D4AF37]">Exceptional</span> Spaces
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 15 years of experience in luxury interior design, we specialize in creating 
                spaces that perfectly balance aesthetics, functionality, and your personal style. 
                Every project is a unique journey of transformation.
              </p>
              <div className="space-y-4 mb-8">
                {["Award-winning design team", "Personalized design approach", "Premium quality materials", "Timely project completion"].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-[#D4AF37]" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.button
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-[#B8941F] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Luxury Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-black p-6 rounded-xl">
                <Award className="h-8 w-8 mb-2" />
                <div className="text-sm font-semibold">Award Winning</div>
                <div className="text-xs">Design Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
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

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#D4AF37]">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to completion, we offer comprehensive interior design solutions 
              that transform your vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-[#D4AF37]">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">Showcasing our latest design achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Modern Living Space",
                category: "Residential"
              },
              {
                image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Luxury Kitchen Design",
                category: "Kitchen"
              },
              {
                image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
                title: "Executive Office",
                category: "Commercial"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm text-[#D4AF37] font-semibold mb-1">{project.category}</div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      <TestimonialSlider />

      <PricingSection />

      <BlogSection />

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform <span className="text-[#D4AF37]">Your Space?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life. Contact us today for a consultation and discover 
              how we can create the perfect space for you.
            </p>
            <motion.button
              className="bg-[#D4AF37] text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#B8941F] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;