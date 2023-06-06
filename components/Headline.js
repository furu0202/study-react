import React from 'react';
import styles from '../styles/Home.module.css';

export default function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title} </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>{props.page}.js</code>
      </p>
    </div>
  );
}
