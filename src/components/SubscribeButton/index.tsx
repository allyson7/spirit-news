import { signIn, useSession } from "next-auth/react";
import styles from "./styles.module.scss";

interface SubscribeButtonProps {
  priceId: string;
}

/* lugares seguros pra usar key secreta do stripe
  getServerSideProps (SSR)
  getStaticProps (SSG)
  API routes <-
*/

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession();
  function handleSubscribe() {
    if (!session) {
      signIn("github");
      return;
    }
  }

  return (
    <button
      type="button"
      onClick={handleSubscribe}
      className={styles.subscribeButton}
    >
      Inscreva-se agora
    </button>
  );
}
