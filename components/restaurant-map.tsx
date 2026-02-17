'use client';

interface RestaurantMapProps {
  lat: number;
  lng: number;
  name: string;
}

export function RestaurantMap({ lat, lng, name }: RestaurantMapProps) {
  return (
    <div className="relative w-full h-64 bg-muted rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDummyKeyForMVP&q=${encodeURIComponent(name)}&center=${lat},${lng}&zoom=15`}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute inset-0 pointer-events-none">
        <p className="sr-only">Map showing location of {name}</p>
      </div>
    </div>
  );
}
