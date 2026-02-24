import { useState } from 'react';
import { useTranslation } from 'react-i18next';

type TypePosition = {
  place: string;
  latitude: number;
  longitude: number;
};
const UseLocalization = () => {
  const { t } = useTranslation();
  const [position, setPosition] = useState<TypePosition>({
    place: '',
    latitude: 0,
    longitude: 0,
  });
  const [geolocationAllowed, setGeolocationAllowed] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const getCurentLocalization = () => {
    if (!navigator.geolocation) return;
    const succes = async (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setErrorMsg(null);

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
      } catch (error: any) {
        console.error(error);
        setErrorMsg(t('errors.location_fetch'));
      }
    };
    const error = () => {
      setGeolocationAllowed(false);
    };
    navigator.geolocation.getCurrentPosition(succes, error);
  };
  return { city: position.place, position, getCurentLocalization, geolocationAllowed, errorMsg };
};
export default UseLocalization;
