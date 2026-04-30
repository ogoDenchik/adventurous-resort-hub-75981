
import React from 'react';
import { Link } from 'react-router-dom';
import ogoLogo from '@/assets/ogo-logo.png';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group shrink-0">
      <div className="relative w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 overflow-hidden shrink-0">
        <img loading="lazy" 
          src={ogoLogo} 
          alt="OGO Kite Academy" 
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-col max-w-[110px] xl:max-w-none">
        <span className="text-sm lg:text-[15px] xl:text-base 2xl:text-lg font-display font-bold text-gray-900 leading-tight group-hover:text-accent transition-colors duration-300 uppercase">
          OGO KITE ACADEMY
        </span>
      </div>
    </Link>
  );
};

export default Logo;
