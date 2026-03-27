import { AspectRatio, Flex, Grid, Heading } from '@radix-ui/themes';
type Props = {
  title: string;
  description: string;
  image: string;
};
const BlogSingleEntry = ({ title, description, image }: Props) => {
  return (
    <Flex direction="column" gap="2">
      <Grid columns={'2'} gap={'4'} align={'center'} justify={'center'}>
        <AspectRatio ratio={4 / 3}>
          <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        </AspectRatio>
        <Flex direction="column" gap="2" align={'center'} justify={'center'}>
          <Heading>{title}</Heading>
          <p className="text-center">{description}</p>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default BlogSingleEntry;
