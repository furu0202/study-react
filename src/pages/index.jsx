import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useCallback, useEffect, useState } from 'react';

// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const [foo, setFoo] = useState(10);
  // let foo = 1;
  const handleClick = (e) => {
    setFoo(foo + 1);
    // foo = foo + 1;
    console.log(foo);
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      document.body.style.backgroundColor = 'pink';
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{foo}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page='index' />
      <Footer></Footer>
    </div>
  );
}
