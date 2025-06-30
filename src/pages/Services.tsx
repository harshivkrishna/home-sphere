import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import FAQSection from '../components/FAQSection';
import { Palette, Home, Wrench, Sofa, Lightbulb, Ruler, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: "Interior Design",
      description: "Complete interior design solutions that reflect your personal style and enhance your lifestyle. From concept to completion, we handle every detail.",
      features: ["Space Planning & Layout", "Color Consultation", "Furniture Selection", "Lighting Design", "Custom Window Treatments", "Art & Accessory Curation"]
    },
    {
      icon: Home,
      title: "Modular Kitchen",
      description: "Modern, functional kitchens designed to maximize space and efficiency while maintaining aesthetic appeal. Every kitchen is tailored to your cooking habits.",
      features: ["Custom Cabinet Design", "Smart Storage Solutions", "Premium Appliance Integration", "Ergonomic Layouts", "Countertop Selection", "Backsplash Design"]
    },
    {
      icon: Wrench,
      title: "Complete Renovations",
      description: "Full-scale renovations that transform your entire space. We manage every aspect from demolition to final touches with minimal disruption.",
      features: ["Structural Modifications", "Electrical & Plumbing Updates", "Flooring Installation", "Wall Treatments", "Ceiling Design", "Complete Makeovers"]
    },
    {
      icon: Sofa,
      title: "Custom Furniture",
      description: "Bespoke furniture pieces designed and crafted specifically for your space. Each piece is unique and perfectly suited to your needs.",
      features: ["Made-to-Measure Pieces", "Premium Material Selection", "Unique Design Concepts", "Expert Craftsmanship", "Perfect Space Utilization", "Quality Guarantee"]
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Comprehensive lighting solutions that create ambiance, highlight features, and improve functionality throughout your space.",
      features: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Smart Controls", "Energy Efficiency", "Mood Enhancement"]
    },
    {
      icon: Ruler,
      title: "Space Planning",
      description: "Optimize your space with expert planning that maximizes functionality while maintaining aesthetic appeal and flow.",
      features: ["Traffic Flow Analysis", "Furniture Arrangement", "Storage Optimization", "Multi-functional Spaces", "Scale & Proportion", "Room Functionality"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We begin with an in-depth consultation to understand your vision, needs, and budget."
    },
    {
      step: "02",
      title: "Design Development",
      description: "Our team creates detailed designs, mood boards, and 3D renderings for your approval."
    },
    {
      step: "03",
      title: "Material Selection",
      description: "We help you choose the perfect materials, finishes, and furnishings for your project."
    },
    {
      step: "04",
      title: "Project Execution",
      description: "Our expert team manages the entire installation process with attention to every detail."
    },
    {
      step: "05",
      title: "Final Styling",
      description: "We add the finishing touches that make your space truly complete and personalized."
    }
  ];

  return (
    <div className="pt-16">
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
              Our <span className="text-[#D4AF37]">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From complete home transformations to custom furniture pieces, we offer comprehensive 
              interior design services tailored to your unique needs and style preferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#D4AF37]">Process</span>
            </h2>
            <p className="text-xl text-gray-300">A streamlined approach to bringing your vision to life</p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#D4AF37] transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="bg-[#D4AF37] text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-lg relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-[#D4AF37]">Home Sphere?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                With over 15 years of experience and hundreds of successful projects, we've established 
                ourselves as leaders in luxury interior design. Here's what sets us apart:
              </p>
              
              <div className="space-y-6">
                {[
                  "Award-winning design team with proven expertise",
                  "Personalized approach tailored to your lifestyle",
                  "Premium quality materials and craftsmanship",
                  "On-time delivery and transparent communication",
                  "Post-completion support and maintenance",
                  "Competitive pricing with no hidden costs"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="mt-8 bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 hover:bg-[#B8941F] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Your Free Consultation</span>
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
                alt="Luxury Interior Design"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-black p-6 rounded-xl border-2 border-[#D4AF37]">
                <div className="text-2xl font-bold text-[#D4AF37] mb-1">15+</div>
                <div className="text-sm text-gray-300">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />

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
              Ready to Get <span className="text-[#D4AF37]">Started?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your space with our expert design services. Contact us today for a 
              free consultation and let's discuss how we can bring your vision to life.
            </p>
            <motion.button
              className="bg-[#D4AF37] text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-[#B8941F] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;