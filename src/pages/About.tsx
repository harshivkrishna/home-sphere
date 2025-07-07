import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, CheckCircle } from 'lucide-react';
import ProcessTimeline from '../components/ProcessTimeline';
import AwardsSection from '../components/AwardsSection';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Martinez",
      role: "Lead Interior Designer",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "15+ years of experience in luxury interior design with a passion for creating timeless spaces."
    },
    {
      name: "Michael Chen",
      role: "Senior Architect",
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Specialized in residential and commercial architecture with focus on sustainable design."
    },
    {
      name: "Emma Davis",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      description: "Expert in project coordination ensuring every detail is executed to perfection."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest standards of quality and craftsmanship."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for design drives us to create spaces that truly reflect our clients' personalities and dreams."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients throughout the entire process, making their vision our priority."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace cutting-edge design trends while maintaining timeless appeal in all our creations."
    }
  ];

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
              About <span className="text-[#D4AF37]">Home Sphere</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Founded on the principle that exceptional design has the power to transform lives, 
              we've been creating beautiful, functional spaces for over 7 years.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our Studio"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4AF37]">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                What started as a small design studio has grown into one of the region's most 
                respected interior design firms. Our journey began with a simple belief: that 
                great design should be both beautiful and functional.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Today, we continue to push the boundaries of interior design, creating spaces 
                that not only meet our clients' needs but exceed their expectations. Every 
                project is an opportunity to tell a unique story through design.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#D4AF37] mb-2">30 Days</div>
                  <div className="text-gray-300">Project Completed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our <span className="text-[#D4AF37]">Values</span>
            </h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-[#D4AF37] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon className="h-10 w-10 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="text-[#D4AF37]">Team</span>
            </h2>
            <p className="text-xl text-gray-300">The talented professionals behind every successful project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-black p-8 rounded-2xl text-center group hover:bg-[#2A2A2A] transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#D4AF37]"
                  whileHover={{ scale: 1.1 }}
                />
                <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">{member.name}</h3>
                <p className="text-gray-400 mb-4 font-medium">{member.role}</p>
                <p className="text-gray-300 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      {/* <AwardsSection /> */}

      {/* Mission Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our <span className="text-[#D4AF37]">Mission</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              "To create exceptional interior spaces that enhance the way people live, work, and experience their environment. 
              We believe that thoughtful design has the power to inspire, comfort, and transform lives."
            </p>
            <motion.div
              className="flex justify-center items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <CheckCircle className="h-8 w-8 text-[#D4AF37]" />
              <span className="text-[#D4AF37] font-semibold text-lg">Committed to Excellence Since 2009</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;