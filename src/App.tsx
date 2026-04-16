import React, { useState } from 'react';
import WeatherMap from './components/WeatherMap';
import WindMap from './components/WindMap';
import RadarMap from './components/RadarMap';
import SearchBar from './components/SearchBar';
import Forecast from './components/Forecast';

export default function App() {
  const [location, setLocation] = useState('Bilbao');
  const [activeTab, setActiveTab] = useState<'radar' | 'wind'>('radar');

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-900">EuskalMetra</h1>
        <SearchBar onLocationChange={setLocation} />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Forecast location={location} />
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex gap-4 mb-4 border-b">
            <button 
              onClick={() => setActiveTab('radar')}
              className={`pb-2 ${activeTab === 'radar' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            >
              Radar Lluvia
            </button>
            <button 
              onClick={() => setActiveTab('wind')}
              className={`pb-2 ${activeTab === 'wind' ? 'border-b-2 border-blue-500 font-bold' : ''}`}
            >
              Viento
            </button>
          </div>
          {activeTab === 'radar' ? <RadarMap location={location} /> : <WindMap location={location} />}
        </div>
      </main>
    </div>
  );
}
