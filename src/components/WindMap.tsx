import React from 'react';

interface WindMapProps {
  location: string;
}

const WindMap = ({ location }: WindMapProps) => {
  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-md">
      <iframe
        src={`https://embed.windy.com/embed2.html?lat=43.263&lon=-2.935&zoom=8&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1&name=${location}`}
        width="100%"
        height="100%"
        frameBorder="0"
        title={`Wind Map for ${location}`}
      />
    </div>
  );
};

export default WindMap;
