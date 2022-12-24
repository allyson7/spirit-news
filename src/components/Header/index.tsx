import Image from 'next/image';
import { ActiveLink } from '../ActiveLink';

import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src="/images/logo.svg"
          width="112"
          height="38"
          alt="spirit.news"
        />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            Home
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            Posts
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
