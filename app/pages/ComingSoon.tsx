// pages/ComingSoon.tsx

import React from 'react';
import Head from 'next/head';
import styles from '../styles/ComingSoon.module.css';

const ComingSoon: React.FC = () => {
  return (
    <>
      <Head>
        <title>Launching Soon</title>
        <meta name="description" content="Your Ultimate Guide to .NET Interview Preparation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Launching Soon</h1>
        <p className={styles.description}>Your Ultimate Guide to .NET Interview Preparation</p>
        {/* <form className={styles.form}>
          <input type="email" placeholder="Enter your email" className={styles.input} />
          <button type="submit" className={styles.button}>Notify Me</button>
        </form> */}
        {/* <div className={styles.socials}>
          <a href="https://twitter.com/yourprofile" className={styles.socialLink}>Twitter</a>
          <a href="https://facebook.com/yourprofile" className={styles.socialLink}>Facebook</a>
          <a href="https://instagram.com/yourprofile" className={styles.socialLink}>Instagram</a>
        </div> */}
      </div>
    </>
  );
};

export default ComingSoon;
