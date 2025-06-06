import Navbar from "@/component/navbar.jsx";
import "@/styles/formation.scss";


export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <h1 className="title">Formation/Diplôme</h1>
                <ul className="centerForm">
                    <li>Obtention du titre professionnel DWWM</li>
                    <li>Certification Programme Kesk'IA</li> 
                    <li>BAC STI2D</li>
                </ul>

            </main>
            
        </>
    )
        
}