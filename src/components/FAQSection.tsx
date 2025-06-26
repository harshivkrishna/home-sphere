import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How long does a typical interior design project take?",
      answer: "Project timelines vary based on scope and complexity. A single room typically takes 6-8 weeks, while full home renovations can take 12-20 weeks. We provide detailed timelines during the consultation phase and keep you updated throughout the process."
    },
    {
      question: "Do you work within specific budget ranges?",
      answer: "We work with a variety of budgets and will discuss your investment range during our initial consultation. Our goal is to maximize value and create beautiful spaces regardless of budget size. We're transparent about costs and provide detailed estimates upfront."
    },
    {
      question: "Can you work with my existing furniture and decor?",
      answer: "Absolutely! We love incorporating pieces that have sentimental value or that you simply love. Our designers are skilled at blending existing items with new elements to create a cohesive, personalized space that reflects your style."
    },
    {
      question: "Do you provide 3D renderings of the design?",
      answer: "Yes, 3D renderings are included in our Premium and Luxury packages. These detailed visualizations help you see exactly how your space will look before any work begins, allowing for adjustments and ensuring you're completely satisfied with the design."
    },
    {
      question: "What happens if I'm not satisfied with the design?",
      answer: "Client satisfaction is our top priority. We include multiple revision rounds in all our packages and work closely with you throughout the process. If you're not completely satisfied, we'll continue refining the design until it meets your expectations."
    },
    {
      question: "Do you handle permits and contractor coordination?",
      answer: "Yes, we manage all aspects of the project including permits, contractor coordination, and project management. Our team has established relationships with trusted contractors and handles all the logistics so you can focus on the exciting parts of your transformation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#D4AF37]">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about our design process and services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#1C1C1C] rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#2A2A2A] transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
                whileHover={{ x: 5 }}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="h-6 w-6 text-[#D4AF37]" />
                  ) : (
                    <Plus className="h-6 w-6 text-[#D4AF37]" />
                  )}
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <p className="text-gray-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            className="border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;