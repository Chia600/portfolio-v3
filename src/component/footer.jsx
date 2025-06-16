import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '@/styles/footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contenu principal du footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Section Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300">derisbourg.benjamin3@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300">+33 6 81 76 97 02</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300">Douai, France</span>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://github.com/Chia600" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/benjamin-derisbourg-1a025a2a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:derisbourg.benjamin3@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Neyruba. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm">
              Conçu avec ❤️ et Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;