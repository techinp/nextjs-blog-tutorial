import styled from './header.styled';
import styles from './header.module.css';
import { DatePicker, version, Button } from 'antd';
import { useTheme } from 'next-themes';

export default function Header({}) {
  const { theme, setTheme } = useTheme();
  return (
    <header className={styles.header}>
      <section className='flex'>
        <div>Logo</div>
        <div>Arrow</div>
        <div>Search Text</div>
      </section>
      <section>
        <div>The current theme is: {theme}</div>
        <Button style={{ marginLeft: 8 }} onClick={() => setTheme('light')}>
          Light mode
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => setTheme('dark')}>
          Dark mode
        </Button>
      </section>
    </header>
  );
}
