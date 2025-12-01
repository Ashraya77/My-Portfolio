// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import './styles.css';
// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function SideProjects() {
  // Array of your project images
  const projects = [
    {
      id: 1,
      image: 'ss.png',
      title: 'Project 1',
    },
    {
      id: 2,
      image: 'ss.png',
      title: 'Project 2',
    },
    {
      id: 3,
      image: 'ss.png',
      title: 'Project 3',
    },
    // Add more projects as needed
  ];

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="slide-content">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3 className='text-gray-500'>{project.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    </>
  );
}