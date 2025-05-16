import React, { useState } from 'react';

import GalleryGrid from './GalleryGrid';
import { GalleryItem } from './types/Gallery';

/* Importing images for letter "S"- Inauguration 2025 */
import img1 from './assets/IMG_0076.jpg';
import img2 from './assets/IMG_5377.jpg';
import img3 from './assets/IMG_0093.jpg';
import img4 from './assets/IMG_5369.jpg';
import img5 from './assets/IMG_0076.jpg';
import img6 from './assets/IMG_5371.jpg';
import img7 from './assets/IMG_5375.jpg';
import img8 from './assets/IMG_0086.jpg';
import img9 from './assets/IMG_0101.jpg';
import img10 from './assets/IMG_5377.jpg';
import img11 from './assets/IMG_0093.jpg';

/* Importing images for letter "E"- Inauguration 2025 */
import img12 from './assets/connect-1.jpg';
import img13 from './assets/connect-2.jpg';
import img14 from './assets/connect-3.jpg';
import img15 from './assets/connect-4.jpg';
import img16 from './assets/connect-5.jpg';
import img17 from './assets/connect-6.jpg';
import img18 from './assets/connect-7.jpg';
import img19 from './assets/connect-8.jpg';
import img20 from './assets/connect-9.jpg';
import img21 from './assets/connect-10.jpg';
import img22 from './assets/connect-11.jpg';

/* Importing images for letter "S"- Exhibition 2025 */
import img23 from './assets/Exhibition (1).jpg';
import img24 from './assets/Exhibition (2).jpg';
import img25 from './assets/Exhibition (3).jpg';
import img26 from './assets/Exhibition (4).jpg';
import img27 from './assets/Exhibition (5).jpg';
import img28 from './assets/Exhibition (6).jpg';
import img29 from './assets/connect-10.jpg';
import img30 from './assets/connect-11.jpg';
import img31 from './assets/IMG_5377.jpg';
import img32 from './assets/IMG_0093.jpg';
import img33 from './assets/connect-1.jpg';

/* Importing images for letter "E" */
import img34 from './assets/image1.png';
import img35 from './assets/image2.png';
import img36 from './assets/image3.png';
import img37 from './assets/image4.png';
import img38 from './assets/image5.png';
import img39 from './assets/image6.png';
import img40 from './assets/image7.png';
import img41 from './assets/image8.png';
import img42 from './assets/image9.png';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    /* Letter "C" */
    {
      id: 1,
      title: "Inauguration 2025",
      image: img1.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 2,
      title: "Inauguration 2025",
      image: img2.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 3,
      title: "Inauguration 2025",
      image: img3.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 4,
      title: "Inauguration 2025",
      image: img4.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 5,
      title: "Inauguration 2025",
      image: img5.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 6,
      title: "Inauguration 2025",
      image: img6.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 7,
      title: "Inauguration 2025",
      image: img7.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 8,
      title: "Inauguration 2025",
      image: img8.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 9,
      title: "Inauguration 2025",
      image: img9.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 10,
      title: "Inauguration 2025",
      image: img10.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },
    {
      id: 11,
      title: "Inauguration 2025",
      image: img11.src,
      date: "February 13, 2025",
      description: "A proud moment marking the official inauguration of the Software Engineering batch of 2025 at SLIIT — celebrating new beginnings, inspiration, and unity."
    },

    /* Letter "E" */
    {
      id: 12,
      title: "SESC Connect",
      image: img12.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 13,
      title: "SESC Connect",
      image: img13.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 14,
      title: "SESC Connect",
      image: img14.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 15,
      title: "SESC Connect",
      image: img15.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 16,
     title: "SESC Connect",
      image: img16.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 17,
      title: "SESC Connect",
      image: img17.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 18,
      title: "SESC Connect",
      image: img18.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 19,
      title: "SESC Connect",
      image: img19.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 20,
      title: "SESC Connect",
      image: img20.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 21,
      title: "SESC Connect",
      image: img21.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },
    {
      id: 22,
      title: "SESC Connect",
      image: img22.src,
      date: "September 15, 2024",
      description: "SESC Connect : A fun-filled meetup with new volunteers, games, team pitches, and project previews to boost collaboration and energy!"
    },

    /* Letter "S" */
    {
      id: 23,
      title: "SLIIT Exhibition",
      image: img23.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 24,
      title: "SLIIT Exhibition",
      image: img24.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 25,
      title: "SLIIT Exhibition",
      image: img25.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 26,
      title: "SLIIT Exhibition",
      image: img26.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 27,
     title: "SLIIT Exhibition",
      image: img27.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 28,
      title: "SLIIT Exhibition",
      image: img28.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 29,
      title: "SLIIT Exhibition",
      image: img29.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 30,
      title: "SLIIT Exhibition",
      image: img30.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 31,
      title: "SLIIT Exhibition",
      image: img31.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 32,
      title: "SLIIT Exhibition",
      image: img32.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    {
      id: 33,
      title: "SLIIT Exhibition",
      image: img33.src,
      date: "April 03, 2025",
      description: "We proudly showcased our projects and contributions at the SLIIT Silver Jubilee Exhibition 2025 — celebrating innovation, teamwork, and 25 years of excellence."
    },
    /* Letter "S" */
    {
      id: 34,
      title: "Industry Visit - GTN",
      image: img34.src,
      date: "May 02, 2025",
      description: "We had an amazing time during our exclusive industry visit to GTN! From eye-opening conversations to behind-the-scenes insights, this experience truly brought the world of software engineering to life!."
    },
    {
      id: 35,
      title: "Industry Visit - Wiley",
      image: img35.src,
      date: "February 26, 2025",
      description: "A huge thank you to the incredible team at Wiley for welcoming us and sharing your valuable industry insights! Your guidance has expanded our knowledge, motivated us to excel, and given us a deeper appreciation of the software engineering field."
    },
    {
      id: 36,
      title: "Industry Visit - Sysco Labs",
      image: img36.src,
      date: "February 21, 2025",
      description: "We had an incredible opportunity to explore the dynamic work culture, cutting-edge technologies, and real-world industry applications at Sysco LABS. Engaging with professionals, gaining hands-on insights, and understanding how innovation drives success was truly an eye-opening experience."
    },
    {
      id: 37,
      title: "Industry Visit - Rootcode",
      image: img37.src,
      date: "November 30, 2024",
      description: "Heartfelt thanks to Rootcode for hosting us and providing invaluable industry insights! 💡 Your guidance, expertise, and warm hospitality have truly inspired us to dream bigger and aim higher."
    },
     {
      id: 38,
      title: "Industry Visit - Creative Software",
      image: img38.src,
      date: "November 23, 2024",
      description: "An incredible day well spent with the amazing team at Creative Software!"
    },
     {
      id: 39,
      title: "Inauguration 2024",
      image: img39.src,
      date: "September 06, 2024",
      description: "From inspiring sessions with our esteemed guest speakers to meaningful interactions among students and staff, the event was filled with energy, learning, and excitement."
    },
     {
      id: 40,
       title: "Inauguration 2024",
      image: img40.src,
      date: "September 06, 2024",
      description: "From inspiring sessions with our esteemed guest speakers to meaningful interactions among students and staff, the event was filled with energy, learning, and excitement."
    },
     {
      id: 41,
       title: "Inauguration 2024",
      image: img41.src,
      date: "September 06, 2024",
      description: "From inspiring sessions with our esteemed guest speakers to meaningful interactions among students and staff, the event was filled with energy, learning, and excitement."
    },
     {
      id: 42,
       title: "Inauguration 2024",
      image: img42.src,
      date: "September 06, 2024",
      description: "From inspiring sessions with our esteemed guest speakers to meaningful interactions among students and staff, the event was filled with energy, learning, and excitement."
    },
    
  ];

  
 
  return (
    <div className="w-full py-12 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Our Journey in Pictures
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Capturing moments of innovation, collaboration, and growth in the SESC community
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </div>
        
        <div className="mt-8">
          <GalleryGrid items={galleryItems} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
