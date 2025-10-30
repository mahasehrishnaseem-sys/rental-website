
import React from 'react';
import { ClockIcon, TruckIcon, ShieldCheckIcon, RefreshIcon } from './icons/FeatureIcons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
    <div className="flex justify-center items-center mb-4 text-indigo-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: <ClockIcon />,
      title: "Flexible Terms",
      description: "Choose from monthly, quarterly, or yearly rental plans that fit your life.",
    },
    {
      icon: <TruckIcon />,
      title: "Free Delivery & Pickup",
      description: "We handle the logistics. Enjoy free delivery and pickup within covered areas.",
    },
    {
      icon: <ShieldCheckIcon />,
      title: "Quality Furniture",
      description: "Access a curated collection of stylish and well-maintained furniture pieces.",
    },
    {
      icon: <RefreshIcon />,
      title: "Easy Returns",
      description: "Hassle-free returns and damage protection for your peace of mind.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
