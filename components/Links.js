import Link from 'next/link';
import styles from './Links.module.css';

const ITEMS = [
  {
    href: 'https://nextjs.org/docs',
    title: 'Documentation &rarr',
    description: 'Find in-depth information about Next.js features and API.',
  },
  {
    href: 'https://nextjs.org/learn',
    title: 'Learn &rarr',
    description: 'Learn about Next.js in an interactive course with quizzes!.',
  },
  {
    href: 'https://github.com/vercel/next.js/tree/master/examples',
    title: 'Examples &rarr',
    description: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    title: 'Deploy &rarr',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
  },
];

export function Links() {
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
        return (
          <Link href={item.href} className={styles.card}>
            <h2 className={styles.title}>■{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
