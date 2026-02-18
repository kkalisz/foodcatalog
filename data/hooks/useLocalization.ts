import { useState } from 'react';

const UseLocalization = () => {
  const [city, useCity] = useState('');
  const [position, setPosition] = useState({});
  const myLocalizatio = () => {
    if (!navigator.geolocation) return;
    const succes = async (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();
        useCity(data.address.city || data.address.town || data.address.village);
        setPosition(position.coords);
      } catch (error) {
        console.error(error);
      }
    };
    navigator.geolocation.getCurrentPosition(succes);
  };

  return { city, position, myLocalizatio };
};

export default UseLocalization;
