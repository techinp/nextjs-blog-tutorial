import { AppWrapper } from '@/context/AppContext';
import '@/styles/global.css';
import '@/styles/reset.css';

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
