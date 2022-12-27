import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';

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
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn('github');
      return;
    }

    if (session.activeSubscription) {
      router.push('/posts');
      return;
    }

    // criar checkout session
    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      console.log('id sessão:', sessionId);
      await stripe.redirectToCheckout({ sessionId: sessionId.id });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button
      type="button"
      onClick={() => handleSubscribe()}
      className={styles.subscribeButton}
    >
      Inscreva-se agora
    </button>
  );
}
