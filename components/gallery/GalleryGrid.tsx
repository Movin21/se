import React, { useEffect, useState } from 'react';
import GalleryItem from './GalleryItemCard';
import { GalleryItem as GalleryItemType } from './types/Gallery';

interface GalleryGridProps {
  items: GalleryItemType[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const letterTemplates = {
    S: [
      [0,0], [1,0], [2,0],      // Top horizontal
      [0,1],                     // Upper left vertical
      [0,2], [1,2], [2,2],      // Middle horizontal
      [2,3],                     // Lower right vertical
      [0,4], [1,4], [2,4]       // Bottom horizontal
    ],
    E: [
      [4,0], [5,0], [6,0],      // Top horizontal
      [4,1],                     // Upper vertical
      [4,2], [5,2], [6,2],      // Middle horizontal
      [4,3],                     // Lower vertical
      [4,4], [5,4], [6,4]       // Bottom horizontal
    ],
    S2: [
      [8,0], [9,0], [10,0],     // Top horizontal
      [8,1],                     // Upper left vertical
      [8,2], [9,2], [10,2],     // Middle horizontal
      [10,3],                    // Lower right vertical
      [8,4], [9,4], [10,4]      // Bottom horizontal
    ],
    C: [
      [12,0], [13,0], [14,0],   // Top horizontal
      [12,1],                    // Upper left vertical
      [12,2],                    // Middle vertical
      [12,3],                    // Lower left vertical
      [12,4], [13,4], [14,4]    // Bottom horizontal
    ]
  };
  
  const allPositions = [
    ...letterTemplates.S,
    ...letterTemplates.E,
    ...letterTemplates.S2,
    ...letterTemplates.C
  ];
  
  return (
    <div className="w-full">
      <div 
        className="relative grid p-0 md:p-4 rounded-xl mx-auto"
        style={{ 
          gridTemplateColumns: 'repeat(15, 1fr)',
          gridTemplateRows: isMobile ? 'repeat(5, 30px)' : 'repeat(5, 80px)',
          gap: isMobile ? '1px' : '2px',
          maxWidth: '2000px'
        }}
      >
        {allPositions.map((position, index) => {
          const itemIndex = index % items.length;
          return (
            <div
              key={`${position[0]}-${position[1]}-${index}`}
              className="animate-fade-in z-10"
              style={{
                gridColumn: `${position[0] + 1}`,
                gridRow: `${position[1] + 1}`,
                animationDelay: `${index * 0.05}s`
              }}
            >
              <GalleryItem item={items[itemIndex]} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryGrid;