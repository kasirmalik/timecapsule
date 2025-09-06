import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Side - Logo */}
        <div className={styles.logo}>
          <h2>⏳ TimeCapsule</h2>
          <p>Preserve your memories for the future.</p>
        </div>

        {/* Center - Links */}
        <nav className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features</Link>
          <Link href="/create">Create Capsule</Link>
        </nav>

        {/* Right - Socials */}
        <div className={styles.socials}>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="GitHub">💻</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} TimeCapsule. All rights reserved.</p>
      </div>
    </footer>
  );
}
