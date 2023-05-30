import Link from "next/link";
import React from "react";
import styles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div>MovieFlex</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/movies">Movie</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
