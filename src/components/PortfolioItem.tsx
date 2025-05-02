
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageSrc, tags, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-dreamable-gray/10 border border-dreamable-gray/30 hover:border-dreamable-green/50 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageSrc})` }}
        ></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h3>
        <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          {tags.map((tag, index) => (
            <span key={index} className="bg-dreamable-green/20 text-dreamable-green text-xs px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">
          <Button 
            className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex flex-wrap gap-1 mt-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-dreamable-green/10 text-dreamable-green text-xs px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
