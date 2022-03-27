import Layout from '@/components/layout/layout';
import Head from 'next/head';
import utilStyles from '@/styles/utils.module.css';
import { getGames, getGameDetail } from '@/lib/graphql/games';
import { setStaticPathWithMultiLanguage } from '@/helper/index';
import { useRouter } from 'next/router';

export default function User() {
  const { locale, locales, asPath } = useRouter();
  console.log('asPath', asPath);
  return (
    <Layout>
      <Head>
        <title>User</title>
      </Head>
      <article>
        <h1>User only</h1>
      </article>
    </Layout>
  );
}
