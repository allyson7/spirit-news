import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";

export function SignInButton() {
  const { data: session, status } = useSession();

  return status === "authenticated" ? (
    <button
      onClick={() => signOut()}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn()}
      className={styles.signInButton}
      type="button"
    >
      <FaGithub color="#eba417" />
      Sign in with github
    </button>
  );
}
