import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Palette, ShoppingCart, Hammer, Sparkles } from 'lucide-react';

interface TimelineStep {
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
}

const ProcessTimeline: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      icon: MessageCircle,
      title: "Initial Consultation",
      description: "We discuss your vision, needs, lifestyle, and budget to understand your unique requirements.",
      duration: "1-2 hours"
    },
    {
      icon: Palette,
      title: "Design Development",
      description: "Our team creates detailed designs, mood boards, and 3D renderings for your approval.",
      duration: "1-2 weeks"
    },
    {
      icon: ShoppingCart,
      title: "Material Selection",
      description: "We help you choose the perfect materials, finishes, and furnishings for your project.",
      duration: "1 week"
    },
    {
      icon: Hammer,
      title: "Project Execution",
      description: "Our expert team manages the entire installation process with attention to every detail.",
      duration: "4-8 weeks"
    },
    {
      icon: Sparkles,
      title: "Final Styling",
      description: "We add the finishing touches that make your space truly complete and personalized.",
      duration: "1-2 days"
    }
  ];

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
            Our Design <span className="text-[#D4AF37]">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that ensures exceptional results from concept to completion
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D4AF37] transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <motion.div
                    className="bg-black p-8 rounded-2xl border border-gray-700 hover:border-[#D4AF37] transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="bg-[#D4AF37] p-3 rounded-full mr-4"
                        whileHover={{ rotate: 5 }}
                      >
                        <step.icon className="h-6 w-6 text-black" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-[#D4AF37]">{step.title}</h3>
                        {/* <span className="text-sm text-gray-400">{step.duration}</span> */}
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:block relative z-10">
                  <motion.div
                    className="w-6 h-6 bg-[#D4AF37] rounded-full border-4 border-black"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                    viewport={{ once: true }}
                  />
                </div>

                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#B8941F] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;