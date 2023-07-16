import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link href="/" passHref>
        <div className={styles['navbar-link']}>Home</div>
      </Link>
      <Link href="/todo" passHref>
        <div className={styles['navbar-link']}>Project TODO List</div>
      </Link>
      <Link href="/calculator" passHref>
        <div className={styles['navbar-link']}>Project Calculator</div>
      </Link>
      <Link href="/api/single" passHref>
        <div className={styles['navbar-link']}>Single API</div>
      </Link>
      
      <Link href="/api/multiple" passHref>
        <div className={styles['navbar-link']}>Multi API</div>
      </Link>
      <Link href="/portfolio" passHref>
        <div className={styles['navbar-link']}>Port Folio</div>
      </Link>
      <Link href="/practice" passHref>
        <div className={styles['navbar-link']}>Practice</div>
      </Link>
    </div>
  );
};

export default Navbar;
