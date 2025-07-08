import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Essential",
      price: "2.5 Lakhs",
      description: "Perfect for single home makeovers with professional design guidance.",
      features: [
        "Initial consultation",
        "Room layout design",
        "Color palette selection",
        "Furniture recommendations",
        "Shopping list provided",
        "2 revision rounds"
      ]
    },
    {
      name: "Premium",
      price: "5 Lakhs",
      description: "Complete room transformation with custom elements and premium finishes.",
      features: [
        "Everything in Essential",
        "Custom furniture design",
        "3D renderings",
        "Project management",
        "Installation supervision",
        "Unlimited revisions",
        "Premium material sourcing"
      ],
      popular: true
    },
    {
      name: "Luxury",
      price: "Custom",
      description: "Full-service luxury design for entire homes with bespoke solutions.",
      features: [
        "Everything in Premium",
        "Architectural modifications",
        "Custom millwork",
        "Art curation",
        "Lighting design",
        "Smart home integration",
        "White-glove service"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#1C1C1C] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investment <span className="text-[#D4AF37]">Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect design package that fits your vision and budget
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-black rounded-2xl p-8 ${
                plan.popular ? 'border-2 border-[#D4AF37] scale-105' : 'border border-gray-700'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#D4AF37] mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.2) + (featureIndex * 0.1), duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Check className="h-5 w-5 text-[#D4AF37] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#D4AF37] text-black hover:bg-[#B8941F]'
                    : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={()=>{window.location.href='/contact'}}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;