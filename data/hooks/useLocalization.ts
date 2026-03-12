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
    if (!navigator.geolocation) {
      setErrorMsg('Geolokalizacja nie jest wspierana przez Twoją przeglądarkę.');
      return;
    }

    const success = async (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      setErrorMsg(null);
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS}&language=pl`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
          const addressComponents = data.results[0].address_components;
          const cityObj = addressComponents.find(
            (comp: any) =>
              comp.types.includes('locality') ||
              comp.types.includes('postal_town') ||
              comp.types.includes('administrative_area_level_2')
          );

          setPosition({
            place: cityObj ? cityObj.long_name : 'Nieznana lokalizacja',
            latitude,
            longitude,
          });
          setGeolocationAllowed(true);
        } else {
          throw new Error(data.error_message || 'Błąd Google API');
        }
      } catch (error: any) {
        console.error('Błąd geolokalizacji Google:', error);
        setErrorMsg(t('errors.location_fetch'));
      }
    };

    const error = () => {
      setGeolocationAllowed(false);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  };

  return {
    city: position.place,
    position,
    getCurentLocalization,
    geolocationAllowed,
    errorMsg,
  };
};

export default UseLocalization;
