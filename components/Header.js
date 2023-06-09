import Link from 'next/link';
// import styles from './Footer.module.css';

export function Header() {
  return (
    <header>
      <Link href='/'>Index</Link>
      <Link href='/about'>About</Link>
    </header>
  );
}
