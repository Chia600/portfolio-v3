// import Link from 'next/link';
// import '../app/globals.scss';
// import '@/styles/navbar.scss';

// export default function Navbar() {
//   return (
//     <nav className='navbar'>
//         <Link href="/">Accueil</Link>
//         <Link href="/experience">Expérience</Link>
//         <Link href="/projets">Projets</Link>
//         <Link href="/competences">Compétences</Link>
//         <Link href="/formation">Formation</Link> 
//     </nav>
//   );
// }
// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import '../app/globals.scss';
// import '@/styles/navbar.scss'

// export default function Navbar() {
//   const pathname = usePathname();
  
//   return (
//     <nav className='navbar'>
//         <Link 
//           href="/" 
//           className={pathname === '/' ? 'active' : ''}
//         >
//           Accueil
//         </Link>
//         <Link 
//           href="/experience" 
//           className={pathname === '/experience' ? 'active' : ''}
//         >
//           Expérience
//         </Link>
//         <Link 
//           href="/projets" 
//           className={pathname === '/projets' ? 'active' : ''}
//         >
//           Projets
//         </Link>
//         <Link 
//           href="/competences" 
//           className={pathname === '/competences' ? 'active' : ''}
//         >
//           Compétences
//         </Link>
//         <Link 
//           href="/formation" 
//           className={pathname === '/formation' ? 'active' : ''}
//         >
//           Formation
//         </Link>
//     </nav>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import '../app/globals.scss';
import '@/styles/navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Fermer le menu mobile lors du clic sur un lien
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Fonction pour vérifier si le lien est actif
  const isActiveLink = (href) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Expérience', href: '/experience' },
    { name: 'Projets', href: '/projets' },
    { name: 'Compétences', href: '/competences' },
    { name: 'Formation', href: '/formation' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'mobile-menu-open' : ''}`}>
      <div className="navbar-container">
        
        {/* Version Desktop */}
        <div className="navbar-desktop">
          {/* Logo */}
          <Link href="/" className="navbar-brand">
            Portfolio
          </Link>

          {/* Navigation Desktop */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`nav-link ${isActiveLink(item.href) ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Version Mobile */}
        <div className="navbar-mobile">
          {/* Logo Mobile */}
          <Link href="/" className="navbar-brand">
            Portfolio
          </Link>

          {/* Bouton Hamburger */}
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className={`mobile-nav-link ${isActiveLink(item.href) ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;