import React, { useState } from 'react';
import { GalleryItem } from './types/Gallery';
import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent 
} from './hover-card';
import { ZoomIn } from 'lucide-react';
import { X } from 'lucide-react'; // Add this import

interface GalleryItemProps {
  item: GalleryItem;
}

const GalleryItemCard: React.FC<GalleryItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleTouch = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white dark:bg-white/10 transition-all duration-300 border-2 border-primary dark:border-white">
      <HoverCard open={isOpen} onOpenChange={setIsOpen}>
        <HoverCardTrigger asChild>
          <div 
            className="relative aspect-square overflow-hidden cursor-pointer"
            onClick={handleTouch}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleTouch();
            }}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
        </HoverCardTrigger>
        <HoverCardContent 
          className="relative w-[90vw] md:w-96 p-0 overflow-hidden bg-white dark:bg-gray-800 border-2 border-gray-800 dark:border-white shadow-[0_0_0_1000px_rgba(0,0,0,0.5)] dark:shadow-[0_0_0_1000px_rgba(0,0,0,0.7)] z-50"
          onPointerDownOutside={() => setIsOpen(false)}
        >
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-50 p-1 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="h-4 w-4 text-white" />
          </button>
          <div className="relative aspect-video w-full overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 flex items-center">
              <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 mr-2"></span>
              {item.date}
            </p>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              {item.description}
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default GalleryItemCard;
