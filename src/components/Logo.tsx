
import React from 'react';
import { Link } from 'react-router-dom';
import ogoLogo from '@/assets/ogo-logo.png';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center group">
      <div className="relative w-28 h-12 overflow-hidden">
        <img 
          src={ogoLogo} 
          alt="OGO Academy" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};

export default Logo;
