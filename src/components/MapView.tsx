import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin } from 'lucide-react';
import { cities, YUNNAN_CENTER } from '../data/cities';

// Fix for default marker icons in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEMxMS43MTYgMCA1IDYuNzE2IDUgMTVjMCA4LjI4NCAxNSAzNSAxNSAzNXMxNS0yNi43MTYgMTUtMzVjMC04LjI4NC02LjcxNi0xNS0xNS0xNXoiIGZpbGw9IiM5RTdGRkYiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0MCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMEMxMS43MTYgMCA1IDYuNzE2IDUgMTVjMCA4LjI4NCAxNSAzNSAxNSAzNXMxNS0yNi43MTYgMTUtMzVjMC04LjI4NC02LjcxNi0xNS0xNS0xNXoiIGZpbGw9IiM5RTdGRkYiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI2IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
  shadowUrl: '',
  iconSize: [40, 50],
  iconAnchor: [20, 50],
  popupAnchor: [0, -50],
});

interface MapViewProps {
  focusedCity: string | null;
  setFocusedCity: (id: string | null) => void;
  hoveredCity: string | null;
  setHoveredCity: (id: string | null) => void;
  onCityDetailClick: (id: string) => void;
}

// Component to handle map interactions
function MapController({ focusedCity }: { focusedCity: string | null }) {
  const map = useMap();

  useEffect(() => {
    if (focusedCity) {
      const city = cities.find(c => c.id === focusedCity);
      if (city) {
        map.flyTo(city.coordinates, 10, {
          duration: 1.5,
          easeLinearity: 0.5
        });
      }
    } else {
      map.flyTo(YUNNAN_CENTER, 7, {
        duration: 1.5,
        easeLinearity: 0.5
      });
    }
  }, [focusedCity, map]);

  return null;
}

// Custom marker icon creator
const createCustomIcon = (isFocused: boolean, isHovered: boolean) => {
  const color = isFocused ? '#9E7FFF' : isHovered ? '#38bdf8' : '#f472b6';
  const scale = isFocused ? 1.3 : isHovered ? 1.15 : 1;
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="transform: scale(${scale}); transition: all 0.3s ease;">
        <svg width="40" height="50" viewBox="0 0 40 50" style="filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));">
          <path d="M20 0C11.716 0 5 6.716 5 15c0 8.284 15 35 15 35s15-26.716 15-35c0-8.284-6.716-15-15-15z" fill="${color}"/>
          <circle cx="20" cy="15" r="6" fill="white"/>
        </svg>
      </div>
    `,
    iconSize: [40, 50],
    iconAnchor: [20, 50],
    popupAnchor: [0, -50],
  });
};

const MapView: React.FC<MapViewProps> = ({ 
  focusedCity, 
  setFocusedCity, 
  hoveredCity, 
  setHoveredCity,
  onCityDetailClick
}) => {
  const markerRefs = useRef<{ [key: string]: L.Marker | null }>({});

  useEffect(() => {
    if (focusedCity && markerRefs.current[focusedCity]) {
      markerRefs.current[focusedCity]?.openPopup();
    } else {
      // Close all popups when focusedCity is null
      Object.values(markerRefs.current).forEach(marker => {
        marker?.closePopup();
      });
    }
  }, [focusedCity]);

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl">
      <MapContainer
        center={YUNNAN_CENTER}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
        zoomControl={true}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController focusedCity={focusedCity} />

        {cities.map((city) => {
          const isFocused = focusedCity === city.id;
          const isHovered = hoveredCity === city.id;

          return (
            <Marker
              key={city.id}
              position={city.coordinates}
              icon={createCustomIcon(isFocused, isHovered)}
              ref={(ref) => {
                markerRefs.current[city.id] = ref;
              }}
              eventHandlers={{
                click: () => {
                  setFocusedCity(city.id);
                },
                mouseover: () => setHoveredCity(city.id),
                mouseout: () => setHoveredCity(null),
              }}
            >
              <Popup>
                <div className="p-4 min-w-[250px]">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{city.name}</h3>
                      <p className="text-neutral-400 text-sm">{city.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">海拔高度</span>
                      <span className="text-purple-400 font-semibold">{city.altitude}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">最佳季节</span>
                      <span className="text-cyan-400 font-semibold">{city.bestSeason}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">特色美食</span>
                      <span className="text-pink-400 font-semibold">{city.specialty}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onCityDetailClick(city.id);
                    }}
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg py-2 px-4 font-semibold hover:opacity-90 transition-opacity"
                  >
                    查看详情
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-neutral-800/95 backdrop-blur-sm border border-neutral-700 rounded-xl p-4 shadow-xl z-[1000]">
        <div className="text-white font-semibold mb-3 text-sm flex items-center gap-2">
          <MapPin className="w-4 h-4 text-purple-400" />
          图例
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f472b6]" />
            <span className="text-neutral-400 text-xs">热门城市</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#38bdf8]" />
            <span className="text-neutral-400 text-xs">悬停状态</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#9E7FFF]" />
            <span className="text-neutral-400 text-xs">聚焦状态</span>
          </div>
        </div>
      </div>

      {/* Info Badge */}
      <div className="absolute top-4 right-4 bg-neutral-800/95 backdrop-blur-sm border border-neutral-700 rounded-xl px-4 py-2 shadow-xl z-[1000]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-neutral-400 text-xs">实时地图数据</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
