import { Grid } from '@radix-ui/themes';

import BlogSingleEntry from '@/components/ui/containers/blog-single-entry';
import CardWithHeader from '@/components/ui/containers/card-with-header';

const BlogPage = () => {
  return (
    <CardWithHeader title={'Blog'}>
      <Grid columns={'1'} gap={'6'} className="p-6">
        <BlogSingleEntry
          title="Principles of the typographic craft"
          description="Three fundamental aspects of typography are legibility, readability, and aesthetics. Although in a non-technical sense legible and readable are often used synonymously, typographically they are separate but related concepts. Legibility describes how easily individual characters can be distinguished from one another."
          image="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <BlogSingleEntry
          title="The art of readable design"
          description="Readability is concerned with how easy it is to read the text as a whole, as opposed to the legibility of individual characters. Readability is affected by the choice of typeface, size, line length, line spacing, and letter spacing."
          image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <BlogSingleEntry
          title="Aesthetic choices in typography"
          description="The aesthetic aspects of typography are concerned with the overall appearance of the text. This includes the choice of typeface, size, line length, line spacing, and letter spacing. The goal is to create a visually appealing and harmonious layout."
          image="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </Grid>
    </CardWithHeader>
  );
};

export default BlogPage;
