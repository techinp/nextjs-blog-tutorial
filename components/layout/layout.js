import styles from './layout.module.css';
import Meta from '../meta';
import Header from '../header/header'

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div>
      <Meta />
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
