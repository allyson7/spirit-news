import Head from 'next/head';
import * as prismicH from '@prismicio/helpers';

import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import {
  useFirstPrismicDocument,
  usePrismicDocumentByUID,
} from '@prismicio/react';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostProps {
  posts: Post[];
}

export default function Posts({ posts }: PostProps) {
  return (
    <>
      <Head>Posts | SpiritNews</Head>;
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a key={post.slug} href="#">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const prismic = getPrismicClient();

  const response = await prismic.getByType('post', {
    pageSize: 100,
  });

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: prismicH.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === 'paragraph')
          ?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BT',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }
      ),
    };
  });

  return {
    props: { posts },
  };
}
