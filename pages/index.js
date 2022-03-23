import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout/layout';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';
import styled from 'styled-components';
import markdownToHtml from '@/lib/markdownToHtml';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import { getPosts } from '@/lib/graphql/posts';
import { getGames } from '@/lib/graphql/games';

const Title = styled.h1`
  color: red;
`;

export async function getStaticProps() {
  const post = await getPosts();
  const game = await getGames();
  return {
    props: {
      post,
      game,
    },
  };
}

export default function Home({ post, game }) {
  const AppContext = useAppContext();
  const { locale, locales, asPath } = useRouter();
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Title>My First Next.js Page</Title>
      <div>Current Locale: {locale}</div>
      <div>
        {locales.map((l, i) => {
          return (
            <div key={i}>
              <Link href={asPath} locale={l}>
                {l}
              </Link>
            </div>
          );
        })}
      </div>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
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
        <hr />
        {game.allGames.map((value, idx) => (
          <section key={idx} className='px-8'>
            <div>ID: {value.id}</div>
            <div>Name: {value.name}</div>
            <div>Provider: {value.provider}</div>
            <hr />
          </section>
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
