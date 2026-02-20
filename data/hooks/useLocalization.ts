import { useState } from 'react';

type TypePosition = {
  place: string;
  latitude: number;
  longitude: number;
};
const UseLocalization = () => {
  const [position, setPosition] = useState<TypePosition>({
    place: '',
    latitude: 0,
    longitude: 0,
  });
  const [geolocationAllowed, setGeolocationAllowed] = useState(true);
  const getCurentLocalization = () => {
    if (!navigator.geolocation) return;
    const succes = async (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();
        setPosition({
          place: data.address.city || data.address.town || data.address.village,
          latitude,
          longitude,
        });
        setGeolocationAllowed(true);
      } catch (error) {
        console.error(error);
      }
    };
    const error = () => {
      setGeolocationAllowed(false);
    };
    navigator.geolocation.getCurrentPosition(succes, error);
  };
  return { city: position.place, position, getCurentLocalization, geolocationAllowed };
};
export default UseLocalization;
