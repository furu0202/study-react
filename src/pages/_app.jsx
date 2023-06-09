import 'src/styles/globals.css';
import Head from 'next/head';
import { useCounter } from 'src/hooks/useCounter';
import { useInputArray } from 'src/hooks/useInputArray';
import { useBgLightBlue } from 'src/hooks/useBgLightBlue';

const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />;
    </div>
  );
};
export default MyApp;
