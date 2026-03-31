import { Grid } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

import BlogSingleEntry from '@/components/ui/containers/blog-single-entry';
import CardWithHeader from '@/components/ui/containers/card-with-header';

const BlogPage = () => {
  const t = useTranslations('blog_page');

  const posts = [
    {
      id: '1',
      image:
        'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '2',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: '3',
      image:
        'https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <CardWithHeader title={t('header')}>
      <Grid columns={'1'} gap={'6'} className="p-6">
        {posts.map(post => (
          <BlogSingleEntry
            key={post.id}
            title={t(`posts.${post.id}.title`)}
            description={t(`posts.${post.id}.description`)}
            image={post.image}
          />
        ))}
      </Grid>
    </CardWithHeader>
  );
};

export default BlogPage;
