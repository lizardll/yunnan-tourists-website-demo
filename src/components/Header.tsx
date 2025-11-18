import React from 'react';
import { Mountain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#171717]/80 backdrop-blur-xl border-b border-[#2F2F2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#9E7FFF] to-[#38bdf8] rounded-xl flex items-center justify-center">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">云南旅游</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">首页</a>
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">景点</a>
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">攻略</a>
            <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors">关于</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
