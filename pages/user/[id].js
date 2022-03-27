import Layout from '@/components/layout/layout';
import Head from 'next/head';
import utilStyles from '@/styles/utils.module.css';
import { getGames, getGameDetail } from '@/lib/graphql/games';
import { setStaticPathWithMultiLanguage } from '@/helper/index';
import { useRouter } from 'next/router';

export default function Game({ game }) {
  const { locale, locales, asPath } = useRouter();
  console.log('asPath', asPath);
  return (
    <Layout>
      <Head>
        <title>{game.name}</title>
      </Head>
      <article>
        <h1>User with ID</h1>
        <h1 className={utilStyles.headingXl}>{game.name}</h1>
        <h1 className={utilStyles.headingXl}>{game.provider}</h1>
        <h1 className={utilStyles.headingXl}>{game.id}</h1>
      </article>
    </Layout>
  );
}

export async function getStaticPaths({ locales }) {
  const game = await getGames();
  const paths = setStaticPathWithMultiLanguage(game.allGames, 'slug', 'id', locales);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { game } = await getGameDetail(params.id);
  return {
    props: {
      game,
    },
  };
}
