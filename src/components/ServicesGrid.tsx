import React from 'react';
import { motion } from 'framer-motion';
import {
  Utensils,
  Boxes,
  CupSoda,
  Table2 as Table,
  Monitor,
  PencilRuler,
  LayoutPanelTop,
  Lightbulb,
  Wallpaper,
  Paintbrush,
  ShowerHead,
  Landmark as Home,
  DoorOpen,
  Sofa,
  BedDouble,
} from 'lucide-react';

interface ServiceItem {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const services: ServiceItem[] = [
  { title: 'Modular Kitchen', icon: Utensils },
  { title: 'Storage & Wardrobe', icon: Boxes },
  { title: 'Crockery Units', icon: CupSoda },
  { title: 'Space‑Saving Furniture', icon: Table },
  { title: 'TV Units', icon: Monitor },
  { title: 'Study Tables', icon: PencilRuler },
  { title: 'False Ceiling', icon: LayoutPanelTop },
  { title: 'Lights', icon: Lightbulb },
  { title: 'Wallpaper', icon: Wallpaper },
  { title: 'Wall Paint', icon: Paintbrush },
  { title: 'Bathroom', icon: ShowerHead },
  { title: 'Pooja Unit', icon: Home },
  { title: 'Foyer Designs', icon: DoorOpen },
  { title: 'Movable Furniture', icon: Sofa },
  { title: 'Kids Bedroom', icon: BedDouble },
];

const ServicesGrid: React.FC = () => (
  <section className="py-16 bg-[#1C1C1C] overflow-x-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {services.map(({ title, icon: Icon }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6, scale: 1.05 }}
            className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-[#2A2A2A] hover:bg-[#333] transition-colors"
          >
            <Icon className="h-8 w-8 text-[#D4AF37]" />
            <span className="text-sm font-medium text-gray-200 text-center">
              {title}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesGrid;
