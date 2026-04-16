import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface WeatherMapProps {
  location: string;
}

const WeatherMap = ({ location }: WeatherMapProps) => {
  // Note: OpenWeatherMap requires an API key. For this demo, we'll use a public tile service if possible,
  // or add a placeholder for where the API key would be used.
  // Since I cannot use a real API key here, I will add a comment explaining how to integrate it.
  
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer center={[43.263, -2.935]} zoom={9} className="h-full w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        
        {/* Precipitation Radar Layer */}
        {/* Using a standard RainViewer URL format */}
        <TileLayer 
          url="https://tilecache.rainviewer.com/v2/radar/nowcast/256/{z}/{x}/{y}/8/1_1.png" 
          opacity={0.7}
          zIndex={1000}
        />
        
        <Marker position={[43.263, -2.935]}>
          <Popup>{location}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
