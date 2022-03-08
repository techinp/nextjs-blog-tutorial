import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '@/styles/utils.module.css';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import styled from 'styled-components';
import { request } from '@/lib/datocms';
import { useAppContext } from '@/context/AppContext';
import { useMemo } from 'react';

const Title = styled.h1`
  color: red;
`;

const Test = styled.div`
  width: 200px;
  height: 200px;
  background-color: black;
`;

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

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const post = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  console.log('post', post);
  return {
    props: {
      allPostsData,
      post,
    },
  };
}

export default function Home({ allPostsData, post }) {
  const AppContext = useAppContext();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Title>My First Next.js Page</Title>
      <Test />
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        <h1>Content from DatoCMS</h1>
        {post.allPosts.map((value, idx) => (
          <div key={idx}>
            <div>Tile: {value.title}</div>
            <div>Slug: {value.slug}</div>
          </div>
        ))}
      </section>
      <hr />
      <section>
        <h1>Content from Context</h1>
        <div>Count: {AppContext.state.count}</div>
        <button onClick={() => AppContext.action.incrementCount()}>
          Increment
        </button>
      </section>
    </Layout>
  );
}
