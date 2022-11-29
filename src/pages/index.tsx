import Head from "next/head";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | spirit.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏Seja bem vindo</span>
          <h1>
            Notícias sobre <span>Espiritismo</span>
          </h1>
          <p>
            Tenha acesso as novas publicações <br />
            <span>por R$ 2,99 por mes</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}
