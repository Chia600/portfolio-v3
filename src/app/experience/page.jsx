import Navbar from "@/component/navbar.jsx";


export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <h1 className="title">Expériences</h1>
                <h2 className="title">Stage de fin de formation DWWM  <br />pour l'auto-école Chanth</h2>
                <p>J'ai effectué un stage de formation pour l'auto-école Chanth consistant
                    à réaliser un site vitrine ainsi que certaines fonctionnalités cliente 
                    avec un compte individuel affichant les heures de conduites mener par l'élève avec 
                    possibilité de remarque et conseil par le moniteur grâce à un compte administrateur.
                    Ce site à était effectué avec une stack Django, PostgreSQL.
                </p>
                <h2 className="title">Boot-Camp Kesk'ia <br /> avec concour local et national</h2>
                <p>J'ai effectué un Boot-Camp réunissant plusieurs apprentis en IA,
                    avec par la suite un concours mener localement et nationalement avec un projet 
                    utilitaire pour la commune réalisé en groupe. Faisant partis de l'équipe 
                    "prédictive cantine" notre projet était de réaliser une IA prédisant les meilleurs plats
                    économique et sain pour les personnes mangeant en cantine. Cette IA était à destination d'être utilisé par 
                    les cuisiniers des établissements afin d'avoir des repas sains pour tous les jours en gérant
                    les stocks mis par les cuisiniers dans la base de données puis prédire les meilleurs repas à effectué </p>
                <div className="center-container">
                <a href="https://www.instagram.com/p/CqTIfowIzvg/?img_index=3" className="center">Lien de
                l'Instagram</a></div>
            </main>
            
        </>
    )
        
}