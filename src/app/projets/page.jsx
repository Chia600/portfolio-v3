// pages/projects.js
import Navbar from "@/component/navbar"
import Footer from "@/component/footer";
import ProjectCarousel from "@/component/projetCarrousel";
import "@/styles/projet.scss";


const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <ProjectCarousel />
       <Footer />
    </>
  );
};

export default ProjectsPage;