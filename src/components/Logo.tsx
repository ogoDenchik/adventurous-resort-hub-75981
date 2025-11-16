
import React from 'react';
import { Link } from 'react-router-dom';
import ogoLogo from '@/assets/ogo-logo.png';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative w-16 h-16 overflow-hidden">
        <img 
          src={ogoLogo} 
          alt="OGO Kite Academy" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-display font-bold text-gray-900 leading-tight group-hover:text-accent transition-colors duration-300">
          OGO Kite Academy
        </span>
      </div>
    </Link>
  );
};

export default Logo;
