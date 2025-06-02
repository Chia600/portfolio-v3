import Link from 'next/link';
import '../app/globals.scss';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <Link href="/">Accueil</Link>
        <Link href="/experience">Expérience</Link>
        <Link href="/projets">Projets</Link>
        <Link href="/competences">Compétences</Link>
        <Link href="/formation">Formation</Link> 
    </nav>
  );
}
