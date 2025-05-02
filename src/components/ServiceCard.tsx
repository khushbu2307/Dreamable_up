
import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, image }) => {
  return (
    <div className="group relative p-6 bg-dreamable-gray/30 border border-dreamable-gray/30 hover:border-dreamable-green/50 rounded-lg transition-all duration-300 hover:bg-dreamable-gray/40 overflow-hidden animate-fade-in">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="shimmer relative z-10">
        <div className="w-12 h-12 bg-dreamable-dark p-3 rounded-full border border-dreamable-green/30 text-dreamable-green flex items-center justify-center mb-4 group-hover:border-dreamable-green/70 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-dreamable-green transition-colors duration-300">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
