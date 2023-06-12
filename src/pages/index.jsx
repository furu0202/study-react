import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';

export default function Home() {
  const handleClick = (e) => {
    console.log(e.target.href);
    e.preventDefault();
    // alert(123);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href='/about' onClick={handleClick}>
        ボタン
      </a>

      <Main page='index' />
      <Footer></Footer>
    </div>
  );
}
