import { Button, Flex, Tooltip } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import { defaultGallery } from '@/data/constants/defaultyGallery';

type GalleryItem = {
  images: string;
  alt: string;
};

type RestaurantSiteGaleryProps = {
  gallery?: GalleryItem[];
};

const RestaurantSiteGalery = ({ gallery = defaultGallery }: RestaurantSiteGaleryProps) => {
  const t = useTranslations('components_misc');

  return (
    <Flex gap="4">
      {gallery.map(item => (
        <Flex key={item.images} className="overflow-hidden rounded-xl">
          <img
            className="rounded-xl shadow-xl dark:shadow-gray-800"
            src={item.images}
            alt={item.alt}
          />
        </Flex>
      ))}
      <Flex position="absolute" p="4">
        <Tooltip content={t('view_more_photos')}>
          <Button>{t('view_more')}</Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default RestaurantSiteGalery;
