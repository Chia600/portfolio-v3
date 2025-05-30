import Link from 'next/link';
import '../app/globals.css';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="/experience">Expérience</Link></li>
        <li><Link href="/projets">Projets</Link></li>
        <li><Link href="/competences">Compétences</Link></li>
        <li><Link href="/formation">Formation</Link></li>
      </ul>
    </nav>
  );
}
