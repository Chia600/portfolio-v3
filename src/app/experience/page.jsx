import Navbar from "@/component/navbar.jsx";
import Footer from "@/component/footer";
import "@/styles/experience.scss";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <h1 className="title">Expériences</h1>
                <h2 className="title">Stage de fin de formation DWWM  <br />pour l'auto-école Chanth</h2>
                <p className="margin">J'ai effectué un stage de fin de formation pour l'auto-école Chanth consistant 
                    à réaliser un site vitrine comprenant certaines fonctionnalités clients 
                    dont un compte individuel affichant les heures de conduites menées par l'élève
                     permettant au moniteur d'ajouter des remarques et conseils grâce à
                      un compte administrateur. Ce site à été construit
                       avec une stack Django et une base de données PostgreSQL.

                </p>
                <h2 className="title">Boot-Camp Kesk'ia <br /> concours local et national</h2>
                <p className="margin">J'ai effectué un Boot-Camp réunissant plusieurs apprentis en IA,
                     se concluant par un concours mené localement et nationalement consistant
                      en un projet utilitaire pour la commune réalisé en groupe.
                       Membre de l'équipe "prédictive cantine" notre projet était 
                       de réaliser une IA prédisant les meilleurs plats, économiques et sains,
                        pour les personnes mangeant en cantine.
                         Cette IA était à destination des cuisiniers des établissements afin d'avoir
                          des repas sains chaque jour à partir des stocks enregistrés par ces derniers
                     dans la base de données dans le but de proposer les meilleurs repas à confectionner.</p>
                <div className="center-container">
                <a href="https://www.instagram.com/p/CqTIfowIzvg/?img_index=3" className="center">Lien de
                l'Instagram</a></div>
            </main>
            <Footer />
        </>
    )
        
}