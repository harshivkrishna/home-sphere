import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, features, index }) => {
  return (
    <motion.div
      className="bg-[#1C1C1C] p-8 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 group flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ y: -10, scale: 1.02 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="bg-[#D4AF37] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 5 }}
      >
        <Icon className="h-8 w-8 text-black" />
      </motion.div>

      <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">{title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

      <ul className="space-y-2 mb-6">
        {features.map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            className="flex items-center space-x-3 text-gray-300"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

    </motion.div>
  );
};

export default ServiceCard;
