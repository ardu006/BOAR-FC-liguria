import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Calendar, Users2, Newspaper, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <Trophy className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">BOAR FC</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="flex items-center space-x-2 hover:text-primary transition">
                <Trophy className="h-5 w-5" />
                <span>Home</span>
              </Link>
              <Link to="/calendar" className="flex items-center space-x-2 hover:text-primary transition">
                <Calendar className="h-5 w-5" />
                <span>Calendario</span>
              </Link>
              <Link to="/team" className="flex items-center space-x-2 hover:text-primary transition">
                <Users2 className="h-5 w-5" />
                <span>Squadra</span>
              </Link>
              <Link to="/news" className="flex items-center space-x-2 hover:text-primary transition">
                <Newspaper className="h-5 w-5" />
                <span>News</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Trophy className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/calendar" 
              className="flex items-center space-x-2 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              <span>Calendario</span>
            </Link>
            <Link 
              to="/team" 
              className="flex items-center space-x-2 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users2 className="h-5 w-5" />
              <span>Squadra</span>
            </Link>
            <Link 
              to="/news" 
              className="flex items-center space-x-2 hover:text-primary transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Newspaper className="h-5 w-5" />
              <span>News</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;