import { Button, Flex, Tooltip } from '@radix-ui/themes';

import { defaultGallery } from '@/data/constants/defaultyGallery';

type GalleryItem = {
  images: string;
  alt: string;
};

type RestaurantSiteGaleryProps = {
  gallery?: GalleryItem[];
};

const RestaurantSiteGalery = ({ gallery = defaultGallery }: RestaurantSiteGaleryProps) => {
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
        <Tooltip content="Zobacz więcej zdjęć dań jak i atrakcji restauracji">
          <Button>Zobacz więcej</Button>
        </Tooltip>
      </Flex>
    </Flex>
  );
};

export default RestaurantSiteGalery;
