import Link from "next/link";
import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Capture <span className={styles.blue}>Today</span>, <br />
            Open <span className={styles.purple}>Tomorrow</span>
          </h1>
          <p className={styles.subtitle}>
            Store your memories, letters, and dreams in a secure time capsule.
            Unlock them in the future and relive the moment.
          </p>

          <div className={styles.buttons}>
            <Link href="/create" className={styles.primaryBtn}>
              Create Capsule
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className={styles.imageWrapper}>
          <Image
            width={400}
            height={400}
            src="/hero-illustration.svg"
            alt="Time Capsule Illustration"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
