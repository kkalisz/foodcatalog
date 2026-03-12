'use client';

import { useState } from 'react';

interface RestaurantMapProps {
  address: string;
  apiKey: string;
}

export function RestaurantMap({ address, apiKey }: RestaurantMapProps) {
  const [curentyPosition, setCurentyPosition] = useState({
    lat: 0,
    lng: 0,
  });
  if (!address) {
    return <div className="w-full h-64 bg-muted animate-pulse rounded-lg" />;
  }

  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="relative w-full h-64 bg-muted rounded-lg overflow-hidden shadow-md">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=15`}
      />
    </div>
  );
}
