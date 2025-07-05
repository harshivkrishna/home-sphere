import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';

interface AwardItem {
  icon: React.ElementType;
  title: string;
  organization: string;
  year: string;
  description: string;
}

const AwardsSection: React.FC = () => {
  const awards: AwardItem[] = [
    {
      icon: Trophy,
      title: "Best Interior Design Firm",
      organization: "Design Excellence Awards",
      year: "2024",
      description: "Recognized for outstanding creativity and client satisfaction"
    },
    {
      icon: Award,
      title: "Luxury Home Design Award",
      organization: "Architectural Digest",
      year: "2023",
      description: "Featured project: Modern Luxury Villa in Beverly Hills"
    },
    {
      icon: Star,
      title: "Innovation in Design",
      organization: "Interior Design Magazine",
      year: "2023",
      description: "Pioneering sustainable luxury design practices"
    },
    {
      icon: Medal,
      title: "Client Choice Award",
      organization: "Home & Design",
      year: "2022",
      description: "Highest client satisfaction rating for three consecutive years"
    }
  ];

  return (
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
            Awards & <span className="text-[#D4AF37]">Recognition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and publications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="bg-[#1C1C1C] p-8 rounded-2xl text-center group hover:bg-[#2A2A2A] transition-colors duration-300"
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
                <award.icon className="h-10 w-10 text-black" />
              </motion.div>

              <h3 className="text-xl font-bold text-[#D4AF37] mb-2">{award.title}</h3>
              <p className="text-gray-400 font-medium mb-1">{award.organization}</p>
              <p className="text-[#D4AF37] font-bold mb-4">{award.year}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#1C1C1C] p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
              Ready to Create Award-Winning Spaces?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Join our list of satisfied clients and experience the design excellence that has earned us industry recognition.
            </p>
            <motion.button
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>{window.location.href='/contact'}}

            >
              Start Your Award-Worthy Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;