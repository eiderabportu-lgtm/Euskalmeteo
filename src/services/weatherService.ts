import axios from 'axios';

export interface WeatherData {
  location: string;
  euskalmet: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  };
  aemet: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
  };
}

// Placeholder for Euskalmet/AEMET API calls
export const fetchWeatherData = async (location: string): Promise<WeatherData> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Return randomized mock data for the requested location from both sources
  const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Stormy'];
  
  const generateData = () => ({
    temperature: Math.floor(Math.random() * 30) + 5,
    condition: conditions[Math.floor(Math.random() * conditions.length)],
    humidity: Math.floor(Math.random() * 60) + 30,
    windSpeed: Math.floor(Math.random() * 40) + 5,
  });

  return {
    location,
    euskalmet: generateData(),
    aemet: generateData(),
  };
};
