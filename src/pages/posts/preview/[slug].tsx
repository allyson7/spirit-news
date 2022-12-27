import { GetStaticProps } from 'next';
import Head from 'next/head';
import * as PrismicH from '@prismicio/helpers';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import styles from '../post.module.scss';
import { getPrismicClient } from '../../../services/prismic';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [post.slug, router, session]);

  return (
    <>
      <Head>
        <title>{post.title} | Spiritnews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.continueReading}>
            Quer continuar lendo?
            <Link href="/">Se inscreva agora 🤗</Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('post', String(slug), {});

  // if (!response) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };
  // }

  const post = {
    slug,
    title: PrismicH.asText(response.data.title),
    content: PrismicH.asHTML(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BT',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  };

  return {
    props: {
      post,
    },
    redirect: 60 * 30, // 30 minutes
  };
};
