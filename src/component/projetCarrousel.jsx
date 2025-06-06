"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import "@/styles/projet.scss";

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Données des projets (remplace par tes vrais projets)
  const projects = [
    {
      id: 1,
      title: "Site vitrine Auto-école Chanth",
      description: "Site vitrine pour une auto-école avec Django, Docker et PostgreSQL. Gestion des heures de conduite, commentaires, Question et authentification.",
      img: "/auto-école1.png",
      technologies: ["Django", "Docker", "PostgreSQL"],
    //   liveUrl: "https://example.com",
      githubUrl: "https://github.com/Chia600/Projet-auto-ecole-chanth",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Site portfolio, vous y êtes profiter ;)",
      technologies: ["Next.js", "Sass"],
    //   liveUrl: "https://example.com",
      githubUrl: "https://github.com/Chia600/portfolio-v3",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Blog Otter's World",
      description: "Petit blog en cours de création avec Angular, Java, PostgreSQL",
      technologies: ["Angular", "PostgreSQL", "Spring boot"],
    //   liveUrl: "https://example.com",
      githubUrl: "https://github.com/Chia600",
      category: "Fullstack"
    },
    // {
    //   id: 4,
    //   title: "Mobile Weather App",
    //   description: "Application météo mobile avec géolocalisation, prévisions 7 jours et notifications push. Interface intuitive et moderne.",
    //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
    //   technologies: ["React Native", "Redux", "OpenWeather API"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/username/project4",
    //   category: "Mobile"
    // },
    // {
    //   id: 5,
    //   title: "Dashboard Analytics",
    //   description: "Tableau de bord d'analyse de données avec graphiques interactifs, filtres avancés et export de rapports.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    //   technologies: ["Vue.js", "D3.js", "Chart.js", "Firebase"],
    //   liveUrl: "https://example.com",
    //   githubUrl: "https://github.com/username/project5",
    //   category: "Data Viz"
    // }
  ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === projects.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? projects.length - 1 : prevIndex - 1
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   // Touch/Swipe handlers
//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (!touchStartX.current || !touchEndX.current) return;
    
//     const distance = touchStartX.current - touchEndX.current;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }

//     // Reset touch values
//     touchStartX.current = 0;
//     touchEndX.current = 0;
//   };

//   // Mouse drag handlers for desktop
//   const handleMouseDown = (e) => {
//     touchStartX.current = e.clientX;
//     carouselRef.current.style.cursor = 'grabbing';
//   };

//   const handleMouseMove = (e) => {
//     if (touchStartX.current === 0) return;
//     touchEndX.current = e.clientX;
//   };

//   const handleMouseUp = () => {
//     if (!touchStartX.current || !touchEndX.current) {
//       carouselRef.current.style.cursor = 'grab';
//       return;
//     }
    
//     const distance = touchStartX.current - touchEndX.current;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }

//     // Reset values
//     touchStartX.current = 0;
//     touchEndX.current = 0;
//     carouselRef.current.style.cursor = 'grab';
//   };

//   // Lazy loading - preload current and adjacent images
//   useEffect(() => {
//     const imagesToLoad = [];
    
//     // Current image
//     imagesToLoad.push(currentIndex);
    
//     // Previous image
//     const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
//     imagesToLoad.push(prevIndex);
    
//     // Next image
//     const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
//     imagesToLoad.push(nextIndex);

//     imagesToLoad.forEach(index => {
//       if (!loadedImages.has(index)) {
//         const img = new window.Image();
//         img.src = projects[index].image;
//         img.onload = () => {
//           setLoadedImages(prev => new Set([...prev, index]));
//         };
//       }
//     });
//   }, [currentIndex, projects, loadedImages]);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlay) return;
    
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [currentIndex, isAutoPlay]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowLeft') {
//         prevSlide();
//       } else if (e.key === 'ArrowRight') {
//         nextSlide();
//       } else if (e.key === ' ') {
//         e.preventDefault();
//         setIsAutoPlay(!isAutoPlay);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isAutoPlay]);

  return (
    <div className="project-page">
      <div className>
        <h2 className="title">Mes Projets</h2><br />
        <p>Découvrez une sélection de mes réalisations</p>
        {/* <p>
          Utilisez les flèches du clavier, glissez ou cliquez pour naviguer
        </p> */}
      </div>
        <br />
      {/* <div 
        ref={carouselRef}
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden cursor-grab select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      > */}
        {/* Main carousel container */}
        <div 
          className="projects-grid"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="grid md:grid-cols-2 gap-0 min-h-[500px]">
                {/* Image avec lazy loading personnalisé */}
                <div className="relative overflow-hidden bg-gray-200 h-full">
                  {loadedImages.has(index) || Math.abs(index - currentIndex) <= 1 ? (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading={index === currentIndex ? "eager" : "lazy"}
                      onLoad={() => setLoadedImages(prev => new Set([...prev, index]))}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      <div className="animate-pulse">
                        <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
                        <div className="text-gray-400 text-sm">Chargement...</div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="card-content">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4 flex-wrap">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <ExternalLink size={18} />
                      Voir le projet
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Github size={18} />
                      Code source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default ProjectCarousel;




        {/* Navigation buttons */}
        {/* <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Projet précédent"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all hover:scale-110 z-10"
          aria-label="Projet suivant"
        >
          <ChevronRight size={24} />
        </button> */}

        {/* Auto-play toggle */}
        {/* <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 bg-black/20 hover:bg-black/30 text-white px-3 py-1 rounded-full text-sm transition-colors z-10"
          aria-label={isAutoPlay ? 'Mettre en pause' : 'Reprendre la lecture'}
        >
          {isAutoPlay ? 'Pause' : 'Play'}
        </button>
      </div> */}

      {/* Dots indicator */}
    {/*<div className="flex justify-center mt-8 gap-3">
        {projects.map((_, index) => (
           <button
             key={index}
             onClick={() => goToSlide(index)}
             className={`h-3 rounded-full transition-all ${
               index === currentIndex 
                 ? 'bg-blue-600 w-8' 
                 : 'bg-gray-300 hover:bg-gray-400 w-3'
             }`}
             aria-label={`Aller au projet ${index + 1}`}
           />
         ))}
       </div> */}

      {/* Project counter */}
    {/*  <div className="text-center mt-4 text-gray-500 text-sm">
         {currentIndex + 1} / {projects.length}
        </div> */}