import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const PortfolioShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Luxury Penthouse Living",
      category: "Residential",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "A sophisticated penthouse design featuring panoramic city views and contemporary luxury finishes."
    },
    {
      id: 2,
      title: "Modern Kitchen Excellence",
      category: "Kitchen Design",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "Custom kitchen design with premium appliances and innovative storage solutions."
    },
    {
      id: 3,
      title: "Executive Office Suite",
      category: "Commercial",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "Professional workspace designed for productivity and client impressions."
    },
    {
      id: 4,
      title: "Boutique Hotel Lobby",
      category: "Hospitality",
      image: "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      description: "Welcoming hotel lobby with contemporary design and local cultural influences."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
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
            Portfolio <span className="text-[#D4AF37]">Showcase</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our most celebrated projects that showcase our design expertise and attention to detail
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative h-96 md:h-[500px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={portfolioItems[currentIndex].image}
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <span className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                      {portfolioItems[currentIndex].category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {portfolioItems[currentIndex].title}
                    </h3>
                    <p className="text-gray-300 text-lg max-w-2xl">
                      {portfolioItems[currentIndex].description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={prevSlide}
              className="bg-[#D4AF37] text-black p-4 rounded-full hover:bg-[#B8941F] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <div className="flex space-x-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-[#D4AF37]' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="bg-[#D4AF37] text-black p-4 rounded-full hover:bg-[#B8941F] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;