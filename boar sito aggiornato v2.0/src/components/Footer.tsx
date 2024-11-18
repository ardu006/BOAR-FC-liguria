import React from 'react';
import { Trophy, Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
              <Trophy className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">BOAR FC</span>
            </div>
            <p className="text-gray-400">Serie C2 / Girone C Liguria</p>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@boarfc.it</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <span>+39 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Recco, Liguria</span>
              </div>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/boarfcofficial?igsh=MWZ5NDY0dXNjenVycw="
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.tiktok.com/@boar.fc?_t=8rQ5sBSkQeE&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark transition"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>© 2024 BOAR FC. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;