import Navbar from "@/component/navbar.jsx";
import "@/styles/competences.scss";

export default function Home() {
    return (
        <>
            <Navbar />
             <main>
                <h1 className="title">Compétences</h1>
                <div className="centercomp">
                    <ul>
                        <li>Python/Django</li>
                        <li>Javascript/React/NextJS</li>
                        <li>PostrgreSQL</li>
                        <li>PHP/Symfony</li>
                        <li>Linux</li>
                        <li>Docker</li>
                        <li>Git</li>
                    </ul>
                </div>
            </main>
            
        </>
    )
        
    
}