import { fetchGraphql } from '@/lib/request';

export async function getPosts() {
  const HOMEPAGE_QUERY = `query HomePage{
    _allAuthorsMeta {
      count
    }
    allPosts {
      slug
      title
      excerpt
      id
      date
      content
      coverImage {
        width
        url
        title
        tags
        smartTags
        size
      }
    }
  }
  `;

  const post = await fetchGraphql({
    query: HOMEPAGE_QUERY,
  });
  return post;
}
