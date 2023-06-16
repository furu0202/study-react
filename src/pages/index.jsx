import Head from 'next/head';
import styles from 'src/styles/Home.module.css';
import { Footer } from 'src/components/Footer';
import { Main } from 'src/components/Main';
import { Header } from 'src/components/Header';
import { useEffect, useState } from 'react';

// const handleClick = (e, foo) => {
//   console.log(e.target.href);
//   e.preventDefault();
//   alert(foo);
// };

export default function Home() {
  const [count, setCount] = useState(1);
  // let foo = 1;
  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // foo = foo + 1;
  };

  useEffect(() => {
    console.log('foo');
    document.body.style.backgroundColor = 'lightblue';
    return () => {
      console.log('bar');
      document.body.style.backgroundColor = 'pink';
    };
  }, [count]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>

      <Main page='index' />
      <Footer></Footer>
    </div>
  );
}
