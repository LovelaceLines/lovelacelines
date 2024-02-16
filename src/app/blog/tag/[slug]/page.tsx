import type { Metadata } from 'next';

import { PostFlatData, TagData } from '@/_components';
import { getPostBySlug, getTagBySlug } from '@/_libs';

export const metadata: Metadata = {
  title: 'Tag',
};

export default function Page({ params: { slug } }: { params: { slug: string } }) {
  const tag = getTagBySlug(slug);
  const posts = tag.slugPosts.map(slug => getPostBySlug(slug));

  return (
    <>
      <TagData tag={tag} />
      {posts.map(post =>
        <PostFlatData key={post.slug} post={post} />
      )}
    </>
  );
}