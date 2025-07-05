import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import FAQSection from '../components/FAQSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "9345921521",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@homesphereinterior.com",
      description: "Send us your design inquiries"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "No.30/39A ,First Street,  New bangaru colony, west KK.Nagar Chennai - 600078",
      description: "Visit our showroom by appointment"
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon - Sun: 9AM - 7PM",
      description: "Saturday consultations available"
    }
  ];

  const services = [
    "Interior Design",
    "Modular Kitchen",
    "Complete Renovation",
    "Custom Furniture",
    "Lighting Design",
    "Space Planning",
    "Commercial Design",
    "Other"
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
              Get In <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Let's discuss your project and bring your vision to life. 
              We're here to help every step of the way.
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-black p-6 rounded-xl text-center group hover:bg-[#2A2A2A] transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="bg-[#D4AF37] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <info.icon className="h-8 w-8 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">{info.title}</h3>
                <p className="text-white font-semibold mb-1">{info.details}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#D4AF37]">
                Send Us a Message
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. 
                We're excited to learn about your project!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white transition-colors duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1C1C1C] border border-gray-600 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white transition-colors duration-300 resize-vertical"
                    placeholder="Tell us about your project, timeline, budget range, and any specific requirements..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : 'bg-[#D4AF37] text-black hover:bg-[#B8941F]'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-6 w-6" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Map */}
              <div className="bg-[#1C1C1C] p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Visit Our Showroom</h3>
                <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.876119669667!2d80.1915619!3d13.0435564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267afb4adc921%3A0xc5b11509429a2c61!2s32%2F40%2C%20New%20Bangaru%20Colony%2C%20KK%20Nagar%20West%2C%20K.%20K.%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600078!5e0!3m2!1sen!2sin!4v1751707972583!5m2!1sen!2sin" width="600" height="450"  loading="lazy" ></iframe>
                </div>
                <p className="text-gray-300 mb-4">
                  Located in the heart of the design district, our showroom features the latest in 
                  interior design trends, materials, and finishes. Schedule an appointment to 
                  explore our displays and meet with our design team.
                </p>
                <motion.button
                  className="border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Showroom Visit
                </motion.button>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#1C1C1C] p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Quick Contact</h3>
                <div className="space-y-4">
                  {[
                    {
                      question: "Need immediate assistance?",
                      answer: "Call us directly at 9345921521 for urgent project matters or emergency consultations."
                    },
                    {
                      question: "Want to schedule a consultation?",
                      answer: "Email us at contact@homesphereinterior.com or use the form to request a free consultation."
                    },
                    {
                      question: "Looking for inspiration?",
                      answer: "Follow us on social media for daily design inspiration and behind-the-scenes content."
                    }
                  ].map((item, index) => (
                    <div key={index} className="border-b border-gray-600 pb-4 last:border-b-0">
                      <h4 className="font-semibold text-white mb-2">{item.question}</h4>
                      <p className="text-gray-300 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* Emergency Contact */}
      <section className="py-12 bg-[#D4AF37]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
              Need Immediate Assistance?
            </h2>
            <p className="text-black/80 mb-6">
              For urgent project matters or emergency consultations, call us directly.
            </p>
            <motion.a
              href="tel:9345921521"
              className="bg-black text-[#D4AF37] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Now: 93459 21521
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;