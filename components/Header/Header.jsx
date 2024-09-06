import styles from "./styles.module.css";
import { useState } from "react";

const navbar = (
  <nav>
    <ul>
      <li>
        <a href="/">Main</a>
      </li>
      <li>
        <a href="/gallery">Gallery</a>
      </li>
      <li>
        <a href="/contacts">Contacts</a>
      </li>
    </ul>
  </nav>
);

const Header = () => {
  return (
    <>
      <header className={styles.main}>
        <div>
          <h2>ART-GALLERY</h2>
        </div>

        {navbar}
      </header>
    </>
  );
};

export default Header;
