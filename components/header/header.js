import styled from './header.styled';
import styles from './header.module.css';

export default function Header({}) {
  return (
    <header className={styles.header}>
      <section className='flex'>
        <div>Logo</div>
        <div>Arrow</div>
        <div>Search Text</div>
      </section>
      <section>2</section>
    </header>
  );
}
