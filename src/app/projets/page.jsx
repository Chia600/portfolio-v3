// pages/projects.js
import Navbar from "@/component/navbar"
import ProjectCarousel from "@/component/projetCarrousel";
import "@/styles/projet.scss";


const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <ProjectCarousel />
    </>
  );
};

export default ProjectsPage;