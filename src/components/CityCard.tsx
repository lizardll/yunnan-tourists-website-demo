import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { City } from '../data/cities';

interface CityCardProps {
  city: City;
  onClick: () => void;
  isSelected: boolean;
  index: number;
}

const CityCard: React.FC<CityCardProps> = ({ city, onClick, isSelected, index }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-[#262626] border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${
        isSelected ? 'border-[#9E7FFF] shadow-lg shadow-[#9E7FFF]/20' : 'border-[#2F2F2F] hover:border-[#9E7FFF]/50'
      }`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={city.image} 
          alt={city.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-transparent to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-3 right-3 bg-[#262626]/80 backdrop-blur-sm border border-[#2F2F2F] rounded-full px-3 py-1 flex items-center gap-1">
          <Star className="w-3 h-3 text-[#f59e0b] fill-[#f59e0b]" />
          <span className="text-white text-xs font-semibold">热门</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-[#9E7FFF] transition-colors">
            {city.name}
          </h3>
          <MapPin className="w-5 h-5 text-[#9E7FFF] flex-shrink-0" />
        </div>
        
        <p className="text-[#A3A3A3] text-sm mb-4 line-clamp-2 leading-relaxed">
          {city.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-xs text-[#A3A3A3]">{city.attractions.length} 个景点</span>
          </div>
          <button className="text-[#9E7FFF] text-sm font-semibold hover:text-[#38bdf8] transition-colors">
            查看详情 →
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#9E7FFF]/10 to-transparent" />
      </div>
    </div>
  );
};

export default CityCard;
