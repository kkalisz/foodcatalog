import { AspectRatio, Box, Card, Grid, Heading } from '@radix-ui/themes';
type Props = {
  title: string;
  description: string;
  image: string;
};
const BlogSingleEntry = ({ title, description, image }: Props) => {
  return (
    <Card>
      <Box>
        <Heading>{title}</Heading>
      </Box>
      <Grid columns={'2'} gap={'4'} align={'center'} justify={'center'}>
        <AspectRatio ratio={4 / 3}>
          <img className="w-full h-full object-cover rounded-lg" src={image} alt={title} />
        </AspectRatio>
        <p className="text-center">{description}</p>
      </Grid>
    </Card>
  );
};

export default BlogSingleEntry;
