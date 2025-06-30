import Footer from "@/component/footer.jsx";
import Navbar from "../component/navbar.jsx";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1 className="title">Bienvenue sur mon portfolio</h1>
        <p className="margin">
          Jeune développeur web et web mobile de 23 ans
           fraîchement diplômé du titre professionnel DWWM.
            Je suis passionné depuis mon enfance par la technologie puis le développement 
            et j'aime apprendre de ces sujets. 
            Très curieux de nature 
            j'aime me renseigner sur toute sorte de sujets liés tels que l'IA,
             le développement web et web mobile, le scripting, la data et big data,
              le jeu vidéo et plus encore.
            Durant mon apprentissage je me suis pris d'une affection particulière
              pour le langage Python et ses différents frameworks.
              Mes centres d'intérêt ne sont pas limités à la technologie ou au développement,
              d'autres sujets tels que la lecture, le cinéma, la musique et bien d'autres
              m'intéressent également.
        </p>
        <div className="center-container">
          <a href="Benjamin_derisbourg_cv.pdf" target="_blank" rel="noopener noreferrer" className="center">
          Télécharger mon CV
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
