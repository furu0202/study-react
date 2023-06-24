import Link from 'next/link';
import styles from 'src/components/Links/Links.module.css';

export const Links = ({ items }) => {
  return (
    <div className={styles.grid}>
      {items.map((item) => {
        return (
          <Link href={item.href} className={styles.card} key={item.href}>
            <h2 className={styles.title}>■{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </Link>
        );
      })}
    </div>
  );
};
