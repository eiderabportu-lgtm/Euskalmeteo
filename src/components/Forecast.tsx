import React, { useState, useEffect } from 'react';
import { fetchWeatherData, WeatherData } from '../services/weatherService';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ForecastProps {
  location: string;
}

const Forecast = ({ location }: ForecastProps) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchWeatherData(location).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [location]);

  if (loading) {
    return <div className="p-6 bg-white rounded-lg shadow-md">Cargando previsión para {location}...</div>;
  }

  if (!data) {
    return <div className="p-6 bg-white rounded-lg shadow-md">Error al cargar datos para {location}.</div>;
  }

  const chartData = [
    { name: 'Temperatura', Euskalmet: data.euskalmet.temperature, AEMET: data.aemet.temperature },
    { name: 'Humedad', Euskalmet: data.euskalmet.humidity, AEMET: data.aemet.humidity },
    { name: 'Viento', Euskalmet: data.euskalmet.windSpeed, AEMET: data.aemet.windSpeed },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Comparativa Previsión: {data.location}</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Euskalmet" fill="#8884d8" />
            <Bar dataKey="AEMET" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Condición Euskalmet: {data.euskalmet.condition}</p>
        <p>Condición AEMET: {data.aemet.condition}</p>
      </div>
    </div>
  );
};

export default Forecast;
