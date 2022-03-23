import styles from './layout.module.css';
import Meta from '../meta';
import Header from '../header/header'

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div>
      <Meta />
      {/* <LayoutStyled.Title>Test2</LayoutStyled.Title> */}
      <Header />
      {/* <main>{children}</main> */}
    </div>
  );
}
