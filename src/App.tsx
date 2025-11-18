import React, { useState } from 'react';
import { MapPin, Mountain, Compass, Info, X, Navigation } from 'lucide-react';
import MapView from './components/MapView';
import CityCard from './components/CityCard';
import Header from './components/Header';
import { cities } from './data/cities';

function App() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [focusedCity, setFocusedCity] = useState<string | null>(null);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  const selectedCityData = cities.find(city => city.id === selectedCity);

  const handleCityCardClick = (cityId: string) => {
    setFocusedCity(null); // Close map popup first
    setSelectedCity(cityId);
  };

  const handleCityDetailClick = (cityId: string) => {
    // First close the map popup
    setFocusedCity(null);
    // Small delay to ensure popup closes before modal opens
    setTimeout(() => {
      setSelectedCity(cityId);
    }, 150);
  };

  const handleCloseModal = () => {
    setSelectedCity(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-[#1a1a2e] to-neutral-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-neutral-800 border border-neutral-700 rounded-full px-6 py-2 mb-6">
              <Compass className="w-4 h-4 text-purple-400" />
              <span className="text-neutral-400 text-sm">探索彩云之南</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              云南旅游
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> 地图</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              发现云南的壮丽山川、古老文化和独特风情，开启一段难忘的旅程
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { label: '热门城市', value: '8+', icon: MapPin },
              { label: '著名景点', value: '30+', icon: Mountain },
              { label: '文化遗产', value: '15+', icon: Compass },
              { label: '民族风情', value: '25+', icon: Navigation }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-neutral-800 border border-neutral-700 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Map Container */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">互动地图</h2>
                  <p className="text-neutral-400 text-sm">点击标记查看简介，点击"查看详情"了解更多</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-neutral-900 border border-neutral-700 rounded-xl px-4 py-2">
                <Info className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-neutral-400">悬停查看预览</span>
              </div>
            </div>
            
            <MapView 
              focusedCity={focusedCity}
              setFocusedCity={setFocusedCity}
              hoveredCity={hoveredCity}
              setHoveredCity={setHoveredCity}
              onCityDetailClick={handleCityDetailClick}
            />
          </div>

          {/* City Grid */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">热门目的地</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cities.map((city, index) => (
                <CityCard 
                  key={city.id}
                  city={city}
                  onClick={() => handleCityCardClick(city.id)}
                  isSelected={selectedCity === city.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* City Detail Modal */}
      {selectedCityData && (
        <div className="modal-overlay fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="modal-content bg-neutral-800 border border-neutral-700 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-t-3xl">
              <img 
                src={selectedCityData.image} 
                alt={selectedCityData.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent" />
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 w-10 h-10 bg-neutral-800/80 backdrop-blur-sm border border-neutral-700 rounded-full flex items-center justify-center hover:bg-neutral-900 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-6 left-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedCityData.name}</h2>
                <p className="text-neutral-400 text-lg">{selectedCityData.description}</p>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mountain className="w-6 h-6 text-purple-400" />
                  著名景点
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedCityData.attractions.map((attraction, index) => (
                    <div 
                      key={index}
                      className="bg-neutral-900 border border-neutral-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">{attraction.name}</h4>
                          <p className="text-neutral-400 text-sm leading-relaxed">{attraction.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">{selectedCityData.altitude}</div>
                  <div className="text-sm text-neutral-400">海拔高度</div>
                </div>
                <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">{selectedCityData.climate}</div>
                  <div className="text-sm text-neutral-400">气候类型</div>
                </div>
                <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400 mb-1">{selectedCityData.bestSeason}</div>
                  <div className="text-sm text-neutral-400">最佳季节</div>
                </div>
                <div className="bg-neutral-900 border border-neutral-700 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">{selectedCityData.specialty}</div>
                  <div className="text-sm text-neutral-400">特色美食</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-neutral-800 border-t border-neutral-700 mt-24 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-400">© 2025 云南旅游地图. 探索更多精彩旅程</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
