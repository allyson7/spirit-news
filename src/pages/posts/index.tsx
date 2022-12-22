import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>Posts | SpiritNews</Head>;
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>22 de dezembro de 2022</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a monorepo to manage
              multiple package with a shared build
            </p>
          </a>
          <a href="#">
            <time>22 de dezembro de 2022</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a monorepo to manage
              multiple package with a shared build
            </p>
          </a>
          <a href="#">
            <time>22 de dezembro de 2022</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              In this guide, you will learn how to create a monorepo to manage
              multiple package with a shared build
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
