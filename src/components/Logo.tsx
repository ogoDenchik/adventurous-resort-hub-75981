
import React from 'react';
import { Link } from 'react-router-dom';
import ogoLogo from '@/assets/ogo-logo.png';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group shrink-0">
      <div className="relative w-12 h-12 lg:w-14 lg:h-14 overflow-hidden shrink-0">
        <img loading="lazy" 
          src={ogoLogo} 
          alt="OGO Kite Academy" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col max-w-[110px] lg:max-w-none">
        <span className="text-base lg:text-lg xl:text-xl font-display font-bold text-gray-900 leading-tight group-hover:text-accent transition-colors duration-300 uppercase">
          OGO KITE ACADEMY
        </span>
      </div>
    </Link>
  );
};

export default Logo;
