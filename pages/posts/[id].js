import Layout from '@/components/layout/layout';
import Head from 'next/head';
import utilStyles from '@/styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  // return {
  //   paths,
  //   fallback: false,
  // };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      // postData,
    },
  };
}
