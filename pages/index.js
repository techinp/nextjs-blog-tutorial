import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout/layout';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';
import styled from 'styled-components';
import markdownToHtml from '@/lib/markdownToHtml';
import { useAppContext } from '@/context/AppContext';
import { useRouter } from 'next/router';
import { getGames } from '@/lib/graphql/games';
import Container from '@/components/container';
import useTranslation from 'next-translate/useTranslation';

const Title = styled.h1`
  color: red;
`;

export default function Home({ post, game }) {
  const AppContext = useAppContext();
  const { locale, locales, asPath } = useRouter();
  const { t, lang } = useTranslation('common');
  const example = t('variable-example', { count: 42 });
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Title>My First Next.js Page</Title>
        <div>Current Locale: {locale}</div>
        <section>
          <h1>{t('title')}</h1>
          <h2>{example}</h2>
          <h3>{lang}</h3>
        </section>
        <hr />
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
        <section>
          {game.allGames.map((value, idx) => (
            <section key={idx} className='px-8'>
              <Link href={value.slug.toLowerCase()} locale={locale}>
                {value.name.toLowerCase()}
              </Link>
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
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const game = await getGames(locale);
  return {
    props: {
      game,
    },
  };
}
