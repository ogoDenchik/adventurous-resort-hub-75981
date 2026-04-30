
import React from 'react';
import { Link } from 'react-router-dom';
import ogoLogo from '@/assets/ogo-logo.png';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group shrink-0">
      <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden shrink-0">
        <img loading="lazy" 
          src={ogoLogo} 
          alt="OGO Kite Academy" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-sm lg:text-base xl:text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-accent transition-colors duration-300 uppercase whitespace-nowrap">
          OGO KITE ACADEMY
        </span>
      </div>
    </Link>
  );
};

export default Logo;
